import { Component } from '@angular/core';
import { playerSchema } from '../player.model';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  player:playerSchema={}

  constructor(private api:ApiService,private router:Router){}


  addplayers() {

    const {id,name,image,nationality,age,description}=this.player

    if (!id || !name || !image || !nationality || !age || !description) {
      alert("Please fill the form Completely")
      
    } else {
      this.api.addPlayers(this.player).subscribe({
        next: (res: any) => {
          // console.log(res);
          
          this.router.navigateByUrl("")
          
        },
        error: (err: any) => {
          console.log(err);
          
        }
      })
    }

    
    
  }

  cancel() {
    this.player={}
  }

}
