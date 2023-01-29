extern crate wasm_bindgen;
extern crate bcrypt;

use wasm_bindgen::prelude::*;
use bcrypt::hash;

// Test function to echo back message
#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

// Test function for the bridge
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name))
}

// Test function for the bridge that returns value
#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    return a + b;
}

#[wasm_bindgen]
pub fn encrypt(text: String) -> String {
    return hash(text, 15).expect("Something went wrong in encryption");
}
