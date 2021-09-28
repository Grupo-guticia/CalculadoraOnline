class Calculator {
	constructor(config) {

		this.peso = config.peso;
		this.flete = config.flete;
		this.valor_compra = config.valor_compra,
		this.producto = config.producto,
        this.delivery = config.delivery,
		this.tramite_aduanal = tramite_aduanal,
		this.cepa = cepa,
		this.impuestos = impuestos,
		this.total_cargos_importacion = total_cargos_importacion,
		this.total = total
        
	}
    clean_radios(){
		this.delivery.forEach(function(option){ 
			if(option.checked == true){
				option.checked = false;
			}
		});
	}

    clean() {
        this.flete.innerHTML = "$0"
		this.impuestos.innerHTML = "$0",
		this.peso.value = "";
		this.valor_compra.value = "";
		this.total_cargos_importacion.innerHTML = "$0",
		this.tramite_aduanal.innerHTML = "$0",
		this.total.innerHTML = "$0"
        this.cepa.innerHTML = "$0",
		this.producto.selectedIndex = 0;
        this.clean_radios();
        
		Toastify({
            text: "¡Se han limpiado los resultados!",
            duration: 3000,
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
                
		if (this.peso.value == "" ||this.valor_compra.value == "" || this.producto.value == "" || this.impuestos.value == "" || this.total_cargos_importacion.value == "" ){
			return false;
		}else{
			return true;
		}
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

    get_seguro_adicional(){
        let seguro_adicional=0
        let base = 1.4
        if(parseFloat(this.valor_compra.value) < 1000){
            seguro_adicional=base;
        }else{
            let millar=parseFloat(this.valor_compra.value)/1000
            seguro_adicional=Math.trunc( millar*base );
        }

        return seguro_adicional;
    }

    get_tramite_aduanal(){
		let tramite_aduanal = 0;
		if (parseFloat(this.valor_compra.value) >= 0.1 && parseFloat(this.valor_compra.value) <= 99 ){
			tramite_aduanal = 5
		}
		else if (parseFloat(this.valor_compra.value) >= 100 && parseFloat(this.valor_compra.value) <= 300 ){
			tramite_aduanal = 10;
		}
		else if (parseFloat(this.valor_compra.value) >= 301 && parseFloat(this.valor_compra.value) <= 500 ){
			tramite_aduanal = 15;
		}
		else if (parseFloat(this.valor_compra.value) >= 501 && parseFloat(this.valor_compra.value) <= 1000 ){
			tramite_aduanal = 35;
		}
		else if (parseFloat(this.valor_compra.value) >= 1001 && parseFloat(this.valor_compra.value) <= 3000 ){
			tramite_aduanal = 65;
		}

		return tramite_aduanal;
	}

    get_flete(){
		let flete = 0
		if (parseFloat(this.peso.value) >= 0.1 && parseFloat(this.peso.value) <= 4 ){
			flete = 4.25
		}
		else if (parseFloat(this.peso.value) >= 5 && parseFloat(this.peso.value) < 15 ){
			flete = 4.15;
		}
		else if (parseFloat(this.peso.value) >= 15){
			flete = 4;
		}

		return flete;
	}

	get_recargo_por_sobrepeso(){
        let recargo_por_sobrepeso = 0;
        let base=25;
        let precio=0.20;
		if (parseFloat(this.peso.value) > 25){
            let resta = this.peso.value-base;
			recargo_por_sobrepeso = resta*precio;
		}
		return recargo_por_sobrepeso;
	}

    show_results(impuesto,cepa,tramite_aduanal,cargos_por_importacion,total,flete){
        
        this.impuestos.innerHTML = `$${impuesto}`;
        this.cepa.innerHTML = `$${cepa}`;
        this.tramite_aduanal.innerHTML = `$${tramite_aduanal}`;
        this.total_cargos_importacion.innerHTML = `$${cargos_por_importacion}`;
        this.total.innerHTML = `$${total}`;
        this.flete.innerHTML = `$${flete}`;

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
    }

    show_errors(){
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

	calculate(){
		if (this.validate_form()){
            
            let delivery = this.get_delivery();
            let recargo_por_sobrepeso=this.get_recargo_por_sobrepeso()

            console.log('RECARGO POR SOBREPESO',recargo_por_sobrepeso)

            if (delivery == "") delivery = 0; 

            const cepa = 5.16;
             //condicion de que si es persona natural no deberia ser 0
            const impuesto_sobre_venta = 0.13;
            let tramite_aduanal = this.get_tramite_aduanal();
            let prima_seguro = parseFloat(this.valor_compra.value) * 0.015;
            let flete = parseFloat(this.peso.value) * this.get_flete();

            let cif = (parseFloat(this.valor_compra.value) + flete) + prima_seguro ;
            const dai = cif * 0.15;

            let iva = (cif + dai) * impuesto_sobre_venta;
            
			let impuesto = iva+dai;
            let costo_por_seguro_adicional=this.get_seguro_adicional();
			let cargos_por_importacion = flete + tramite_aduanal + impuesto + cepa + costo_por_seguro_adicional + delivery + recargo_por_sobrepeso;
            let total = cargos_por_importacion  + parseFloat(this.valor_compra.value) ;			
			

            this.show_results(impuesto.toFixed(2),cepa.toFixed(2),tramite_aduanal.toFixed(2),cargos_por_importacion.toFixed(2),total.toFixed(2),flete.toFixed(2));
            
		}else{
            this.show_errors()
		}

		

	}
		
  }
  
  export default Calculator;
  