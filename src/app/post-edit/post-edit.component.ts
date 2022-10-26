import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number=0;
  editMode = false;

  constructor(private postService: PostService ,private router:Router,private route: ActivatedRoute) {}

  ngOnInit(): void {

    let title ='';
    let description ='';
    let imagePath ='';



    this.route.params.subscribe((params:Params) => {
      if(params['index']) {
        console.log(params['index']);
        this.index = params['index'];
        
        const post = this.postService.getPost(this.index);

        title = post.title;
        description = post.descrip;
        imagePath = post.imagPath;

        this.editMode = true;
      }
    });
    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required,Validators.maxLength(20),]),
      description: new FormControl(description, [Validators.required]),
      ImagePath: new FormControl(imagePath, [Validators.required]),
    });
  }

  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const ImagePath = this.form.value.ImagePath;
    //ready with object
    const post: Post = new Post(title, description, ImagePath, 'test@test.com', new Date(),0 );

    //calling post PostService
    if(this.editMode){
      this.postService.updatePosts(this.index,post);
    }else{
      this.postService.addPosts(post);
    }
    


    //navigatte to post list
      this.router.navigate(["/post-list"])
  }
}
