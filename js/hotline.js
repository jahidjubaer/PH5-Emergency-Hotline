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

// phone-call events 
const phoneCallBtn = document.getElementsByClassName('phone-call-btn');
const callText = document.getElementsByClassName('call-text');

for(let index = 0; index < 9; index++){
  phoneCallBtn[index].addEventListener('click', function(){
    // call coins 
    let coinCount = parseInt(document.getElementById('coin-count').innerText);
    if(coinCount < 20) {
      alert("❌ Can't make this call. minimum 20 coin required");
      return;
    }
    
    coinCount -= 20;
    document.getElementById('coin-count').innerText = coinCount;

    // calling
    alert("📞 calling....... " + callText[index].innerText + " " + copyText[index].innerText);
  })
    
}

