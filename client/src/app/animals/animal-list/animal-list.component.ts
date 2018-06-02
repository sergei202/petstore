import { Component }	from '@angular/core';
import { Router }		from '@angular/router';
import { ApiService }	from '../../api.service';

@Component({
	selector: 'app-animal-list',
	templateUrl: './animal-list.component.html',
	styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent {
	animals:any;

	totalAnimals = 0;
	totalAdopted = 0;
	totalNotAdopted = 0;

	totalDogs = 0;

	constructor(private api:ApiService, private router:Router) {
		this.api.getAnimals().then(animals => {
			console.log('getAnimals()  animals=%o', animals);
			this.animals = animals;

			this.totalAnimals = this.animals.length;

			// for(var i=0;i<this.animals.length;i++) {
			// 	if(this.animals[i].adopted) this.totalAdopted++;
			// }

			// this.animals.forEach(a => {if(a.adopted) this.totalAdopted++;});

			this.totalAdopted = this.animals.filter(a => a.adopted).length;

			this.totalDogs = this.animals.filter(a => a.type.toLowerCase()==='dog').length;
		});

	}

	openDetail(animal) {
		this.router.navigate(['/animals', animal._id]);
	}
}
