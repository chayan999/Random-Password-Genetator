const btnEl = document.querySelector('.btn');
const copyEl = document.querySelector('.far');
const inputEl = document.getElementById('input');
const alartEl = document.querySelector('.alert-container')
btnEl.addEventListener('click', () => {
    const passwordChars = '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const passLangth = 14;
    let generatePass = ''

    for (let i = 0; i < passLangth; i++) {
        const randomNum = Math.floor(Math.random() * passwordChars.length);
        console.log(randomNum);
        generatePass += passwordChars.substring(randomNum, randomNum + 1)
    };
    inputEl.value = generatePass;
    alartEl.innerText = generatePass + ' Copide';

});

copyEl.addEventListener("click", () => {
    copyPassword();
});

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
    alartEl.classList.remove('active');

    setTimeout(() => {
        alartEl.classList.add('active')
    }, 2000);
}
