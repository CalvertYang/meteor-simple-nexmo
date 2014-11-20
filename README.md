## A nodejs wrapper for nexmo API

## Installation

```sh
$ meteor add calvert:simple-nexmo
```

## Initialize

After you've installed, you can initial the package by following way:

```js
var nexmo = new Nexmo({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET',
  baseUrl: 'API_BASE_URL',
  useSSL: true,
  debug: false
});
```

`apiKey`、`apiSecret`: **Required.** You can find them in "API Settings" in [Nexmo Dashboard](https://dashboard.nexmo.com/private/dashboard)

`baseUrl`: **Optional.** Set to rest-sandbox.nexmo.com to test in sandbox (Default: rest.nexmo.com)

`useSSL`: **Optional.** Set to true to use HTTP protocol instead HTTPS (Default: true)

`debug` : **Optional.** Set to true to see debug informations (Default: false)

## Usage

For more information please refer to [simple-nexmo](https://github.com/CalvertYang/simple-nexmo).

## The MIT License (MIT)

> Copyright © 2014 Calvert Yang
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

![Analytics](https://ga-beacon.appspot.com/UA-44933497-3/CalvertYang/meteor-simple-nexmo?pixel)
