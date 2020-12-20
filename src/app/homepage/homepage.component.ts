import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MarketComponent } from '../market/market.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  @ViewChild('market') marke: ElementRef;
  username: string;
  subscription: Subscription;
  timer: any = null;
  inLoop: boolean = false;
  state: string = "";
  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      //alert("welcome" + params.user);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadView = (event, ele) => {
    if (ele.name == 'market') {
      this.state = 'market';
    }
    console.log(ele.name);
    console.log(this.marke);
  }

  deBouncing(event, searchText) {
    this.timer = new Date().getTime();
    if(!this.inLoop){
    (function (me) {
      me.inLoop = true;
      let loop = setInterval(function () {
        let currTime = new Date().getTime();
        if (currTime - me.timer > 300) {
          console.log("call");
          me.timer = null;
          me.inLoop = false;
          clearInterval(loop);
        }
      })
    })(this);
  }
  }

  throttling(event, searchText){
    if(this.timer == null){
      this.timer = new Date().getTime();
    }
    if(!this.inLoop){
    (function (me) {
      me.inLoop = true;
      let loop = setInterval(function () {
        let currTime = new Date().getTime();
        if (currTime - me.timer > 1000) {
          console.log("call");
          me.timer = null;
          me.inLoop = false;
          clearInterval(loop);
        }
      })
    })(this);
  }

}
