# Notabtion

_Notabtion (tm) is a music notation app that allows users to write music, save it and have it display with scrolling animation. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0._

## Planning

|Status| Objective | Approach |
|------|-----------|----------|
|DONE | 1) Create measure input form. | Create a form with inputs for all strings and measure timings. |
|DONE | 2) Scrolling representation of saved two measure input. | Use a table and move the saved input with setInterval set at a hard coded time. |
|PARTIAL | 3) Allow for chaining measures together to create a longer part of a song.| a) Create an object called section that has an array of measures. b) Create a function that pushes the newly created measures to end of the given section. |
|DONE | 4) Chain sections together into a full song. | Create a song object that has an array of the different sections, an array called form that has the desired order of the sections, a name and a tempo (beats per minute). |
|PARTIAL | 5) Create a user interface for creating Notabtion. | a) You first click on the button to create a Notabtion song, which prompts a form to input information. b) Click on a button to add section, which prompts form to add name of section. c) Click on a button to add a measure, which prompts form to add notes of measure. d) Click on button to create song form, which prompts form to create form with dropdown of existing sections. |
|DONE | 6) Add sound playback for notes. | When a note is not empty the matching note from the sampled files should be produced. |
|DONE | 7) Add a count off at start of song. | Append four click count off section to beginning of song form.|
|Partial| 7b) Add accompaniment track. | Add another audio element for an 80 bpm beat. TODO will need to be expanded to include other tempos and styles.|
|TODO | 8) User interface improvements. | a) Create a more zoomed out display that allows us to see more information at once. b)
|TODO | 9) Refactor measure input form to dry up code. | Use property binding and for loops. |
|Wishlist | 10) Create touchscreen interface and functionality for playing notes along with Notabtion. | Create a grid of buttons to be pressed. |
|Wishlist | 11) Match notes played by the user and song and give a resulting rating. | a) Create a function that matches for the notes pitch an timing. b) Display the results with a number counter system. |

## Installing project

* clone project from github repository https://github.com/elmunoz42/notabtion-angular.git
* in terminal  > project directory > run `npm install`.
* `npm list -g` bower to check that bower version is 1.8.0 or later.
* if above is true run `bower init` otherwise `bower install`.
* in _terminal  > project directory >_ run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Support and contact details

_617-780-8362_

## Technologies Used

* _Angular-Cli_
* _Bower_
* _TypeScript_

### License

*MIT*

Copyright (c) 2017 **_Carlos Munoz Kampff_**

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
