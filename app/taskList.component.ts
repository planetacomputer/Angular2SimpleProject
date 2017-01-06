/* Import Component module from angular library */
 
import {Component} from 'angular2/core'


/* Import MyTaskList */
import {MyTaskListComponent} from './myTaskList.component';
 
@Component ({
	selector: 'task-list',
	template: `<h1>{{heading}}</h1>
				<my-task-list></my-task-list>
				`,
	styles: [`
				h1 {
					font-size: 20px;
					padding: 10px 5px;
					color: #fff;
					background: #000FFF
				}
			`],
	directives: [MyTaskListComponent]
})
 
 
export class TaskListComponent{
 
	/* define heading variables */
 
	private heading;
 
	constructor(){
 
		this.heading = "Hello";
	}
 
}