import { useState, useEffect } from "react";
import axios from "axios";

const Comparacao = () => {
  const [equipamentos, setEquipamentos] = useState([]);
  const [equipamentoSelecionado, setEquipamentoSelecionado] = useState(null);

  useEffect(() => {
    axios.get("https://backend-seuservico.onrender.com/equipamentos")
      .then(response => setEquipamentos(response.data))
      .catch(error => console.error("Erro ao buscar equipamentos:", error));
  }, []);

  const handleSelect = (event) => {
    const equipamento = equipamentos.find(equip => equip.id === parseInt(event.target.value));
    setEquipamentoSelecionado(equipamento);
  };

  return (
    <div>
      <h1>Comparação de Equipamentos</h1>
      
      <label>Escolha um equipamento:</label>
      <select onChange={handleSelect} defaultValue="">
        <option value="" disabled>Selecione um equipamento</option>
        {equipamentos.map((equip) => (
          <option key={equip.id} value={equip.id}>
            {equip.modelo}
          </option>
        ))}
      </select>

      {equipamentoSelecionado && (
        <div>
          <h2>Detalhes do Equipamento</h2>
          <p><strong>Modelo:</strong> {equipamentoSelecionado.modelo}</p>
          <p><strong>Produção Horária:</strong> {equipamentoSelecionado.prod_hora} m³</p>

          <h3>Produção Diária</h3>
          <p><strong>Máxima:</strong> {equipamentoSelecionado.producao_diaria.max} m³</p>
          <p><strong>Média:</strong> {equipamentoSelecionado.producao_diaria.media} m³</p>
          <p><strong>Mínima:</strong> {equipamentoSelecionado.producao_diaria.minima} m³</p>

          <h3>Produção Mensal</h3>
          <p><strong>Máxima:</strong> {equipamentoSelecionado.producao_mensal.max} m³</p>
          <p><strong>Média:</strong> {equipamentoSelecionado.producao_mensal.media} m³</p>
          <p><strong>Mínima:</strong> {equipamentoSelecionado.producao_mensal.minima} m³</p>
        </div>
      )}
    </div>
  );
};

export default Comparacao;
