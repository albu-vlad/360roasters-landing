const logo = document.querySelectorAll("#logo line");

for (let i = 0; i < logo.length; i++){
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`)
}