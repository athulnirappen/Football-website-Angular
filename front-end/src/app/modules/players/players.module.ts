import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlayersComponent,
    AddComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    FormsModule
  ]
})
export class PlayersModule { }
