"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealTimeExchangeRateProvider = void 0;
const FxRateDataSource_1 = require("./FxRateDataSource");
class RealTimeExchangeRateProvider {
    constructor(fxRateDataSource) {
        this.fxRateDataSource = fxRateDataSource;
        this.COMMISSION = {
            [FxRateDataSource_1.SupportedCurrencyPairs.USD_EUR]: 0.02,
            [FxRateDataSource_1.SupportedCurrencyPairs.USD_GBP]: 0.03,
        };
    }
    async fetchFxRate(currencyPair) {
        const commissionToCharge = this.COMMISSION[currencyPair];
        const exchangeRate = await this.fxRateDataSource.fetchFxRate(currencyPair);
        return exchangeRate * (1 + commissionToCharge); // Precision issues disregarded for the example
    }
}
exports.RealTimeExchangeRateProvider = RealTimeExchangeRateProvider;
//# sourceMappingURL=RealTimeExchangeRateProvider.js.map