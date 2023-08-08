// This is a very basic stub of a test for stub-ioc-container.
// Its purpose is to get the ball rolling for more expansive and complete tests.
import * as assert from 'assert';
import { demoStubIocContainer } from '../config/demo-stub-ioc-container-config.js';

const consoleObjectLogger = demoStubIocContainer.getModule('console');
assert.deepEqual(consoleObjectLogger, console, 'Fail');

console.log('All tests passed.');
