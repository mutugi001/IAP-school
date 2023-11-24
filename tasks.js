// Collins Mutugi
// SCT211-0051/2022
document.addEventListener('DOMContentLoaded', function(){
    var submit = document.querySelector('input[type="submit"]');
    var newTask = document.querySelector('input[type="text"]');
    var form = document.querySelector('form');
    submit.disabled = true;
    newTask.addEventListener('input', () => {
        submit.disabled = newTask.value.length === 0;
    })
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        var task = newTask.value;
        var listItem = document.createElement('li');
        listItem.textContent = task;
        var list = document.querySelector('ul');
        list.appendChild(listItem);
        document.querySelector('#task1').innerHTML='the user submitted the task:' + task;
    })
    return false;
});



