import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
exports.chatbot= functions.firestore.document('chat/1/{{idcollection}}').onWrite((change,context)=>{

    const db= admin.firestore();
    let idcollection:any=null;
    idcollection=context.params.idcollection;

    console.log("Id Documento:"+context.params.idcollection);

    db.collection("chat/1/"+idcollection).add({reboot:"Mensaje generado automaticamente desde Google Cloud Functions"}).then(()=>{
        console.log("Correcto")
    }).catch((e)=>console.log(e));
    

   
});
