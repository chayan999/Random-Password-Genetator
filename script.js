const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
    const passwordChars = '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const passLangth = 14;
    let generatePass = ''

    for (let i = 0; i < passLangth; i++) {
        const randomNum = Math.floor(Math.random() * passwordChars.length);
        console.log(randomNum);
        generatePass += passwordChars.substring(randomNum, randomNum + 1)
    };
    console.log(generatePass)
})