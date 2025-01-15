import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NotesComponent } from './notes/notes.component';
import { DeleteNoteComponentComponent } from './delete-note-component/delete-note-component.component';
import { AuthComponent } from './authentication/auth/auth.component';

const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: 'notes/create-note', component: CreateNoteComponent },
  { path: 'notes/edit-note', component: CreateNoteComponent },
  { path: 'notes/trashNotes', component: DeleteNoteComponentComponent },
  {path:'login',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
