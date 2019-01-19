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

Run this if you want to install the docker-ce on Ubuntu 18.04, That's the version I'm using:

sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic test"
sudo apt update
sudo apt install docker-ce

If you want to run in Docker, use 

`docker-compose up --build`

Navigate to `http://localhost:4001/`. The app will automatically reload if you change any of the source files.

If you get a problem with Python

That's the path in my case /usr/lib/python3.6

apt-get update     
apt-get install python3.6 - My version    
ln -s /usr/lib/python3.6 /usr/lib/python 

In the ~/.bashrc

export PYTHONPATH=$PYTHONPATH:/usr/lib
export PATH=$PATH:/usr/lib

Use them together, for example to clean up all your docker images and containers:

docker images -a

kill all running containers with docker kill $(docker ps -q)
delete all stopped containers with docker rm $(docker ps -a -q)
delete all images with docker rmi $(docker images -q)
remove all volumes docker system prune --volumes

If this does not work try restarting docker service

$ sudo service docker restart

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
