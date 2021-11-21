/* @hash 0723e8b145f7332ba1730be9a95ce8d7 */
// tslint:disable
/* eslint-disable */
import { createWithContracts } from '@neo-one/smart-contract-test';
import * as path from 'path';

export const withContracts = createWithContracts([
  { name: 'Token', filePath: path.resolve(__dirname, '../../neo-one/contracts/Token.ts') },
]);
