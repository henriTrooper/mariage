import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const pics = document.getElementsByClassName('imgcustom')
    const textFull = document.querySelector(".testimonial-contents");

    for (let i = 0; i < pics.length; i++) {
      pics[i].addEventListener("click", function () {
        for (let y = 0; y < pics.length; y++) {
          pics[y].classList.remove("active");
        }
        this.classList.add("active");

        const current = Number(this.getAttribute("id"));

        for (let z = 0; z < textFull.children.length; z++) {
          textFull.children[z].classList.remove("active");
        }
        textFull.children[current].classList.add("active");
      });
    }
  }

}
