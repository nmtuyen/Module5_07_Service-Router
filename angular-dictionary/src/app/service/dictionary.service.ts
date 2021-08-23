import { Injectable } from '@angular/core';
import {IWord} from '../IWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  listWord: IWord[] = [
    {
      word: 'hello',
      mean: 'xin chào',
    },
    {
      word: 'chemgio',
      mean: 'Phong',
    },
    {
      word: 'dog',
      mean: 'chó',
    },
    {
      word: 'CodeGym',
      mean: 'Trung tâm đào tạo lập trình',
    },
  ];

  constructor() { }
  translate(word: string) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listWord.length; i++) {
      if (word === this.listWord[i].word) {
        return this.listWord[i].mean;
      }
    }
  }

  getAll() {
    return this.listWord;
  }
  search(key: string) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listWord.length; i++) {
      if (this.listWord[i].word === key) {
        return this.listWord[i].mean;
      }
    }
  }
}
