const equipamentos = [
  { id: 1, modelo: "AUTOCONCRETEIRA DB 200", capacidade: 2, valor: 766800 },
  { id: 2, modelo: "AUTOCONCRETEIRA DB X35", capacidade: 3.5, valor: 993800 },
  { id: 3, modelo: "AUTOCONCRETEIRA DB 460", capacidade: 4, valor: 1112600 },
  { id: 4, modelo: "AUTOCONCRETEIRA DB X50", capacidade: 5, valor: 1112600 }
];

const HORAS_DIA = 8;
const QUANTIDADE_DIAS = 20;
const TEMPO_CICLO = 15; // minutos
const DEPRECIACAO_PERCENTUAL = 0.0003;

const calcularDados = (equipamento) => {
  if (!equipamento.capacidade || !equipamento.valor) {
    return equipamento; // Retorna o equipamento sem cálculos se os dados estiverem faltando
  }

  const prodHora = equipamento.capacidade * 4;
  const depreciacaoDia = equipamento.valor * DEPRECIACAO_PERCENTUAL;
  const depreciacaoHora = depreciacaoDia / HORAS_DIA;

  const prodMaxDia = prodHora * HORAS_DIA;
  const prodMedDia = prodHora * (HORAS_DIA / 2);
  const prodMinDia = prodHora ; 

  const prodMaxMes = prodMaxDia * QUANTIDADE_DIAS;
  const prodMedMes = prodMedDia * QUANTIDADE_DIAS;
  const prodMinMes = prodMinDia * QUANTIDADE_DIAS;

  const horasProdMax = prodMaxMes / prodHora || 0;
  const horasProdMed = prodMedMes / prodHora || 0;
  const horasProdMin = prodMinMes / prodHora || 0;

  return {
    ...equipamento,
    tempo_ciclo: TEMPO_CICLO,
    prod_hora: prodHora,
    depreciacao_dia: depreciacaoDia,
    depreciacao_hora: depreciacaoHora,

    producao_diaria: {
      max: prodMaxDia,
      media: prodMedDia,
      minima: prodMinDia
    },

    producao_mensal: {
      max: prodMaxMes,
      media: prodMedMes,
      minima: prodMinMes
    },

    horas_producao: {
      max: horasProdMax,
      media: horasProdMed,
      minima: horasProdMin
    }
  };
};

exports.getEquipamentos = (req, res) => {
  const equipamentosComCalculos = equipamentos.map(calcularDados);
  res.json(equipamentosComCalculos);
};
