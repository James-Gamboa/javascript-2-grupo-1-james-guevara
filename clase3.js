function counter() {
  let count = 0;

  const increaseCount = function() {
    count = count + 1;
    console.log(count);
  };

  const decreaseCount = function() {
    count = count - 1;
    console.log(count);
  };

  return {
    increaseCount: increaseCount,
    decreaseCount: decreaseCount
  };
}

const counterFunction = counter();

// @ts-ignore
document.getElementById('sumar').addEventListener('click', counterFunction.increaseCount);
// @ts-ignore
document.getElementById('restar').addEventListener('click', counterFunction.decreaseCount);
