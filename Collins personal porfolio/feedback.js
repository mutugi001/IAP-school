// Get the form element by its id
// var form = document.getElementsByClassName("form");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   // var name = document.getElementsByName("name").value;
//   // var feedback = document.getElementsByName("feedback").value;
//   alert("Thank you for submitting");
// });

document.addEventListener('DOMContentLoaded', function(){
  var submit = document.querySelector('input[type="submit"]');
  var name = document.querySelector('input[name="name"]');
  var feedback = document.querySelector('input[name="feedback"]');
  var form = document.querySelector('form');
  submit.disabled = true;
  name.addEventListener('input', () => {
      submit.disabled = name.value.length === 0;
  })
  form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert("thankyou!!");
      // var name = name.value;
      // var listItem = document.createElement('li');
      // listItem.textContent = task;
      // var list = document.querySelector('ul');
      // list.appendChild(listItem);
      // document.querySelector('#task1').innerHTML='the user submitted the task:' + task;
  })
  return false;
});