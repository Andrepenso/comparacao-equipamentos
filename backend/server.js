const express = require("express");
const cors = require("cors");
const equipamentoRoutes = require("./routes/equipamentoRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/equipamentos", equipamentoRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
