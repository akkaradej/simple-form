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
  isLoading = false;

  submit(form) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    window.setTimeout(() => {
      this.isLoading = false;
      this.isSubmitted = true;
    }, 2000);
  }

  cancel() {
    this.isSubmitted = false;
    this.data = {};
  }
}
