import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from'@angular/common/http'
import { Dragons } from '../models/DragonsModel';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  private url = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

  constructor(
    private http: HttpClient
  ) { }

  getDragons(): Observable<Dragons> {
    return this.http.get<Dragons>(this.url);
  }

  getDragon(id: number): Observable<Dragons>{
    const _url = `${this.url}/${id}`
    return this.http.get<Dragons>(_url);
  }
  
  createDragons(dragon: Dragons): Observable<Dragons> {
    return this.http.post<Dragons>(this.url, dragon);
  }

  deletedragon(id: number): Observable<Dragons>{
    const _url = `${this.url}/${id}`
    return this.http.delete<Dragons>(_url);
  }

 updatedragon(dragon: Dragons): Observable<Dragons>{
    const _url = `${this.url}/${dragon.id}`
    return this.http.put<Dragons>(_url, dragon);
  }


}
