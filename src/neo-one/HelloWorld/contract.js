/* @hash 94c4e3556d636b8957d0119ecb826b4f */
// tslint:disable
/* eslint-disable */
import { helloWorldABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'ATofJTmYRjCff7J1dg8FFW75Sh3dsjToVP',
    },
  },
  abi: helloWorldABI,
  sourceMaps,
};

export const createHelloWorldSmartContract = (client) => client.smartContract(definition);
