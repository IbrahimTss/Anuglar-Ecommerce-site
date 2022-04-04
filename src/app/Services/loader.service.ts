import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService implements OnInit{


  constructor() { }
  ngOnInit(): void {
    
  }
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

}