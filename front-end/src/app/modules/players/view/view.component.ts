import { Component, OnInit } from '@angular/core';
import { EditComponent } from '../edit/edit.component';
import { playerSchema } from '../player.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  player:playerSchema={}

  constructor(private route:ActivatedRoute,private api:ApiService) {
    

    
  }
  ngOnInit(): void {

    this.getplayer()
    
  }

  getplayer() {

    this.route.params.subscribe({
      next: (res: any) => {
        const { id } = res

        this.api.getExistingPlayers(id).subscribe({
          next: (res: any) => {
            console.log(res);
            this.player=res
        
            
          },
          error: (err: any) => {
            console.log(err);
            
          }
        })
        
      }
    })
    
  }


  

}
