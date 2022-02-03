const express = require('express');
const app = express();

let html = '<div class="container-fluid"> <h1>Bienvenido al sitio web</h1> </div>';
app.get("/home", (request, response) => {
    response.send(html);
});
app.post("/login", (request, response) => {
    html += '<div class="container-fluid"><p class="login">Este es el login de usuario.</p></div>';
    response.send(html);
});

app.put("/update", (request, response) => {
    html += '<div class="container-fluid"><p class="texto1">Este es el párrafo 2. Repuesta de la actualización; con el método put.</p></div>';
    response.send(html);
});

app.delete("/delete", (request, response) => {
    html += '<div class="container-fluid"><p class="texto1">Este es el párrafo 3. Respuesta de la petición de borrado; con el método delete.</p></div>';
    response.send(html);
});

app.listen(8085);