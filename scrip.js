// JavaScript para manejar la lógica del cálculo
console.log("Archivo JavaScript cargado"); // Verifica que se carga correctamente

document.getElementById('calcular').addEventListener('click', function () {
    console.log("Botón Calcular presionado"); // Verifica que se ejecuta
    const form = document.forms['presupuestoForm'];
    let subtotal = 0;

    for (let i = 1; i <= 5; i++) {
        const cantidad = form[`cantidad${i}`].value;
        const precioUnitario = form[`precioUnitario${i}`].value;
        const precioTotal = cantidad * precioUnitario;

        if (precioTotal > 0) {
            form[`precio${i}`].value = precioTotal.toFixed(2);
            subtotal += parseFloat(precioTotal);
        }
    }

    const iva = subtotal * 0.21;
    const total = subtotal + iva;
    const cuota12 = total / 12;
    const cuota18 = (total * 1.35) / 18;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('iva').textContent = iva.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('valorCuota12').textContent = cuota12.toFixed(2);
    document.getElementById('valorCuota18').textContent = cuota18.toFixed(2);
});

// Evento para imprimir presupuesto
document.getElementById('imprimir').addEventListener('click', function () {
    console.log("Botón Imprimir presionado"); // Verifica que se ejecuta
    window.print();
});
