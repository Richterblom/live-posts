import { EventEmitter, Injectable } from '@angular/core';
import { Post } from './post.model';
// indicates is available across whole system
@Injectable({ providedIn: 'root' })
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  listOfPosts: Post[] = [
    /*new Post(
      'Naruto & sasuke',
      'this is the story of the world',
      'https://images.alphacoders.com/605/thumb-1920-605592.png',
      'TATSU@test.com',
      new Date(),
      5
    ),
    new Post(
      'toykyo',
      'SAD',
      'https://images5.alphacoders.com/587/thumb-1920-587597.jpg',
      'RABID@test.com',
      new Date(),
      6
    ),
    new Post(
      'SHEN',
      `OG's`,
      'https://images2.alphacoders.com/564/thumb-1920-564835.jpg',
      'shen@test.com',
      new Date(),
      1
    ),*/
  ];
  //facility 1
  getPosts() {
    return this.listOfPosts;
  }
  //facility 2
  deletePosts(index: number) {
    this.listOfPosts.splice(index, 1);
  }
  //facility 3
  addPosts(post: Post) {
    this.listOfPosts.push(post);
  }
  //facility 4
  updatePosts(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }
  //facility 5
  getPost(index: number) {
    return this.listOfPosts[index];
  }
    //facility 6
    likePost(index: number) {
     this.listOfPosts[index].numberOfLikes +=1;
    }
    //facility 7
    //fetching
    setPosts(listOfPosts: Post[]) {
      this.listOfPosts = listOfPosts;
      this.listChangedEvent.emit(this.listOfPosts);
     }
    
}
