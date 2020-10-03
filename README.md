# Covid-19-Statistics

Covid-19-Statistics application to show global COVID-19 statistic and detail per country. Data consumed from https://covid19.mathdro.id/ API. This project using **Webpack** as a *local development server* and to *bundle* files that ready to deploy in production. **Webpack** bundle implementation is demonstrated in https://github.com/alramdein/covid-19-stats-live.

This project live on: https://alramdein.github.io/covid-19-stats-live

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install `covid-19-stats` dependencies.

```bash
npm install 
```
It will install all depencies from `package.json`

## Run
### Run in Webpack Development Server

```
npm run start-dev
```
Then open `http://localhost:8080/` on your browser. The `8080` port is a default port. If that port is already used by another application, Webpack will specify a new unused port in the terminal. 

### OR

### Run Build with Webpack
```
npm build
```
Build bundle will be stored in `dist` directory in root folder

## Contributing

I'm open for any contribution. When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Author

This project initiated by Alif Ramdani. Please kindly credit me if you want to use this project. Thanks
