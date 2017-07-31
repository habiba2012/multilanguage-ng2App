import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    signupForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname':  new FormControl(null, Validators.required),
      'email':     new FormControl(null, [Validators.required, Validators.email]),
      'phone':     new FormControl(null, Validators.required),
      'address':   new FormControl(null, Validators.required),
      'website':   new FormControl(null),
      'comment':   new FormControl(null, [Validators.required, Validators.minLength(15)])
    });
  }

/*Form submit through ajax*/
ajaxSubmit(signupForm: any, callback: any) {
var xhr = new XMLHttpRequest();
var params = [].filter.call(signupForm.elements, function (el) {return !(el.type in ['checkbox', 'radio']) || el.checked;})
.filter(function(el) { return !!el.name; }) //Nameless elements die.
.filter(function(el) { return !el.disabled; }) //Disabled elements die.
.map(function(el) {
    if (el.type=='checkbox') return encodeURIComponent(el.name) + '=' + encodeURIComponent(el.checked);
   else return encodeURIComponent(el.name) + '=' + encodeURIComponent(el.value);
}).join('&'); //Then join all the strings by &
xhr.open("POST", signupForm.action);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.onload = callback.bind(xhr);
xhr.send(params);
}


}
