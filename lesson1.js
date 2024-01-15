// let conclusion = prompt('Как тебя зовут', [`Например: Даниил`]);
// alert (`Тебя зовут ${conclusion}`);

// let sait = `browser`;
// if (sait = `Edge`) {
//     alert(`You've got the Edge!`)
// } else if (sait = `Chrome` || `Firefox` || `Safari` || `Opera`) {
//     alert(`Okay we support these browsers too`)
// } else {
//     alert(`We hope that this page looks ok!`)
// };


let calculator = {
    sum: `+`,
    min: `-`,
    umn: `*`,
    del: `/`,

    neleg () {
        let calc = document.querySelector(`.calculator`);

        let inpu = document.createElement(`input`);//первая перемення
        let a = inpu.value;
        inpu.style.width = `50px`;
        inpu.style.height = `50px`;
        calc.append(inpu);

        let action = document.createElement(`input`);// действие(сложение вычетание и тому подобное)
        let accomplishment = action.value;
        action.style.width = `25px`;
        action.style.height = `25px`;
        calc.append(action);

        let inpu1 = document.createElement(`input`); // вторая переменная 
        let b = inpu1.value;
        inpu1.style.width = `50px`;
        inpu1.style.height = `50px`;
        calc.append(inpu1);

        let butt = document.createElement(`button`);//кнопка
        calc.append(butt);
        butt.style.width = `25px`;
        butt.style.height = `25px`;

        let resault = document.createElement(`p`);// вывод результата
        calc.append(resault);

        butt.addEventListener(`click`, e => {
            console.log(a);
            let answer;
            if (accomplishment == this.sum){
                answer = a + b;
                console.log(answer);
            }
        })
    },

    input(){
        this.neleg()
    }
};

calculator.input();


