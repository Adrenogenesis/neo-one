/**
 * @jest-environment node
 */
 import { withContracts } from "../neo-one/test";

describe('Token', () => {
  test('exists', async () => {
    await withContracts(async ({ token }) => {
      const [name, symbol, decimals] = await Promise.all([token.name(), token.symbol(), token.decimals()]);
      expect(name).toEqual('Eon');
      expect(symbol).toEqual('EON');
      expect(decimals.toNumber()).toEqual(8);
    });    
  });
});
