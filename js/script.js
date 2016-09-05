var div = document.createElement('div');
  	div.className = "maine_titel ";
  	div.innerHTML = "Тест по програмированию";

  document.body.appendChild(div);

var div = document.createElement('div');
  	div.className = "question";
  	div.innerHTML = " 1. Вопрос № 1";

  document.body.appendChild(div);

var parentUl = document.createElement('ul');
	parentUl.className = "list"
const listElsContent = ["вариант ответа №1", "вариант ответа №2", "вариант ответа №3" ]

for(let i = 0; i< listElsContent.length; i ++ ) {
  const li  = document.createElement('li')
  li.innerHTML = listElsContent[i]
  
  parentUl.appendChild(li)
}
document.body.appendChild(parentUl)

var div = document.createElement('div');
  	div.className = "question";
  	div.innerHTML = " 2. Вопрос № 2";

  document.body.appendChild(div);

var parentUl = document.createElement('ul');
	parentUl.className = "list"
const listSecondContent = ["вариант ответа №1", "вариант ответа №2", "вариант ответа №3" ]

for(let i = 0; i< listElsContent.length; i ++ ) {
  const li  = document.createElement('li')
  li.innerHTML = listElsContent[i]
  
  parentUl.appendChild(li)
}
document.body.appendChild(parentUl)

var div = document.createElement('div');
  	div.className = "question";
  	div.innerHTML = " 3. Вопрос № 3";

  document.body.appendChild(div);

var parentUl = document.createElement('ul');
	parentUl.className = "list"
const listThirdContent = ["вариант ответа №1", "вариант ответа №2", "вариант ответа №3" ]

for(let i = 0; i< listElsContent.length; i ++ ) {
  const li  = document.createElement('li')
  li.innerHTML = listElsContent[i]
  
  parentUl.appendChild(li)
}
document.body.appendChild(parentUl)

var button = document.createElement('button') 
	button.className = "button btn btn-primary"
	button.innerHTML = "Проверить мои результаты";
document.body.appendChild(button);