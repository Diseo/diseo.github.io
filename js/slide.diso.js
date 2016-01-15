function setaImagem(){
  	 	var settings = {
  			primeiraImg: function(){
    			elemento = document.querySelector("#slider a:first-child");
    			elemento.classList.add("ativo");
    			elemento.nextElementSibling.classList.add("proximo");
  			},
  			
  			slide: function(){
			    elemento = document.querySelector(".ativo");
			    if(elemento.nextElementSibling){
			    	if(elemento.previousElementSibling){
			        	elemento.nextElementSibling.classList.remove("proximo");    	
			        	elemento.nextElementSibling.classList.add("ativo");
			        	elemento.classList.remove("ativo");
			        	elemento.classList.add("anterior");        				    			        
			        	elemento.previousElementSibling.classList.remove("anterior");
			        	if (elemento.nextElementSibling.nextElementSibling) {
			        		elemento.nextElementSibling.nextElementSibling.classList.add("proximo");
			        	}else{
			        		document.querySelector("#slider a:first-child").classList.add("proximo");
			        	}
			        }
			        else{			        	
			        	elemento.nextElementSibling.classList.remove("proximo");    	
			        	elemento.nextElementSibling.classList.add("ativo");
			        	elemento.classList.remove("ativo");
			        	elemento.classList.add("anterior");
			        	document.querySelector("#slider a:last-child").classList.remove("anterior");
			        	if (elemento.nextElementSibling.nextElementSibling) {
			        		elemento.nextElementSibling.nextElementSibling.classList.add("proximo");
			        	}else{
			        		document.querySelector("#slider a:first-child").classList.add("proximo");
			        	}
			        }
			    }
			    else{
			        document.querySelector("#slider a:first-child").classList.remove("proximo");
			        document.querySelector("#slider a:first-child").classList.add("ativo");
			        elemento.classList.remove("ativo");
			        elemento.classList.add("anterior");
			        document.querySelector("#slider a:nth-child(2)").classList.add("proximo");
			        document.querySelector("#slider a:last-child").previousElementSibling.classList.remove("anterior");
    			}
    		},

			proximo: function(){
				clearInterval(intervalo);
				settings.slide();		
			},

			anterior: function(){
				clearInterval(intervalo);
				elemento = document.querySelector(".ativo");

				if(elemento.nextElementSibling){
			    	if(elemento.previousElementSibling){
			        	elemento.nextElementSibling.classList.remove("proximo");
			        	elemento.classList.remove("ativo");
			        	elemento.classList.add("proximo");        				    			        
			        	elemento.previousElementSibling.classList.remove("anterior");
			        	elemento.previousElementSibling.classList.add("ativo");
			        	if (elemento.previousElementSibling.previousElementSibling) {
			        		elemento.previousElementSibling.previousElementSibling.classList.add("anterior");
			        	}else{
			        		document.querySelector("#slider a:last-child").classList.add("anterior");
			        	}
			        }
			        else{			        	
			        	elemento.nextElementSibling.classList.remove("proximo");
			        	elemento.classList.remove("ativo");
			        	elemento.classList.add("proximo");
			        	document.querySelector("#slider a:last-child").classList.remove("anterior");
			        	document.querySelector("#slider a:last-child").classList.add("ativo");
			        	document.querySelector("#slider a:last-child").previousElementSibling.classList.add("anterior");      	
			        }
			    }
			    else{
			        document.querySelector("#slider a:first-child").classList.remove("proximo");
			        elemento.classList.remove("ativo");
			        elemento.classList.add("proximo");
			        document.querySelector("#slider a:last-child").previousElementSibling.classList.remove("anterior");
			        document.querySelector("#slider a:last-child").previousElementSibling.classList.add("ativo");			        
			        document.querySelector("#slider a:last-child").previousElementSibling.previousElementSibling.classList.add("anterior");
    			}
    		},
    		mouseOver: function(){
    			clearInterval(intervalo);
    		},
    		mouseOut: function(){
    			intervalo = setInterval(settings.slide,4000);
    		}
			 			
 		}

		//chama o slide
		settings.primeiraImg();
		  
		//chama o slide à um determinado tempo
		var intervalo = setInterval(settings.slide,4000);

		document.querySelector(".next").addEventListener("click",settings.proximo,false);
		document.querySelector(".prev").addEventListener("click",settings.anterior,false);

		if('DOMContentLoaded'){	
			document.querySelector("figure").addEventListener("mouseover",settings.mouseOver,false);
			document.querySelector("figure").addEventListener("mouseout",settings.mouseOut,false);
		}
		document.getElementById("fig").style.left="0";
  	}
    window.addEventListener("load",setaImagem,false);