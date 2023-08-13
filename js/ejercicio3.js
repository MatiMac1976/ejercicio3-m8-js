function evaluarFlujoCaja(flujos) {
    let ingresos = 0;
    let gastos = 0;
  
    for (const flujo of flujos) {
      if (flujo > 0) {
        ingresos += flujo;
      } else {
        gastos += Math.abs(flujo);
      }
    }
  
    if (ingresos > gastos) {
      return 1;
    } else if (ingresos < gastos) {
      return -1;
    } else {
      return 0;
    }
  }

  const flujoCajaEjemplo = [1000, -500, 200, -300, 800];
  const resultadoFlujoCaja = evaluarFlujoCaja(flujoCajaEjemplo);
  
  if (resultadoFlujoCaja === 1) {
    console.log('Hay ganancias.');
  } else if (resultadoFlujoCaja === -1) {
    console.log('Hay pérdidas.');
  } else {
    console.log('Los ingresos son iguales a las ganancias.');
  }

const planesCredito = [
    { nombre: 'Plan 001', capital: 150000, plazo: 30, tasa: 15 },
    { nombre: 'Plan 002', capital: 300000, plazo: 180, tasa: 10 },
    { nombre: 'Plan 003', capital: 485000, plazo: 60, tasa: 23 }
  ];

  function calcularInteres(capital, plazo, tasa) {
    return (capital * plazo * tasa) / 100;
  }

  function agregarCamposInteres(inversiones) {
    return inversiones.map(inversion => {
      const interes = calcularInteres(inversion.capital, inversion.plazo, inversion.tasa);
      const totalPagar = inversion.capital + interes;
      return {
        ...inversion,
        interes: interes,
        totalPagar: totalPagar
      };
    });
  }

  const creditTable = document.getElementById('creditTable');
  
  function actualizarTabla() {
    creditTable.innerHTML = '';
  
    const inversionesConInteres = agregarCamposInteres(planesCredito);
  
    inversionesConInteres.forEach(plan => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${plan.nombre}</td>
        <td><input type="number" value="${plan.capital}" class="capital"></td>
        <td><input type="number" value="${plan.plazo}" class="plazo"></td>
        <td><input type="number" value="${plan.tasa}" class="tasa"></td>
        <td class="interes">${plan.interes}</td>
        <td class="totalPagar">${plan.totalPagar}</td>
      `;
      creditTable.appendChild(fila);
  
      const capitalInput = fila.querySelector(".capital");
      const plazoInput = fila.querySelector(".plazo");
      const tasaInput = fila.querySelector(".tasa");
      const interesCell = fila.querySelector(".interes");
      const totalPagarCell = fila.querySelector(".totalPagar");
  
      capitalInput.addEventListener("change", () => {
        plan.capital = parseFloat(capitalInput.value);
        actualizarResultados();
      });
  
      plazoInput.addEventListener("change", () => {
        plan.plazo = parseInt(plazoInput.value);
        actualizarResultados();
      });
  
      tasaInput.addEventListener("change", () => {
        plan.tasa = parseFloat(tasaInput.value);
        actualizarResultados();
      });
  
      function actualizarResultados() {
        const interes = calcularInteres(plan.capital, plan.plazo, plan.tasa);
        const totalPagar = plan.capital + interes;
        interesCell.textContent = interes;
        totalPagarCell.textContent = totalPagar;
      }
  
      actualizarResultados();
    });
  }
  
  actualizarTabla();