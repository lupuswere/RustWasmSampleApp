const helloWasm = import("./node_modules/@lilifei0409/hello-wasm/hello_wasm.js");
helloWasm.then(helloWasm => {
    // alert(helloWasm.add(42, 42));
    // helloWasm.greet("WebAssembly");
    document.getElementById("hash").addEventListener("click", function () {
        let password = document.getElementById("inputPassword2").value;
        let hash = helloWasm.encrypt(password);
        let message = `Password ${password} hash value ${hash}`;
        alert(message);
    });
});


