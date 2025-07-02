import {defineConfig} from "tsup"


export default defineConfig({
    entry:["./src/index.ts"],
    outDir: "./dist",
    format:["esm","cjs"],
    dts: true,
    legacyOutput: true,
    splitting: false,
    target: "es6",
    minify:true,
    shims: true,
    external:["react","react-dom","@types/react","@types/react-dom"]
})