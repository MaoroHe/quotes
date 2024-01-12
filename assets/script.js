const container = document.getElementById('quote');
const author = document.getElementById('author');
const img = document.getElementById('img')
const btn = document.getElementById('generator');
const aged = document.getElementById('aged');
const load = document.querySelector('.loader');

let loader = () => {
    load.classList.toggle('visibility');
}

async function randomQuote() {
    try {
        // await setInterval(loader, 10000)
        // await loader()

        let response = await fetch('https://thatsthespir.it/api');
        let content = await response.json();

        author.innerText = content.author;
        container.textContent = '"' + content.quote + '"';
        img.src = content.photo || './assets/pfp.jpg';
        let named = content.author;
        let res = named.split(' ')[0]; 

        let responsed = await fetch('https://api.agify.io/?name[]=' + res);
        let agex = await responsed.json();

        aged.innerText = agex[0].age;
        console.log(agex[0].age);
    } catch (error) {
        console.log(error)
    }
}

randomQuote()

btn.addEventListener('click', (event) => {
    randomQuote();
})

document.addEventListener('keydown', (event) => {
    if(event.code == 'Space') {
        randomQuote()
    }
})