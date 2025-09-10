// heart count events
const hearts = document.getElementsByClassName("heart");

for (const item of hearts) {
  item.addEventListener("click", function () {
    let countHeart = parseInt(document.getElementById("count-heart").innerText);
    countHeart++;
    document.getElementById("count-heart").innerText = countHeart;
  });
}

// copy button events
const copyText = document.getElementsByClassName("copy-text");
const copyBtn = document.getElementsByClassName("copy-btn");

for (let index = 0; index < 9; index++) {
  copyBtn[index].addEventListener("click", function () {
    navigator.clipboard.writeText(copyText[index].innerText);
    alert("Text copied : " + copyText[index].innerText);

    // copy count
    let copyCount = parseInt(document.getElementById("copy-count").innerText);
    copyCount++;
    document.getElementById("copy-count").innerText = copyCount;
  });
}

