import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { S3BucketUppyUploadModule } from 's3bucket-upload-uppy';

@NgModule({
  imports:      [ BrowserModule, FormsModule,S3BucketUppyUploadModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
