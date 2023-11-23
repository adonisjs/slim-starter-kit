/*
|--------------------------------------------------------------------------
| JavaScript entrypoint for running ace commands
|--------------------------------------------------------------------------
|
| Since, we cannot run TypeScript source code using "node" binary, we need
| a JavaScript entrypoint to run ace commands.
|
| This file runs "bin/console.ts" file as a child process and uses "ts-node/esm"
| loader to run TypeScript code.
|
| Executing this file is same as running the following command.
| "node --loader=ts-node/esm bin/console.js"
|
*/

/**
 * Register hook to process TypeScript files using ts-node
 */
import { register } from 'node:module'
register('ts-node/esm', import.meta.url)

/**
 * Import ace console entrypoint
 */
await import('./bin/console.js')
