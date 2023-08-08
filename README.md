# Stubbed Inversion of Control Container

### Overview

This project demonstrates an Inversion of Control Container library. Most of the functionality occurs in `/lib/stub-ioc-container.ts` where a superclass offers methods for adding modules in an abstracted way, such that end users can get that module without being strongly coupled to that module.

The coupling that _must_ occur, occurs in the `config` directory where users can import, configure, and instantiate modules. They can also add custom methods to the container, given that simply switching modules rarely offers the same API with regard to the exposed methods. In fact APIs frequently change between major version updates to the _same module!_

There is a stubbed out `tests` directory as well to encourage testing as the project grows.

### Install and run!

```
npm install
npm start
npm test
```

### Directory structure

```
stub-ioc-container
├── demo.ts
├── config
│   ├── demo-stub-ioc-container.ts
│   └── demo-stub-ioc-container-config.ts
├── lib
│   └── stub-ioc-container.ts
└── tests
    └── tests.ts
```

### Configure

In the `config` directory:

`demo-stub-ioc-container.ts` is an optional subclass is for users to add custom methods or whatever modifications they desire.

`demo-stub-ioc-container-config.ts` is where users must import modules, configure them, import and instantiate either the subclass or superclass, instantiate the container, and finally, export it for use.

### Future concerns

* More detailed documentation on how to configure the container for actual use.
* The demo and its config directory will need to be in a separate `demo` or `examples` directory.
* The tests will need to be run in a more complete testing framework like Jest or Mocha.
* There will need to be a build process to transpile the TypeScript into JavaScript for end-user consumption.
* This was written in TypeScript with future development in mind. It is far easier to start with TS than to try to retrofit TS into a large JS codebase.
  * However, if the project doesn't grow, TypeScript might be overkill. It might be worthwhile to convert it to plain JS.
