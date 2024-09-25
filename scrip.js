
        // JavaScript para manejar la lógica del cálculo
        document.getElementById('calcular').addEventListener('click', function () {
            const form = document.forms['presupuestoForm'];
            // Obtiene el formulario para manipular sus elementos
            let subtotal = 0;
            // Inicializa la variable subtotal

            for (let i = 1; i <= 5; i++) {
                // Itera sobre los 5 productos
                const cantidad = form[`cantidad${i}`].value;
                const precioUnitario = form[`precioUnitario${i}`].value;
                // Obtiene la cantidad y el precio unitario del producto actual
                const precioTotal = cantidad * precioUnitario;
                // Calcula el precio total del producto

                if (precioTotal > 0) {
                    form[`precio${i}`].value = precioTotal.toFixed(2);
                    // Establece el precio total en el campo correspondiente
                    subtotal += parseFloat(precioTotal);
                    // Suma el precio total al subtotal
                }
            }

            const iva = subtotal * 0.21;
            // Calcula el IVA del subtotal
            const total = subtotal + iva;
            // Calcula el total sumando el IVA al subtotal
            const cuota12 = total / 12;
            const cuota18 = (total * 1.35) / 18;
            // Calcula las cuotas para 12 y 18 meses

            document.getElementById('subtotal').textContent = subtotal.toFixed(2);
            document.getElementById('iva').textContent = iva.toFixed(2);
            document.getElementById('total').textContent = total.toFixed(2);
            document.getElementById('valorCuota12').textContent = cuota12.toFixed(2);
            document.getElementById('valorCuota18').textContent = cuota18.toFixed(2);
            // Muestra los resultados calculados en la interfaz
        });

        document.getElementById('imprimir').addEventListener('click', function () {
            window.print();
            // Abre el cuadro de diálogo de impresión
        });
    