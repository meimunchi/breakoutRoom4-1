import { Component } from '@angular/core';
import Amplify, {Auth} from 'aws-amplify'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from './components/dialog-body/dialog-body.component';

//import {HomeScreenComponent} from 'src/app/components/home-screen/home-screen.component'
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
//import {HomeScreenComponent} from './components/home-screen.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'acornSQURL';
  
  //Attempt to make icon registry work
  /*constructor(
    private matIconRegistry: MatIconRegistry, 
    private domSanitizer: DomSanitizer
    ) {
      this.matIconRegistry.addSvgIcon(
        "logo_img",
        this.domSanitizer.bypassSecurityTrustResourceUrl('src/assests/pencil-outline.svg')
      )
    }
 */
}
