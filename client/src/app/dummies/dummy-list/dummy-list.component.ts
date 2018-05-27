import { Component }	from '@angular/core';
import { Router }		from '@angular/router';
import { ApiService }	from '../../api.service';

@Component({
	selector: 'app-dummy-list',
	templateUrl: './dummy-list.component.html',
	styleUrls: ['./dummy-list.component.scss']
})
export class DummyListComponent {
	dummies:any;

	constructor(private api:ApiService, private router:Router) {
		this.api.getDummies().then(dummies => this.dummies = dummies);
	}

	openDetail(dummy) {
		this.router.navigate(['/dummies', dummy._id]);
	}

}
