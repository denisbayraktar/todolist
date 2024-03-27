const addItem = document.querySelector('#liveToastBtn');
const todoList = document.querySelector('#list');
const doneList = document.querySelector('#doneList');
const todoText = document.querySelector('#task');
const btnReset = document.querySelector('#cleanList');
const btnMove = document.querySelector('#allMove');
const btnAll = document.querySelector('#allDone');

let todoArray = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
let doneArray = localStorage.getItem('doneList') ? JSON.parse(localStorage.getItem('doneList')) : [];

window.onload = () => {
    todoText.value = "";
    todoText.focus();
};

function enterKeyPressed(event) {
    if (event.keyCode == 13) {
        newElement();
    }
}

function spaceKeyPressed(event) {
    if (event.keyCode == 32 || event.keyCode == 13) {
        newElement();
    }
}

function newElement() {
    // Giriş kutusundan değeri alın
    const todoValue = todoText.value.trim();

    if (todoValue === "") {
        $('.error').toast('show');
        todoText.focus();
        return; // Boşsa işlem yapma, fonksiyondan çık
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    
    // <li> öğesinin metnini giriş kutusundan alınan değer olarak ayarlayın
    li.textContent = todoValue;
    // <li> öğesine onclick olayı atayın
    li.setAttribute('onclick', 'todoLi(this)');
    
    // <span> öğesine CSS sınıflarını ve onclick olayını atayın
    span.classList.add('close');
    span.setAttribute('onclick', 'todoSpany(this)');
    span.innerHTML = "✕";
    
    // <span> öğesini <li> öğesine ekleyin
    li.append(span);
    
    // Oluşturulan <li> öğesini todoList içine ekleyin
    todoList.prepend(li);
    
    // Eklenen öğeyi todoArray'e ekleyin
    todoArray.unshift(todoValue);
    
    // Eklenen öğe için localStorage'i güncelleyin
    localStorage.setItem('todoList', JSON.stringify(todoArray));
    
    // Giriş kutusunu temizleyin
    todoText.value = "";
    
    // Başarılı eklemenin gösterildiği toast'ı gösterin
    $('.success').toast('show');
    
    // Giriş kutusuna odaklanın
    todoText.focus();
}

addItem.addEventListener('click', newElement);

// Diğer kodlar burada devam ediyor...
