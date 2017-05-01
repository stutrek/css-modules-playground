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
Hash: 1d87cb211b78f570afb0
Version: webpack 1.15.0
Time: 552ms
       Asset       Size  Chunks             Chunk Names
     main.js    2.55 kB       0  [emitted]  main
    main.css  283 bytes       0  [emitted]  main
 main.js.map    3.03 kB       0  [emitted]  main
main.css.map   85 bytes       0  [emitted]  main
   [0] ./index.js 574 bytes {0} [built]
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
{ icon: 'icon__icon cs-override-icon' }

Sample HTML

		<button class="button__button button-override-hook">
			<span class="icon__icon cs-override-icon">
				😊
			</span>
		</button>
	

Your CSS
.button__button {
  background-color: #99f;
  display: inline-block;
  border: 1px solid black;
}
.button__button .cs-override-icon {
  vertical-align: middle;
}
.icon__icon {
  display: inline-block;
}
.icon__icon svg * {
  fill: currentColor;
}

✨  Done in 0.98s.
```

