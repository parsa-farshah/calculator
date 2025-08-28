let inp = document.getElementById("inp");
let cloneOp = "";
let op = "";
let num1 = "";
let num2 = "";

function reset() {
  inp.innerText = "";
  cloneOp = "";
  num1 = "";
  num2 = "";
  op = "";
}

function find(s) {
  cloneOp += s.innerText;
  inp.innerText += s.innerText;
}

function res() {
  // جدا کردن num1 و num2
  num1 = "";
  num2 = "";
  op = "";

  for (let i = 0; i < cloneOp.length; i++) {
    const x = cloneOp[i];
    if (x == "+" || x == "-" || x == "*" || x == "/") {
      op = x;
      continue;
    }
    if (op == "") {
      num1 += x;
    } else {
      num2 += x;
    }
  }

  if (num1 === "" || num2 === "" || op === "") return;

  let result;
  switch (op) {
    case "+":
      result = +num1 + +num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      inp.innerText = "ERROR";
      return;
  }

  // نمایش نتیجه
  inp.innerText = result;

  // 👇 نگه داشتن نتیجه به عنوان num1 برای ادامه محاسبه
  num1 = result.toString();
  num2 = "";
  op = "";
  cloneOp = num1;
}

// dark mode
let btnDark = document.getElementById("dark");
let toggleDark = document.getElementById("toggleDark");
let btnDL = document.getElementById("btnT");
let darkBg = document.getElementById("bgDark");
let txtColor = document.querySelectorAll("#txtColor  div");

btnDark.addEventListener("click", () => {
  btnDL.classList.add("showBtnDL");
  btnDL.classList.remove("backBtnDL");
  darkBg.classList.add("bg-[#290992]");
  txtColor.forEach((el) => el.classList.add("text-black"));
  txtColor.forEach((el) => el.classList.remove("text-white"));
});

// light mode
let btnLight = document.getElementById("light");

btnLight.addEventListener("click", () => {
  btnDL.classList.add("backBtnDL");
  darkBg.classList.remove("bg-[#290992]");

  darkBg.classList.remove("bg-[#1e1b4b]");
  txtColor.forEach((el) => el.classList.remove("text-black"));
  txtColor.forEach((el) => el.classList.add("text-white"));
});

function anim() {
  let calc = document.getElementById("calc");

  // remove transforms
  calc.classList.remove("rotate-z-[60deg]", "rotate-x-[40deg]");

  // تنظیم موقعیت موبایل (پیش‌فرض)
  calc.classList.remove("left-[80%]");
  calc.classList.add("top-[85px]", "left-[70%]");

  // تنظیم موقعیت برای سایز بزرگتر
  calc.classList.add("sm:top-[90px]", "sm:left-[50%]");
}
