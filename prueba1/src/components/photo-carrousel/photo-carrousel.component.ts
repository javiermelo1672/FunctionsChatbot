import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Photo } from 'src/models/Photo';
import { GetdataService } from 'src/services/getdata/getdata.service';

@Component({
  selector: 'app-photo-carrousel',
  templateUrl: './photo-carrousel.component.html',
  styleUrls: ['./photo-carrousel.component.scss']
})
export class PhotoCarrouselComponent implements OnInit {

 
  photos: Photo[];

  constructor(private photoser:GetdataService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.photoser.getPhoto().subscribe(res=>{
      this.photos=res;
      console.log(this.photos);
    })
  }

}
