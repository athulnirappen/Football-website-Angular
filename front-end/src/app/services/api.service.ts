import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { playerSchema } from '../modules/players/player.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

   base_url:string="http://localhost:8000"

  
  
  addPlayers(player:playerSchema) {

    return this.http.post(`${this.base_url}/players`,player)
    
    
  }

  getPlayers() {
    return this.http.get(`${this.base_url}/players`)
  }

  getExistingPlayers(id:any) {
    return this.http.get(`${this.base_url}/players/${id}`)
  }

  updatePlayers(id: any ,data: playerSchema) {
    return this.http.put(`${this.base_url}/players/${id}`,data)
  }

  deletePlayer(id: any) {
    return this.http.delete(`${this.base_url}/players/${id}`)
    
  }
  

}
