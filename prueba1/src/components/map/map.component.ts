import { Component, OnInit } from '@angular/core';
import {Map, latLng, tileLayer, Layer, marker, icon, geoJSON, control} from 'leaflet';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: Map; 
  
  constructor(public location: Location) {
   
  }
   ngOnInit() {
     this.leafletMap();
  }
  async leafletMap(){
    
   
    this.location.subscribe(res=>{
      console.log(res);
    })
    
    this.map = new Map('mapId').setView([4.603814, -74.098260], 10);
    tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Javier Melo ©',
    }).addTo(this.map);
    
    
  }

}
