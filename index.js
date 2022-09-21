const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('𝐀𝐦𝐨𝐫 𝐲𝐨 𝐬𝐚𝐛𝐢́𝐚 𝐪𝐮𝐞 𝐥𝐨 𝐫𝐞𝐜𝐨𝐧𝐨𝐜𝐞𝐫𝐢́𝐚[ 𝐓𝐄 𝐀𝐌𝐎❤️]')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})