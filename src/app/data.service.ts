import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") || '{}');;
  }

  getComments() {
    return JSON.parse(localStorage.getItem("comments") || '{}');;
  }

  saveState(arr: Array<any>) {
    localStorage.setItem('comments', JSON.stringify(arr));
  }
}
 