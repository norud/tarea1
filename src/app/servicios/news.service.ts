import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
private news: Array<string> = [];
  constructor() { }
  crear(v: string){
      this.news.push(v);
  }
  buscar(){
      return this.news;
  }
}
