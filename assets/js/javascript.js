function agregarFruta() {// Se declara la función agregarFruta que mostrará los elementos agregados por el usuario
  var fruta = document.getElementById("fruta").value;// Se declara la variable fruta que guarda el valor que se obtiene del elemento del html mediante el id = fruta
  console.log(fruta);// Se comprueba el valor de la variable fruta (para que concuerde con el valor introducido por el usuario)
  agregarElemento(fruta);//Se manda llamar la función agregarElemento y se pasa como parametro la variable fruta
}

function agregarElemento(fruta){// Se declara la función agregarElemento que se encarga de agregar elementos a la lista con el id = lista del html
  var elemento = "<li>"+ fruta+ "</li>";// Se declara la variable elemento que crea el elemento <li> por cada fruta agregada por el usuario
  document.getElementById("lista").innerHTML += elemento ;// Se concatena el valor de la variable elemento dentro de la lista del html
  document.getElementById("fruta").value = "";// Se limpia el contenido de la caja de texto
}
