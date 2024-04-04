let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let resetBtn = document.querySelector("#reset-button");

const coinIcon = document.getElementById('coin');
const tossBtn =
    document.getElementById('toss-button');
const result =
    document.querySelector('.result');
coinIcon.insertAdjacentElement('afterend', result);
tossBtn.addEventListener('click', () => {
    tossBtn.disabled = true;
    tossCoinFunction();
});
function tossCoinFunction() {
    let i = randomVal = Math.floor(Math.random() * 2);
    const faceCoin = randomVal < 0.5 ? 'Heads' : 'Tails';
    const imageUrl = faceCoin === 'Heads' ? 'https://media.geeksforgeeks.org/wp-content/uploads/20231016151817/heads.png' : 'https://media.geeksforgeeks.org/wp-content/uploads/20231016151806/tails.png';

    // Add some random rotation to the coin before starting the animation
    let rotateX = Math.floor(Math.random() * 0);
    let rotateY = Math.floor(Math.random() * 0);
    let rotateZ = Math.floor(Math.random() * 360);
    coin.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;

    // Add the "flip" class to the coin, which applies the rotate animation
    coin.classList.add('flip');
    setTimeout(() => {
        coin.classList.remove('flip');
        coinIcon.innerHTML = `<img src="${imageUrl}" alt="${faceCoin}">`;
        if (faceCoin === 'Heads') {
            heads++;
            document.querySelector('#heads-count').innerHTML = `Heads: ${heads}`;
        } else {
            tails++;
            document.querySelector('#tails-count').innerHTML = `Tails: ${tails}`;
        }
        setTimeout(() => {
            result.textContent = `It's ${faceCoin}`;
            result.style.opacity = 1;
            tossBtn.disabled = false;
        }, 500);
    }, 1000);
}
