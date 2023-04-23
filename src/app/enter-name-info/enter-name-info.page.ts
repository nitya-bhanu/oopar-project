import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-name-info',
  templateUrl: './enter-name-info.page.html',
  styleUrls: ['./enter-name-info.page.scss'],
})
export class EnterNameInfoPage {
  name: string = '';

  constructor(private router: Router) {}

  submitName() {
    this.router.navigate(['/display-name-info', this.name]);
  }
}
