// let pl = document.getElementById('pl');
// pl.addEventListener('click', () => {
//     window.location.href = 'jsPage.html';
// });

/*
    * shadow dom을 사용하는 이유
    - css가 shadowRoot 내로 한정지어진다. -> style encapsulation
*/
window.onload = () => {
    const targetElement = document.getElementById('elem');

    targetElement.attachShadow({mode: 'open'});
    targetElement.shadowRoot.innerHTML = `<h1>Shadow Dom</h1>`;
}