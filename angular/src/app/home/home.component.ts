import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from "@angular/router";
import { DataService } from '../services/data.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id = '';
  title = 'Angular';
  object: any;
  button: boolean = true
  errorMsg: any;
  msg: any

  constructor(private postsservices: PostsService,
    private router: Router,
    private dataService: DataService) { }
  ngOnInit(): void {
  }
  sendID() {
    console.log("this is id", this.id);

    this.object = this.postsservices.getPosts(this.id)
      .pipe(
        catchError(error => {
          this.errorMsg = error.message;
          return of([]);
        })
      );
    // this.postsservices.getPosts(this.id).subscribe(data => {
    //   console.log(data);
    //   if (data.length > 0) {
    //     this.object = data;
    //     this.dataService.jsonData(this.object);
    //     this.router.navigate(['/result'])
    //   }
    // });
  }
  modelChanged(arg: any) {
    // console.log("modelchanged " + arg);
    if (arg == null) {
      this.button = true
    } else {
      this.button = false
    }

  }
}
