let display = document.querySelector("#display");
let a = 10;

setTimeout(() => {
  display.innerHTML = a--;
  setTimeout(() => {
    display.innerHTML = a--;
    setTimeout(function () {
      display.innerHTML = a--;
      setTimeout(function () {
        display.innerHTML = a--;
        setTimeout(function () {
          display.innerHTML = a--;
          setTimeout(function () {
            display.innerHTML = a--;
            setTimeout(function () {
              display.innerHTML = a--;
              setTimeout(function () {
                display.innerHTML = a--;
                setTimeout(function () {
                  display.innerHTML = a--;
                  setTimeout(function () {
                    display.innerHTML = a--;
                    setTimeout(function () {
                      display.innerHTML = "HAPPY NEW YEAR";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
