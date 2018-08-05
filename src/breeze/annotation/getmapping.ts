import ResponseType from "../utilities/response-type";
import Resource from "../utilities/resource";

export default function Getmapping(route: string, type: ResponseType): Function {

  return function (target: any, propertyKey: string, method: TypedPropertyDescriptor<Promise<any>>): Resource {
    const resource = new Resource();

    resource.setResourcePath(route);
    resource.setTargetMethodName(propertyKey);
    // resource.setTargetMethodResult(method.get());

    resource.register();

    return resource

  };

};
