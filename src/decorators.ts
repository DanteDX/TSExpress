// using decorator factory

function logError(errMsg: string) {
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

function testDecorator(target: any, key: string) {
  console.log(target);// target.key will be undefined as prototypes can only hold methods
  console.log(key);
}

class Boat{
  @testDecorator
  public color: string;
  constructor(color: string) {
    this.color = color;
  }
  
  demo(): void{
    console.log("this is demo just");
  }

  @logError("this is a custom error message")
  pilot():void{
    throw new Error();
  }

  get getColor():string{
    return this.color;
  }
}


