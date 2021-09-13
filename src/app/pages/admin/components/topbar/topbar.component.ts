import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PageTitleService } from '@app/services/title.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  @Input() mobileQuery!: MediaQueryList;
  @Output() openClose: EventEmitter<any> = new EventEmitter();
  title: Observable<string>;

  constructor(private titleService: PageTitleService) {
    this.title = this.titleService.title;
  }

  sideBarToogle() {
    this.openClose.emit();
  }
}
