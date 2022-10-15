import { Component } from '@angular/core';
import { EchoPlugin } from '../plugin/EchoPlugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public echo:EchoPlugin) {}

  async ionViewDidEnter(){
    let res = await this.echo.echo({value: 'Hello World'});

    console.log(res);
    
  }

}
