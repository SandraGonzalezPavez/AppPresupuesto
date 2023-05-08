let totalGastos = 0;
let id = 0;
let arrayGastos = [];

const getId = () => {
    id++;
    return id;
}
function inputPresupuesto(presupuesto) {
    const presupuestoElemento = document.getElementById('presupuesto').value;
    presupuestoElemento.innerText = presupuesto;;
 document.getElementById('presupuestoInicial').innerText = presupuestoElemento;
   
    
}

const getGastoObj = (nombre, cantidad) => {
    const NewGasto = {
        id: getId(),
        nombre: nombre,
        cantidad: parseInt(cantidad)
    }
    return JSON.parse(JSON.stringify(NewGasto));
}
const addtotal = (total) => {
    const tbody = document.getElementById('resultado');
    tbody.innerHTML += `<tr id="elemento${total.totalpresupuesto}">
        <td>${total.totalpresupuesto}</td>
        <td>${total.gastoRealizado}</td>
        <td>${total.saldo}</td>     
    </tr> `;
};


const ingresarGasto = (Gasto) => {
    const tbody = document.getElementById('contenido');
    tbody.innerHTML += `<tr id="elemento${Gasto.id}">
        <td>${Gasto.id}</td>
        <td>${Gasto.nombre}</td>
        <td>${Gasto.cantidad}</td> 
        <td>
            <a href="#" onclick="borrarGasto(${Gasto.id})" ><i class="bi bi-trash"></i></a>
        </td>
    </tr> `;
}

const inputGasto = () => {
    let gastoNombre = document.getElementById("ingresoNombre").value;
    let gastoCantidad = document.getElementById("ingresoCantidad").value;

    let Gasto = getGastoObj(gastoNombre, gastoCantidad);
    
    totalGastos += Gasto.cantidad;
    

    arrayGastos.push(Gasto);
    
    document.getElementById('gastoRealizado').innerText = totalGastos;

    ingresarGasto(Gasto);
}

const borrarGasto = (id) => {
    

    arrayGastos = arrayGastos.filter((gasto) => {
        if (gasto.id == id) {
            let filaABorrar = document.getElementById("elemento" + gasto.id);
            filaABorrar.remove();
            return false;
        }
        return true;
    });

    totalGastos = arrayGastos.reduce((total, valor) => total + valor.cantidad, 0);
    document.getElementById('gastoRealizado').innerText = totalGastos;
}