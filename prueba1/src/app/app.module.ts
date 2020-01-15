import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HeaderComponent } from '../components/header/header.component';
import { PhotoCarrouselComponent } from '../components/photo-carrousel/photo-carrousel.component';
import { TasksComponent } from '../components/tasks/tasks.component';
import { MapComponent } from '../components/map/map.component';
import { ContactComponent } from '../components/contact/contact.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from '../components/chat/chat.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotoCarrouselComponent,
    TasksComponent,
    ContactComponent,
    MapComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
