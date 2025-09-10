// heart count events 
const hearts = document.getElementsByClassName('heart');

for (const item of hearts) {
  item.addEventListener('click', function () {
    let countHeart = parseInt(document.getElementById('count-heart').innerText);
    countHeart++;
    document.getElementById('count-heart').innerText = countHeart;
  });
}
