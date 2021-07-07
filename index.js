document.querySelector('.btn1').addEventListener('click', function () {
    document.querySelector('.num1').style.display = "block";
    document.querySelector('.num2').style.display = "none";
    document.querySelector('.num3').style.display = "none";
    document.querySelector('.num4').style.display = "none";
    document.querySelector('.num5').style.display = "none";
    document.querySelector('.num6').style.display = "none";
    document.querySelector('.num7').style.display = "none";
})
document.querySelector('.btn2').addEventListener('click', function () {
    document.querySelector('.num2').style.display = "block";
    document.querySelector('.num1').style.display = "none";
    document.querySelector('.num3').style.display = "none";
    document.querySelector('.num4').style.display = "none";
    document.querySelector('.num5').style.display = "none";
    document.querySelector('.num6').style.display = "none";
    document.querySelector('.num7').style.display = "none";
})
document.querySelector('.btn3').addEventListener('click', function () {
    document.querySelector('.num3').style.display = "block";
    document.querySelector('.num2').style.display = "none";
    document.querySelector('.num1').style.display = "none";
    document.querySelector('.num4').style.display = "none";
    document.querySelector('.num5').style.display = "none";
    document.querySelector('.num6').style.display = "none";
    document.querySelector('.num7').style.display = "none";
})
document.querySelector('.btn4').addEventListener('click', function () {
    document.querySelector('.num4').style.display = "block";
    document.querySelector('.num2').style.display = "none";
    document.querySelector('.num3').style.display = "none";
    document.querySelector('.num1').style.display = "none";
    document.querySelector('.num5').style.display = "none";
    document.querySelector('.num6').style.display = "none";
    document.querySelector('.num7').style.display = "none";
})
document.querySelector('.btn5').addEventListener('click', function () {
    document.querySelector('.num5').style.display = "block";
    document.querySelector('.num2').style.display = "none";
    document.querySelector('.num3').style.display = "none";
    document.querySelector('.num4').style.display = "none";
    document.querySelector('.num1').style.display = "none";
    document.querySelector('.num6').style.display = "none";
    document.querySelector('.num7').style.display = "none";
})
document.querySelector('.btn6').addEventListener('click', function () {
    document.querySelector('.num6').style.display = "block";
    document.querySelector('.num2').style.display = "none";
    document.querySelector('.num3').style.display = "none";
    document.querySelector('.num4').style.display = "none";
    document.querySelector('.num5').style.display = "none";
    document.querySelector('.num1').style.display = "none";
    document.querySelector('.num7').style.display = "none";
})
document.querySelector('.btn7').addEventListener('click', function () {
    document.querySelector('.num7').style.display = "block";
    document.querySelector('.num2').style.display = "none";
    document.querySelector('.num3').style.display = "none";
    document.querySelector('.num4').style.display = "none";
    document.querySelector('.num5').style.display = "none";
    document.querySelector('.num6').style.display = "none";
    document.querySelector('.num1').style.display = "none";
})

const btn = document.querySelectorAll(".btn"),
    btn1 = document.querySelector(".btn1"),
    btn2 = document.querySelector(".btn2"),
    btn3 = document.querySelector(".btn3"),
    btn4 = document.querySelector(".btn4"),
    btn5 = document.querySelector(".btn5"),
    btn6 = document.querySelector(".btn6"),
    btn7 = document.querySelector(".btn7"),
    num1 = document.querySelector(".num1"),
    num2 = document.querySelector(".num2"),
    num3 = document.querySelector(".num3"),
    num4 = document.querySelector(".num4"),
    num5 = document.querySelector(".num5"),
    num6 = document.querySelector(".num6"),
    num7 = document.querySelector(".num7");

function btnStyleHandle(event) {
    for (var i = 0; i < btn.length; i++) {
        btn[i].style.backgroundColor = "white";
        btn[i].style.borderColor = "rgb(177, 177, 177)"
        btn[i].style.color = "rgb(177, 177, 177)"
    }
    if (num1.style.display == "block") {
        btn1.style.backgroundColor = "#B8E0E3";
        btn1.style.borderColor = "#B8E0E3"
        btn1.style.color = "white"
    } else if (num2.style.display == "block") {
        btn2.style.backgroundColor = "#B8E0E3";
        btn2.style.borderColor = "#B8E0E3";
        btn2.style.color = "white";
    } else if (num3.style.display == "block") {
        btn3.style.backgroundColor = "#B8E0E3";
        btn3.style.borderColor = "#B8E0E3";
        btn3.style.color = "white";
    } else if (num4.style.display == "block") {
        btn4.style.backgroundColor = "#B8E0E3";
        btn4.style.borderColor = "#B8E0E3";
        btn4.style.color = "white";
    } else if (num5.style.display == "block") {
        btn5.style.backgroundColor = "#B8E0E3";
        btn5.style.borderColor = "#B8E0E3";
        btn5.style.color = "white";
    } else if (num6.style.display == "block") {
        btn6.style.backgroundColor = "#B8E0E3";
        btn6.style.borderColor = "#B8E0E3";
        btn6.style.color = "white";
    } else if (num7.style.display == "block") {
        btn7.style.backgroundColor = "#B8E0E3";
        btn7.style.borderColor = "#B8E0E3";
        btn7.style.color = "white";
    }
}

function init() {
    num1.style.display = "block";
    btn1.style.backgroundColor = "#B8E0E3";
    btn1.style.borderColor = "#B8E0E3";
    btn1.style.color = "white";
}

window.addEventListener("click", btnStyleHandle);
init();

const chart = document.querySelector(".box3_chart"),
    chartCtn = document.querySelector(".box3_chart_ctn"),
    chartTwo = document.getElementById("myChartFive"),
    chartThree = document.getElementById("myChartSix"),
    chartBtn = document.querySelectorAll(".box3_btn"),
    chartBtnTwo = document.querySelector(".box3_btn1"),
    chartBtnThree = document.querySelector(".box3_btn2");

let Width = 1000,
    p = 0

// function resize(event) {
//     Width = '1000px';
//     chart.style.width = `${Width * 2}px`;
//     chartCtn.style.width = `${Width}px`;
//     chart.style.transform = `translateX(0px)`;
// };

function buttonColor() {
    for (var i = 0; i < chartBtn.length; i++) {
        chartBtn[i].style.backgroundColor = "white";
        chartBtn[i].style.borderColor = "rgb(177, 177, 177)"
        chartBtn[i].style.color = "rgb(177, 177, 177)"
    }
    if (chartCtn.style.transform == `translateX(0px)`) {
        chartBtnTwo.style.backgroundColor = "#B8E0E3";
        chartBtnTwo.style.borderColor = "#B8E0E3";
        chartBtnTwo.style.color = "white";
    } else if (chartCtn.style.transform == `translateX(${-(Width)}px)`) {
        chartBtnThree.style.backgroundColor = "#B8E0E3";
        chartBtnThree.style.borderColor = "#B8E0E3";
        chartBtnThree.style.color = "white";
    }
};

const btnHandler = {
    btn1: function btn1(event) {
        chartCtn.style.transform = `translateX(0px)`;
        buttonColor();
    }, btn2: function btn2(event) {
        chartCtn.style.transform = `translateX(${-(Width)}px)`;
        buttonColor();
    }
};

chartBtnTwo.addEventListener("click", btnHandler.btn1);
chartBtnThree.addEventListener("click", btnHandler.btn2);

// window.addEventListener("resize", resize);
chartBtnTwo.style.backgroundColor = "#B8E0E3";
chartBtnTwo.style.borderColor = "#B8E0E3";
chartBtnTwo.style.color = "white";