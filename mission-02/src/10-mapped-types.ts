{
  // Mapped type
  const arrayOfNumbers: number[] = [234, 234, 435, 46];

  // const arayOfStrings: string[] = ['234', '234', '435', '45'];
  const arrayOfStrings: string[] = arrayOfNumbers.map(element => element.toString());
  // console.log(arrayOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  }

  type Height = AreaNumber['height'];

  type AreaString1 = {
    [key in "height" | "width" | "depth" ]: string;
  }

  type AreaString2 = {
    [key in keyof AreaNumber ]: string; // Lockup type
  }

  type AreaString <T> = {
    [key in keyof T]: T[key]
  }

  const area1: AreaString<{ height: number; width: string }> = {
    height: 100,
    width: '100'
  }

  //
}