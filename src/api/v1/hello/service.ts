import { Payload } from './types';

export const helloService = {
    getData: async function (id: string): Promise<Payload> {
        return ({ id });
    },
};