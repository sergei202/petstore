import { Component } 				from '@angular/core';
import { Router, ActivatedRoute }	from '@angular/router';
import { ApiService }				from '../../api.service';

@Component({
	selector: 'app-animal-detail',
	templateUrl: './animal-detail.component.html',
	styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent {
	animal:any;
	types = ['Cat','Dog','Bird','Fish','Other'];
	owners = [];

	constructor(private api:ApiService, private route:ActivatedRoute, private router:Router) {
		var id = this.route.snapshot.paramMap.get('id');
		// Get the passed id, if it equals 'new', don't try to load.
		if(id==='new') {
			console.log('Creating a new (blank) animal');
			this.animal = {};
		} else {
			this.load(id);
		}

		this.api.getCustomers().then(owners => this.owners=owners);
	}

	load(id) {
		this.api.getAnimal(id).then(animal => {
			console.log('getAnimal: %o', animal);
			this.animal = animal;
		});
	}

	save() {
		this.api.saveAnimal(this.animal).then(animal => {
			console.log('saveAnimal: %o', animal);
			// Redirect back to AnimalList
			this.router.navigate(['/animals']);
		});
	}

	delete() {
		console.log('AnimalDetailComponent delete()');
		this.animal.delete = true;
		this.api.saveAnimal(this.animal).then(animal => {
			console.log('delete saveAnimal: %o', animal);
			// Redirect back to AnimalList
			this.router.navigate(['/animals']);
		});
	}
}
