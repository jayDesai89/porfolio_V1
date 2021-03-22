import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  animations: [
    trigger('onHover', [
      transition('initialState <=> finalState', [
        animate('1500ms ease-in')
      ])
    ])
   ]
})
export class DashboardComponent implements OnInit {
  contactmeForm: FormGroup;
  // tslint:disable-next-line: variable-name
  show_project_comp = false;
  // tslint:disable-next-line: variable-name
  show_learning_comp = false;
  matcher = new MyErrorStateMatcher();
  get personEmail() { return this.contactmeForm.get( 'email' ); }


  constructor(private myElement: ElementRef, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactme();
   }

  contactme() {
    this.contactmeForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      // tslint:disable-next-line: max-line-length
      email: new FormControl('', [ Validators.required, Validators.email]),
      phone: new FormControl(''),
      detail: new FormControl('')
    });
  }

  getContactmeForm(value) {
    console.log(value);
  }

  scroll(event) {
    this.myElement.nativeElement.ownerDocument.getElementById('stop-scroll-here').scrollIntoView({behavior: 'smooth'});
  }

  scrollContactMe(event) {
    this.myElement.nativeElement.ownerDocument.getElementById('contact-me-stop-scroll-here').scrollIntoView({behavior: 'smooth'});
  }

  @HostListener('document:scroll')
  scrollPage() {
    // console.log(document.body.scrollTop);
    // tslint:disable-next-line: max-line-length
    (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) ? this.show_project_comp = true : this.show_project_comp = false;
    // tslint:disable-next-line: max-line-length
    (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) ? this.show_learning_comp = true : this.show_learning_comp = false;
  }



}
