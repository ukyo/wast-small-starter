fetch("wast/module.wasm").then(res => res.arrayBuffer()).then(buffer => {
  let wasmModule = Wasm.instantiateModule(new Uint8Array(buffer), {});
  console.log(wasmModule.exports.add(1, 2));
});
