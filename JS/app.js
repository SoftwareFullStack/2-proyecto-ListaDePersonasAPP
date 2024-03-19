const personas = [];

function mostrarPersonas() {
  console.log("MOSTRAR PERSONAS");
  let texto = "";
  for (let persona of personas) {
    console.log("persona");
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;

  if (nombre !== "" && apellido !== "") {
    const nuevaPersona = new persona(nombre, apellido);
    personas.push(nuevaPersona);
    mostrarPersonas();

    // VACIAR LOS CAMPOS DEL FORMULARIO
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
  } else {
    alert("No se agregaron datos");
  }
}
