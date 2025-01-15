import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EditorConfig } from 'ngx-simple-text-editor';

import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteService } from '../services/note.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

import { Note } from '../models/note';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'create-note',
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css',
})
export class CreateNoteComponent implements OnInit {
  model: any = {};

  constructor(private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {}

  saveNote(form: NgForm) {
    const note = {
      id: Math.floor(Math.random() * 10),
      title: this.model.title,
      description: this.model.description,
    };

      this.noteService.add(note).subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}

