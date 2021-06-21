require("dotenv").config();

const express = require("express");
const cors = require("cors");

// Crear el servidor express
const app = express();

//  Configurar CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Directorio publico
app.use(express.static("public"));

// Credenciales
// mean_user
// OgOx0m2osK58vsRa

// Rutas

// app.get("/", (req, res) => {
//     const gse = require("general-search-engine");

//     async function main() {
//         let petition = await new gse.search().setType("image").setQuery("steph curry nba headshot").setOptions().run();
//         img = petition[0];
//         console.log(petition);
//         res.json({
//             img,
//         });
//     }

//     main();
// });

app.use("/api/search", require("./routes/search.route"));

app.listen(process.env.PORT, () => {
    console.log("Server running on port: " + process.env.PORT);
});
