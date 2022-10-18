const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const checkboxs = $$("input");
const paras = $$("p");

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (this.checked && e.shiftKey) {
    checkboxs.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxs.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheck);
});

$(".box").addEventListener("click", (e) => {
  checkboxs.forEach((checkbox, index) => {
    if (checkbox.checked) {
      paras[index].style.textDecoration = "line-through";
      paras[index].style.color = "var(--main-color)";
    } else {
      paras[index].style.textDecoration = "none";
      paras[index].style.color = "#000";
    }
  })
});