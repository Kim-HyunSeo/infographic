// import Chart from './node_modules/chart.js/dist/chart.js';
let myChartOne = document.getElementById('myChartOne').getContext('2d');
let myChartTwo = document.getElementById('myChartTwo').getContext('2d');

var myChart = new Chart(myChartOne, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '공연건수(건)',
            backgroundColor: '#b9e0e3',
            borderColor: '#b9e0e3',
            data: [340, 382, 471, 297, 518, 568]
        }, {
            label: '개막편수(편)',
            backgroundColor: '#bfcc5c',
            borderColor: '#bfcc5c',
            data: [295, 329, 408, 245, 470, 501]
        }],
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: '대학로 연극',
                fontSize: 24,
                fontColor: 'black'
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        },
        layout : {
            padding : {
                left : 20,
                right : 20,
                top : 20,
                bottom : 20
            }
        }
    }
})

var myChart = new Chart(myChartTwo, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '매출액(천원)',
            backgroundColor: '#b9e0e3',
            borderColor: '#b9e0e3',
            data: ['949884', '1949925', '4859630', '4446109', '15685905', '10451514']
        }],
    },
    options: {
        plugins: {
            title: {
                display: false,
                text: '대학로 연극',
                fontSize: 24,
                fontColor: 'black'
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        },
        layout : {
            padding : {
                left : 20,
                right : 20,
                top : 20,
                bottom : 20
            }
        }
    }
})