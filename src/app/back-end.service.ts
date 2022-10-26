import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';

/*
data path
  https://live-posts-d06a3-default-rtdb.firebaseio.com/
*/

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}
  //func 1 - save
  saveData() {
    //step 1 get list of post from post.service
    const listofPosts: Post[] = this.postService.getPosts();

    //step 2 send list of post to backend
    this.http
      .put(
        ' https://live-posts-d06a3-default-rtdb.firebaseio.com/posts.json',
        listofPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  //func 2 - fetch
  fetchData() {
    //step 1 get list of post from database
    this.http
      .get<Post[]>('https://live-posts-d06a3-default-rtdb.firebaseio.com/posts.json'
      ).pipe(
          tap((listOfPosts: Post[])=> {

          console.log(listOfPosts);
          // step 2 - send to post.service
          this.postService.setPosts(listOfPosts);
      })
      ).subscribe();
  }
}
