import { Injectable, OnInit, Inject, forwardRef } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Note } from '../models/note';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NoteService implements OnInit {
  notes: Note[] = [];
  private url = ''; // Firebase URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }
  // Convert the received data to Note[] format
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url + 'notes.json').pipe(
      map((data) => {
        const notes: Note[] = [];

        for (const key in data) {
          notes.push({ ...data[key], id: key });
        }
        return notes;
      })
    );
  }
  // Method to add a new note
  add(note: Note): Observable<Note> {
    let note_ = this.http.post<Note>(this.url + 'notes.json', note);
    return note_;
  }
  // Method to get a note by its ID
  getId(id: any): Observable<Note> {
    let noteId = this.http.get<Note>(this.url + 'notes/' + id + '.json');
    return noteId;
  }
}
