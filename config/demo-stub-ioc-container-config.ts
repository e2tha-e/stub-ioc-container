// This is a custom implementation of stub-ioc-container.
// We will be using 2 different loggers: Console and Loglevel.
// Console is native to Node. We need to import Loglevel.
import loglevel from 'loglevel';
// Import our custom subclass of StubIocContainer.
import { DemoStubIocContainer } from './demo-stub-ioc-container.js';

// Instantiate DemoStubIocContainer and add our objects as modules.
const demoStubIocContainer = new DemoStubIocContainer();
demoStubIocContainer.addObjectModule('console', console);
demoStubIocContainer.addObjectModule('loglevel', loglevel);

// Export this instance for end-users.
export { demoStubIocContainer };
