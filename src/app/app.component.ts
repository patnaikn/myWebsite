import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app-component.less']
})
export class AppComponent implements OnInit {

  element: any;

  title = '';

  private bodyText: string;

  constructor() {
  }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
    let modal = this;

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    // this.element.appendTo('body');
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.on('click', function (e: any) {
      var target = e.target;
      if (!target.closest('.modal-body').length) {
        modal.closeModal();
      }
    });
  }

  openModal(){
    //this.element.show();
    this.element.style.display = 'block';
    document.querySelector('body').classList.add('modal-open');
  }

  closeModal(){
    //this.element.hide();
    this.element.style.display = 'none';
    document.querySelector('body').classList.remove('modal-open');
  }
}
