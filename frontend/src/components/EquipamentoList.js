import { useEffect, useState } from "react";
import axios from "axios";

const EquipamentoList = () => {
  const [equipamentos, setEquipamentos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://backend-equipamentos.onrender.com/equipamentos")
      .then(response => {
        setEquipamentos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar equipamentos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Lista de Equipamentos</h2>
      <ul>
        {equipamentos.length > 0 ? (
          equipamentos.map((equip) => (
            <li key={equip.id}>
              <strong>Modelo:</strong> {equip.modelo} | 
              <strong> Capacidade:</strong> {equip.capacidade} m³ | 
              <strong> Valor:</strong> R$ {equip.valor.toLocaleString()}
            </li>
          ))
        ) : (
          <p>Nenhum equipamento encontrado.</p>
        )}
      </ul>
    </div>
  );
};

export default EquipamentoList;
