import { Component, OnInit } from '@angular/core';
import { SentformService } from 'src/services/sentform/sentform.service';
import { Chat } from 'src/models/Chat';
import { GetdataService } from 'src/services/getdata/getdata.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chat= {} as Chat;
  nickname: any;
  chats:Chat[];
  chats2:Chat[];
  ChatColeccion: AngularFirestoreCollection<Chat>;
  ChatObservable: Observable<Chat[]>;
  constructor(private photoser:GetdataService,private sentForm:SentformService) {
    
   }

  ngOnInit() {
  }
  onSubmitTemplate(){
    this.sentsForm();
  }
  onSubmitTemplate2(){
    
  }
  sentsForm(){

    this.sentForm.sentFormChat(this.chat,this.nickname);
   

  }
  /*getData(){
    this.ChatColeccion=this.photoser.getchat(this.nickname);
    this.ChatObservable=this.ChatColeccion.snapshotChanges().subscribe(
      res=>{
        this.chats2=res.map(chat=>{
          return{
                 message:chat.payload.doc.data().message
          }
        })
      }

    )
  }
*/
}
