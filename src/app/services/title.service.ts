import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  public title: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}

  setTitle(value: string): void {
    this.title.next(value);
  }
}
