import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 // public image: string ;
  constructor(private imageService: ImagesService) {

    
    this.fetchImage()
  }

  fetchImage(): void {
    
  //  this.imageService.loadImage().subscribe(result =>{this.image=result})
  }



}
