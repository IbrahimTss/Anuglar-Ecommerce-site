import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, Game } from 'src/app/modules/modules.module';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  public sort!: string;
  public games :Array<Game> | undefined;

  constructor(private appService : AppService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params :Params)=>{
      if(params['game-search']){
        this.searchGames('metacrit',params['game-search']);
      }else{
        this.searchGames('metacrit');
      }
    })
  }
  searchGames(sort :string,search?:string):void{
    this.appService
    .getGameList(sort,search)
    .subscribe((gameList : APIResponse<Game>)=>{
      this.games = gameList.results;
      console.log(gameList)
    })
  } 

}
