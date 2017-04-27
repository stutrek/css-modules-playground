# css-modules playground

This is a repo I set up to figure out css modules. Running `yarn build` will do a build then output all the JS variables and all the CSS so you can be sure you're getting what you want.

## Usage

1. Clone
2. `yarn install`
3. Edit files
4. `yarn build`.

You'll see something like this:

```
$ yarn build
yarn build v0.22.0
$ rm -rf ./build; webpack; node build/main.js; cat build/main.css 
Hash: 121600edf5fe643ca1ac
Version: webpack 1.15.0
Time: 681ms
       Asset       Size  Chunks             Chunk Names
     main.js    2.34 kB       0  [emitted]  main
    main.css  283 bytes       0  [emitted]  main
 main.js.map    2.72 kB       0  [emitted]  main
main.css.map   85 bytes       0  [emitted]  main
   [0] ./index.js 387 bytes {0} [built]
    + 3 hidden modules
Child extract-text-webpack-plugin:
        + 6 hidden modules
Child extract-text-webpack-plugin:
        + 6 hidden modules
Child extract-text-webpack-plugin:
        + 6 hidden modules

Your JS values
-------- main ----------
{}
-------- button ----------
{ button: 'button__button button-override-hook' }
-------- icon ----------
{ icon: 'icon__icon' }

Your CSS
.button__button {
  background-color: #99f;
  display: inline-block;
  border: 1px solid black;
}
.icon__icon {
  display: inline-block;
}
.icon__icon svg * {
  fill: currentColor;
}
.button-override-hook .icon__icon {
  vertical-align: middle;
}

✨  Done in 1.23s.
```

