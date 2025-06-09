function createStore(initialStore = []) {
  // Vamos a crear el estado principal de mi Store
  let state = initialStore;
  // Observers => Funciones que se encargaran de los cambios
  const listeners = [];

  // Vamos a usar un metodo para mostrar el valor del state
  function getState() {
    return state;
  }

  // Esta funcion se va encargar de manipular el nuevo estado
  function setState(newState) {
    state = newState;
    // cuando el estado cambie vamos a llamar a las funciones que fueron suscritas
    // para eso se require iterar el arreglo listeners
    listeners.forEach(function (listener) {
      listener(state);
    });
  }

  function addTemplate(newTemplate) {
    // Insertar este nuevo elemento en el array state
    //  ... => Spread operator, que nos permite copiar el contenido de un array
    const newState = [...state, newTemplate];
    setState(newState);
  }

  function suscribe(listener) {
    listeners.push(listener);
    // aseguramos que no se suscriban 2 listener iguales
    return () => {
      // buscar el listener
      const index = listeners.indexOf(listener);
      // retorna la posicion (index)
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }

  return {
    getState,
    addTemplate,
    setState,
    suscribe,
  };
}

const templateStore = createStore(getPersistenceData());

// Para crear una variable de manera global en todos mis archivos
window.templateStore = templateStore;
