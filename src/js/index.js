
import Calculator from "./calculator.js";

(function () {
	//
	// Variables
	//
	const peso = document.getElementById("peso_libras");
	const valor_compra = document.getElementById("valor_compra");
	const producto = document.getElementById("producto");
	const delivery = document.getElementsByName("radioDelivery");

	const flete = document.getElementById("flete")
    const impuestos = document.getElementById("impuestos")
    const manejo = document.getElementById("manejo")
	// const tramite_aduanal = document.getElementById("tramite_aduanal")
	
	// const cepa = document.getElementById("cepa")
	const total_cargos_importacion = document.getElementById("total_cargos_importacion")
	const comision_por_compra = document.getElementById("comision_por_compra")
	const total = document.getElementById("total")

	const calcular = document.getElementById("calcular");
	const limpiar = document.getElementById("limpiar");
	
	//
	// Methods
	//


	limpiar.onclick = () => {
        calculator.clean();
    };
	calcular.onclick = () => {
        calculator.calculate();
    };
    


	//
	// Inits & Event Listeners
	//
    
	const calculator = new Calculator({
		peso: peso,
		valor_compra: valor_compra,
		producto: producto,
		delivery: delivery,
		flete: flete,
		// tramite_aduanal: tramite_aduanal,
		impuestos: impuestos,
		// cepa:cepa,
		total_cargos_importacion:total_cargos_importacion,
		comision_por_compra:comision_por_compra,
		total:total

	});

})();