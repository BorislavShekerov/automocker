export declare enum SupportedCurrencyPairs {
    USD_EUR = "USD_EUR",
    USD_GBP = "USD_GBP"
}
export declare type DateIsoString = string;
export declare class FxRateDataSource {
    fetchFxRate(currencyPair: SupportedCurrencyPairs): Promise<number>;
    fetchHistoricalFxRate(currencyPair: SupportedCurrencyPairs, _startDate: Date): Promise<number>;
    fetchRateTrend(currencyPair: SupportedCurrencyPairs, from: Date, to: Date): Promise<Record<DateIsoString, number>>;
}
