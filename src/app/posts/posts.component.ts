import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { DomSanitizer} from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private postService:PostService, private sanitizer:DomSanitizer, private router:Router) { }

  postForm = new FormGroup({
    body: new FormControl('', [Validators.required]),
    image: new FormControl('')
  });
  
  postToSave = new Post();

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }
  //need to include proper url sanitization in order to fetch images from file system
  //now app is using default image from folder assets/imgUrl

  addNewPost(){
    if(this.postForm.valid){
      this.postToSave.body = this.postForm.get('body').value;
      this.postService.addNewPost(this.postToSave, this.postForm.get('image').value).subscribe(res =>
        console.log('Post Body: '+ res.body));
      window.location.reload();
    }
    
  }

  onFileSelect(event) {
    this.postForm.patchValue({
      image: event.target.files[0]
    });
  }
}
