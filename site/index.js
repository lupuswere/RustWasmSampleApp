const js = import("./node_modules/@lilifei0409/hello-wasm/hello_wasm.js");
js.then(js => {
    alert(js.add(42, 42));
    js.greet("WebAssembly");
});


