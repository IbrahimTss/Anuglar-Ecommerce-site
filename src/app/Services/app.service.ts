import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Game } from '../modules/modules.module';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient,private toastr: ToastrService) { }

  putdata(data : any){
    return this.http.post<any>("http://192.168.0.121:8000/signup",data)

  }
 
  getdata(data : any){
    return this.http.get<any>("http://192.168.0.121:8000/signup").pipe(
    map((resp : any) => {
      // console.log('getData',resp.find((i: any) => i.email === data.email && i.password === data.password) )
      return resp.find((i: any) =>
        i.email === data.email && i.password === data.password
       )
    })
    )
  }

  getGameList(
    ordering:string,
    search?: string

  ):Observable<APIResponse<Game>>{
    let params = new HttpParams().set('ordering',ordering);

    if(search){
      params =new HttpParams().set('ordering',ordering).set('search',search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`,{
      params :params ,
    })
  }
  showSuccess(message : string, title : string) {
    this.toastr.success(message,title);
  }

}
