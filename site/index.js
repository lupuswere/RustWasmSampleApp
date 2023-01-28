const js = import("./node_modules/@lilifei0409/hello-wasm/hello_wasm.js");
js.then(js => {
    js.greet("WebAssembly");
});