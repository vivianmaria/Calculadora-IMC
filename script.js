const form = document.getElementById('imcForm');
const resultDiv = document.getElementById('result');

const calculateIMC = (weight, height) => {
  return (weight / (height ** 2)).toFixed(2);
};

class IMC {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
  }

  getIMC() {
    const imcValue = calculateIMC(this.weight, this.height);
    return this.classifyIMC(imcValue);
  }

  classifyIMC(imc) {
    const classifications = [
      { max: 18.5, label: 'Abaixo do peso' },
      { max: 24.9, label: 'Peso normal' },
      { max: 29.9, label: 'Sobrepeso' },
      { max: 34.9, label: 'Obesidade Grau I' },
      { max: 39.9, label: 'Obesidade Grau II' },
      { max: Infinity, label: 'Obesidade Grau III' },
    ];

    const { label } = classifications.find(({ max }) => imc <= max) || { label: 'Desconhecido' };
    return `IMC: ${imc} (${label})`;
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (!weight || !height) {
    resultDiv.innerHTML = 'Por favor, insira valores válidos!';
    return;
  }

  const userIMC = new IMC(weight, height);
  resultDiv.innerHTML = `${userIMC.getIMC()}`;
});
