import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/services/getdata/getdata.service';
import { Thask } from 'src/models/Thask';
import { SentformService } from 'src/services/sentform/sentform.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  task: Thask[];
  tasks= {} as Thask;
  tasks2= {} as Thask;
  name:any;
  description:any;
  showedit:boolean=false;
  name2: any;
  name1: any;
  id: any;
  doit: any;
  date: any;
  constructor(private fs:AngularFirestore,private dataser:GetdataService,private sentForm:SentformService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.dataser.getTasks().subscribe(res=>{
      this.task=res;
      console.log(this.task);
    })
  }

  onSubmitTemplate(){
    this.sentsForm();
  }
  onSubmitTemplate2(){
    this.updateform();
  }

  sentsForm(){
    console.log("Click Form");
    
    this.name=this.tasks.tittle;
    this.description=this.tasks.description;
    this.tasks.doit=false;
    let date = new Date();
    this.tasks.date=String(date);
    console.log(this.tasks);
    this.sentForm.sentFormThask(this.tasks).then(()=>{
     
    });
    this.tasks.tittle=null;
    this.tasks.doit=null;
    this.tasks.date=null;
    this.tasks.description=null;
  }
  deleteTask(task){
    
    return this.fs.collection<Thask>("/tasks/").doc(task.id).delete();

  }
  mostrareditar(task){

    this.showedit=true;
    this.name1=task.tittle;
    this.name2=task.description;
    this.id=task.id;
    this.doit=task.doit;
    this.date=task.date;

  }
  updateform(){
    this.tasks2.tittle= this.name1;
    this.tasks2.description= this.name2;
    this.tasks2.doit= this.doit;
    let date = new Date();
    this.tasks2.date=String(date);
    this.fs.collection<Thask>("/tasks/").doc(this.id).update(this.tasks2);
    this.showedit=false;
    this.name1=null;
    this.name2=null;
    this.id=null;
    this.doit=null;
    this.date=null;


  }
  

}
