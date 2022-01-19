import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaCuriosityService {

  url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key='
  key = 'NTsTh6zymrdCCltadkBZrb17A6oCawo2YahFvUX9'
  constructor(private http : HttpClient) { }

  getPhotos():Observable<any>{
    return this.http.get(
      this.url + this.key
    )
  }
}