# Appalachian Animal Preserve - Animal Tracking Panel

#### _A web-based management panel for a local animal preserve, Current Version: 05-05-2017_

#### By _**John Carr**_

## Description
Appalachian Animal Preserve is a fictional wildlife refuge for the wide range of flora and fauna native to the state of West Virginia and surrounds. The Animal Tracking Panel is an application for caretakers to record and view details of animals found within the preserve. Users will be able to log newly-admitted animals, view animals and animal details, and edit animal details. Additionally, users will be able to filter animals based on age.

This software is offered as a replacement to other animal tracking systems. And its free!

## Setup / Installation Requirements

### Prerequisites

You will need the following things properly installed on your computer:

* [Git](https://git-scm.com/)
* [Bower](https://bower.io/)

### Installation

* `git clone <repository-url>` this repository
* `cd animal-preserve`
* `npm install`
* `bower install`

### Running / Development

* `gulp build`
* `gulp serve`
* Visit your app at [http://localhost:3000](http://localhost:3000).

## Planning

  * Configuration / Dependencies
    * ~~NPM - npm install~~
    * ~~Angular Project Directory Setup~~
  * Specs - Users should be able to:
    * Add newly-admitted animals by submitting a form with animal:
      * name
      * species
      * age
      * sex
      * diet
      * likes
      * dislikes
      * caretakers
      * location
    * View a list of all animals
    * Edit specific animal details
    * Filter animals based on age:
      * All
      * Young (less than 2 years)
      * Mature (more than 2 years)
  * Integration
    * Entry Point
      * ~~main.ts~~
    * Modules
      * ~~Root~~
    * Components
      * ~~Root~~
      * Animal-List
      * New-Animal
      * Edit-Animal
    * Pipes
      * Animal-Age
    * UX/UI
      * Utilize bootstrap to quickly divide and style application content
      * Custom styling
    * Polish
      * Review and refactor as necessary
      * Remove unused code, logs, and comments
      * Finalize README
  * Additional Features
    * Integration of service provider for accessing animal data (allows for data to be easily shared across multiple components and separates data source details from application functionality)
    * Filtering on additional animal details through pipes:
      * animal-diet - filter based on all, carnivores, omnivores, "meat-eaters" (carnivores AND omnivores) to simplify the food preparation process performed by caretakers
    * Calculate and display the total number of caretakers needed
    * Timestamp property added to animal record, generated on submission of new animal form

## Technologies Used
* _HTML_
* _Javascript_
* _Typescript_
* _Angular_
* _Bootstrap_
* _CSS_

## Support and contact details
Questions? Concerns? Suggestions?

Reach out to me via github:
<http://github.com/coderknot>

## License

MIT License

__Copyright (c) 2017 John Carr__

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
