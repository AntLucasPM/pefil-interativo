const infoElement = document.getElementById('info');
const info1 = "Front End Developer";
const info2 = "Entusiasta em IA";

let mostrandoInfo1 = true;

function mudarInfo() {
    if (mostrandoInfo1 === true) {
        infoElement.innerText = info2;
    } else {
        infoElement.innerText = info1;
    }
    mostrandoInfo1 = !mostrandoInfo1;
}