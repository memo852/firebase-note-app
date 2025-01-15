import {Note} from './../models/note';
import {Component, Injectable, OnInit} from '@angular/core';
import {DeleteNoteService} from '../services/delete.note.service';
import {NoteService} from '../services/note.service';
import {ActivatedRoute} from '@angular/router';
import {TrashNoteService} from '../services/trash.note.service';
import {Observable} from 'rxjs';
import {subscribe} from 'diagnostics_channel';
import {formatDate} from "@angular/common";

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
  //providers: [NoteService,TrashNoteService]
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  loading: boolean = false;




  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private deleteNoteService: DeleteNoteService
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.noteService.getNotes().subscribe((data) => {
        this.notes = data;
      });

    });
    //this.datePosted = this.noteService.getRelativeTime();

  }

  sendTrash(id: any, note: any) {
    const newNote = new Observable<any>((subscriber) => {
      subscriber.next(this.noteService.getId(id));

      subscriber.complete();
    });

    newNote.subscribe(() => {
      this.deleteNoteService.deleteNote(id, note);
      this.notes = this.notes.filter((note) => note.id !== id);
    });
    const comp = {
      next: () => (this.loading = true),
      complete: () => (this.loading = false),
    };
    newNote.subscribe(comp);
  }
}
