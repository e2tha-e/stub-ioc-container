export class StubIocContainer {
  classes: any = {}; // Stores classes for instantiation. The instances will be stored as modules.
  modules: any = {}; // Stores user-submitted objects or the product of the instantiateClassModule() method.

  // Add classes to the container. The instances of these classes will be added as modules.
  addClassDependency(dependencyName: string | symbol , dependency: Function) {
    this.classes[dependencyName] = dependency;
  }

  // Add user-submitted objects. Not necessary if running instantiateClassModule().
  addObjectModule(dependencyName: string | symbol, dependency: object) {
    this.modules[dependencyName] = dependency;
  }

  // Instantiate stored class and add it as a module for getting.
  instantiateClassModule(dependencyName: string | symbol, args: any[]) {
    this.modules[dependencyName] = new this.classes[dependencyName](...args);
  }

  // Get the module for use in the dependent app.
  getModule(dependencyName: string | symbol) {
    return this.modules[dependencyName];
  }
};
