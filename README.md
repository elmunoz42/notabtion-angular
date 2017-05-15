# Notabtion

Notabtion (tm) is a music notation that allows users to write music into the form, save it and have it display with scrolling animation. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Planning

|Status| Objective | Approach |
|DONE | Create measure input form. | Create a form with inputs for all strings and measure timings. |
|DONE | Scrolling representation of saved two measure input. | Use a table and move the saved input with setInterval set at a hard coded time. |
|TODO | Allow for chaining measures together to create a longer part of a song.| Create an object called section that has an array of measures.|
|TODO | Chain sections together into a full song. | Create a song object that has an array of the different sections, an array called form that has the desired order of the sections, a name and a tempo (beats per minute). |
|TODO | Add sound playback for notes. | When a note is not empty the matching note from the sampled files should be produced. |
|TODO | Add a count off at start of song. | Append four click count off section to beginning of song form.|

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
