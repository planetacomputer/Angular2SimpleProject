/* Import Component module from angular library */
 
import {Component} from 'angular2/core'
 
 
/* create  TaskList class decorator */
/* define selector */
/* define HTML for template */
/* print heading variable inside template */
@Component ({
	selector: 'task-list',
	template: '<h1>{{heading1}}</h1> <h2>{{heading2}}</h2> <h3>{{heading3}}</h3>'
})
 
 
 
export class TaskListComponent{
 
	/* define heading variables */
 
	private heading1
	protected heading2
	public heading3
 
	constructor(){
 
		this.heading1 = "Task List heading 1"
		this.heading2 = "Task List heading 2"
		this.heading3 = "Task List heading 3"
	}
}