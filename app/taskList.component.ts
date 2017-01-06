/* Import Component module from angular library */
 
import {Component} from 'angular2/core'

/* Import service */
import {TaskService} from './task.service'
/* import OnInit */
import {OnInit} from 'angular2/core'
 
@Component ({
	selector: 'task-list',
	templateUrl: 'app/task-list.html',
	providers: [TaskService]
})
 

/* create TaskList class */
/* Export TaskList Class */ 
export class TaskListComponent implements OnInit{
	private tasks
	private taskTitle = ''
 
	constructor(private taskService:TaskService){
		this.tasks = []
	}

	ngOnInit(){
		this.tasks = this.taskService.getTasks()
	}
 
	addTask(taskTitle){
		if(taskTitle !='' && taskTitle){
			this.taskService.addTask(taskTitle)
		}
		this.taskTitle = ''
	}
	deleteTask(taskIndex){
		this.taskService.deleteTask(taskIndex);
	}
}