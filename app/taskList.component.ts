/* Import Component module from angular library */
 
import {Component} from 'angular2/core'
 
 
@Component ({
	selector: 'task-list',
	template: '<h1>{{heading}}</h1> <br/>Type Heading: <input type="text" [(ngModel)]="heading">',
	styles: [`
				h1 {
					font-size: 20px;
					padding: 10px 5px;
					color: #fff;
					background: #000
				}
			`]
})
 
 
export class TaskListComponent{
 
	/* define heading variables */
 
	private heading
 
	constructor(){
 
		this.heading;
	}
 
}