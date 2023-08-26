function signup() {
  const nam = document.querySelector("#nam");
  const email = document.getElementById("email");
  const pass = document.getElementById("password");

  localStorage.setItem("nam", nam.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", pass.value);
}

const heading = document.querySelector(".fullname");
console.log(heading);

heading.innerText = localStorage.getItem("nam");

function setter() {}

setter();
