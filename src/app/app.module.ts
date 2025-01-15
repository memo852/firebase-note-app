import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotesComponent } from './notes/notes.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteCardComponent } from './notes/note-card/note-card.component';
import { FormsModule } from '@angular/forms';
import { DeleteNoteComponentComponent } from './delete-note-component/delete-note-component.component';
import { NoteService } from './services/note.service';
import { TrashNoteService } from './services/trash.note.service';
import { AuthComponent } from './authentication/auth/auth.component';

import {DatePipe} from "@angular/common";
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';

registerLocaleData(localeTr);
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    NotesComponent,
    SearchBarComponent,
    CreateNoteComponent,
    NoteCardComponent,
    DeleteNoteComponentComponent,
    AuthComponent,

 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DatePipe

  ],
  providers: [
   provideHttpClient(withFetch(),),
    {provide: LOCALE_ID, useValue: 'tr-TR' },
   NoteService,TrashNoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
