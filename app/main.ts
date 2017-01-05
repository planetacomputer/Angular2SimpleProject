/* importing bootstrap component from angular library */

import {bootstrap} from 'angular2/platform/browser';

/* Importing AppComponent created in app.component.ts file */
import {TaskListComponent} from './taskList.component';

/* Bootstrapping AppComponent */
bootstrap(TaskListComponent);