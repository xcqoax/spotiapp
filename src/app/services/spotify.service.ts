import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){
      const url=`https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders({
        'Authorization':'Bearer BQAB31GRflh4P9V8sSDaFg3MAgRE2lXfK7-J_DckntavQicnBco1yN1QW-sSckBQur8Uyh3jSNGuA-J9zMk'
      })

      return this.http.get(url,{headers});
  }

  getNewReleases(){
  
     return this.getQuery('browse/new-releases')
                .pipe(map(data => data['albums'].items))

  }

  getArtista( termino:string){

     return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                 .pipe(map(data=>data['artists'].items))
  }
}
