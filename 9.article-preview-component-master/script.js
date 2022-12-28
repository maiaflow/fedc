const targetDiv = document.getElementById("pop");
    const btn = document.getElementById("icon");
    const shArrow = document.getElementById("sharrow");
    btn.onclick = function () {
      if (targetDiv.style.display !== "block") {
        targetDiv.style.display = "block";
        btn.style.background = "hsl(214, 17%, 51%)";
        shArrow.style.filter = "grayscale(1) brightness(3)";
      } else {
        targetDiv.style.display = "none";
        btn.style.background = "hsl(210, 46%, 95%)";
        shArrow.style.filter = "unset";
      }
    };