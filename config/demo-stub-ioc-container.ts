import { StubIocContainer } from '../lib/stub-ioc-container.js';

// This optional subclass is for users to add custom methods or whatever modifications they desire.
export class DemoStubIocContainer extends StubIocContainer {
  // Add custom methods here:
  log(msg: any) {
    this.modules['console'].log(msg);
  }
};
