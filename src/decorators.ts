const testDecorator = (target: any, key: string): void => {
  console.log(target);
  console.log(key);
}

class Boat{
  public color: string;
  constructor(color: string) {
    this.color = color;
   }

  pilot = (): void => {
    console.log("This is pilot method");
  }

  @testDecorator
  get getColor():string{
    return this.color;
  }
}

