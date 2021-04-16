import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { Observable, Subscription } from 'rxjs';
import { Tarea } from '../models/Tarea';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  tareas: AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore) {
    this.tareas = this.firestore.collection<any>(environment.collection);
  }

  getTareas(): any {
    return this.tareas.get();
  }

  getTareas2(timer: number = 10000): Observable<Tarea[]> {
    return new Observable((observer) => {
      let subscription: Subscription;
      const tempo = setTimeout(() => {
        subscription.unsubscribe();
        observer.error('Timeout');
      }, timer);
      subscription = this.getTareas().subscribe((lista) => {
        clearTimeout(tempo);
        let listado = [];
        lista.docs.forEach((tarea) => {
          listado.push({ id: tarea.id, ...tarea.data() });
        });
        observer.next(listado);
        observer.complete();
      });
    });
  }

  getTareaById(id: string): any {
    return this.tareas.doc(id).get();
  }

  addTarea(data: Tarea): any  {
    return this.tareas.add(data);
  }

  updateTarea(id: string, data: Tarea): any  {
    return this.tareas.doc(id).set(data);
  }

  deleteTarea(id: string): any  {
    return this.tareas.doc(id).delete();
  }
}
