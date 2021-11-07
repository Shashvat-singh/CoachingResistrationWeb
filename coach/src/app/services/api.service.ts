import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://localhost:3000/choach"
  resUrl = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url)
  }

  postList(data: any) {
    return this.http.post(this.url, data)
  }

  delForm(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getForm(id: any) {
    return this.http.get(`${this.url}/${id}`)
  }
  putForm(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data)
  }
  resiForm(data:any){
    return this.http.post(this.resUrl,data)
  }

}