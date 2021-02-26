// form input labels is what JS is being used for here
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('') //changes the letters of the label into array
        //manipulate the array(turn into something else) array of letters with span around & transition delay
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('') //turns the array back into a string
})