const $ = document;

let inputs = $.querySelector(".captcha");
let creator = $.getElementById("creator");


creator.addEventListener('click', ()=>{
    let randomChars="0123456789ABCDEFGHIJKLMNOP";
    let randomCaptcha="";
    for(var i = 0; i<10;i++){
        randomCaptcha+=randomChars.charAt(Math.floor(Math.random() * 36));
    }
    inputs.value=randomCaptcha;
})