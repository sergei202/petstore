import { Component } 				from '@angular/core';
import { Router, ActivatedRoute }	from '@angular/router';
import { ApiService }				from '../../api.service';

@Component({
	selector: 'app-customer-detail',
	templateUrl: './customer-detail.component.html',
	styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent {
	customer:any;

	constructor(private api:ApiService, private route:ActivatedRoute, private router:Router) {
		var id = this.route.snapshot.paramMap.get('id');
		// Get the passed id, if it equals 'new', don't try to load.
		if(id==='new') {
			console.log('Creating a new (blank) customer');
			this.customer = {};
		} else {
			this.load(id);
		}
	}

	load(id) {
		this.api.getCustomer(id).then(customer => {
			console.log('getCustomer: %o', customer);
			this.customer = customer;
		});
	}

	save() {
		this.api.saveCustomer(this.customer).then(customer => {
			console.log('saveCustomer: %o', customer);
			// Redirect back to CustomerList
			this.router.navigate(['/customers']);
		});
	}

	delete() {
		console.log('CustomerDetailComponent delete()');
		this.customer.delete = true;
		this.api.saveCustomer(this.customer).then(customer => {
			console.log('delete saveCustomer: %o', customer);
			// Redirect back to CustomerList
			this.router.navigate(['/customers']);
		});
	}

}
