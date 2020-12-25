import {
  logError, propertyDecorator,
  classDecorator, parameterDecorator
} from "./decorators";

@classDecorator
class Boat{
  @propertyDecorator
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

  getColor(@parameterDecorator code: string):string{
    return code;
  }
}


