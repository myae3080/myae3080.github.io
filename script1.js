/*
    * shadow dom을 사용하는 이유
    - css가 shadowRoot 내로 한정지어진다. -> style encapsulation
*/
window.onload = () => {
    const targetElement = document.getElementById('elem');

    targetElement.attachShadow({mode: 'open'});
    targetElement.shadowRoot.innerHTML = `<h1>Shadow Dom</h1>`;

    // targetElement.addEventListener('click', () => {
    //     const targetElement = document.getElementById('elem');
    
    //     console.log(targetElement);
    
    //     targetElement.attachShadow({mode: 'closed'});
    // });
}

checkShadowDomStatus = () => {
    console.log(document.getElementById('elem').shadowRoot);
}

createClosedShadowDom = () => {
    const sd = document.createElement('div');
    sd.innerHTML = `<h1>Closed Shadow Dom</h1>`;

    const sr = sd.attachShadow({mode: 'closed'});

    console.log(sr);
    console.log(sr.innerHTML);
}