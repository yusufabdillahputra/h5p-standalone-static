# H5P Standalone

## Installation

Use the [node package manager](https://www.npmjs.com/) to install app. please install pm2 local or global
```bash
npm install
```

Build app.
```bash
npm run build
```

Start app.
```bash
npm start
```

## Environment variables

<details>
<summary>Define application name</summary>

```
APP_NAME=<Your Name App>
```
</details>

<details>
<summary>Set Port for PM2</summary>

```
APP_PORT=<Your Port App>
```
</details>

## Workspace H5P

* Download file .h5p
* Convert to zip
* Extract to this path
```bash
/src/workspace/<Workspace Folder>/<Workspace File>...
```
* Don't forget to build and run again.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)



