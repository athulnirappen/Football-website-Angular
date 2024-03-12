import { Component, OnInit } from '@angular/core';
import { playerSchema } from '../player.model';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  player:playerSchema={}

  constructor(private route:ActivatedRoute,private api:ApiService ,private router:Router){}


  ngOnInit(): void {
   
    this.getexistingplayers(this.player.id)
   
 }

  getexistingplayers(id:any) {
    this.route.params.subscribe({
      next: (res: any) => {
        console.log(res);

        const { id } = res
        console.log(id);

        this.api.getExistingPlayers(id).subscribe({
          next:(res:any)=>{
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


  updateplayer() {
    this.api.updatePlayers(this.player.id, this.player).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.router.navigateByUrl("")
        
      },
      error: (err: any) => {
        console.log(err);
        
      }
    })
    
  }

  cancelUpdate(id: any) {
    this.getexistingplayers(id)
  }

 

}
