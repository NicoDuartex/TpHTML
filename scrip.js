// JavaScript para manejar la lógica del cálculo
document.getElementById('calcular').addEventListener('click', function () {
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

document.getElementById('imprimir').addEventListener('click', function () {
    window.print();
});

document.getElementById('exportarPdf').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Presupuestos mecatrónica", 10, 10);
    const form = document.forms['presupuestoForm'];
    const Cliente = form[`cliente`].value;
    doc.text(`Cliente: ${Cliente}`, 10, 20);
    for (let i = 1; i <= 5; i++) {
        const cantidad = form[`cantidad${i}`].value;
        const precioUnitario = form[`precioUnitario${i}`].value;
        const precioTotal = cantidad * precioUnitario;
        doc.text(`Cantidad: ${cantidad}`, 10, i*30 );
        doc.text(`Precio Unitario: ${precioUnitario}`, 50, i*30);
        doc.text(`Precio Total: ${precioTotal}`, 110 , i*30);
    }
    const subtotal = document.getElementById('subtotal').textContent;
    const iva = document.getElementById('iva').textContent;
    const total = document.getElementById('total').textContent;
    const totalAhora12 = document.getElementById("valorCuota12").textContent;
    const totalAhora18 = document.getElementById("valorCuota18").textContent;

    doc.text(`Subtotal: ${subtotal}`, 10, 280);
    doc.text(`IVA: ${iva}`, 10, 270);
    doc.text(`Total: ${total}`, 10, 290);
    doc.text(`Ahora12: ${totalAhora12}`, 10, 250);
    doc.text(`Ahora18: ${totalAhora18}`, 10, 260);

    doc.save('PresupuestoMecatronica.pdf');
});
