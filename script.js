'use strict';

let money,
    time;

money = prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {}, 
    income: [],
    savings: false
};
let answ1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answ2 = prompt("Во сколько обойдется?", ""),
    answ3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answ4 = prompt("Во сколько обойдется?", "");

appData.expenses[answ1] = answ2;
appData.expenses[answ3] = answ4;

alert(appData.budget / 30);
console.log(appData.expenses);


