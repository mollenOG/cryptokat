var countDownDate = new Date("January 28, 2023 23:59:59").getTime(),
  x = setInterval(function () {
    var e = new Date().getTime(),
      t = countDownDate - e,
      n = Math.floor(t / 864e5),
      o = Math.floor((t % 864e5) / 36e5),
      a = Math.floor((t % 36e5) / 6e4),
      r = Math.floor((t % 6e4) / 1e3);
    (document.getElementById("demo").innerHTML =
      n + "d " + o + "h " + a + "m " + r + "s "),
      t < 0 &&
        (clearInterval(x), (document.getElementById("demo").innerHTML = ""));
  }, 1e3);
