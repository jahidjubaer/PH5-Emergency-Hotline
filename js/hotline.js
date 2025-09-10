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

for (let index = 0; index < copyBtn.length; index++) {
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
const phoneCallBtn = document.getElementsByClassName("phone-call-btn");
const callText = document.getElementsByClassName("call-text");
const callTitleText = document.getElementsByClassName("call-text-title");
let historyContainerStack = [];

for (let index = 0; index < phoneCallBtn.length; index++) {
  phoneCallBtn[index].addEventListener("click", function () {
    // call coins
    let coinCount = parseInt(document.getElementById("coin-count").innerText);
    if (coinCount < 20) {
      alert("❌ Can't make this call. minimum 20 coin required");
      return;
    }

    coinCount -= 20;
    document.getElementById("coin-count").innerText = coinCount;

    // calling
    alert(
      "📞 calling....... " +
        callText[index].innerText +
        " " +
        copyText[index].innerText
    );

    // call history
    const callTitleData = callTitleText[index].innerText;
    const phoneNumber = copyText[index].innerText;

    // object of call history data
    const callHistoryData = {
      callTitle: callTitleData,
      number: phoneNumber,
      time: new Date().toLocaleTimeString(),
    };
    historyContainerStack.push(callHistoryData);

    const historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = "";

    for (const data of historyContainerStack) {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
    <div
            class="flex justify-between rounded-lg items-center bg-[#FAFAFA] p-4 mb-2"
          >
            <div>
              <h4 class="text-[18px] mb-1">${data.callTitle}</h4>
              <p class="text-[#5C5C5C]">${data.number}</p>
            </div>
            <p>${data.time}</p>
          </div>
    `;

      historyContainer.appendChild(newDiv);
    }
  });
}

// clear button events
document.getElementById("clear-btn").addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";
});
