import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  otherMessage: any;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    console.log("i am in results")
    this.data.currentMessage.subscribe(msg => this.otherMessage = msg);
    console.log("this is object", this.otherMessage);
  }


}
