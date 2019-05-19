import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { PublishPage } from '../publish/publish';
import { SettingPage } from '../setting/setting';
import { InfoPage } from '../info/info';
import { MapPage } from '../map/map';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapPage;
  tab3Root = PublishPage;
  tab4Root = InfoPage;
  tab5Root = SettingPage;

  constructor() {

  }
}
