export function Controller(name: string): Function {

  console.log("Intercepting Controller:", name);

  return function (constructor: Function): Function {
    return constructor;
  };

}
