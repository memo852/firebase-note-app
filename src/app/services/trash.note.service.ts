import { forwardRef, Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Note } from '../models/note';
import { NoteService } from './note.service';
@Injectable({
  providedIn: 'root',
})
export class TrashNoteService implements OnInit {
  private url = ''; // Firebase URL
  notes: Note[] = [];
  constructor(private http: HttpClient, private noteService: NoteService) {}
  ngOnInit(): void {}
  // Method to get notes from the trash
  getTrashNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url + 'trash.json').pipe(
      map((data) => {
        const notes: Note[] = [];
        // Convert the received data to Note[] format
        for (const key in data) {
          notes.push({ ...data[key], id: key });
          console.log(data[key]);
        }

        return notes;
      })
    );
  }
  getId(id: any): Observable<Note> {
    return this.http.get<Note>(this.url + '/trash/' + id + '.json');
  }
  addNoteToTrash(note: Note): Observable<Note> {
    return this.http.post<Note>(this.url + 'trash.json', note);
  }

  restoreNote(id: any, note: Note) {
    this.noteService.add(note).subscribe();
    return this.http.delete(this.url + 'trash/' + id + '.json').subscribe();
  }
}
