


function createStore(initialStore=[]){

    //ceramos estado principal de mi store
    let state=initialStore;

    //observers => funciones q se encargaran de los cambios

    const listeners=[];

    //metodo para mostrar valor del state
    
    function getState(){
        return state;
    }


    //vfuncion para manipular estado

    function setState(newState){
        state= newState;
    }

    function addTemplate(newTemplate){
      
        //insetar este nuevo elemento en el array state
        const newState=[...state,newTemplate];
        setState(newState);
    }


    function suscribe(listener){
        listeners.push(listener);
        return ()=>{
            //bnsucasmo listener
            const index= listeners.indexOf(listener);
        }
    }



    return {
        getState,
        addTemplate,
        setState
    }

}

const templateStore=createStore();


// para crear una variable de manera glonbar en todos mis archivos

window.templateStore=templateStore;