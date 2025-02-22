const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para permitir requisições de qualquer origem (CORS)
app.use(cors({ origin: "*" }));

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());


// Rota para obter todos os equipamentos
app.get("/equipamentos", (req, res) => {
  console.log("✅ GET /equipamentos - Enviando lista de equipamentos");
  res.json(equipamentos);
});

// Rota para testar se o backend está rodando
app.get("/", (req, res) => {
  res.send("🚀 Backend rodando com sucesso!");
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
