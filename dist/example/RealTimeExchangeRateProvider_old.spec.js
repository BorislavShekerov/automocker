"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FxRateDataSource_1 = require("./domain/FxRateDataSource");
const RealTimeExchangeRateProvider_1 = require("./domain/RealTimeExchangeRateProvider");
describe('RealTimeExchangeRateProvider', () => {
    const fxRateDataSource = {
        fetchFxRate: jest.fn(),
        fetchHistoricalFxRate: jest.fn(),
        fetchRateTrend: jest.fn(),
    };
    const realTimeExchangeRateProvider = new RealTimeExchangeRateProvider_1.RealTimeExchangeRateProvider(fxRateDataSource);
    it('should return the correct rate when fetchFxRate called', async () => {
        const rawExchangeRate = 1;
        fxRateDataSource.fetchFxRate.mockResolvedValue(rawExchangeRate);
        const rate = await realTimeExchangeRateProvider.fetchFxRate(FxRateDataSource_1.SupportedCurrencyPairs.USD_EUR);
        expect(rate).toEqual(rawExchangeRate * 1.02);
    });
});
//# sourceMappingURL=RealTimeExchangeRateProvider_old.spec.js.map