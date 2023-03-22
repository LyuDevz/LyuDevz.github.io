const content = "LyuDevz \n Front-end Developer";
const text = document.querySelector(".text");
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}
setInterval(typing, 100);
