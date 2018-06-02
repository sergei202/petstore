import { BrowserModule }			from '@angular/platform-browser';
import { HttpClientModule }			from '@angular/common/http';
import { FormsModule }				from '@angular/forms';
import { NgModule }					from '@angular/core';

import { AppRoutingModule }			from './app-routing.module';
import { AppComponent }				from './app.component';

import { SidenavComponent }			from './sidenav/sidenav.component';
import { HomeComponent }			from './home/home.component';
import { DummyListComponent }		from './dummies/dummy-list/dummy-list.component';
import { DummyDetailComponent }		from './dummies/dummy-detail/dummy-detail.component';
import { AnimalListComponent }		from './animals/animal-list/animal-list.component';
import { AnimalDetailComponent }	from './animals/animal-detail/animal-detail.component';
import { CustomerListComponent }	from './customers/customer-list/customer-list.component';
import { CustomerDetailComponent }	from './customers/customer-detail/customer-detail.component';

@NgModule({
	declarations: [
		AppComponent,
		SidenavComponent,
		HomeComponent,
		DummyListComponent,
		DummyDetailComponent,
		AnimalListComponent,
		AnimalDetailComponent,
		CustomerListComponent,
		CustomerDetailComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
