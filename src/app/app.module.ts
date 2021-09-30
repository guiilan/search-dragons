import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { DragonslistComponent } from './pages/dragonslist/dragonslist.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterdragonComponent } from './pages/registerdragon/registerdragon.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DragonslistComponent,
    RegisterdragonComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
