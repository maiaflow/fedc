let ratingBank = "";
  const ratingOne = document.querySelector("#one");
  const ratingTwo = document.querySelector("#two");
  const ratingThree = document.querySelector("#three");
  const ratingFour = document.querySelector("#four");
  const ratingFive = document.querySelector("#five");
  const results = document.querySelector(".results");

  ratingOne.addEventListener("click", () => {
    ratingBank = 1;
    ratingOne.classList.add("clicked");
    ratingTwo.classList.remove("clicked");
    ratingThree.classList.remove("clicked");
    ratingFour.classList.remove("clicked");
    ratingFive.classList.remove("clicked");
  })
  ratingTwo.addEventListener("click", () => {
    ratingBank = 2;
    ratingTwo.classList.add("clicked");
    ratingOne.classList.remove("clicked");
    ratingThree.classList.remove("clicked");
    ratingFour.classList.remove("clicked");
    ratingFive.classList.remove("clicked");
  })
  ratingThree.addEventListener("click", () => {
    ratingBank = 3;
    ratingThree.classList.add("clicked");
    ratingOne.classList.remove("clicked");
    ratingTwo.classList.remove("clicked");
    ratingFour.classList.remove("clicked");
    ratingFive.classList.remove("clicked");
  })
  ratingFour.addEventListener("click", () => {
    ratingBank = 4;
    ratingFour.classList.add("clicked");
    ratingOne.classList.remove("clicked");
    ratingTwo.classList.remove("clicked");
    ratingThree.classList.remove("clicked");
    ratingFive.classList.remove("clicked");
  })
  ratingFive.addEventListener("click", () => {
    ratingBank = 5;
    ratingFive.classList.add("clicked");
    ratingOne.classList.remove("clicked");
    ratingTwo.classList.remove("clicked");
    ratingThree.classList.remove("clicked");
    ratingFour.classList.remove("clicked");
  })

  function myFunction() {
      if (document.getElementById('rating')) {

      if (document.getElementById('rating').style.display == 'none') {
          document.getElementById('rating').style.display = 'block';
          document.getElementById('thankyou').style.display = 'none';
      }
      else {
          document.getElementById('rating').style.display = 'none';
          document.getElementById('thankyou').style.display = 'block';
      }
    }
    }