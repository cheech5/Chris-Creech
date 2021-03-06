import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  hitMyLineFormModal = new FormControl('', Validators.required);
  hitMyLineFormModalEmail = new FormControl('', Validators.email);
  hitMyLineFormModalSubject = new FormControl('', Validators.required);
  hitMyLineFormModalMessage = new FormControl('', Validators.required);
  constructor() { }

  ngOnInit() {
  }

}
