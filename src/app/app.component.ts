import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-form';
  data: any = {};
  isSubmitted = false;

  submit(form) {
    if (form.invalid) {
      return;
    }
    this.isSubmitted = true;
  }

  cancel() {
    this.isSubmitted = false;
    this.data = {};
  }
}
