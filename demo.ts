import { demoStubIocContainer } from './config/demo-stub-ioc-container-config.js';

// We call the modules injected because if we never had to configure demoStubIocContainer, we never directly coupled
// ourselves to Console and Loglevel. As such, it is as though they were injected. We did not call them. They called us.
const injectedConsole = demoStubIocContainer.getModule('console');
const injectedLoglevel = demoStubIocContainer.getModule('loglevel');

injectedConsole.info('Hello World!');
injectedLoglevel.info('Hello World!'); // Does not log info since loglevel defaults to silencing messages above warn.

injectedConsole.warn('Watch out World!');
injectedLoglevel.warn('Watch out World!'); // Loglevel logs this because this is a warning.

// Loglevel does not have a .log() method.
// The custom abstracted method below uses console.log(), but it could also adapt Loglevel to output a message within its
// rules concerning log levels.
demoStubIocContainer.log('Abstracted');
