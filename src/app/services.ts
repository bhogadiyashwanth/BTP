import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class Services{
 url:string = "http://localhost:3000/";
  constructor(private http: HttpClient) {}
  getBooks(data) {
    return this.http.post<any>(this.url+"pythonfile",data);
  }
  addBooks(data) {
    return this.http.post<any>(this.url+"books", data);
  }
  deleteBooks(id) {
    return this.http.delete<any>(this.url+"books/"+id);
  }
}
