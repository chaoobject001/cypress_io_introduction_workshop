# cypress_io_introduction_workshop

code for Cypress.io workshop

Be sure to have Node and git installed.

clone this repository with 
```
git clone https://github.com/joeeames/cypress_io_introduction_workshop.git
```
Then install with
``` 
npm install
```

Also install json-server globally with
```
npm install -g json-server
```
Require following console commands before start running / developing tests:
```
1. npm run server
2. npm start
3. npx cypress open
```

To run Cypress on different environment on command line, run following command on terminal: 
```
export CYPRESS_host=HostURL
```
where variable 'host' is linked to property host in cypress.env.json
and HostURL can be any environment domain specified like "http://domain.local.dev" 

