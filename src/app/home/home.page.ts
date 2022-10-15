import { Component } from '@angular/core';
import Echo  from '../plugin/EchoPlugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async ionViewDidEnter(){
    let res = await Echo.echo({value: 'Hello World'});

    console.log('res', res.value);
    
  }

}
