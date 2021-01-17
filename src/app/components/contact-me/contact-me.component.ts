import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactmeForm : FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactme();
  }

  contactme() {
    this.contactmeForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [ Validators.required, Validators.pattern('^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$')]),
      phone: new FormControl(''),
      detail: new FormControl('')
    })
  }

  getContactmeForm(value) {
    console.log(value)
  }

}
