//problem 4

type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
}

type Circle = {
    shape: 'circcle';
    radius: number;
}

const calculateShapeArea = (eliment: Rectangle | Circle) : number =>{
    if(eliment.shape === 'rectangle'){
        return eliment.width * eliment.height;
    }else if(eliment.shape === 'circcle'){
        return parseFloat((Math.PI * (eliment.radius * eliment.radius)).toFixed(2));
    }else{
        throw new Error('Unknown shape format')
    }
}

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

const circleArea = calculateShapeArea({
    shape: 'circcle',
    radius: 5,
  });

  console.log(rectangleArea)
  console.log(circleArea)
