pos_1 = 0;

right_1.onclick = function () {
  if (pos_1 > -800) {
    pos_1 = pos_1 - 100;
    gal.style.left = pos_1 + "%";
  }
  if (pos_1 == -800) {
    pos_1 = 0;
    gal.style.left = pos_1 + "%";
  }
};

left_1.onclick = function () {
  if (pos_1 < 0) {
    pos_1 = pos_1 + 100;
    gal.style.left = pos_1 + "%";
  }
}


