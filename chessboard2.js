function chessDrawer(i) {
  const row = Array(i).fill("#");
  for (j = 0; j < i; j++) {
    let line = "";
    for (k = 0; k < row.length; k++) {
      line = line + "# ";
      if (k == row.length - 1) {
        console.log(line);
      }
    }
  }
}
chessDrawer(4);
