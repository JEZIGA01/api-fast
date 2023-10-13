const nome = document.querySelector(".nome");
const email = document.querySelector(".email");
const form = document.querySelector(".form")

function register() {
  fetch("http://localhost:8080/users",
    {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"

      },
      method: "POST",
      body: JSON.stringify({
        nome: nome.value,
        email: email.value
      })
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
}
function clean(){
  nome.value=""
  email.value=""
}
form.addEventListener("submit", function (event){

  event.preventDefault();
  register();
  clean();

} );
