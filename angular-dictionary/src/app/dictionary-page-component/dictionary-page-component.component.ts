import { Component, OnInit } from '@angular/core';
import {IWord} from '../IWord';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-page-component',
  templateUrl: './dictionary-page-component.component.html',
  styleUrls: ['./dictionary-page-component.component.css']
})
export class DictionaryPageComponentComponent implements OnInit {
  words: IWord [] = [];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.words = this.dictionaryService.getAll();
  }
}
