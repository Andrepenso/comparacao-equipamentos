const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Ativar CORS para permitir requisições do frontend
app.use(cors({ origin: "*" }));
app.use(express.json());

// Importando as rotas corretamente
try {
  const equipamentoRoutes = require("./routes/equipamentoRoutes");
  app.use("/equipamentos", equipamentoRoutes);
} catch (error) {
  console.error("Erro ao carregar as rotas:", error);
}

// Rota para testar se o backend está rodando
app.get("/", (req, res) => {
  res.send("🚀 Backend rodando com sucesso!");
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
