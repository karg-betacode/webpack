# Webpack study notes

Reference: [https://www.smashingmagazine.com/2017/02/a-detailed-introduction-to-webpack/](https://www.smashingmagazine.com/2017/02/a-detailed-introduction-to-webpack/).



This example code I have done:

* webpack & HTML generator. npm start will run the html server. HTML content rendered from handlebar template.

* split bundle.js to vendor file (bundle.vendor.js) and file from custom code (bundle.js).

* the js that performs delayed loading of the HTML. This is not async file loading, the code is already residing in the same file.





## Common commands

1. Compile scripts to desired output.

```
  npm start
```

Current build process is handled by webpack - look at package.json -> build field.

Output files is determine by webpac.config.js -> entry field

--------------------------

2. Install needed modules

```
  npm install
```

Install dependencies specified in package.json


--------------------------

3. Initialize npm

```
  npm init
```

This creates package.json



## What is next?

1. Adding hash or chunkhash to bundle.vendor.js  (vendor files for browser caching). Read more [here from Andrey Okonetchnikov](https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95).


2. Modify rails to support webpack. Read more [here from Clark Dave](http://clarkdave.net/2015/01/how-to-use-webpack-with-rails/).

2.1  Alternatively look into [webpacker gem](https://github.com/rails/webpacker).

3. Rails 5.1 beta has integration to webpack via webpacker gem too. Package management however is done using Yarn.