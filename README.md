# React Firebase Notas
You can create a note with a nickname and publish in a timeline. Application made with ReactJS and Firebase.

![react_v16.8.1](https://img.shields.io/badge/react-v16.8.1-blue.svg)
![react-scripts_v2.1.5](https://img.shields.io/badge/react--scripts-v2.1.5-yellowgreen.svg)
![firebase_v5.8.3](https://img.shields.io/badge/firebase-v5.8.3-ff9800.svg)
![@material-ui/core_v3.9.2](https://img.shields.io/badge/%40material--ui%2Fcore-v3.9.2-2196f3.svg)
![date-and-time_v0.6.3](https://img.shields.io/badge/date--and--time-v0.6.3-lightgrey.svg)

## Installation

```bash
$ npm install
```
```bash
$ npm start
```

### Local projects

It is mandatory for local installation to have a Firebase account, and create the file /src/config/config.js with the next structure:

```javascript
export const DB_CONFIG = {
    apiKey: "xxxxxxxxxx_xxxxx",
    authDomain: "xxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxx.firebaseio.com",
    projectId: "xxxxxxxxxxx",
    storageBucket: "xxxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxx"
};
```
> Note: Firebase provides the DB_CONFIG credentials

## Global access

[https://ingportonotas.now.sh/](https://ingportonotas.now.sh/)


## Preview
###### Desktop - Mobile (with nickname access) - Mobile (adding a new note)
![screenshot](./public/img/screenshot.png)


## Modules

* `react-scripts` scripts and configuration used by create-react-app 
* `firebase` client of firebase web 
* `@material-ui/core` material design framework
* `date-and-time` set format to dates

#### Note
> In a future, to change `date-and-time` for `date-fns`, it's more light
