/* Import Injectable module from Angular 2 */
 
import {Injectable} from "angular2/core"
 
/* Create and export TaskService class */
 
@Injectable()
export class TaskService{
 
	/* create empty tasks property */
	private tasks = []
 
	addTask(task){
		this.tasks.push(task)
	}
 
	deleteTask(taskIndex){
 
		delete(this.tasks[taskIndex])
	}
 
	getTasks(){
		return this.tasks;
	}
 
}