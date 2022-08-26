//  fitur aplikasi todo list
//  1. input data
//  2. coret kalo selesai
//  3. hapus todo

let todo = document.getElementById("todo");

function add() {
  // 1. ambil nilai inputnya
  let newText = document.getElementById("new-text");

  // 2. tambah list baru ke ul
  // 2a. buat li baru untuk di masukin ke ul
  // let li = document.createElement("li");
  // let txt = document.createTextNode(newText.value);

  // li.appendChild(txt);
  // todo.appendChild(li);

  // 2b. cara cepat buat li baru untuk di masukin ke ul
  // let newTodo = "<li><span onclick='toggle(this)'>" + newText.value + "</span>" + "<span onclick='deleteBtn(this)'> [x] </span>" + "</li>";

  let newTodo = `<div class='list' id='todo-list'><span>${newText.value}</span><span class='material-symbols-outlined done-color ' onclick='toggle(this)'> done </span><span class='material-symbols-outlined delete-color' onclick='deleteBtn(this)'> delete </span></div>`;

  // let newTodo = "<h1>" + newText.value + "</h1>";

  todo.insertAdjacentHTML("afterbegin", newTodo);
  // 3. kosong kan field
  newText.value = "";
}

function toggle(el) {
  el.parentElement.classList.toggle("done");
}

function deleteBtn(el) {
  return el.parentElement.remove();
}
