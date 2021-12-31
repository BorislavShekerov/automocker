"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FxRateDataSource = exports.SupportedCurrencyPairs = void 0;
var SupportedCurrencyPairs;
(function (SupportedCurrencyPairs) {
    SupportedCurrencyPairs["USD_EUR"] = "USD_EUR";
    SupportedCurrencyPairs["USD_GBP"] = "USD_GBP";
})(SupportedCurrencyPairs = exports.SupportedCurrencyPairs || (exports.SupportedCurrencyPairs = {}));
const FX_RATES_DB = {
    [SupportedCurrencyPairs.USD_EUR]: 0.88,
    [SupportedCurrencyPairs.USD_GBP]: 0.74,
};
class FxRateDataSource {
    async fetchFxRate(currencyPair) {
        return FX_RATES_DB[currencyPair];
    }
    async fetchHistoricalFxRate(currencyPair, _startDate) {
        const rate = FX_RATES_DB[currencyPair];
        return rate * Math.random();
    }
    async fetchRateTrend(currencyPair, from, to) {
        const result = {};
        const currentRate = FX_RATES_DB[currencyPair];
        for (var d = from; d <= to; d.setDate(d.getDate() + 1)) {
            result[new Date(d).toISOString()] = currentRate * Math.random();
        }
        return result;
    }
}
exports.FxRateDataSource = FxRateDataSource;
//# sourceMappingURL=FxRateDataSource.js.map