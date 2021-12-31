import { FxRateDataSource, SupportedCurrencyPairs } from './FxRateDataSource';
export declare class RealTimeExchangeRateProvider {
    readonly fxRateDataSource: FxRateDataSource;
    private readonly COMMISSION;
    constructor(fxRateDataSource: FxRateDataSource);
    fetchFxRate(currencyPair: SupportedCurrencyPairs): Promise<number>;
}
