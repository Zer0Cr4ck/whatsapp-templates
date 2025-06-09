let plantillas = []


const inputTitle=document.querySelector("#template-title");
const inputHashTag=document.querySelector("#template-hashtag");
const inputMessage=document.querySelector("#template-message");
const btnSave= document.querySelector("#save-template-btn");
const btnClear=document.querySelector("#clear-form-btn");




btnSave.addEventListener("click",()=>{
   let valueTitle= inputTitle.value.trim();
   let valueHashTag= inputHashTag.value.trim();
   let valueMessage=inputMessage.value.trim();


   const newTemplate=new Template(valueTitle,valueMessage,valueHashTag);

   //insetamos plantillas

   // //1- Push
   // plantillas.push(newTemplate);
   // console.log(plantillas);


   //2- spread operator
   plantillas=[...plantillas,newTemplate];
   console.log(plantillas);

 

   //vovler a renderizar

   renderizarUi();


})


function eliminarPlantilla(index){
   console.log("estoy en el indice ",index);
   plantillas= plantillas.filter((Element,i) => i !== index);

   console.log(plantillas)
   renderizarUi();
}


function renderizarUi(){
     //renderizar el arreglo dentro de mi contenedor div
   const containerTemplate=document.querySelector("#templates-container");
   //limpiar contenedor
   containerTemplate.innerHTML="";
   // vamos a renderizas

   plantillas.forEach((e,i) => {
      containerTemplate.innerHTML+= `
      <!-- Plantilla de ejemplo 1 -->
                <div class="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 hover:shadow-md">
                    <div class="flex flex-col lg:flex-row lg:items-start gap-4">
                        <div class="flex-1">
                            <div class="flex items-start justify-between mb-3">
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-800 mb-1">${e.titulo}</h3>
                                    <div class="flex gap-2 mb-2">
                                        <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">${e.hashtag}</span>
                                     
                                    </div>
                                </div>
                                <div class="text-xs text-gray-500">
                                    <i class="fas fa-calendar mr-1"></i>
                                    Creado hace 2 días
                                </div>
                            </div>
                            
                            <div class="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                                <p class="text-gray-700 text-sm leading-relaxed">
                                     ${e.mensaje}   
                              

                                </p>
                            </div>
                        </div>
                        
                        <div class="flex flex-row lg:flex-col gap-2 lg:ml-4">
                            <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 flex items-center gap-2 text-sm">
                                <i class="fas fa-copy"></i>
                                <span class="hidden sm:inline">Copiar</span>
                            </button>
                            <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 flex items-center gap-2 text-sm">
                                <i class="fas fa-edit"></i>
                                <span class="hidden sm:inline">Editar</span>
                            </button>
                            <button onclick="eliminarPlantilla(${i})" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 flex items-center gap-2 text-sm">
                                <i class="fas fa-trash"></i>
                                <span class="hidden sm:inline">Eliminar</span>
                            </button>
                        </div>
                    </div>
                </div>
      
      `

      
   });
}








/*
   Quiero crear una instancia de Template

   new Template(titulo, mensaje, hasthag)
*/

/*
   1. Capturar los elementos con los querySelector
    1.1 Validacion de los valores try catch
   2. Crear la instancia => new Template(tituloDOM, mensajeDOM, hasDOM)
   3. Lo inserto a mi arreglo plantillas.

    <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">#nuevos-clientes</span> 
*/