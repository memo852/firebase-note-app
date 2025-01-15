import { Component, Injectable, OnInit } from '@angular/core';
import { TrashNoteService } from '../services/trash.note.service';
import { Note } from '../models/note';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../services/note.service';
import { DeleteNoteService } from '../services/delete.note.service';

@Component({
  selector: 'delete-note-component',
  templateUrl: './delete-note-component.component.html',
  styleUrl: './delete-note-component.component.css',
  providers: [NoteService,TrashNoteService]
})
export class DeleteNoteComponentComponent implements OnInit {
  trash: Note[] = [];

  constructor(
    private route: ActivatedRoute,
    private noteTrashService: TrashNoteService,
    private deleteNoteService: DeleteNoteService
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.noteService.getProducts().subscribe((data) => {
    //   this.notes = data;
    // });
    // this.noteService.getTrashNotes().subscribe((notes) => {
    //   this.trashNotes = notes ? Object.values(notes) : [];
    // });
    // this.route.params.subscribe(() => {
    //   this.noteTrashService.getTrashNotes().subscribe((data) => {
    //     this.notes = data;
    //   });
    // });
    this.route.params.subscribe(() => {
      this.noteTrashService.getTrashNotes().subscribe((data) => {
        this.trash = data;

      });
    });

    // this.noteService.getTrashNotes().subscribe((notes) => {
    //   this.noteService.getProducts().subscribe((data) => {
    //   this.notes = data;
    // });
    //   this.trashNotes = notes ? Object.values(notes) : [];
    //   console.log(notes.description)
    // });
  }
  sendNotes(id: any,note:any) {
    this.noteTrashService.getId(id).subscribe(() => {
      this.noteTrashService.restoreNote(id,note);
      this.trash = this.trash.filter((trash) => trash.id !== id);
    });
  }
  deleteNote(id: any) {
    this.noteTrashService.getId(id).subscribe(() => {
      this.deleteNoteService.deleteTrashNote(id);
      this.trash = this.trash.filter((trash) => trash.id !== id);
    });
  }
}
