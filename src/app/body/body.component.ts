import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
public safeURL: SafeResourceUrl ;
  constructor( private _sanitizer: DomSanitizer) { 
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=hF13Dw5ykyk');
}
  

  ngOnInit(): void {
  }

}
