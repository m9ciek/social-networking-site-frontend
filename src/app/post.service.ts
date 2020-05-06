import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = "http://localhost:8080/posts";
  private addPostUrl = "http://localhost:8080/main/post";

  constructor(private http:HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }

  addNewPost(postToAdd:Post): Observable<any>{

    const httpOptions = {
      params: new HttpParams().set('body', postToAdd.body)
    };

    return this.http.post(this.addPostUrl, postToAdd, httpOptions);
  }

}
