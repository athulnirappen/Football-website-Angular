import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { playerSchema } from '../modules/players/player.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  searchKey:string=""
  allplayers: playerSchema[] = []
  
  

  constructor(private api:ApiService) {
    
  }
  ngOnInit(): void {
    this.getAllPlayers()
    
  }

  getAllPlayers() {
    this.api.getPlayers().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allplayers=res
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }


  deleteplayer(id:any) {
    this.api.deletePlayer(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getAllPlayers()
        
      },
      error: (err: any) => {
        console.log(err);
        
      }
    })
  }



}
