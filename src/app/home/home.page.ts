import { Component } from '@angular/core';
import { CovidService } from './covid.service';
import { ModalPage } from '../modal/modal.page';
import { ModalController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  countries: any = null;
  constructor(private covidService: CovidService, private modal: ModalController, private toastController: ToastController) { 

  }

  ngOnInit(){
    this.initializeData();
  }

  initializeData(){
    this.covidService.getData().subscribe((data)=>{
      this.countries = data;
    });
  }

  async onModal(country) {


    
    const modal = await this.modal.create({
      component: ModalPage,
      componentProps: {
        data: country
      }
     
    });
    console.log(country);
    await modal.present();


  }

  filterData(event:any){
   
    const value = event.target.value;
    console.log(value);
    if (value == ""){
      this.initializeData();
    }
    else if(value && value.trim() != ""){
      this.countries = this.countries.filter((data) => {
          return (data.country.toLowerCase().indexOf(value.toLowerCase()) >-1);
      })
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Six feet distance determines our existence.',
      duration: 2000,
      
    });
    toast.present();
  }


}
