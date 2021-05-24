const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
const color = document.querySelector('.color')
const btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>{
    color.textContent = makeRandColor()
    document.body.style.backgroundColor = makeRandColor()
})

