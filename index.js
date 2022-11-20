// Import stylesheets
import './style.css';
/*
jQuery.get('https://drive.google.com/file/d/1zHdYOuojtoEdn9_86QCEaNJbD7OcIITg/view?usp=sharing', function (csvdata) {
  console.log(csvdata);
});*/

let arr_categorias = ['Africaa', 'America', 'Asia', 'Europe', 'Oceania'];
let series_data = [
  {
    name: 'Year 1990',
    data: [631, 727, 3202, 721, 26],
  },
  {
    name: 'Year 2000',
    data: [814, 841, 3714, 726, 31],
  },
  {
    name: 'Year 2010',
    data: [1044, 944, 4170, 735, 40],
  },
  {
    name: 'Year 2018',
    data: [1276, 1007, 4561, 746, 42],
  },
];
/*
$.ajax({
  url: 'http://data.insideairbnb.com/united-states/dc/washington-dc/2022-09-14/visualisations/listings.csv',
  type: 'GET',
  headers: { 'Access-Control-Allow-Origin': 'http://data.insideairbnb.com' },
  crossDomain: true,
  dataType: 'text/csv',
  success: function (response) {
    console.log('respuestaaf');
    console.log(response);
  },
  error: function (xhr, status) {
    console.log('error');
  },
});
*/

Highcharts.chart('container', {
  chart: {
    type: 'bar',
  },
  title: {
    text: 'Precio de alojamiento por tipo de habitación',
  },
  data: {
    csvURL: 'https://demo-live-data.highcharts.com/vs-load.csv',
    enablePolling: true,
    dataRefreshRate: 1,
  },
  subtitle: {
    text: 'Source',
  },
  xAxis: {
    categories: arr_categorias,
    title: {
      text: null,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Precio (USD)',
      align: 'high',
    },
    labels: {
      overflow: 'justify',
    },
  },
  tooltip: {
    valueSuffix: ' USD',
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
      },
    },
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true,
  },
  credits: {
    enabled: false,
  },
  series: series_data,
});
