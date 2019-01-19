# Angular-RestAPI-Contacts

Angular Example Rest API with CRUD for contacts running with Angular CLI and DOCKER

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

### Get a full fake REST API with zero coding in less than 30 seconds [json-server](https://github.com/typicode/json-server)

The json file is in the folder:

/src/assets/json

Install JSON Server

npm install -g json-server
Create a db.json file with some data

  "contacts": [
    {
      "id": 1,
      "contact_name": "Edson",
      "contact_email": "edson@br.com",
      "contact_phone": "666123123"
    },
    {
      "id": 2,
      "contact_name": "Steve",
      "contact_email": "steve@br.com",
      "contact_phone": "666123123"
    },
    {
      "id": 3,
      "contact_name": "Ann",
      "contact_email": "ann@br.com",
      "contact_phone": "666123123"
    }
  ]
}
example here:

https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d

Start JSON Server

json-server -p 6633 contacts.json

Now if you go to http://localhost:6633/contacts, you'll get

[
  {
    "id": 1,
    "contact_name": "Edson",
    "contact_email": "edson@br.com",
    "contact_phone": "666123123"
  },
  {
    "id": 2,
    "contact_name": "Steve",
    "contact_email": "steve@br.com",
    "contact_phone": "666123123"
  },
  {
    "id": 3,
    "contact_name": "Ann",
    "contact_email": "ann@br.com",
    "contact_phone": "666123123"
  }
]

Prerequisites

Install Node.js® and npm

node -v

npm -v

Install Angular cli

npm install -g @angular/cli

Install node packages

cd /go/to/app/directory having package.json

npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you want to run in Docker, use 

`docker-compose up --build`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a contaction build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
