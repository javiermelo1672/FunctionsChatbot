import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Contact } from 'src/models/Contact';
import { Thask } from 'src/models/Thask';
import { Chat } from 'src/models/Chat';

@Injectable({
  providedIn: 'root'
})
export class SentformService {

  constructor(private db: AngularFirestore) { }

  sentForm(contact:Contact){
    return this.db.collection('/contact/').add(contact);
  }
  sentFormThask(task:Thask){
    return this.db.collection('/tasks/').add(task);
  }
  sentFormChat(chat:Chat,nickname){
    console.log("new method")
    return this.db.collection('/chat/'+1+"/"+nickname).add({message:chat.message});
  }
}
