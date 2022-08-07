import '@testing-library/jest-dom/extend-expect';
import {server} from '../src/test/test-server';

jest.setTimeout(30000)
//mock GA userEvents
jest.mock('utils/use-page-view');
const {userEvents} = require('utils/use-page-view');
userEvents.mockImplementation(events => console.log(events));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: true,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
globalThis.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};

beforeAll(() => server.listen({onUnhandledRequest: 'error'}));
//beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});
beforeEach(() => jest.useFakeTimers());
