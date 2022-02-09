import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  
  constructor(private httpClient: HttpClient) { }
  public index():Observable<any>{
    return this.httpClient.get('https://ibillboard.com/api/positions')
  }
}
