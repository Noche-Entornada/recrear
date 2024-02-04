import { Component } from '@angular/core';

import { TranslateService } from './shared/services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = this.translateService.instant('APP.title');

  constructor(
    private translateService: TranslateService
  ) { }
}
