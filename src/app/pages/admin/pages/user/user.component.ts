import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '@app/services/title.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(private titleService: PageTitleService) {
    this.titleService.setTitle('User');
  }

  ngOnInit(): void {}
}
