const nombre = "Dona";
const edad = 20;

const Chopper = {
    raza: "reno",
    noPatas: 4,
    puedeHablar: true,
    color: "cafecito"
}

Chopper.color = "cafe clarito"
//alert('Hola Mundo :3',nombre,edad)
console.log("HOLA MUNDO")

let nom = document.getElementById('nom');

let typewriter = new Typewriter(nom, {
    loop: true
});

typewriter.typeString('¡Hola! Soy Dona')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Bienvenid@ a mi Portafolio')
    .pauseFor(2500)
    .start();