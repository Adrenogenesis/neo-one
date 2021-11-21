/* @hash c479cee398e0afa4b6921a3ee30f01f1 */
// tslint:disable
/* eslint-disable */
import { createHelloWorldSmartContract } from './HelloWorld/contract';

export const createContracts = (client) => ({
  helloWorld: createHelloWorldSmartContract(client),
});
