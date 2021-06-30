export interface DeferredPromise<ValueType> extends Promise<ValueType> {
  /**
   The deferred promise.
   */
  promise: Promise<ValueType>;

  /**
   Resolves the promise with a value or the result of another promise.
   @param value - The value to resolve the promise with.
   */
  resolve(value?: ValueType | PromiseLike<ValueType>): void;

  /**
   Reject the promise with a provided reason or error.
   @param reason - The reason or error to reject the promise with.
   */
  reject(reason?: unknown): void;
}

/**
 Create a deferred promise.
 @example
 ```
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
 */
export default function aDefer<T>(): DeferredPromise<T> {
  let resolveFn: any;
  let rejectFn: any;

  const deferred = <DeferredPromise<T>>new Promise((resolve, reject) => {
    resolveFn = resolve;
    rejectFn = reject;
  });

  deferred.promise = deferred;
  deferred.resolve = resolveFn;
  deferred.reject = rejectFn;

  return deferred;
}
