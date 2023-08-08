import * as assert from 'assert';
import { demoStubIocContainer } from '../config/demo-stub-ioc-container-config.js';

const consoleObjectLogger = demoStubIocContainer.getModule('console');
assert.deepEqual(consoleObjectLogger, console, 'Fail');

console.log('All tests passed.');
