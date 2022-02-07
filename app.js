const express = require('express');
const app = express();

let isLogin = () => true;
let logger = (request, response, next) => {
    console.log("La petición es: %s", request.method );
    next();
};
let showIp = (request, response, next) => {
    var ip = request.connection.remoteAddress;
    console.log("La IP es: " + ip );
    next();
};

let html = '<div class="container-fluid"> <h1>Bienvenido al sitio web</h1> <br> <p>Sección publica.</p> </div>';
app.use((request, response, next) => {    
    if(isLogin){
        next();
    }
    else{
        html += '<div class="container-fluid"> <p>No estas autorizado.</p> </div>';
        response.send(html);
    }
}, showIp );

app.use(logger);

app.get("/", (request, response) => {
    response.send(html);
});

app.get("/home", (request, response) => {
    html = '<div class="container-fluid"> <h1>Bienvenido al sitio web</h1> </div>';
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

app.listen(8085, () => {
    console.log("Ejemplo de Rest Api, esperando en el puerto: 8085.");
});