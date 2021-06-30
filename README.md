# a-defer

> Create a deferred promise

[Don't use this unless you know what you're doing.](https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns#the-deferred-anti-pattern)
Prefer the `Promise` constructor.

## Install

```
$ npm install a-defer
```

## Usage

```js
import aDefer from 'a-defer';

function delay(milliseconds) {
  const deferred = aDefer();
  setTimeout(deferred.resolve, milliseconds, '🦄');
  return deferred.promise;
  // or
  // return deferred;
}

console.log(await delay(100));
//=> '🦄'
```

_The above is just an example. Use [`delay`](https://github.com/sindresorhus/delay) if you need to delay a promise._

## API

### aDefer()

Returns an `object` with a `promise` property and functions to `resolve()` and `reject()`.

## Related

- [p-lazy](https://github.com/sindresorhus/p-lazy) - Create a lazy promise that defers execution until `.then()` or
  `.catch()` is called
- [More…](https://github.com/sindresorhus/promise-fun)
