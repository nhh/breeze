import ResponseType from "./response-type";


export default class Resource {

  private resourcePath: string;
  private targetMethodName: string;
  private targetMethodResult: Promise<any>;
  private resourceResponseType: ResponseType;

  register() {}

  getResourcePath(): string {
    return this.resourcePath;
  }

  setResourcePath(path: string): void {
    this.resourcePath = path;
  }

  getTargetMethodName(): string {
    return this.targetMethodName
  }

  setTargetMethodName(name: string): void {
    this.targetMethodName = name;
  }

  getTargetMethodResult(): Promise<any> {
    return this.targetMethodResult;
  }

  setTargetMethodResult(method: Promise<any>): void {
    this.targetMethodResult = method;
  }

}
