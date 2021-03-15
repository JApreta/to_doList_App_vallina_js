function deleted() {

    var todolist = document.querySelector("#mylist");
    todolist.addEventListener("click", function(e) {
        if (e.target.matches(".fa-trash-alt")) {
            window.localStorage.removeItem('currentList');
            todolist.removeChild(e.target.parentNode);
            localStorage.setItem('currentList', todolist.innerHTML);

        }
    });
}

function showCurrentDate() {
    let weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    let d = new Date();
    let currentDate =
        "<em>" +
        weekDays[d.getDay()] +
        "<br>" +
        month[d.getMonth()] +
        " " +
        d.getDate() +
        ", " +
        d.getFullYear() +
        "</em>";
    document.querySelector("#date").innerHTML = currentDate;
}

function completed() {

    let checked = document.querySelectorAll(".fa-circle");
    let checked_ = document.querySelectorAll(".fa-check-circle");
    for (let i = 0; i < checked.length; i++) {
        checked[i].onclick = function() {
            if (
                checked[i].classList.contains("fa-check-circle") &&
                checked[i].classList.contains("fas")
            ) {
                window.localStorage.removeItem('currentList');

                checked[i].classList.remove("fas");
                checked[i].classList.remove("fa-check-circle");
                checked[i].parentNode.classList.remove("done");
                checked[i].classList.add("far");
                checked[i].classList.add("fa-circle");
                localStorage.setItem('currentList', document.querySelector("#mylist").innerHTML);
            } else {
                window.localStorage.removeItem('currentList');
                checked[i].classList.remove("far");
                checked[i].classList.remove("fa-circle");
                checked[i].classList.add("fas");
                checked[i].classList.add("fa-check-circle");
                checked[i].parentNode.classList.add("done");
                localStorage.setItem('currentList', document.querySelector("#mylist").innerHTML);
            }
        };
    }


    for (let i = 0; i < checked_.length; i++) {
        checked_[i].onclick = function() {
            if (
                checked_[i].classList.contains("fa-check-circle") &&
                checked_[i].classList.contains("fas")
            ) {
                window.localStorage.removeItem('currentList');
                checked_[i].classList.remove("fas");
                checked_[i].classList.remove("fa-check-circle");
                checked_[i].parentNode.classList.remove("done");
                checked_[i].classList.add("far");
                checked_[i].classList.add("fa-circle");
                localStorage.setItem('currentList', document.querySelector("#mylist").innerHTML);
            } else {
                window.localStorage.removeItem('currentList');
                checked_[i].classList.remove("far");
                checked_[i].classList.remove("fa-circle");
                checked_[i].classList.add("fas");
                checked_[i].classList.add("fa-check-circle");
                checked_[i].parentNode.classList.add("done");
                localStorage.setItem('currentList', document.querySelector("#mylist").innerHTML);
            }
        };
    }
}

function newItem(e) {
    e.preventDefault();
    let input = document.querySelector("#newItem");
    let item = input.value;
    input.value = "";
    if (item.length > 0) {
        let todoList = document.querySelector("#mylist");
        todoList.insertAdjacentHTML(
            "beforeend",
            `<div class="myList-item">
            <i class="far fa-circle item_check"></i><span>   
            ${item }
            </span>  <i class="fas fa-trash-alt item_delete"></i> </div>`
        );
        completed();
        deleted();

        if ((localStorage.getItem("currentList") === null))
            localStorage.setItem('currentList', todoList.innerHTML);
        else {
            window.localStorage.removeItem('currentList');
            localStorage.setItem('currentList', todoList.innerHTML);
        }

    }
}

document.querySelector("#todo-form").addEventListener("submit", newItem);
showCurrentDate();

window.onload = (event) => {
    //window.localStorage.clear();
    if (!(localStorage.getItem("currentList") === null)) {
        document.querySelector("#mylist").innerHTML = window.localStorage.getItem('currentList');
        completed();
        deleted();
    }
};