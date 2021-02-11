import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQB5tdBiGbE1YNgkC6TmxrfU2us3QMemDWnceXex4rhXRqxAQRw4GGqpMDln5KCxgkkzuo3vJJsG0YAE9jE'
    })
  
    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
        .subscribe(data =>{
          console.log(data)
        })
  }
}
