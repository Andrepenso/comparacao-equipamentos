import { useState } from "react";

const CalculoCusto = () => {
  // Estado para armazenar os preços dos materiais e salários
  const [precos, setPrecos] = useState({
    cimento: "",
    areia: "",
    brita: "",
    agua: "",
    aditivo: "",
    concreteira: "",
    operador: "",
    ajudantes: "",
    mecanico: "",
  });

  const [custoTotal, setCustoTotal] = useState(null);
  const [comparacao, setComparacao] = useState(null);
  const [custoMaoObra, setCustoMaoObra] = useState({});
  const [custoHora, setCustoHora] = useState(null);

  // Novo traço do concreto (FCK 25)
  const traco = {
    cimento: 8,    // sacos por m³
    areia: 0.715,  // m³
    brita: 0.585,  // m³
    agua: 153,     // litros
    aditivo: 2     // litros
  };

  const HORAS_TRABALHO_ANO = 2640; // 220 horas/mês * 12 meses

  // Função para calcular os custos
  const calcularCusto = () => {
    // Cálculo dos materiais
    const custoCimento = traco.cimento * parseFloat(precos.cimento || 0);
    const custoAreia = traco.areia * parseFloat(precos.areia || 0);
    const custoBrita = traco.brita * parseFloat(precos.brita || 0);
    const custoAgua = traco.agua * parseFloat(precos.agua || 0);
    const custoAditivo = traco.aditivo * parseFloat(precos.aditivo || 0);

    const totalMaterial = custoCimento + custoAreia + custoBrita + custoAgua + custoAditivo;
    setCustoTotal(totalMaterial);

    // Comparação com o preço da concreteira
    if (precos.concreteira) {
      const diferenca = parseFloat(precos.concreteira) - totalMaterial;
      setComparacao(diferenca);
    }

    // Cálculo da mão de obra
    const salarios = ["operador", "ajudantes", "mecanico"].reduce((acc, cargo) => {
      const salarioMensal = parseFloat(precos[cargo] || 0);
      const decimoTerceiro = salarioMensal;
      const ferias = salarioMensal / 3;
      const custoAnual = (salarioMensal * 12) + decimoTerceiro + ferias;
      acc[cargo] = {
        mensal: salarioMensal,
        anual: custoAnual,
        hora: custoAnual / 220
      };
      return acc;
    }, {});

    setCustoMaoObra(salarios);
    
    // Cálculo do custo total da equipe por hora
    const custoTotalAnual = Object.values(salarios).reduce((sum, s) => sum + s.anual, 0);
    setCustoHora(custoTotalAnual / HORAS_TRABALHO_ANO);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Cálculo do Custo do m³ de Concreto</h1>

      {/* Entrada dos preços dos materiais */}
      <h2 style={styles.sectionTitle}>Materiais</h2>
      {["cimento", "areia", "brita", "agua", "aditivo", "concreteira"].map((item) => (
        <div key={item} style={styles.inputGroup}>
          <label style={styles.label}>
            {item.charAt(0).toUpperCase() + item.slice(1)} (R$ por unidade):
          </label>
          <input
            type="number"
            value={precos[item]}
            onChange={(e) => setPrecos({ ...precos, [item]: e.target.value })}
            style={styles.input}
          />
        </div>
      ))}

      {/* Entrada dos salários */}
      <h2 style={styles.sectionTitle}>Mão de Obra</h2>
      {["operador", "ajudantes", "mecanico"].map((item) => (
        <div key={item} style={styles.inputGroup}>
          <label style={styles.label}>
            Salário do {item.charAt(0).toUpperCase() + item.slice(1)} (R$ por mês):
          </label>
          <input
            type="number"
            value={precos[item]}
            onChange={(e) => setPrecos({ ...precos, [item]: e.target.value })}
            style={styles.input}
          />
        </div>
      ))}

      <button onClick={calcularCusto} style={styles.button}>Calcular Custo</button>

      {custoTotal !== null && (
        <div style={styles.result}>
          <h2>Resultados</h2>
          <p><strong>Custo total para produzir 1m³:</strong> R$ {custoTotal.toFixed(2)}</p>

          {comparacao !== null && (
            <p>
              <strong>Diferença em relação à concreteira:</strong>{" "}
              {comparacao > 0 ? `R$ ${comparacao.toFixed(2)} mais barato na concreteira` : 
              `R$ ${Math.abs(comparacao).toFixed(2)} mais barato produzindo`}
            </p>
          )}

          <h3>Impacto da Mão de Obra</h3>
          {Object.entries(custoMaoObra).map(([cargo, dados]) => (
            <div key={cargo}>
              <p><strong>{cargo.charAt(0).toUpperCase() + cargo.slice(1)}:</strong></p>
              <p> - Salário mensal: R$ {dados.mensal?.toFixed(2) || "Não informado"}</p>
              <p> - Custo anual: R$ {dados.anual?.toFixed(2) || "Não informado"}</p>
              <p> - Custo por hora: R$ {dados.hora?.toFixed(2) || "Não informado"}</p>
            </div>
          ))}

          <p><strong>Custo total da equipe por hora:</strong> R$ {custoHora?.toFixed(2) || "Não informado"}</p>
        </div>
      )}
    </div>
  );
};

// Estilos
const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "20px",
    marginTop: "20px",
    textAlign: "left",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginBottom: "10px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "18px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
  result: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
};

export default CalculoCusto;
