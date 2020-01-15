import { Injectable, ɵConsole } from '@angular/core';
import {Photo} from 'src/models/Photo'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Thask } from 'src/models/Thask';
import { Chat } from 'src/models/Chat';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  PhotoColeccion:  AngularFirestoreCollection<Photo>;
  PhotoObservable: Observable<Photo>;
  photos: Observable<Photo[]>;

  TaskColeccion:  AngularFirestoreCollection<Thask>;
  TaskObservable: Observable< Thask>;

  ChatColeccion: AngularFirestoreCollection<Chat>;
  ChatObservable: Observable<Chat>;
  thasks: Observable<Thask[]>;
  Chats: Observable<Chat[]>;
  constructor(private fs:AngularFirestore) { }

getPhoto(){
  this.PhotoColeccion=this.fs.collection<Photo>("/potho/");
  this.photos=this.PhotoColeccion.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
    });
  })
);
return this.photos;
}

getTasks(){
  this.TaskColeccion=this.fs.collection<Thask>("/tasks/");
  this.thasks=this.TaskColeccion.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
    });
  })
);
return this.thasks;
}
getchat(nickname){
  console.log("get Data");
  return this.fs.collection<Chat>("chat/1/"+nickname);
  
}

}
