import BreezeApplication from "./breeze-application";

export default class BreezeApplicationBuilder {

  constructor(
    private application = new BreezeApplication()
  ){}

  loadController(controllerList: Array<Object>) {}
  loadConfiguration(configurationList: Array<Object>) {}

  build() {
    return this.application;
  }

}



