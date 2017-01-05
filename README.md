# Angular2 Simple Project


The simplest way to create an Angular2 project, no need of bower or gulp config files. Just node and npm required. With them install:
  - sudo npm install -g concurrently
  - sudo npm install -g lite-server
  - sudo npm install -g typescript
 
Installing the project:
  - git clone https://github.com/planetacomputer/Angular2SimpleProject.git
  - npm install
  - npm start


# AngularJS 2 Getting Started. Hello world Application

**Getting Started with AngularJS 2, First Application Hello World:** In this article we are going to discuss how to create AngularJS 2 application development environment, how to develop (create) first application (Hello World Application) and how to run AngularJS 2 application.

AngularJS 2 application can be develop (created) in TypeScript, JavaScript and Dart. We are going to develop our application in TypeScript.

So let's getting started.

## What is AngularJS 2

AngularJS 2 is mobile application, web application development framework. It can also be used for desktop application development. AngularJS 2 framework is module base. In order to use any module or component in your application you first needs to import it.

## AngularJS 2 Application File Structure

Here is basic file structure of AngularJS 2 application.


![AngularJS 2 File Strucute][1]


It have one HTML file (index.html) and Two TypeScript file in app directory (app.component.ts, main.ts).

## AngularJS 2 Development Environment.

Following is the step by step process to create development environment for AngularJS 2 application.

* Install node js and npm
* Create an application project folder
* Add a tsconfig.json to guide the TypeScript compiler
* Add a typings.json that identifies missing TypeScript definition files
* Add a package.json file that defines the packages and scripts we need
* Install the npm packages and typings files

### Install node js and npm

On Linux and mac you can install node js and npm following way.

Installing node js (Run following command in terminal window)

`sudo apt-get update  
sudo apt-get install nodejs`

Installing npm (Run following command in terminal window)

`sudo apt-get install npm`

For Windows you can download window installer from node js website and run it on your machine.

You can get more information about node js and npm installation from there. [Installing Node.js via package manager][2]

### Create an application project folder

Let's now create a folder/directory for our AngularJS 2 application (Run following command in terminal window).

`mkdir angularjs2-app  
cd angularjs2-app`

> ### AngularJS 2 application runs on server. So make sure you have created directory in server www directory

### Add a tsconfig.json

Add a tsconfig.json file in your application folder/directory. Copy and paste following content in your tsconfig.json file.


### Add a typings.json file

Add a typings.json file in your application folder/directory. Copy and paste following content in your typings.json file.


### Add a package.json file

Add a package.json file in your application folder/directory. Copy and paste following content in your package.json file.



### Install the npm packages and typings files

Install all the packages included in package.json file, run following command in terminal window. (for windows on command line)

`npm install`

In order to get npm install and running for me, I have globally installed some of the devDependencies (Run following commands in terminal window)  
`sudo npm install -g concurrently  
sudo npm install -g lite-server  
sudo npm install -g typescript`

Now we have created the development environment for our AngularJS 2 application.

Now let's start by developing (creating) Hello World application.

## AngularJS 2 application

Now we create an app folder/directory in our project. app directory will hold our AngularJS 2 application.

Let's create app directory and make it our current directory.

`mkdir app  
cd app`

Every AngularJS 2 application consist of one or many components. These components are building blocks of AngularJS 2 application. Every component controls a portion of application using template.

Every AngularJS 2 application must have one root component, usually named as AppComponent.

AppComponent is a component class. There are two purposes of component class.

* Control appearance of view
* Control behavior of view

Component class control behavior and appearance of view through template. Component class can have component decorator.

There are two purpose of component decorator

* It tells the AngularJS framework what template to use
* It tells the AngularJS framework how component will be created.

> In order to use the component decorator in our application we needs to import component decorator function from angular2/core

**Create app.component.ts**

So now let's create AppComponent for our AngularJS 2 application in app.component.ts file


Our Component decorator have two elements(fields) selector and template.

we have assigned AppComponent name to selector field. We can use that AppComponent name in HTML. Whenever we use that AppComponent name (learning-turn) in HTML, AngularJS creates a AppComponent instance and displayed it in HTML.

> AppComponent slector is CSS selector not HTML tag

We have assigned AppComponent template to template field. It tell the AngularJS how to render the AppComponent view. Template field can have HTML and other components

we have exported AppComponent so we can import it some where else in our application.

Our AppComponent is now to ready in order to use it in our application.

**Create main.ts file**

Now create main.ts file in app directory

Following are the purpose of main.ts file

* main.ts is entry point(like main function) of our AngularJS 2 application.
* In main.ts we tells the Angular how to load our AngularJS 2 application.
* In main.ts we tells the Angular in which platform we want to run our AngularJS 2 application (We are going to run our application in browser).
* In main.ts we specify external dependencies of our AngularJS 2 application.

**create index.html**

Now create index.html file in your root directory of project

index.html will load our application in browser. In index.html we load required scripts(libraries), define system configuration and define application component selector.

When AngularJS framework calls bootstrap function in app/main.ts file, AngularJS prepare AppComponent, find AppComponent selector (learning-turn), locate AppComponent selector assigned CSS selector (learning-turn) in index.html and load application between that it.

**Create style.css**

Style is not manadotry for AngularJS 2 application. Its purpose is to apply CSS style to HTML element.


** Compile and Run**

Now open your terminal window and run following compand

`npm start`

After a few moment a browser window (tab) will be open and display following results.

![AngularJS 2 Getting Started. Hello world Application][3]Congratulation we have successfully created our first AngularJS 2 Hello World application.

## Conclusion

In this article we have learn What is AngularJS 2, how to create development environment for AngularJS 2 application, how to create AngularJS 2 project and Hello World application.  