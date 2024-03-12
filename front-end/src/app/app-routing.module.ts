import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { LegendsComponent } from './legends/legends.component';
import { TrophiesComponent } from './trophies/trophies.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path:"",component:HomeComponent
  },
  {
  path:"events",component:EventsComponent
},
  {
    path: "legends",
    component:LegendsComponent
  },
  {
    path: "trophies",
    component:TrophiesComponent
  },

  { path: 'players', loadChildren: () => import('./modules/players/players.module').then(m => m.PlayersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
