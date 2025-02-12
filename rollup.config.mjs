import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import copy from "rollup-plugin-copy";
import babel from '@rollup/plugin-babel';



export default {
  input: "src/index.tsx", // Entry file for your SDK
  output: [
    {
      file: "dist/index.js", // CommonJS format
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js", // ES Module format
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    copy({
      targets: [
        { src: "src/images/*", dest: "../robi-user/public/binge-provider-images" },
      ],
      flatten: true,
    }),
    babel({
      presets: ['@babel/preset-react'],
    }),
    peerDepsExternal(), // Automatically handles peer dependencies like react
    resolve(), // Resolves node_modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript({ tsconfig: "./tsconfig.json" }), // Uses your tsconfig
  ],
  external: ["react", "react-dom"], // React should not be bundled
};
