'use strict';

let money,
    time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == '' || money == null){
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {}, 
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    
        if((typeof(a))=== 'string' && 
        (typeof(a)) != null && 
        (typeof(b)) != null &&
        a != '' && b != '' && 
        a.length < 50) {
            appData.expenses[a] = b;
        }
        else{
            console.log("Плохой результат");
            i--;
        }
    }
}
chooseExpenses();

//расчет дневного бюджета
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(); //округление до целого числа 
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();

//расчет уровня достатка
function detectLevel() {
    if(appData.moneyPerDay < 100){
        console.log("Минимальный уровень достатка");
    }
    else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень достатка");
    }
    else if (appData.moneyPerDay > 2000){
        console.log("Высокий уровень достатка");
    }
    else{
        console.log("Ошибка");
    }
}
detectLevel();


function checkSavings() {
    console.log("sf");
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12 * percent;
        alert("Доход с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

// определение необязательных расходов
function chooseOptExpenses() {
    for (let i = 0; i < 3; i++){
        let questionOptExpenses = prompt("Введите статью необязательных расходов?", "");
     appData.optionalExpenses[i+1] = questionOptExpenses;
    }
}
chooseOptExpenses();
console.log(appData.optionalExpenses);
