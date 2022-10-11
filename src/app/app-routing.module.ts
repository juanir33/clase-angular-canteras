import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { BoardComponent } from './components/board/board.component';

const routes: Routes = [{
  path:'', component: LandingComponent
},
{path: 'game', component: BoardComponent}]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
