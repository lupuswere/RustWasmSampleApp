# RustWasmSampleApp

This is a sample app for Rust/WASM integration.

This app integrates a Rust library "bcrypt" to hash a text, and compile to WASM, and invoke it from the web app.

## Structure

* The Rust project is under `hello-wasm`.
* The WASM project is compiled and uploaded to https://www.npmjs.com/package/@lilifei0409/hello-wasm.
* The web app is under `site`.

## Test

To run this app, download the repo and run:

```shell
$ npm run serve
```

And visit http://localhost:8080.
