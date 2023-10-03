let main = document.getElementById('main')

let img = [
    {
        id: 1,
        url: 'img/bg1.jpg',
        title: 'The National University of Architecture'
    },
    {
        id: 2,
        url: 'img/bg2.jpg',
        title: "Mr. Daniel's House",
    },
    {
        id: 3,
        url: 'img/bg3.jpg',
        title: 'Digital College Building'
    },
]

let i = 0;

function nextButton() {
    i++
    if (i > img.length) {
        i = 0;
    }

    console.log(img[0].url)

    console.log(`Próxima imagem: ${img[i].url}`);
    document.documentElement.style.setProperty('--background-image', `url(${img[i].url})`);
}

function backButton() {
    i--;
    if (i < 0) {
        i = img.length - 1;
    }
    document.documentElement.style.setProperty('--background-image', `url(${img[i].url})`);
}