import { Component, OnInit, ViewChildren, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import {FeedStory} from '../feed-story.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @ViewChild ('image') imageEl: ElementRef<HTMLSpanElement>;
  @ViewChild ('imgTpl') imgTplEl: TemplateRef<any>;

  constructor() { 
  
  }
  story;
  imgList = ["../../assets/images/Img1.JPG","../../assets/images/Img2.JPG","../../assets/images/Img3.JPG","../../assets/images/Img4.JPG","../../assets/images/Img5.JPG","../../assets/images/Img1.JPG"];
  ngOnInit() {
    //console.log(this.imgTplEl.elementRef);
    for(var i=0; i< this.imgList.length; i++){
      
    }
    var newStory = new FeedStory();
    newStory.profileName = "Pradeep kumar";
    newStory.profilePic = "./assets/images/Img1.JPG";
    newStory.content = "My first post!!!"
    newStory.contentType = "video";
    newStory.contentSrc = './assets/images/video1.mp4';
    newStory.commentsCount = 100;
    newStory.sharesCount = 10;
    newStory.reactionsCount = 50;
    newStory.likeReaction = true;
    newStory.loveReaction = true;
    this.story = newStory;
    


  }
  ngAfterViewInit (){
    //console.log(this.imgTplEl.elementRef);
  }
}
