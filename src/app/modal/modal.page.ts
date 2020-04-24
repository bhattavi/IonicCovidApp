import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
    selector: 'modal-page',
    templateUrl: 'modal-page.html',
    
})

export class ModalPage implements OnInit {
    @Input() data: any;

    constructor(private modalController: ModalController) {
  

    }
    ngOnInit() {
     
        // if (typeof this.data !== 'undefined') {
        //     this.data = this.data;
        // }
       
        // if (!this.data || typeof this.data !== 'string') {
        //     this.data = ', Welcome to my page';
        // }

    }
    dismissModal() {
        this.modalController.dismiss({
         
        });
    }
}

