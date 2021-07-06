// import Chart from './node_modules/chart.js/dist/chart.js';
// let myChartOne = document.getElementById('myChartOne').getContext('2d');
// let myChartTwo = document.getElementById('myChartTwo').getContext('2d');

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
        }]
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
        }
    }
})

var myChart = new Chart(myChartTwo, {
    type: 'bar',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '매출액(천원)',
            backgroundColor: '#b9e0e3',
            borderColor: '#b9e0e3',
            data: [949884, 1949925, 4859630, 4446109, 15685905, 10451514],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1,
            order: 1
        }]
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
                position: 'bottom',
                labels: {
                    boxWidth: 0
                }
            }
        }
    }
})

var myChart = new Chart(myChartThree, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '상연횟수(회)',
            backgroundColor: '#bfcc5c',
            borderColor: '#bfcc5c',
            data: [9562, 10563, 19281, 14540, 25623, 21868]
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
    }
})

var myChart = new Chart(myChartFour, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '예매수(건)',
            backgroundColor: '#b9e0e3',
            borderColor: '#b9e0e3',
            data: [79579, 154110, 475557, 478951, 1132399, 689170]
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
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        }
    }
})

var myChart = new Chart(myChartFive, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '연극',
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            data: [59.20, 60.60, 53.30, 50.80, 49.60, 58.60, 52.30]
        }, {
            label: '뮤지컬',
            borderColor: 'rgb(255, 159, 64)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            data: [27.40, 26.40, 37.30, 39.10, 40.20, 33.40, 32.90]
        }, {
            label: '클래식',
            borderColor: 'rgb(255, 205, 86)',
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            data: [5.70, 4.50, 4.50, 4.20, 4.60, 4.70, 9.30]
        }, {
            label: '오페라',
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            data: [1, 0.9, 0.6, 0.7, 0.5, 0.4, 0.7]
        }, {
            label: '무용',
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            data: [2.60, 2.40, 2.10, 2.10, 1.80, 0.90, 1.60]
        }, {
            label: '국악',
            borderColor: 'rgb(153, 102, 255)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            data: [1.50, 1.60, 1.70, 2.40, 1.70, 1.10, 2.20]
        }, {
            label: '복합',
            borderColor: 'rgb(201, 203, 207)',
            backgroundColor: 'rgba(201, 203, 207, 0.2)',
            data: [2.60, 3.60, 0.50, 0.70, 1.60, 0.90, 1.00]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: '상연횟수 점유율',
                fontSize: 24,
                fontColor: 'black'
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxWidth: 10,
                    boxHeight:10,
                }
            }
        },
    }
})