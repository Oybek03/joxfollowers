// let big = document.querySelector(".count");
// let twitter = document.querySelector(".count-1");
// let youtube = document.querySelector(".count-2");
// let facebook = document.querySelector(".count-3");

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCount = function () {
    const target = +counter.getAttribute("oybek");
    const count = +counter.innerHTML;
    const inc = target / 200;

    if (count < target) {
      counter.innerHTML = count + inc;
      setTimeout(updateCount, 2);
    } else {
      counter.innerHTML = target;
    }
  };
  updateCount();
});
