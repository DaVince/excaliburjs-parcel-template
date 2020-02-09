# Excalibur Parcel+Typescript template

An [Excalibur](https://excaliburjs.com/) template project for use with the [Parcel](https://parceljs.org/) bundler.

Parcel bundles the application with zero configuration and provides a flexible development server.

Uses Excalibur 0.23.0 and includes the parcel-plugin-static-files-copy plugin, which will copy everything from the `src/assets` folder into your packaged version.

## Compiling the game

You will need Node.js and NPM installed.
The game uses Node 12.6.0 npm 6.9.0.

To compile:

    npm install
    npm build

A `dist` folder will be created, containing a compiled version of the game that can be run in the browser (from a web server)

## Running in dev mode

Run:

    npm dev

`npm start` is an alternative shorthand.

Then open a browser and navigate to [localhost:1234](localhost:1234).
