import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  contactForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Subject: new FormControl('', [Validators.required]),
    Message: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  submit() {
    console.log(this.contactForm.valid);
    if (this.contactForm.valid) {
      this.contactService.postContact(this.contactForm.value).subscribe({
        next: (result) => {
          console.log(result);
        },
      });
    }
  }
}
