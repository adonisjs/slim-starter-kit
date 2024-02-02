# AdonisJS Slim Starter Kit

This repo contains the smallest possible AdonisJS application with the framework core and the Japa test runner. You can clone this repo to start from a clean state and configure new packages as needed.

## What's included

- TypeScript setup with commands to run the development server using `ts-node + swc` and create a production build.
- ESLint and Prettier setup extending the [AdonisJS tooling config](https://github.com/adonisjs/tooling-config) presets.
- Ace command line framework
- Everything else you get with the core of AdonisJS.

## Usage

By executing the following command, you can create a new app using the `slim` starter kit. The command will perform the following steps.

- Download the repo
- Install dependencies
- Copy `.env.example` to `.env`
- Set the app key using the `node ace generate:key` command.

```sh
npm init adonisjs@latest hello-world -- -K=slim
```
