function loopingTriangle() {
  let arr = [];
  for (let i = 0; i < 7; i++) {
    arr.push("#");
    console.log(arr.join().replaceAll(",", ""));
  }
}

loopingTriangle();
