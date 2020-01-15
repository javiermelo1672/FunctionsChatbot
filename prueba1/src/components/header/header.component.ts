import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  galeria:any=true;
  tareas:any=false;
  contacto:any=false;
  mapa:any=false;
  constructor() { }

  ngOnInit() {
    this.galeria=true;
  }
  cgaleria(){
    this.galeria=true;
    this.tareas=false;
    this.contacto=false;
    this.mapa=false;
  }
  ctareas(){
    this.galeria=false;
    this.tareas=true;
    this.contacto=false;
    this.mapa=false;
  }
  ccontacto(){
    this.galeria=false;
    this.tareas=false;
    this.contacto=true;
    this.mapa=false;
  }
  cmapa(){
    this.galeria=false;
    this.tareas=false;
    this.contacto=false;
    this.mapa=true;
  }

}
