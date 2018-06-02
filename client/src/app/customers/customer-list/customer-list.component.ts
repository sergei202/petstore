import { Component }	from '@angular/core';
import { Router }		from '@angular/router';
import { ApiService }	from '../../api.service';

@Component({
	selector: 'app-customer-list',
	templateUrl: './customer-list.component.html',
	styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
	customers:any;
	constructor(private api:ApiService, private router:Router) {
		this.api.getCustomers().then(customers => {
			console.log('getCustomers()  customers=%o', customers);
			this.customers = customers;
		});

	}

	openDetail(customer) {
		this.router.navigate(['/customers', customer._id]);
	}
}
