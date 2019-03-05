import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from  './material.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { EmbedVideo } from 'ngx-embed-video';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { WebViewerComponent } from './web-viewer/web-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainScreenComponent,
    DataTableComponent,
    AddUserComponent,
    MapsComponent,
    VideoViewerComponent,
    WebViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'main-screen', component: MainScreenComponent },
      { path: 'data-table', component: DataTableComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'maps', component: MapsComponent },
      { path: 'video-viewer', component: VideoViewerComponent },
      { path: 'web-viewer', component: WebViewerComponent }
    ]),
    AgmDirectionModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyD513TlwlLW0lxtHCQ_yGpwYqryOKcWDGc'
      apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI'
    }),
    EmbedVideo.forRoot()
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }

