import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = "http://localhost:8080/posts";

  constructor(private http:HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }

  addNewPost(postToAdd:Post, imageFile:File): Observable<any>{

    const httpOptions = {
      params: new HttpParams().set('body', postToAdd.body)
    };

    const fd = new FormData();
    if(imageFile){
      fd.append('image', imageFile, imageFile.name);
    }

    return this.http.post(this.postsUrl, fd, httpOptions);
  }

}
