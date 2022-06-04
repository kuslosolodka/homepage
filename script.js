const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

let telegram = document.querySelector(".telegram-popup");
telegram.addEventListener("mouseenter", showQR);
telegram.addEventListener("mouseleave", hideQR);

function showQR() {
  let popup = document.getElementById("qrPopup");
  popup.classList.add("show");
}

function hideQR() {
  let popup = document.getElementById("qrPopup");
  popup.classList.remove("show");
}
