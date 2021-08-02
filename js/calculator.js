class Calculator {
	constructor(config) {
		this.peso = config.peso;
		this.valor_compra = config.valor_compra,
		this.producto = config.producto,
		this.delivery = config.delivery,
		this.flete = flete,
		// this.tramite_aduanal = tramite_aduanal,
		// this.cepa = cepa,
		this.impuestos = impuestos,
		this.manejo = manejo,
		this.total_cargos_importacion = total_cargos_importacion,
		// this.comision_por_compra = comision_por_compra,
		this.total = total
	}
    
    get_delivery(){
        let result = "";
		this.delivery.forEach(function(option){ 
			if(option.checked == true){
                result  = parseFloat(option.value)
			}
		});
        return result;
	}

	clean_radios(){
		this.delivery.forEach(function(option){ 
			if(option.checked == true){
				option.checked = false;
			}
		});
	}
	
	clean() {
		console.log('¡se ha limpiado la calculadora!');

		this.peso.value = "";
		this.valor_compra.value = "";

		this.flete.innerHTML = "$0",
		// this.tramite_aduanal.innerHTML = "$0",
		this.impuestos.innerHTML = "$0",
		// this.cepa.innerHTML = "$0",
		this.total_cargos_importacion.innerHTML = "$0",
		// this.comision_por_compra.innerHTML = "$0",
		this.total.innerHTML = "$0"

		this.producto.selectedIndex = 0;
		this.clean_radios();
		

	}
    get_flete_and_manejo(){
        let manejo = 0;
        let flete = 0;
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
            manejo = 69;

        }
        else if (parseFloat(this.peso.value) >= 500 && parseFloat(this.peso.value) <= 1000 ){
            flete = 2.50;
            manejo = 92;

        }
        else if (parseFloat(this.peso.value) >= 500 && parseFloat(this.peso.value) <= 1000 ){
            flete = 2.50;
            manejo = 138;

        }

        return {manejo,flete};
    }

	calculate(){
        let flete_manejo = this.get_flete_and_manejo();

        let delivery = this.get_delivery();

        let impuesto = parseFloat(this.producto.value) * parseFloat(this.valor_compra.value);
        let cargos_por_importacion = flete_manejo.flete + impuesto + flete_manejo.manejo;
        let total = impuesto + cargos_por_importacion + parseFloat(delivery) + parseFloat(this.valor_compra.value) ;

        this.flete.innerHTML = `$${flete_manejo.flete.toFixed(2)}`;
        this.impuestos.innerHTML = `$${impuesto.toFixed(2)}`;
        this.manejo.innerHTML = `$${flete_manejo.manejo.toFixed(2)}`;
        this.total_cargos_importacion.innerHTML = `$${cargos_por_importacion.toFixed(2)}`;
        this.total.innerHTML = `$${total.toFixed(2)}`;

    }
        
  }
  
  export default Calculator;
  