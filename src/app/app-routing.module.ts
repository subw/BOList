import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractiveListComponent } from './interactive-list/interactive-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/interactiveList', pathMatch: 'full' },
  { path: 'interactiveList', component: InteractiveListComponent }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
