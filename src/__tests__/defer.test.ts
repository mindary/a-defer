import {expect} from '@loopback/testlab';
import {expectType} from 'tsd';
import aDefer, {DeferredPromise} from '../index';

describe('defer', function () {
  it('should have correct members', function () {
    const d = aDefer();
    expect(d).have.property('then');
    expect(d).equal(d.promise);
    expect(d.resolve).is.Function();
    expect(d.reject).is.Function();
  });

  it('should have correct types', function () {
    expectType<DeferredPromise<unknown>>(aDefer());
    expectType<DeferredPromise<string>>(aDefer<string>());

    aDefer<void>().resolve();
    aDefer<string>().resolve('foo');
    aDefer<void>().reject();
    aDefer<string>().reject(new Error('foo'));
    expectType<Promise<string>>(aDefer<string>().promise);
  });
});
