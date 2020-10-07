import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class Services{
 url:string = "https://wohchbzhe5.execute-api.us-east-2.amazonaws.com/Stage/";
  constructor(private http: HttpClient) {}
  getBooks() {
    return this.http.get<any>(this.url+"books");
  }
  addBooks(data) {
    return this.http.post<any>(this.url+"books", data);
  }
  deleteBooks(id) {
    return this.http.delete<any>(this.url+"books/"+id);
  }
}
