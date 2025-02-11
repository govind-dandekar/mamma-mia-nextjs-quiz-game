const randomNumberArray: number[] = [];

// based on: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min: number, max: number) { 
  return Math.floor(Math.random() * (max + 1));
}

export function generateRandomNumberArray(): number[]{
  while (randomNumberArray.length < 10) {
    // medium questions array only has 48 objects
    const rndInt = randomIntFromInterval(0, 47)
    if (!randomNumberArray.includes(rndInt)){
      randomNumberArray.push(rndInt)
    }
  }

  return randomNumberArray;
}

