// Import stylesheets
import './style.css';

//Gráfico 1 de columnas
var visualization1 = d3plus
  .viz()
  .container('#viz1')
  .data([
    { year: 1991, name: 'alpha', value: 15 },
    { year: 1992, name: 'alpha', value: 20 },
  ])
  .type('bar')
  .id('name')
  .x('year')
  .y('value')
  .draw();

//Gráfico 2 de barras
d3.json(
  'https://raw.githubusercontent.com/raul27868/07MBIG-Visualizacion-Actividades-Guiadas/master/columnas.json',
  function (data) {
    var visualization2 = d3plus
      .viz()
      .container('#viz2')
      .data(data)
      .type('bar')
      .id('name')
      .x('year')
      .y('value')
      .axes({ ticks: 'false' })
      .draw();
  }
);

//Gráfico 3 de Caja y Bigotes
var data = [
  { year: 1991, name: 'alpha', value: 15 },
  { year: 1992, name: 'alpha', value: 34 },
  { year: 1991, name: 'alpha2', value: 17 },
  { year: 1992, name: 'alpha2', value: 65 },
  { year: 1991, name: 'beta', value: 10 },
  { year: 1992, name: 'beta', value: 10 },
  { year: 1991, name: 'beta2', value: 40 },
  { year: 1992, name: 'beta2', value: 38 },
  { year: 1991, name: 'gamma', value: 5 },
  { year: 1992, name: 'gamma', value: 10 },
  { year: 1991, name: 'gamma2', value: 20 },
  { year: 1992, name: 'gamma2', value: 34 },
  { year: 1991, name: 'delta', value: 50 },
  { year: 1992, name: 'delta', value: 43 },
  { year: 1991, name: 'delta2', value: 17 },
  { year: 1992, name: 'delta2', value: 35 },
];

var visualization3 = d3plus
  .viz()
  .container('#viz3')
  .data(data)
  .type('box')
  .id('name')
  .x('year')
  .y('value')
  .axes({ ticks: false })
  .draw();
