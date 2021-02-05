## Different ways to build


1. To deploy client and server at the same time for ease of coding

```sh
$ root
cd server
npm run start:dev

cd ../client
npm run start:dev
```

2. To test deployment in dev-ready env
```sh
$ root
npm run build:dev
npm start
```

3. Deployment in prod-ready env
```sh
$ root
npm run build
npm start

**This will only work for heroku and not locally
```
