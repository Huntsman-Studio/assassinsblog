import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class ServiceNameService {

  private _baseApi: string = "https://dash.assassinscreedgreece.gr/wp-json/wp/v2/posts";
  
  constructor(private _httpClient: HttpClient, private _headers: Headers) { }
  
  
}