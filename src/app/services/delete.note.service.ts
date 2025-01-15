import { NoteService } from './note.service';
import { Injectable } from '@angular/core';
import { TrashNoteService } from './trash.note.service';
import { Note } from '../models/note';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DeleteNoteService {
  notes: Note[] = [];
  private url = '';

  constructor(  private http: HttpClient,
    private noteTrashService: TrashNoteService,
    private noteService: NoteService
  ) {}

  deleteNote(id: any,note:Note) {
    return this.http
      .delete(this.url + 'notes/' + id + '.json')
      .subscribe(() => {
       
        this.noteTrashService.addNoteToTrash(note).subscribe();
        console.log('Note deleted successfully');
      });
  }
  deleteTrashNote(id: any) {
    return this.http
      .delete(this.url + 'trash/' + id + '.json')
      .subscribe(() => {
        console.log('Note deleted successfully');
      });
  }
}
