function chessDrawer(i) {
  let a = [];
  a = Array.from("#".repeat(i));
  a.push("\n");
  a = a.join().toString().replace(/,/g, " ");
  const b = [];
  for (x = 0; x < i; x++) {
    b.push(a);
  }
  return b.join().toString().replace(/,/g, "");
}
console.log(chessDrawer(20));
