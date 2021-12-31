 # automocker 
[![npm](https://img.shields.io/npm/v/automocker.svg?maxAge=2592000)](https://www.npmjs.com/package/automocker)
[![downloads](https://img.shields.io/npm/dt/automocker.svg?maxAge=2592000)](https://www.npmjs.com/package/automocker)
[![buddy pipeline](https://app.buddy.works/shekerovborislav-1/automocker/pipelines/pipeline/367079/badge.svg?token=ce7b24637df72449656420b38bbd249864e4309cd4ec1d75efed732bf2f7e7da "build")](https://app.buddy.works/shekerovborislav-1/automocker/pipelines/pipeline/367079)

A lightweight TS class mocking module to supplement your testing framework.

## Why automocker?
---

If you have been writing jest tests for a while you know the test setup, especially in a complex project, can be very tedious.<br /><br /> If you use an IoC framework like NestJS to structure your application quite often you would have class dependency hierarchies spanning a few levels where you have `class A` depending on `classes B, C, and D` in its constructor (allowing the framework to do its job). What's more, `classes B, C, D` often themselves depend on others making it more complicated to easily stub their behavior.

Being in the NodeJS domain you are probably already using one of the mainstream testing frameworks [Jest](https://jestjs.io/) or [Mocha](https://mochajs.org/) being the two most famous. These frameworks would usually provided a behavior mocking facility ,as is the case with *jest*, or suggest plugging in a third party module like [Sinon](https://sinonjs.org/) to help with the mocking/stubbing. If you have explored any of these in the context of stubbing ES6 class behavior you would know the options are not so intuitive. :scream: <br /><br />

Other, more traditional, platforms like **Java** and **C#** make it a lot easier to create Mock instances of dependency classes with 1-2 lines of code (or with the help of decorators/annotations). <br />

Automocker is a supplementary module to your JS/TS test framework of choice which aims to make class mocking a breeze when dependency injection is used. 

## How to use automocker?

That's easy...

```javascript
import { AutoMocker } from '../src'
import { FxRateDataSource, SupportedCurrencyPairs, RealTimeExchangeRateProvider } from './domain/FxRateDataSource'


describe('RealTimeExchangeRateProvider', () => {
  const mocker = AutoMocker.createJestMocker(jest)
  const fxRateDataSource = mocker.createMockInstance(FxRateDataSource)
  const realTimeExchangeRateProvider = new RealTimeExchangeRateProvider(fxRateDataSource)

  it('should return the correct rate when fetchFxRate called', async () => {
    const rawExchangeRate = 1
    fxRateDataSource.fetchFxRate.mockResolvedValue(rawExchangeRate)

    const rate = await realTimeExchangeRateProvider.fetchFxRate(SupportedCurrencyPairs.USD_EUR)

    expect(rate).toEqual(rawExchangeRate * 1.02)
  })
})
```

Check out the example/ folder for a deeper dive.
