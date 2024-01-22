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


// let calculator = {
//     sum: `+`,
//     min: `-`,
//     umn: `*`,
//     del: `/`,

//     neleg () {
//         let calc = document.querySelector(`.calculator`);

//         let inpu = document.createElement(`input`);//первая перемення
//         let a = inpu.value;
//         inpu.style.width = `50px`;
//         inpu.style.height = `50px`;
//         calc.append(inpu);

//         let action = document.createElement(`input`);// действие(сложение вычетание и тому подобное)
//         let accomplishment = action.value;
//         action.style.width = `25px`;
//         action.style.height = `25px`;
//         calc.append(action);

//         let inpu1 = document.createElement(`input`); // вторая переменная 
//         let b = inpu1.value;
//         inpu1.style.width = `50px`;
//         inpu1.style.height = `50px`;
//         calc.append(inpu1);

//         let butt = document.createElement(`button`);//кнопка
//         butt.classList.add('.but')
//         calc.append(butt);
//         butt.style.width = `25px`;
//         butt.style.height = `25px`;

//         let resault = document.createElement(`p`);// вывод результата
//         calc.append(resault);

//         document.addEventListener('click', e => {
//             if(e.target.classList.contains('but')){
            
//             console.log(a);
//             let answer;
//             if (accomplishment == this.sum){
//                 answer = a + b;
//                 console.log(answer);
//             }}
//         })
//     },

//     input(){
//         this.neleg()
//     }
// };

// calculator.input();



let enabling = document.querySelector(`.enabling`);
let screen = document.querySelector(`.screen`);  

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function timeBegan() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();

  
    m = checkTime(m);
    document.querySelector('.timeNow').innerHTML = h + ":" + m;
    t = setTimeout(function() {
      timeBegan()
    }, 500);
  }
  timeBegan();


 
  // let i = 1;
  // enabling.onclick = function (){
  //   if(i % 2 == 0){
  //     console.log(`Это выключенный экран`)

  //   }else{
  //     console.log(`Это включенный экран`);
  //     the_screen_is_on();
  //   }
  //   i++;
  // }


  enabling.addEventListener(`click`, e => {
    let password = document.createElement(`input`);
    screen.append(password);
    password.style.width = `200px`;
    password.style.height = `50px`;
    password.style.border = `2px solid black`;
    password.style.backgroundColor = `#808080`;
    password.style.borderRadius = `25px`

    
    let set = document.createElement(`div`);
    screen.append(set);
    set.style.width = `300px`;
    set.style.height = `300px`;
    set.style.marginLeft = `50px`;
    
    

    let first = document.createElement(`div`);
    set.append(first);
    first.style.display = `flex`;
    first.style.gridColumnGap = `40px`;

    let numbers1 = document.createElement(`button`);
    first.append(numbers1);
    numbers1.style.width = `75px`;
    numbers1.style.height = `75px`;
    numbers1.style.borderRadius = `50%`;
    numbers1.innerHTML = `1`;
    numbers1.style.fontSize = `40px`;
    numbers1.style.backgroundColor = `#808080`;
    let numbers2 = document.createElement(`button`);
    first.append(numbers2);
    numbers2.style.width = `75px`;
    numbers2.style.height = `75px`;
    numbers2.style.borderRadius = `50%`;
    numbers2.innerHTML = `2`;
    numbers2.style.fontSize = `40px`;
    numbers2.style.backgroundColor = `#808080`;
    let numbers3 = document.createElement(`button`);
    first.append(numbers3);
    numbers3.style.width = `75px`;
    numbers3.style.height = `75px`;
    numbers3.style.borderRadius = `50%`;
    numbers3.innerHTML = `3`;
    numbers3.style.fontSize = `40px`;
    numbers3.style.backgroundColor = `#808080`;

    let second = document.createElement(`div`);
    set.append(second);
    second.style.display = `flex`;
    second.style.gridColumnGap = `40px`;

    let numbers4 = document.createElement(`button`);
    second.append(numbers4);
    numbers4.style.width = `75px`;
    numbers4.style.height = `75px`;
    numbers4.style.borderRadius = `50%`;
    numbers4.innerHTML = `4`;
    numbers4.style.fontSize = `40px`;
    numbers4.style.backgroundColor = `#808080`;
    let numbers5 = document.createElement(`button`);
    second.append(numbers5);
    numbers5.style.width = `75px`;
    numbers5.style.height = `75px`;
    numbers5.style.borderRadius = `50%`;
    numbers5.innerHTML = `5`;
    numbers5.style.fontSize = `40px`;
    numbers5.style.backgroundColor = `#808080`;
    let numbers6 = document.createElement(`button`);
    second.append(numbers6);
    numbers6.style.width = `75px`;
    numbers6.style.height = `75px`;
    numbers6.style.borderRadius = `50%`;
    numbers6.innerHTML = `6`;
    numbers6.style.fontSize = `40px`;
    numbers6.style.backgroundColor = `#808080`;

    let third = document.createElement(`div`);
    set.append(third);
    third.style.display = `flex`;
    third.style.gridColumnGap = `40px`;

    let numbers7 = document.createElement(`button`);
    third.append(numbers7);
    numbers7.style.width = `75px`;
    numbers7.style.height = `75px`;
    numbers7.style.borderRadius = `50%`;
    numbers7.innerHTML = `7`;
    numbers7.style.fontSize = `40px`;
    numbers7.style.backgroundColor = `#808080`;
    let numbers8 = document.createElement(`button`);
    third.append(numbers8);
    numbers8.style.width = `75px`;
    numbers8.style.height = `75px`;
    numbers8.style.borderRadius = `50%`
    numbers8.innerHTML = `8`;
    numbers8.style.fontSize = `40px`;
    numbers8.style.backgroundColor = `#808080`;
    let numbers9 = document.createElement(`button`);
    third.append(numbers9);
    numbers9.style.width = `75px`;
    numbers9.style.height = `75px`;
    numbers9.style.borderRadius = `50%`;
    numbers9.innerHTML = `9`;
    numbers9.style.fontSize = `40px`;
    numbers9.style.backgroundColor = `#808080`;

    let fourth = document.createElement(`div`);
    set.append(fourth);
    fourth.style.justifyContent = `center`;
    fourth.style.alignContent = `center`;

    let numbers = document.createElement(`button`);
    fourth.append(numbers);
    numbers.style.width = `75px`;
    numbers.style.height = `75px`;
    numbers.style.borderRadius = `50%`;
    numbers.innerHTML = `0`;
    numbers.style.fontSize = `40px`;
    numbers.style.backgroundColor = `#808080`;

  })



















  function the_screen_is_on(){
  enabling.addEventListener(`click`, e => {
    screen.style.backgroundImage = `url(fon.jpg)`;


    let string = document.createElement(`div`);
    screen.append(string);
    string.style.display = `flex`;
    string.style.gridColumnGap = `20px`;
    string.style.marginTop = `675px`;
    string.style.marginLeft = `19px`;

    let phone = document.createElement(`button`);
    string.append(phone);
    phone.style.backgroundColor = `#ffff`;
    phone.style.width = `75px`;
    phone.style.height = `75px`;
    phone.style.borderRadius = `25%`;
    phone.style.backgroundImage = `url(phone.png)`;
    
    let SMS = document.createElement(`button`);
    string.append(SMS);
    SMS.style.backgroundColor = `#ffff`;
    SMS.style.width = `75px`;
    SMS.style.height = `75px`;
    SMS.style.borderRadius = `25%`;
    SMS.style.backgroundImage = `url(SMS.png)`;

    let camera = document.createElement(`button`);
    string.append(camera);
    camera.style.backgroundColor = `#ffff`;
    camera.style.width = `75px`;
    camera.style.height = `75px`;
    camera.style.borderRadius = `25%`;
    camera.style.backgroundImage = `url(camera.png)`;

    let brauser = document.createElement(`button`);
    string.append(brauser);
    brauser.style.backgroundColor = `#ffff`;
    brauser.style.width = `75px`;
    brauser.style.height = `75px`;
    brauser.style.borderRadius = `25%`;
    brauser.style.backgroundImage = `url(brauser.png)`;

    let datas = document.querySelector(`.timeNow`);
    datas.remove()

})}




the_screen_is_on();