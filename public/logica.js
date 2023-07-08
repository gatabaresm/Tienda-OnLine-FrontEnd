var boton = document.getElementById("ejemplo");
console.log(boton.innerHTML);

function changeText (text) {
    if (boton.innerHTML) {
        boton.innerHTML = null;
    } else {
        boton.innerHTML = text
    }
}
