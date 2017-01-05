/* Import Component module from angular library */
 
import {Component} from 'angular2/core'
 
 
/* create  TaskList class decorator */
/* define selector */
/* define HTML for template */
/* print heading variable inside template */
@Component ({
	selector: 'task-list',
	template: '<h1>{{heading}}</h1> <br/>Type Heading: <input type="text" #headingInput><button (click)="changeHeading(headingInput.value)">Change Heading</button>'
})
 
export class TaskListComponent{
 
	/* define heading variables */
 
	private heading;
 
	constructor(){
		this.heading = "Task List";
	}

	/* define method changeHeading */
	/* Pass value to the method */
	/* Assign passed value to heading property */
	
	changeHeading(value){
		this.heading = value
	}
}