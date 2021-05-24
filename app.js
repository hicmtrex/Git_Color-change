const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const genrate = Math.floor(Math.random() * hex.length)
const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

btn.addEventListener('click', ()=>{
    //get random number between 0-3 color[3]
        let hexColor = '#';
        for(let i = 0; i < 6; i++){
            const picknum = Math.floor(Math.random() * hex.length)
          hexColor += hex[picknum]
        }
        color.textContent = hexColor
        document.body.style.backgroundColor = hexColor
    })
