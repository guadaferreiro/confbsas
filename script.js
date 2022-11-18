
const compra = document.getElementById ('btn-comprar').addEventListener('click', () => {
    const items = document.getElementById ('categorias').value;
    console.log(items);

    const nombre = document.getElementById ('nombre').value;
    console.log(nombre);

    const apellido = document.getElementById ('apellido').value;
    console.log(apellido);

    const email = document.getElementById ('email').value;
    console.log(email);

    const cantidad = document.getElementById ('cant').value;
    console.log(cantidad);

    let valores = document.getElementById ('categorias');
    let selected = valores.options [valores.selectedIndex].text;
    console.log(selected);

    function descEstudiantes(){
    let precioEntrada = 200;
    let estudiante = 80;
    let junior = 15;
    let trainee = 50;
    let total, total2, total3;

    function porcentaje () {
        estudiante = (parseInt(precioEntrada) * parseInt(estudiante)) / 100;
        junior = (parseInt(precioEntrada) * parseInt(junior)) / 100;
        trainee = (parseInt(precioEntrada) * parseInt(trainee)) / 100;
    }
    porcentaje()

    if (selected === "Estudiante") {
        total = parseInt(precioEntrada) - parseInt(estudiante);
        console.log(total);
        alert ("El total de tu compra es de " + total)
    }

    if (selected === "Trainee") {
        total3 = parseInt(precioEntrada) - parseInt(trainee);
        console.log(total3);
        alert ("El total de tu compra es de " + total3)
    }

    if (selected === "Junior") {
        total2 = parseInt(precioEntrada) - parseInt(junior);
        console.log(total2);
        alert ("El total de tu compra es de " + total2)
    }
}

descEstudiantes()

});