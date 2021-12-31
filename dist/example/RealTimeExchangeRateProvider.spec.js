"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const FxRateDataSource_1 = require("./domain/FxRateDataSource");
const RealTimeExchangeRateProvider_1 = require("./domain/RealTimeExchangeRateProvider");
describe('RealTimeExchangeRateProvider', () => {
    const mocker = src_1.AutoMocker.createJestMocker(jest);
    const fxRateDataSource = mocker.createMockInstance(FxRateDataSource_1.FxRateDataSource);
    const realTimeExchangeRateProvider = new RealTimeExchangeRateProvider_1.RealTimeExchangeRateProvider(fxRateDataSource);
    it('should return the correct rate when fetchFxRate called', async () => {
        const rawExchangeRate = 1;
        fxRateDataSource.fetchFxRate.mockResolvedValue(rawExchangeRate);
        const rate = await realTimeExchangeRateProvider.fetchFxRate(FxRateDataSource_1.SupportedCurrencyPairs.USD_EUR);
        expect(rate).toEqual(rawExchangeRate * 1.02);
    });
});
//# sourceMappingURL=RealTimeExchangeRateProvider.spec.js.map