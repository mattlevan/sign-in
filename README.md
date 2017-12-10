# sign-in

> CSC 583 Final Project

## Non-functional Requirements

This project utilizes the [design and tools analysis](https://github.com/csudh/toro-net/wiki/non-functional-requirements)
 performed by the class earlier this semester to save time. Thus, a MEVN stack 
will be used for this final project.  

For testing, Jest will be used for unit testing technology. Detailed analysis
may be found 
[here](https://mo.github.io/2017/06/05/javascript-unit-testing.html). Jest is 
used by the Facebook team and that is plenty good enough for me. The syntax 
for writing "expects" tests is also intuitive and Jest is supported by the 
`vue-cli` tool used to instantiate this project, and thus it is already 
pre-configured and bundled.


## Installation

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### Testing

```bash
# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Architecture

The stack, from the bottom-up, includes:
- MongoDB (database)
- NodeJS (web server and execution environment)
- ExpressJS (API)
- VueJS (front-end)

Data is stored in the database according to defined data models, Express 
exposes a number of API endpoints to make data CRUD easy and _safe_ for the 
front-end, and VueJS is used for a reactive single-page application (SPA) 
which calls the API. Of course, NodeJS is the environment in which all of 
this is run and served.

## Plan

- [x] Non-functional analysis
- [x] Architecture design
- [x] Test deployment
- [x] Unit testing
