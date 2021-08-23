import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {FormControl, FormControlName, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})

export class DictionaryDetailComponentComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(
    private dictionaryService: DictionaryService,
    private activatedRoute: ActivatedRoute
  ) { }

  formSearch = new FormGroup({
    word: new FormControl()
});

  searchMean() {
    // tslint:disable-next-line:prefer-for-of
    // for (let i = 0; i < this.dictionaryService.listWord.length; i++) {
    //   if (this.dictionaryService.listWord[i].word === this.formSearch.value.word) {
    //     return  'Nghĩa của từ ' + this.formSearch.value.word + ' là: ' + this.dictionaryService.listWord[i].mean;
    //   } else {
    //     return 'Từ ' + this.formSearch.value.word + ' không có trong từ điển';
    //   }
    // }
    const mean = this.dictionaryService.translate(this.formSearch.value.word);
    if (mean == null) {
      return 'Từ ' + this.formSearch.value.word + ' không có trong từ điển';
    } else {
      return 'Nghĩa của từ ' + this.formSearch.value.word + ' là ' + mean;
    }
  }
  ngOnInit() {
    const {snapshot} = this.activatedRoute;
    const word = snapshot.paramMap.get('key');
    const mean = this.dictionaryService.search(key);
    this.word = {key: key, mean: mean}
  }

}
