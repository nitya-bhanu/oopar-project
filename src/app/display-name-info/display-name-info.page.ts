import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-name-info',
  templateUrl: './display-name-info.page.html',
  styleUrls: ['./display-name-info.page.scss'],
})
export class DisplayNameInfoPage implements OnInit {

  name!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name') || '';
  }

}
