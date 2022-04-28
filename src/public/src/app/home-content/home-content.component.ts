import { Component, OnInit } from '@angular/core';
import { SidebarGlobalService } from '../sidebar-global/sidebar-global.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css'],
})
export class HomeContentComponent implements OnInit {

  // You can change global variables here:
  radius = 240; // how big of the radius
  autoRotate = true; // auto rotate or not
  rotateSpeed = -60; // unit: seconds/360 degrees
  imgWidth = 170; // width of images (unit: px)
  imgHeight = 200; // height of images (unit: px)

  odrag:any;
  ospin:any;
  aImg:any;
  aEle:any;

  ground:any;

  sX = 0;
  sY = 0;
  nX = 0;
  nY = 0;
  desX = 0;
  desY = 0;
  tX = 10;
  tY = 10;

  constructor(
    public sidebarGlobalService: SidebarGlobalService,
    private route: ActivatedRoute,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    document.querySelector('#FirstBody').setAttribute('style', 'overflow:visible');
    if(this.auth.isAuthenticated()){
      document.querySelector('#bodySidebar').setAttribute('style', 'visibility:visible');
    }
  }

  ngAfterViewInit(): void {
    if(this.auth.isAuthenticated()){
      document.querySelector('.btnSidebar').setAttribute('style', 'visibility:visible;')
    }
    this.selectElement();
    this.playSpin(true);
    this.applyTranform(this.odrag);
    // auto spin
    if (this.autoRotate) {
      var animationName = (this.rotateSpeed > 0 ? 'spin' : 'spinRevert');
      this.ospin.style.animation = `${animationName} ${Math.abs(this.rotateSpeed)}s infinite linear`;
    }
    this.init();

    //Newsletter
    $("#signup-button").click(function(e){
      var $email = $("#subscribe-email").val();
      if(validateEmail($email)){
        //alert("Valid email!");
        $(".message-content").html("Now you are subscribed!");
      }else{
        //alert("Invalid email!");
        $(".message-content").html("E-mail address is not valid.");
      }
      
      $(".subscribe-message").fadeIn(1500).css("display","block").delay(2000).fadeOut(500);
      e.preventDefault();
      });

      function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
      }


  }

  getSideBarState(): boolean {
    return this.sidebarGlobalService.getSidebarState();
  }
  // Author: Hoang Tran (https://www.facebook.com/profile.php?id=100004848287494)
  // Github verson (1 file .html): https://github.com/HoangTran0410/3DCarousel/blob/master/index.html

  selectElement() {

    this.odrag = document.getElementById('drag-container');
    this.ospin = document.getElementById('spin-container');
    this.aImg = this.ospin.getElementsByTagName('img');
    this.aEle = this.aImg // combine 2 arrays

    // Size of images
    this.ospin.style.width = this.imgWidth + "px";
    this.ospin.style.height = this.imgHeight + "px";

    // Size of ground - depend on radius
    this.ground = document.getElementById('ground');
    this.ground.style.width = this.radius * 3 + "px";
    this.ground.style.height = this.radius * 3 + "px";
  }

  init() {
    for (var i = 0; i < this.aEle.length; i++) {
      this.aEle[i].style.transform = "rotateY(" + (i * (360 / this.aEle.length)) + "deg) translateZ(" + this.radius + "px)";
      this.aEle[i].style.transition = "transform 0.5s";
      this.aEle[i].style.transitionDelay = (this.aEle.length - i) / 1 + "s";
    }
  }

  applyTranform(obj) {
    // Constrain the angle of camera (between 0 and 180)
    if (this.tY > 180) this.tY = 180;
    if (this.tY < 0) this.tY = 0;

    // Apply the angle
    obj.style.transform = "rotateX(" + (-this.tY) + "deg) rotateY(" + (this.tX) + "deg)";
  }

playSpin(yes) {
    this.ospin.style.animationPlayState = (yes?'running':'paused');
  };


}


