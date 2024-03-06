const datos = [];

window.onload = function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((persona, index) => {
        const edadAleatoria = Math.floor(Math.random() * 50 + 18);
        datos.push({
          nombre: persona.name,
          edad: edadAleatoria,
          usuario: persona.username,
          telefono: persona.phone,
          email: persona.email,
          compañia: persona.company.name,
          direccion: {
            calle: persona.address.street,
            numero: persona.address.suite,
            ciudad: persona.address.city,
            cp: persona.address.zipcode,
          },
        });

        const contenedor = document.getElementById("listaUsuarios");

        const listaInfo = document.createElement("li");
        const fondo = document.createElement("div");
        const datos1 = document.createElement("div");
        const datos2 = document.createElement("div");
        const imagen = document.createElement("img");

        listaInfo.classList.add("listaInfo");
        fondo.classList.add("fondo");
        datos1.classList.add("datos1");
        datos2.classList.add("datos2");
        imagen.classList.add("imagen");

        contenedor.appendChild(listaInfo);
        listaInfo.appendChild(fondo);
        fondo.appendChild(datos1);
        fondo.appendChild(datos2);
        fondo.appendChild(imagen);

        datos1.innerHTML = `
        <p>Nombre: ${persona.name}</p>
        <p>Edad: ${edadAleatoria}</p>
        <p>Nombre de usuario: ${persona.username}</p>
        <p>Teléfono: ${persona.phone}</p>
        <p>Email: ${persona.email}</p>
        `;

        datos2.innerHTML = `
        <p>Empresa: ${persona.company.name}</p>
        <p>Dirección: ${persona.address.street}, ${persona.address.suite}, ${persona.address.city}</p>
        `;

        imagen.src = `assets/img/${index + 1}.jpeg`;
        imagen.alt = `Imagen de ${persona.name}`;
      });

      console.log(datos);
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
};
