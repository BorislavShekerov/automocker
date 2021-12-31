import { AutoMocker } from '../src'
import { FxRateDataSource, SupportedCurrencyPairs } from './domain/FxRateDataSource'
import { RealTimeExchangeRateProvider } from './domain/RealTimeExchangeRateProvider'

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
