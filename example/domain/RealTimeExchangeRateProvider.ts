import { FxRateDataSource, SupportedCurrencyPairs } from './FxRateDataSource'

export class RealTimeExchangeRateProvider {
  private readonly COMMISSION: Record<SupportedCurrencyPairs, number> = {
    [SupportedCurrencyPairs.USD_EUR]: 0.02,
    [SupportedCurrencyPairs.USD_GBP]: 0.03,
  }

  constructor(public readonly fxRateDataSource: FxRateDataSource) {}

  async fetchFxRate(currencyPair: SupportedCurrencyPairs): Promise<number> {
    const commissionToCharge = this.COMMISSION[currencyPair]

    const exchangeRate = await this.fxRateDataSource.fetchFxRate(currencyPair)

    return exchangeRate * (1 + commissionToCharge) // Precision issues disregarded for the example
  }
}
