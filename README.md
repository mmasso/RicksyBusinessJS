# RicksyBusinessJS

For this quarter, we had to develop a project for the subject: Client Enviroment Development

The scope of this project is to take last year java exam and not translate, but code it into Javascript.

![Ricksy](https://vignette.wikia.nocookie.net/ricksanchez/images/4/4a/Ricksy_business.jpeg/revision/latest?cb=20160609030440 "Title")


## User Stories

Based on the plot of the chapter 11th [_"Ricksy Business"_](https://rickandmorty.fandom.com/wiki/Ricksy_Business "Ricksy business fandom page")" of Rick and Morty first season series.

Rick and Summer throw a party at home. Among the guests, there are teenagers, aliens, Gearhead, Squanchy, Birdpearson and Abradolf Lincler (a DNA mixture of Adolf Hitler and Abraham Lincoln).

When a guest enters the party he /she is processed in the receptive system that Rick has developed. The guest presents his /her credit card and the system charges:
 - The reservation cost of a UFO to safely return home when the party is over.
 - The cost of a welcome pack: Morty's favourite menus and Rick's favourite amenities.

Overall, user stories are defined on the main script, `main.js`.

## Architecture

The application logic code implements the following items:
- Testing with Jest
- Module management with npm
- Prototype delegation and OOLO (Objects linked to other Objects)
- Arrays and colections
- This, shadowing, scopes

## Testing

Test are written after the logic, logic has been changed not at all, as test were written one by one and tested, in a sort of TDD

**JEST** is used as a module to test our logic.

**Conventional commits** are preferred too.

## Installation

Clone this repo to your folder

```bash
$ cd "yourDesiredFolder"
$ git clone "https://github.com/mmasso/RicksyBusinessJS"
```
Then enter each module and src and install all depencies via npm:

``` bash
$ cd RicksyBusinessJS/src
$ npm install
```

``` bash
$ cd "forEachFolderInsideSRC"
$ npm install
```

## Usage

For testing:

``` bash
$ npm test
```

For testing individual modules:

``` bash
$ cd "DesiredModuleToTest"
$ npm test
```

### Run the main app:

To run the application
``` bash
$ npm start
```

Based on the github readme https://github.com/dfleta/grpc-tourism-receptive Made by dfleta