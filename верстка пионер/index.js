 
 function addDishToList (){
 const dichName = document.querySelector('.button-choice-chicken').textContent

 const element= document.createElement('div')

 element.classList.add('data')

 const input =document.createElement('input')

 input.classList.add('row')

 const div =document.createElement('div')

 div.classList.add('selected-dish')

 div.textContent=dichName


 element.appendChild(input)
 element.appendChild(div)




 
 }

 function addHadhedlerToChickenButton () {
  console.log('asdasd')
  const button  =  document.querySelector('.button-choice-chicken')
console.log(button,'asdasd')
  

button.addEventListener('click',addDishToList) 


 }

 addHadhedlerToChickenButton()

