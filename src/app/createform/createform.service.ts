import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CreateformService {

  configUrl = environment.APIBASE;

  constructor(private http: HttpClient) {

  }
  adduser(loginobj) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.post(this.configUrl + "adduser", loginobj, { headers: headers });

  }
  getuser() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.get(this.configUrl + "getuser", { headers: headers });

  }

  deleteuser(loginobj) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.post(this.configUrl + "deleteuser", loginobj, { headers: headers });

  }
  getuserdata(loginobj) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.post(this.configUrl + "getuser", loginobj, { headers: headers });

  }
}
