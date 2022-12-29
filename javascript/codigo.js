const enero = document.querySelector(".enero");
const febrero = document.querySelector(".febrero");
const marzo = document.querySelector(".marzo");
const abril = document.querySelector(".abril");
const mayo = document.querySelector(".mayo");
const junio = document.querySelector(".junio");
const julio = document.querySelector(".julio");
const agosto = document.querySelector(".agosto");
const septiembre = document.querySelector(".septiembre");
const octubre = document.querySelector(".octubre");
const noviembre = document.querySelector(".noviembre");
const diciembre = document.querySelector(".diciembre");

const array = [enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre];
const dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

const contDias = document.createDocumentFragment();

for(let j = 0;j < 12;j++){
    for(let i = 0; i < 7; i++){
        const div = document.createElement("DIV");
        div.classList.add("meses__text-dias");
        div.textContent = dias[i];
        contDias.appendChild(div);
    }
    array[j].appendChild(contDias);
}

const cont = document.createDocumentFragment();

for(let j = 0; j < 12; j++){
let c = 1;
    for(let i = 0 ; i < 42 ; i++){
        const div = document.createElement("DIV");
        div.classList.add("meses__num-dias");
        if(j == 0 || j == 9){
            if(i > 4 && c <= 31){
                div.textContent = c;
                c++;
            }        
        }
        if(j == 1){
            if(i > 0 && c <= 28){
                div.textContent = c;
                c++;
            }  
        }
        if(j == 2){
            if(i > 0 && c <= 31){
                div.textContent = c;
                c++;
            }  
        }
        if(j == 3){
            if(i > 3 && c <= 30){
                div.textContent = c;
                c++;
            }  
        }
        if(j == 4){
            if(i > 5 && c <= 31){
                div.textContent = c;
                c++;
            } 
        }
        if(j == 5){
            if(i > 1 && c <= 30){
                div.textContent = c;
                c++;
            } 
        }
        if(j == 6){
            if(i > 3 && c <= 31){
                div.textContent = c;
                c++;
            } 
        }
        if(j == 7){
            if(i >= 0 && c <= 31){
                div.textContent = c;
                c++;
            } 
        }
        if(j == 8){
            if(i > 2 && c <= 30){
                div.textContent = c;
                c++;
            } 
        }
        if(j == 10){
            if(i > 0 && c <= 30){
                div.textContent = c;
                c++;
            } 
        }
        if(j == 11){
            if(i > 2 && c <= 31){
                div.textContent = c;
                c++;
            } 
        }
        cont.appendChild(div);
    }
    array[j].addEventListener("click",()=>{
        alert("mes");
    });
    array[j].appendChild(cont);
}