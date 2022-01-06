import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {
  private contactMeformSubmit: AngularFirestoreCollection<any>;
  contactmeForm: FormGroup;

  matcher = new MyErrorStateMatcher();
  get personEmail() {
    return this.contactmeForm.get("email");
  }

  constructor( private formBuilder: FormBuilder,
    private fireStore: AngularFirestore) { }

  ngOnInit(): void {
    this.contactMeformSubmit = this.fireStore.collection('submission')
    this.contactme();
  }

  contactme() {
    this.contactmeForm = this.formBuilder.group({
      name: new FormControl("", Validators.required),
      // tslint:disable-next-line: max-line-length
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl(""),
      detail: new FormControl(""),
    });
  }

  getContactmeForm(value) {
    console.log('This is form value',value);
    this.contactMeformSubmit.add(value).then(res => {
      console.log('This is form value',value);
    }).catch(err=> console.log(err));
  }
}
