const items = document.getElementById ('categorias');
const nombre = document.getElementById ('nombre');
const apellido = document.getElementById ('apellido');
const email = document.getElementById ('email');
const cantidad = document.getElementById ('cant');

let div = document.getElementById ('total');

let form = document.getElementById('form').addEventListener ('submit', (e) => {
    e.preventDefault();
})

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
        div.innerHTML = `
            <div>
                <div class="col-12 alert alert-primary">
                    <p>El total de tu compra es de $${total}</p>
                </div>
            </div> 
        `
    }

    if (selected === "Trainee") {
        total3 = parseInt(precioEntrada) - parseInt(trainee);
        console.log(total3);
        div.innerHTML = `
            <div>
                <div class="col-12 alert alert-primary">
                    <p>El total de tu compra es de $${total3}</p>
                </div>
            </div> 
        `
    }

    if (selected === "Junior") {
        total2 = parseInt(precioEntrada) - parseInt(junior);
        console.log(total2);
        div.innerHTML = `
            <div>
                <div class="col-12 alert alert-primary">
                    <p>El total de tu compra es de $${total2}</p>
                </div>
            </div> 
        `
    }
}

descEstudiantes()

});

const btnBorrar = document.getElementById('btn-borrar').addEventListener('click', () => {
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidad.value = "";
    items.value = "";
    
    function ocultar(){
        document.getElementById('total').style.display = 'none';
        }

    ocultar();
});