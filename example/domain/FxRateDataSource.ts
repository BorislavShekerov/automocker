export enum SupportedCurrencyPairs {
  USD_EUR = 'USD_EUR',
  USD_GBP = 'USD_GBP',
}
export type DateIsoString = string

const FX_RATES_DB: Record<SupportedCurrencyPairs, number> = {
  [SupportedCurrencyPairs.USD_EUR]: 0.88,
  [SupportedCurrencyPairs.USD_GBP]: 0.74,
}

export class FxRateDataSource {
  async fetchFxRate(currencyPair: SupportedCurrencyPairs): Promise<number> {
    return FX_RATES_DB[currencyPair]
  }

  async fetchHistoricalFxRate(currencyPair: SupportedCurrencyPairs, _startDate: Date): Promise<number> {
    const rate = FX_RATES_DB[currencyPair]

    return rate * Math.random()
  }

  async fetchRateTrend(currencyPair: SupportedCurrencyPairs, from: Date, to: Date): Promise<Record<DateIsoString, number>> {
    const result: Record<DateIsoString, number> = {}
    const currentRate = FX_RATES_DB[currencyPair]

    for (var d = from; d <= to; d.setDate(d.getDate() + 1)) {
      result[new Date(d).toISOString()] = currentRate * Math.random()
    }

    return result
  }
}
