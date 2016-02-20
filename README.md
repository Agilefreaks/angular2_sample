# Dependencies

 - Nodejs: download and install NodeJS form https://nodejs.org/en/  (upwards of version `5.5.0`)
 - npm: update`npm` using `npm install npm -g`
 - Git: download git from http://www.git-scm.com/download/win, make sure you choose `use git in windows cmd` in the options so that `git` is added to the system `PATH`  

-----------------------

# Setup

From VisualStudio 2015 and update 1: Build and Run

From Command Termial:

 - run `npm install`
 - run `dnvm upgrade`
 - run `dnu restore`

To run the client you can:

 - run either:
	- `npm start` to run the .net server hosting the app
	- `gulp serve` to serve files using npm with livereload for sass and ts files

### Tests

Command Terminal:

- navigate to the test project folder
- run either:
	- `gulp unit` to run all specs once
	- `gulp tdd` to run the specs with livereload

# Contributing

While working on the project:

- make sure to run available linting tools and make sure they pass on all of our own souce files.
  - for typescript this is done automatically when using gulp/npm.
  - for sass the gulp plugin is currently broken so this has to be done manually.
- make sure to use the `.editorconfig` file from the root of the solution using your preferred code editor.
  - For VisualStudio a plugin is available [here](https://visualstudiogallery.msdn.microsoft.com/c8bccfe2-650c-4b42-bc5c-845e21f96328)

### Environments:

You can set an evnironment variable (`NODE_ENV`) to indicate the way the application is compiled/buit
Supported environments are:

- `production` - currently uses the *staging api* and *minifies* js and css
- `staging` - uses the *staging api* and does *not minify* js and css
- `development` - uses the *local api* and does *not minify* js and css
- `test` - uses a *mocked api* and does *not minify* js and css