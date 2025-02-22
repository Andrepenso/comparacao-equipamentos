import { useState, useEffect } from "react";
import axios from "axios";

const Comparacao = () => {
  const [equipamentos, setEquipamentos] = useState([]);
  const [equipamentoSelecionado, setEquipamentoSelecionado] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/equipamentos")
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
          <p><strong>Capacidade:</strong> {equipamentoSelecionado.capacidade} m³</p>
          <p><strong>Valor:</strong> R$ {equipamentoSelecionado.valor.toLocaleString()}</p>

          <h3>Produção</h3>
          <p><strong>Produção Horária:</strong> {equipamentoSelecionado.prod_hora} m³</p>
        </div>
      )}
    </div>
  );
};

export default Comparacao;
