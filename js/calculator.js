class Calculator {
	constructor(config) {
		this.peso = config.peso;
		this.valor_compra = config.valor_compra,
		this.producto = config.producto,
		this.delivery = config.delivery,
		this.flete = flete,
		this.tramite_aduanal = tramite_aduanal,
		this.impuestos = impuestos,
		this.cepa = cepa,
		this.total_cargos_importacion = total_cargos_importacion,
		this.comision_por_compra = comision_por_compra,
		this.total = total
	//   this._initPlugins();
	}
	// _initPlugins() {
	//   const player = {
	//     play: () => this.play(),
	//     pause: () => this.pause(),
	//     media: this.media,
	//     get muted() {
	//       return this.media.muted;
	//     },
	//     set muted(value) {
	//       this.media.muted = value;
	//     },
	//   };
	//   this.plugins.forEach(plugin => {
	//     plugin.run(player);
	//   });
	// }

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
		this.tramite_aduanal.innerHTML = "$0",
		this.impuestos.innerHTML = "$0",
		this.cepa.innerHTML = "$0",
		this.total_cargos_importacion.innerHTML = "$0",
		this.comision_por_compra.innerHTML = "$0",
		this.total.innerHTML = "$0"

		this.producto.selectedIndex = 0;
		this.clean_radios();
		

	}

	
  }
  
  export default Calculator;
  