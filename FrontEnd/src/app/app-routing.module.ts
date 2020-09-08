import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxComponent } from './components/box/box.component'
import { AddComponent } from './components/add/add.component'
import { EditDataComponent } from './components/edit-data/edit-data.component'
import { PagenotfoundComponent } from './components/errors/pagenotfound/pagenotfound.component';
import { ServerdownComponent } from './components/errors/serverdown/serverdown.component';
import { IdnotfoundComponent } from './components/errors/idnotfound/idnotfound.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const routes: Routes = [
  { path: '', component: BoxComponent},
  { path: 'add', component: AddComponent},
  { path: ':id/edit', component: EditDataComponent},
  { path: 'down', component:ServerdownComponent},
  { path: '404', component:IdnotfoundComponent},
  { path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
