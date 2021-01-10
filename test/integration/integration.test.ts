/* eslint-disable @typescript-eslint/no-explicit-any */

jest.mock('nodemailer');
import request from 'supertest';

const mockedPutObject = jest.fn();
const mockedGetSignedUrl = jest.fn();
jest.mock('aws-sdk/clients/s3', (): any => {
    return class S3 {
        public putObject(params: any): any {
            mockedPutObject(params);
            return {
                /* eslint-disable @typescript-eslint/no-empty-function */
                promise: async (): Promise<void> => { }
            };
        }
        public getSignedUrl(operation: string, params: any): string {
            mockedGetSignedUrl(operation, params);
            return 'https://dummy.url.com';
        }
    };
});

import app from 'app';
describe('API V1', () => {
    describe('/hello', () => {
        describe('GET /', () => {
            it('should return 200 OK', async () => {
                const { body } = await request(app)
                    .get('/v1/hello')
                    .expect(200);
                expect(body).toMatchSnapshot();
            });
        });
    });
});
