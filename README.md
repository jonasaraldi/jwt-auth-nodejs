# cms-auth
A CMS created with Node.js, JWT and MongoDB

## Setup

### Install dependencies
```shell
cd /server
npm i
npm i nodemon -g
```

### Run auth server
```shell
npm run server-auth
```

### Run resources server
```shell
npm run server
```

### Testing auth's requests
There's a file called `requests.rest` in the root of server folder that contains the auth's requests, for execute the requests you will need:
- Install the REST Client plugin in the VS Code
- After, access the file mencioned above and click in "Send Request" that will appear in the top of the each request
