
var ajena=0.0;
var subTotal=0.0; 
var porcentaje=0;
var t=0.0;
var price;
var imp=0;
var total=0.0;
var flete=0.0;
var impuesto=0.0;
var totalapagar=0.0;

var afecta=0.0;
var honorarios=0.0;
var seguro=0.0;
var impS=0.0;
var costoLibra=0.0;
var tramite=0.0;
var manejo=0.0;
var factura=0.0;
var libras=0.0;
var v1=0.0;
var seguro=0.0;
var cif=0.0;
var imp1=0.0;
var imp2=0.0;
var imp3=0.0;
var imp4=0.0;

function limpiar(){
	$('#flete').text("$0.00"); 
	$('#manejo').text("$0.00"); 
	$('input[name=libras], input[name=factura]').val('');
	$('#impuesto').text("$0.00"); 
	$('#totalPagar').text("$0.00");
	$('#impuestoEst').text("$0.00");
	$('#Cimpuesto').prop('selectedIndex',0);
}

function calcular(){
	console.log('calculo')
   	var libras = $('input[name=libras]').val()-0;
   	factura= $('input[name=factura]').val()-0;
  	if( libras ===0 || libras ===" " || factura ===0 || factura ===" " || $('#Cimpuesto option:selected').text()==="Escoja una categoría" ){
		alert("Ingrese datos correctos ");
		$('#totalPagar').text("$0.00");
		$('#flete').text("$0.00"); 
		$('#manejo').text("$0.00"); 
		$('#impuestoEst').text('$0.00'); 
		console.log('calculo2')
	}
  	else{
		if( $.isNumeric(factura)===true && $.isNumeric(libras)===true){
			console.log('verificar')
			if (libras>=1 && libras <=4){
				manejo = 3.25
				console.log('verificar1',manejo);
			}
			else if(libras>=5 && libras<15){
				manejo = 3.15
				console.log('verificar2',manejo);
			}else{
				manejo = 3

				console.log('verificar3',manejo);
			}

			flete=libras*3.50;   
			$('#flete').text('$ '+flete.toFixed(2));
			$('#manejo').text('$ '+manejo.toFixed(2));

			porcentaje=$('#Cimpuesto').val();
			
			var fields = porcentaje.split(',');
			var dai = fields[0];
			var isc = fields[1];
			var isv = fields[2];
			v1=libras*1;
			cif=v1+factura;
			imp1=cif*dai+cif;
			imp2=imp1*isc+imp1;
			imp3=imp2*isv+imp2;
			imp4=cif*porcentaje;
			impuestoEstimado=imp4;
			totalapagar=flete+manejo+impuestoEstimado;
			console.log("impuestoEstimado "+impuestoEstimado+" Porcentaje "+porcentaje+" CIF "+cif );

			$('#impuestoEst').text('$ '+impuestoEstimado.toFixed(2));
			$('#totalPagar').text('$ '+totalapagar.toFixed(2));
		}
		else{
			alert("Los valores deben ser numéricos");
			$('input[name=libras], input[name=factura]').val('');
		}
   	
	}
}