let numEl = document.getElementById('num');
let saveEl = document.getElementById('save-entries');
let count = 0;

function increment() {
  count += 1;
  numEl.innerText = count;
}

function save() {
  let countStr = count + "-"
  saveEl.textContent += countStr;
}

function reset() {
  count = 0;
  numEl.innerText = count;
}
