

let phoneInput = document.querySelector('.phoneInput')
let phoneButton = document.querySelector('.button')
let result = document.querySelector('#result')



let regExp = /^\+7\d{3} \d{3}-\d{2}-\d{2}$/




phoneButton.addEventListener('click',() => {
  if(regExp.test(phoneInput.value)){
    result.innerText = 'Success'
    result.style.color  = 'green'
    alert('success')
  }else {
    result.innerText = 'Failed'
    result.style.color = 'red'
    alert('error')
  }
})

let innInn = document.querySelector('#Inn')
let CheckInn = document.querySelector('.checkInn')
let checkR = document.querySelector('#CheckResult')


let inn = /^[0-2]\d{13}$/

CheckInn.addEventListener('click',() => {
  if(inn.test(innInn.value)) {
    checkR.innerText = 'Success'
    checkR.style.color  = 'green'
  }else {
    checkR.innerText = 'Failed'
    checkR.style.color = 'red'
    alert('error')
  }
})

// let data = document.querySelector('#data');
// let numbers = document.querySelector('#numbers');
// let dataR = document.querySelector('#result');

// let Date_of_Birth = /^\d{01}.\d{01}.{2000}$/

// number.addEventListener('click',() => {
//   if(data.test(Data.value)) {
//     dataR.innerText = 'Success'
//     dataR.style.color = 'green'
//   }else {
//     dataR.innerText = 'Failed'
//     dataR.style.color = 'red'
//     alert('error')
//   }
// })






