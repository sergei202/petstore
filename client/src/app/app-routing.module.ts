import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }		from './home/home.component';
import { DummyListComponent }	from './dummies/dummy-list/dummy-list.component';
import { DummyDetailComponent }	from './dummies/dummy-detail/dummy-detail.component';

const routes:Routes = [
	{path:'home',			component:HomeComponent},
	{path:'dummies',		component:DummyListComponent},
	{path:'dummies/:id',	component:DummyDetailComponent},
	{path: '**',			redirectTo:'/home'}						// Redirect anything not found to /home
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
