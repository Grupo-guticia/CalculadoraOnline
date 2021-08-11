class Calculator {
	constructor(config) {

        //all html elements
		// this.delivery = config.delivery,
		// this.flete = flete,
		this.peso = config.peso;
		this.valor_compra = config.valor_compra,
		this.producto = config.producto,
		this.tramite_aduanal = tramite_aduanal,
		this.cepa = cepa,
		this.impuestos = impuestos,
		this.total_cargos_importacion = total_cargos_importacion,
		// this.comision_por_compra = comision_por_compra,
		this.total = total
	}
	
	get_delivery(){
		let result = "";
		this.delivery.forEach(function(option){
			if(option.checked == true){
				result  = parseFloat(option.value);
            }
            
        });

        return result;
	}

    get_flete_and_manejo(){
		let manejo = "";
		let flete = "";
		if (parseFloat(this.peso.value) >= 0.1 && parseFloat(this.peso.value) <= 2 ){
			flete = 10
			manejo = 0
		}
		else if (parseFloat(this.peso.value) >= 3 && parseFloat(this.peso.value) < 4 ){
			flete = 15;
			manejo = 0;
		}
		else if (parseFloat(this.peso.value) >= 4 && parseFloat(this.peso.value) <= 10 ){
			flete = 5;
			manejo = 11.50;
		}
		else if (parseFloat(this.peso.value) >= 11 && parseFloat(this.peso.value) <= 30 ){
			flete = 5;
			manejo = 23;
		}
		else if (parseFloat(this.peso.value) >= 31 && parseFloat(this.peso.value) <= 49 ){
			flete = 4.5;
			manejo = 34.50;
		}
		else if (parseFloat(this.peso.value) >= 50 && parseFloat(this.peso.value) <= 99 ){
			flete = 2.50;
			manejo = 69;
		}
		else if (parseFloat(this.peso.value) >= 100 && parseFloat(this.peso.value) <= 499 ){
			flete = 2.50;
			manejo = 92;
		}
		else if (parseFloat(this.peso.value) >= 500 && parseFloat(this.peso.value) <= 1000 ){
			flete = 2.50;
			manejo = 138;
		}
		
		return {manejo,flete};
	}

    get_manejo(){
		let manejo = "";
		if (parseFloat(this.peso.value) >= 0.1 && parseFloat(this.peso.value) <= 4 ){
			manejo = 3.25
		}
		else if (parseFloat(this.peso.value) >= 5 && parseFloat(this.peso.value) < 15 ){
			manejo = 3.15;
		}
		else if (parseFloat(this.peso.value) >= 15){
			manejo = 3.0;
		}

		return manejo;
	}
    get_tramite_aduanal(){
		let tramite_aduanal = "";
		if (parseFloat(this.peso.value) >= 0.1 && parseFloat(this.peso.value) <= 99 ){
			tramite_aduanal = 5.65
		}
		else if (parseFloat(this.peso.value) >= 100 && parseFloat(this.peso.value) < 300 ){
			tramite_aduanal = 11.30;
		}
		else if (parseFloat(this.peso.value) >= 301 && parseFloat(this.peso.value) < 500 ){
			tramite_aduanal = 16.95;
		}
		else if (parseFloat(this.peso.value) >= 501 && parseFloat(this.peso.value) < 1000 ){
			tramite_aduanal = 39.55;
		}
		else if (parseFloat(this.peso.value) >= 1001 && parseFloat(this.peso.value) < 3000 ){
			tramite_aduanal = 67.80;
		}

		return tramite_aduanal;
	}

	clean_radios(){
		this.delivery.forEach(function(option){ 
			if(option.checked == true){
				option.checked = false;
			}
		});
	}
	
	clean() {

        
        // this.comision_por_compra.innerHTML = "$0",
		// this.flete.innerHTML = "$0",
		// this.manejo.innerHTML = "$0",
		// this.tramite_aduanal.innerHTML = "$0",
		// this.clean_radios();
		this.impuestos.innerHTML = "$0",
		this.peso.value = "";
		this.valor_compra.value = "";
		this.total_cargos_importacion.innerHTML = "$0",
		this.tramite_aduanal.innerHTML = "$0",
		this.total.innerHTML = "$0"
        this.cepa.innerHTML = "$0",
		this.producto.selectedIndex = 0;
        
		

		Toastify({
            text: "¡Se han limpiado los resultados!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            backgroundColor: "linear-gradient(to right, #28a745, #28a745)",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function(){} // Callback after click
        }).showToast();
	}
	
	validate_form(){
        
        // let {flete,manejo} = this.get_flete_and_manejo()
        
		if (this.peso.value == "" ||this.valor_compra.value == "" || this.producto.value == "" || this.impuestos.value == "" || this.total_cargos_importacion.value == "" ){
			return false;
		}else{
			return true;
		}
	}

	calculate(){

		if (this.validate_form()){
            // let delivery = this.get_delivery();
            // if (delivery == "") delivery = 0; 
            // this.flete.innerHTML = `$${flete.toFixed(2)}`;
			let manejo = this.get_manejo();
			let tramite_aduanal = this.get_tramite_aduanal();
            let cepa = 5.16;             
			let impuesto = parseFloat(this.producto.value) * parseFloat(this.valor_compra.value);
			let cargos_por_importacion = + impuesto + manejo;
            let total = impuesto + cargos_por_importacion  + parseFloat(this.valor_compra.value) ;			
			this.impuestos.innerHTML = `$${impuesto.toFixed(2)}`;
			this.cepa.innerHTML = `$${cepa.toFixed(2)}`;
			this.tramite_aduanal.innerHTML = `$${tramite_aduanal.toFixed(2)}`;
			this.total_cargos_importacion.innerHTML = `$${cargos_por_importacion.toFixed(2)}`;
			this.total.innerHTML = `$${total.toFixed(2)}`;

            Toastify({
                text: "¡Cálculo realizado!",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #28a745, #28a745)",
                stopOnFocus: true, // Prevents dismissing of toast on hover
                onClick: function(){} // Callback after click
            }).showToast();
            
		}else{
			// console.log('error en formulario');
            Toastify({
                text: "¡rellena todos los campos!",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #ffc107, #ffc107)",
                stopOnFocus: true, // Prevents dismissing of toast on hover
                onClick: function(){} // Callback after click
            }).showToast();
		}

		

	}
		
  }
  
  export default Calculator;
  