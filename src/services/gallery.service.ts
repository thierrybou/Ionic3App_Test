import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class GalleryService {

  public host:string = 'https://pixabay.com/api/?key=1818662-eee28416f41eadd7c89acf6a6';

  constructor(private http:Http) {
  }

  chercher(query:string, size:number, page:number) {
    return this.http.get(this.host+"&q="+query+"&per_page="+size+"&page="+page)
      .map(resp=>resp.json());
  }
}
