// let myChartOne = document.getElementById('myChartOne').getContext('2d');
// let myChartTwo = document.getElementById('myChartTwo').getContext('2d');

// var myChart = new Chart(myChartOne, {
//     type: 'line',
//     data: {
//         labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
//         datasets: [{
//             label: '공연건수(건)',
//             backgroundColor: '#b9e0e3',
//             borderColor: '#b9e0e3',
//             data: [340, 382, 471, 297, 518, 568]
//         }, {
//             label: '개막편수(편)',
//             backgroundColor: '#bfcc5c',
//             borderColor: '#bfcc5c',
//             data: [295, 329, 408, 245, 470, 501]
//         }]
//     },
//     options: {
//         plugins: {
//             title: {
//                 display: false,
//                 text: '대학로 연극',
//                 fontSize: 24,
//                 fontColor: 'black'
//             },
//             legend: {
//                 display: true,
//                 position: 'bottom'
//             }
//         }
//     }
// })

// var myChart = new Chart(myChartTwo, {
//     type: 'bar',
//     data: {
//         labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
//         datasets: [{
//             label: '매출액(천원)',
//             backgroundColor: '#b9e0e3',
//             borderColor: '#b9e0e3',
//             data: [949884, 1949925, 4859630, 4446109, 15685905, 10451514],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(255, 205, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(201, 203, 207, 0.2)'
//             ],
//             borderColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(255, 159, 64)',
//                 'rgb(255, 205, 86)',
//                 'rgb(75, 192, 192)',
//                 'rgb(54, 162, 235)',
//                 'rgb(153, 102, 255)',
//                 'rgb(201, 203, 207)'
//             ],
//             borderWidth: 1,
//             order: 1
//         }]
//     },
//     options: {
//         plugins: {
//             title: {
//                 display: false,
//                 text: '대학로 연극',
//                 fontSize: 24,
//                 fontColor: 'black'
//             },
//             legend: {
//                 display: true,
//                 position: 'bottom',
//                 labels: {
//                     boxWidth: 0
//                 }
//             }
//         }
//     }
// })

// var myChart = new Chart(myChartThree, {
//     type: 'line',
//     data: {
//         labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
//         datasets: [{
//             label: '상연횟수(회)',
//             backgroundColor: '#bfcc5c',
//             borderColor: '#bfcc5c',
//             data: [9562, 10563, 19281, 14540, 25623, 21868]
//         }],
//     },
//     options: {
//         plugins: {
//             title: {
//                 display: false,
//                 text: '대학로 연극',
//                 fontSize: 24,
//                 fontColor: 'black'
//             },
//             legend: {
//                 display: true,
//                 position: 'bottom'
//             }
//         },
//     }
// })

// var myChart = new Chart(myChartFour, {
//     type: 'line',
//     data: {
//         labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
//         datasets: [{
//             label: '예매수(건)',
//             backgroundColor: '#b9e0e3',
//             borderColor: '#b9e0e3',
//             data: [79579, 154110, 475557, 478951, 1132399, 689170]
//         }],
//     },
//     options: {
//         plugins: {
//             title: {
//                 display: false,
//                 text: '대학로 연극',
//                 fontSize: 24,
//                 fontColor: 'black'
//             },
//             legend: {
//                 display: true,
//                 position: 'bottom'
//             }
//         },
//         layout: {
//             padding: {
//                 left: 20,
//                 right: 20,
//                 top: 20,
//                 bottom: 20
//             }
//         }
//     }
// })

var myChart = new Chart(myChartFive, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '연극',
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
            data: [14.8, 16.9, 12.2, 11.4, 12.7, 9.3, 10]
        }, {
            label: '뮤지컬',
            borderColor: 'rgb(255, 159, 64)',
            backgroundColor: 'rgb(255, 159, 64)',
            data: [24.6, 23.4, 63.9, 64.7, 71, 83.4, 78]
        }, {
            label: '클래식',
            borderColor: 'rgb(255, 205, 86)',
            backgroundColor: 'rgb(255, 205, 86)',
            data: [35.4, 33.3, 10.7, 7.3, 8.1, 4.9, 9.2]
        }, {
            label: '오페라',
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(75, 192, 192)',
            data: [9.4, 14.6, 4.4, 5.5, 1.7, 0.9, 0.8]
        }, {
            label: '무용',
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)',
            data: [11.3, 8.6, 6.8, 9.2, 4.9, 0.9, 1.4]
        }, {
            label: '국악',
            borderColor: 'rgb(153, 102, 255)',
            backgroundColor: 'rgb(153, 102, 255)',
            data: [1.2, 1.7, 1.3, 1.5, 0.6, 0.2, 0.3]
        }, {
            label: '복합',
            borderColor: 'rgb(201, 203, 207)',
            backgroundColor: 'rgb(201, 203, 207)',
            data: [3.3, 1.5, 0.7, 0.4, 1, 0.4, 0.3]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: '매출액 점유율',
                font: {
                    size: 18,
                    weight: 500
                },
                fontColor: 'black'
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                }
            }
        },
    }
})

var myChart = new Chart(myChartSix, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: '연극',
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
            data: [59.20, 60.60, 53.30, 50.80, 49.60, 58.60, 52.30]
        }, {
            label: '뮤지컬',
            borderColor: 'rgb(255, 159, 64)',
            backgroundColor: 'rgb(255, 159, 64)',
            data: [27.40, 26.40, 37.30, 39.10, 40.20, 33.40, 32.90]
        }, {
            label: '클래식',
            borderColor: 'rgb(255, 205, 86)',
            backgroundColor: 'rgb(255, 205, 86)',
            data: [5.70, 4.50, 4.50, 4.20, 4.60, 4.70, 9.30]
        }, {
            label: '오페라',
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgb(75, 192, 192)',
            data: [1, 0.9, 0.6, 0.7, 0.5, 0.4, 0.7]
        }, {
            label: '무용',
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)',
            data: [2.60, 2.40, 2.10, 2.10, 1.80, 0.90, 1.60]
        }, {
            label: '국악',
            borderColor: 'rgb(153, 102, 255)',
            backgroundColor: 'rgb(153, 102, 255)',
            data: [1.50, 1.60, 1.70, 2.40, 1.70, 1.10, 2.20]
        }, {
            label: '복합',
            borderColor: 'rgb(201, 203, 207)',
            backgroundColor: 'rgb(201, 203, 207)',
            data: [2.60, 3.60, 0.50, 0.70, 1.60, 0.90, 1.00]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: '상연횟수 점유율',
                font: {
                    size: 18,
                    weight: 500
                },
                fontColor: 'black'
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                }
            }
        },
    }
})

var myChart = new Chart(myChartSeven, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: '연극',
            borderColor: '#bfcc5c',
            backgroundColor: '#bfcc5c',
            data: [18.6, 21.5, 22.3, 22.4, 22.9, 23.3, 22.7]
        }, {
            label: '뮤지컬',
            borderColor: '#b9e0e3',
            backgroundColor: '#b9e0e3',
            data: [18, 18.6, 42.8, 44.5, 49.9, 60.1, 53.7]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: '연극&뮤지컬 예매율 점유율',
                font: {
                    size: 18,
                    weight: 500
                },
                fontColor: 'black'
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                }
            }
        },
    }
})

var myChart = new Chart(myChartEight, {
    type: 'bar',
    data: {
        labels: ['연극', '뮤지컬', '클래식/오페라', '무용/전통', '콘서트'],
        datasets: [{
            label: '10대',
            backgroundColor: 'rgb(255, 99, 132)',
            data: [20000, 30000, 5000, 5000, 250000]
        }, {
            label: '20대',
            backgroundColor: 'rgb(255, 159, 64)',
            data: [230000, 370000, 25000, 10000, 550000]
        }, {
            label: '30대',
            backgroundColor: 'rgb(255, 205, 86)',
            data: [180000, 700000, 40000, 25000, 370000]
        }, {
            label: '40대',
            backgroundColor: 'rgb(75, 192, 192)',
            data: [70000, 290000, 35000, 20000, 170000]
        }, {
            label: '50대',
            backgroundColor: 'rgb(54, 162, 235)',
            data: [30000, 60000, 15000, 7000, 60000]
        },
        {
            label: '60대 이상',
            backgroundColor: 'rgb(153, 102, 255)',
            data: [10000, 20000, 10000, 3000, 20000]
        }]
        // datasets: [{
        //     label: '연극',
        //     borderColor: 'rgb(255, 99, 132)',
        //     backgroundColor: 'rgb(255, 99, 132)',
        //     data: [20000, 230000, 180000, 70000, 30000, 10000],
        // }, {
        //     label: '뮤지컬',
        //     borderColor: '#b9e0e3',
        //     backgroundColor: '#b9e0e3',
        //     data: [30000, 370000, 700000, 290000, 60000, 20000]
        // }, {
        //     label: '클래식/오페라',
        //     borderColor: '#b9e0e3',
        //     backgroundColor: '#b9e0e3',
        //     data: [5000, 25000, 40000, 35000, 15000, 10000]
        // }, {
        //     label: '무용/전통',
        //     borderColor: '#b9e0e3',
        //     backgroundColor: '#b9e0e3',
        //     data: [5000, 10000, 25000, 20000, 7000, 3000]
        // }, {
        //     label: '콘서트',
        //     borderColor: '#b9e0e3',
        //     backgroundColor: '#b9e0e3',
        //     data: [250000, 550000, 370000, 170000, 60000, 20000]
        // }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: '관람객 연령대별 매출액',
                font: {
                    size: 18,
                    weight: 500
                },
                fontColor: 'black'
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                }
            }
        },
    }
})