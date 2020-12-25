// using decorator factory
export function logError(errMsg: string) {
  return function (target: any, key: string,desc: PropertyDescriptor){
    const method = desc.value;
    try {
      method();
    } catch (err) {
      console.log("#######");
      console.log(target);
      console.log(errMsg);
    }
  }
}

export function propertyDecorator(target: any, key: string) {
  console.log("Property decorator");
  console.log(target);// target.key will be undefined as prototypes can only hold methods
  console.log(key);
}

export function classDecorator(constructor: Function) {
  console.log("class decorator");
  console.log(constructor);
}

export function parameterDecorator(target: any, key: string, index: number) {
  console.log("parameter decorator");
  console.log(key, index);
}