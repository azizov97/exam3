const min = document.getElementById("min");
const sec = document.getElementById("sec");
const back = document.getElementById("back");
let m = 25;
let s = 0;
let timer;
let isWork = true;

const timeToString = (n) => (n < 10 ? "0" + n : n);

const changeUI = () => {
  min.innerHTML = timeToString(m);
  sec.innerHTML = timeToString(s);
};
changeUI();

const start = () => {
  if (!timer) {
    timer = setInterval(() => {
      s--;

      if (s == -1) {
        m--;
        s = 59;
      }

      if (m == -1) {
        isWork = !isWork;
      }
      changeUI();
    }, 1000);
  }
};

const stop = () => {
  clearInterval(timer);
};

function short() {
  let m = 5;
  let s = 0;

  const timeToString = (n) => (n < 10 ? "0" + n : n);

  const changeUI = () => {
    min.innerHTML = timeToString(m);
    sec.innerHTML = timeToString(s);
  };
  changeUI();
  clearInterval(timer);
}

function long() {
  let m = 15;
  let s = 0;

  const timeToString = (n) => (n < 10 ? "0" + n : n);

  const changeUI = () => {
    min.innerHTML = timeToString(m);
    sec.innerHTML = timeToString(s);
  };
  changeUI();
}
