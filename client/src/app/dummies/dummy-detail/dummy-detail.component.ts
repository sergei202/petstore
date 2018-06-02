import { Component } 				from '@angular/core';
import { Router, ActivatedRoute }	from '@angular/router';
import { ApiService }				from '../../api.service';

@Component({
	selector: 'app-dummy-detail',
	templateUrl: './dummy-detail.component.html',
	styleUrls: ['./dummy-detail.component.scss']
})
export class DummyDetailComponent {
	dummy:any;

	constructor(private api:ApiService, private route:ActivatedRoute, private router:Router) {
		var id = this.route.snapshot.paramMap.get('id');
		// Get the passed id, if it equals 'new', don't try to load.
		if(id==='new') {
			console.log('Creating a new (blank) dummy');
			this.dummy = {};
		} else {
			this.load(id);
		}
	}

	load(id) {
		this.api.getDummy(id).then(dummy => {
			console.log('getDummy: %o', dummy);
			this.dummy = dummy;
		});
	}

	save() {
		this.api.saveDummy(this.dummy).then(dummy => {
			console.log('saveDummy: %o', dummy);
			// Redirect back to DummyList
			this.router.navigate(['/dummies']);
		});
	}

	delete() {
		console.log('DummyDetailComponent delete()');
		this.dummy.delete = true;
		this.api.saveDummy(this.dummy).then(dummy => {
			console.log('delete saveDummy: %o', dummy);
			// Redirect back to DummyList
			this.router.navigate(['/dummies']);
		});
	}
}
