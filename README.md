# UX Intern Onboarding Project: Collin Cahill

## Description
A UX project to get me up to speed on necessary skills and technologies I will be using on the UX team.

## How to Use
### Setup MongoDB
For this step, you must have [MongoDB] installed on your computer, along with the `mongod` shell command.
In the project's root folder, run `mongod --dbpath ./src/data/db`.

A binary backup of the user database used for this project is stored in `/src/data/backup`, with a raw JSON export of the `users` collection stored in `/src/data/users.json`. To recreate the architecture used by the application, run `mongorestore ./src/data/backup/`. The `mongorestore` command takes a directory as an input.

When you've finished, shut down the Mongo Daemon.

### Run the Project
With the database set up, you can now run the project! Just run the `gulp` command and the project will go live on [port 8000](http://localhost:8000).


## Dependencies
- [Polymer](https://www.polymer-project.org/)
- [Web Components](https://www.webcomponents.org/):
	- [iron-list](https://www.webcomponents.org/element/PolymerElements/iron-list):
		Iterates through an array of data and outputs parsed HTML. The main view, User List, utilizes this
	- [iron-ajax](https://www.webcomponents.org/element/PolymerElements/iron-ajax):
		Used for API calls to get information.
	- [iron-pages](https://www.webcomponents.org/element/PolymerElements/iron-pages):
		Loads the different views within the app.
	- [iron-selector](https://www.webcomponents.org/element/PolymerElements/iron-selector):
		Allows the user to select a view from a series of options.
		Wraps the navigation of the app.
	- [app-route](https://www.webcomponents.org/element/PolymerElements/app-route):
		Front-end modular routing.
		Cannot load any routes unless navigated from homepage.
		(Polymer's CLI runs an Express server to fix this, and we will run one for the same purpose)

	- [Web Component Tester](https://github.com/Polymer/web-component-tester)
	- [webcomponents.js](https://github.com/webcomponents/webcomponentsjs)
		A polyfill for the web components APIs.
- [MongoDB](https://www.mongodb.com/lp/download/mongodb-enterprise):
	To store user data.
- [express.js](https://expressjs.com/):
	For backend routing and the MongoDB interface.
- [mongodb (npm package)](https://www.npmjs.com/package/mongodb)
- [Gulp](http://gulpjs.com/)
  - [gulp-connect](https://www.npmjs.com/package/gulp-connect)
  - [gulp-help](https://www.npmjs.com/package/gulp-help)
  - [gulp-sass](https://www.npmjs.com/package/gulp-sass)
  - [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)
- [JSHint](http://jshint.com/)
  - [jshint-stylish](https://www.npmjs.com/package/jshint-stylish)
- [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro)

## Notes
### Unit 2
- I added a viewport meta attribute to the head of each page. This is something I've learned using Google's Page Insights that has helped my responsive pages load better on mobile.
- All pages are dummy pages. No functionality, just markup and styling. Submit buttons don't work.
  #### Standards Implemented
    - declare a lang attribute in the root element
    - declare a charset meta attribute in the head tag
    - follow semantic markup on each page
    - data stored in tables
    - accessibility measures for submission forms

### Unit 3
Unit 3 is where the project will diverge a bit from its previous iteration. Because I intend to implement Polymer for the project instead of Angular, the composition of the project is different (i.e., there is a bower_components folder).
- Because of this, my .gitignore also ignores bower_components.
  #### Standards Implemented
  - Polymer dependency
  - Dev dependencies
  - Gulpfile with LiveReload
  #### Struggles
  - Since we no longer use Angular, I wanted to install Polymer as a dependency instead of Angular. This came with a host of complications. I spent a lot of time trying to find a package on npm or even Yarn that would work, but I ended up just installing the Bower package.
    - Update: Bower package has been deleted and replaced with a Banno distribution of Polymer 2.

### Unit 4
This is mostly a learning ramp for JS. Adding controls and behaviors for the page and then implementing JSHint on the developer side.
  #### Standards Implemented
  - Granular functions that each do one thing
  - Careful function and variable naming
  - Pure CSS control button
  - Used JS Prototypes for object-oriented interactions
  - JS linting using JSHint in Gulp

  #### Struggles
  - Tried document.getElement_______ but found that it wasn't versatile enough for my purposes. Decided to do away with the compatibility and just use querySelector.

### Unit 5
This unit is setup for the main portion of the project. It is mostly standards things.
  #### Standards Implemented
  - Matches example file structure used in Angular projects
  - Uses EditorConfig to enforce code conventions.

### Unit 6
I have had to make many changes.
	#### Project Modifications
	- No Angular dependencies.
