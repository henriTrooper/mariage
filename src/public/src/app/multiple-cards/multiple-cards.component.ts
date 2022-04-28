import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SidebarGlobalService } from '../sidebar-global/sidebar-global.service';

@Component({
  selector: 'app-multiple-cards',
  templateUrl: './multiple-cards.component.html',
  styleUrls: ['./multiple-cards.component.css']
})
export class MultipleCardsComponent implements OnInit {

  @Input() users: [];

  color = "background-color" + ":" + '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

  cards;
  nCards;
  cover;
  openContent;
  pageIsOpen = false;
  openContentImage;
  closeContent;
  windowWidth;
  windowHeight;
  currentCard;
  idCardCurrent;
  userClicked: any = {};

  constructor(public sidebarGlobalService: SidebarGlobalService) { }

  ngOnInit(): void {

  }

  /**
   *
   * @memberof MultipleCardsComponent
   */
  ngAfterViewInit(): void {
    this.init()
  }


  /**
   *
   *
   * @returns {boolean}
   * @memberof MultipleCardsComponent
   */
  getSideBarState(): boolean {
    return this.sidebarGlobalService.getSidebarState();
  }


  /**
   * initiate the process
   *
   * @memberof MultipleCardsComponent
   */
  init(): void {
    console.log('1')
    this.resize();
    this.selectElements();
    this.attachListeners();
  }


  /**
   * select all the elements in the DOM that are going to be used
   *
   * @memberof MultipleCardsComponent
   */
  selectElements(): void {
    console.log('2');
    this.cards = document.getElementsByClassName('card');
    this.nCards = this.cards.length;
    this.cover = document.getElementById('cover');
    this.openContent = document.getElementById('open-content');
    this.openContentImage = document.getElementById('open-content-image');
    this.closeContent = document.getElementById('close-content');
  }


  /**
   * Attaching three event listeners here:
   *  - a click event listener for each card
   * - a click event listener to the close button
   * - a resize event listener on the window
   *
   * @memberof MultipleCardsComponent
   */
  attachListeners(): void {
    console.log('3', this.nCards)
    for (let i = 0; i < this.nCards; i++) {
      this.attachListenerToCard(i);
    }
    this.closeContent.addEventListener('click', this.onCloseClick.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
  }


  /**
   *
   *
   * @param {*} i
   * @memberof MultipleCardsComponent
   */
  attachListenerToCard(i: any): void {
    console.log('4')
    this.cards[i].addEventListener('click', (e) => {
      const card = this.getCardElement(e.target);
      this.onCardClick(card, i);
    })
  }


  /**
   * When a card is clicked
   *
   * @param {*} card
   * @param {*} i
   * @memberof MultipleCardsComponent
   */
  onCardClick(card: any, i: any): void {
    console.log('5')
    // set the current card
    this.currentCard = card;
    // add the 'clicked' class to the card, so it animates out
    this.currentCard.className += ' clicked';
    // animate the card 'cover' after a 500ms delay
    setTimeout(() => { this.animateCoverUp(this.currentCard) }, 500);
    // animate out the other cards
    this.animateOtherCards(this.currentCard, true);
    // add the open class to the page content
    this.openContent.className += ' open';
  }


  /**
   * This effect is created by taking a separate 'cover' div, placing
   * it in the same position as the clicked card, and animating it to
   * become the background of the opened 'page'.
   * It looks like the card itself is animating in to the background,
   * but doing it this way is more performant (because the cover div is
   * absolutely positioned and has no children), and there's just less
   * having to deal with z-index and other elements in the card
   *
   * @param {*} card
   * @memberof MultipleCardsComponent
   */
  animateCoverUp(card: any): void {
    console.log('6')
    // get the position of the clicked card
    const cardPosition = card.getBoundingClientRect();
    // get the style of the clicked card
    const cardStyle = getComputedStyle(card);
    this.idCardCurrent = card.id.split('card')[1];
    this.userClicked = this.users[this.idCardCurrent];
    this.setCoverPosition(cardPosition);
    this.setCoverColor(cardStyle);
    this.scaleCoverToFillWindow(cardPosition);
    this.openContentImage.src = card.children[1].src;
    setTimeout(() => {
      // update the scroll position to 0 (so it is at the top of the 'opened' page)
      window.scroll(0, 0);
      // set page to open
      this.pageIsOpen = true;
    }, 300);
  }


  /**
   *
   *
   * @param {*} card
   * @memberof MultipleCardsComponent
   */
  animateCoverBack(card: any): void {
    console.log('7')
    const cardPosition = card.getBoundingClientRect();
    this.setCoverPosition(cardPosition);
    this.scaleCoverToFillWindow(cardPosition);
    // animate scale back to the card size and position
    this.cover.style.transform = 'scaleX(' + 1 + ') scaleY(' + 1 + ') translate3d(' + (0) + 'px, ' + (0) + 'px, 0px)';
    setTimeout(() => {
      // set content back to empty
      this.openContentImage.src = '';
      // style the cover to 0x0 so it is hidden
      this.cover.style.width = '0px';
      this.cover.style.height = '0px';
      this.pageIsOpen = false;
      // remove the clicked class so the card animates back in
      this.currentCard.className = this.currentCard.className.replace(' clicked', '');

    }, 301);
  }


  /**
   *
   *
   * @param {*} cardPosition
   * @memberof MultipleCardsComponent
   */
  setCoverPosition(cardPosition: any): void {
    console.log('8')
    // style the cover so it is in exactly the same position as the card
    this.cover.style.left = cardPosition.left + 'px';
    this.cover.style.top = cardPosition.top + 'px';
    this.cover.style.width = cardPosition.width + 'px';
    this.cover.style.height = cardPosition.height + 'px';
  }


  /**
   *
   *
   * @param {*} cardStyle
   * @memberof MultipleCardsComponent
   */
  setCoverColor(cardStyle: any): void {
    console.log('9')
    // style the cover to be the same color as the card
    this.cover.style.backgroundColor = cardStyle.backgroundColor;
  }


  /**
   *
   *
   * @param {*} cardPosition
   * @memberof MultipleCardsComponent
   */
  scaleCoverToFillWindow(cardPosition: any): void {
    console.log('10')
    // calculate the scale and position for the card to fill the page,
    const scaleX = this.windowWidth / cardPosition.width;
    const scaleY = this.windowHeight / cardPosition.height;
    const offsetX = (this.windowWidth / 2 - cardPosition.width / 2 - cardPosition.left) / scaleX;
    const offsetY = (this.windowHeight / 2 - cardPosition.height / 2 - cardPosition.top) / scaleY;
    // set the transform on the cover - it will animate because of the transition set on it in the CSS
    this.cover.style.transform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ') translate3d(' + (offsetX) + 'px, ' + (offsetY) + 'px, 0px)';
  }


  /**
   *  When the close is clicked
   *
   * @memberof MultipleCardsComponent
   */
  onCloseClick(): void {
    console.log('11')
    // remove the open class so the page content animates out
    this.openContent.className = this.openContent.className.replace(' open', '');
    // animate the cover back to the original position card and size

    this.animateCoverBack(this.currentCard);
    // animate in other cards
    this.animateOtherCards(this.currentCard, false);
  }


  /**
   *
   *
   * @param {*} card
   * @param {*} out
   * @memberof MultipleCardsComponent
   */
  animateOtherCards(card: any, out: any): void {
    console.log('12')
    let delay = 100;
    for (let i = 0; i < this.nCards; i++) {
      // animate cards on a stagger, 1 each 100ms
      if (this.cards[i] === card) {
        continue;
      }
      if (out) {
        this.animateOutCard(this.cards[i], delay);
      } else {
        this.animateInCard(this.cards[i], delay);
        delay += 100;
      }
    }
  }


  /**
   * animations on individual cards (by adding/removing card names)
   *
   * @param {*} card
   * @param {*} delay
   * @memberof MultipleCardsComponent
   */
  animateOutCard(card: any, delay: any): void {
    console.log('13')
    setTimeout(() => {
      card.className += ' out';
    }, delay);
  }


  /**
   *
   * @param {*} card
   * @param {*} delay
   * @memberof MultipleCardsComponent
   */
  animateInCard(card: any, delay: any): void {
    console.log('14')
    setTimeout(() => {
      card.className = card.className.replace(' out', '');
    }, delay);
  }


  /**
   * this function searches up the DOM tree until it reaches the card element that has been clicked
   *
   * @param {*} el
   * @returns {*}
   * @memberof MultipleCardsComponent
   */
  getCardElement(el: any): any {
    console.log('15',)
    if (el.className.indexOf('card') > -1) {
      return el;
    } else {
      return this.getCardElement(el.parentElement);
    }
  }


  /**
   * resize function - records the window width and height
   *
   * @memberof MultipleCardsComponent
   */
  resize(): void {
    console.log('16')
    if (this.pageIsOpen) {
      // update position of cover
      const cardPosition = this.currentCard.getBoundingClientRect();
      this.setCoverPosition(cardPosition);
      this.scaleCoverToFillWindow(cardPosition);
    }
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }
}
