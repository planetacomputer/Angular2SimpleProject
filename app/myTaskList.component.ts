/* Import Component module from angular library */
 
import {Component} from 'angular2/core'
 
 
/* create  MyTaskList class decorator */
/* define selector */
/* define HTML for template */
@Component ({
	selector: 'my-task-list',
	template: `<ul>
					<li>Task one</li>
					<li>Task two</li>
					<li>Task three</li>
				</ul>`,
})
 
/* create MyTaskList class */
/* Export MyTaskList Class */
 
export class MyTaskListComponent{
 
}