const data = JSON.parse(dataInfo);

data.forEach(element => {
    const contentBoxEl = document.querySelector('.content__box');

    const contentEl = document.createElement('div');
    contentEl.classList.add('content');

    const imageEl = document.createElement('img');
    imageEl.classList.add('content__img');
    imageEl.src = element.image;

    const setupEl = document.createElement('p');
    setupEl.classList.add('content__setup');
    setupEl.textContent = element.setup;

    const punchlineEl = document.createElement('p');
    punchlineEl.classList.add('content__punchline');
    punchlineEl.textContent = element.punchline;

    const idEl = document.createElement('h1');
    idEl.classList.add('content__id');
    idEl.textContent = element.id;

    contentBoxEl.appendChild(contentEl);
    contentEl.appendChild(idEl);
    contentEl.appendChild(imageEl);
    contentEl.appendChild(setupEl);
    contentEl.appendChild(punchlineEl);
});

