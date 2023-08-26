const err = document.getElementById("error");
function signup() {
  const nam = document.querySelector("#nam");
  const email = document.getElementById("email");
  const pass = document.getElementById("password");

  console.log(nam.value);
  if (nam.value === "" && email.value === "" && pass.value === "") {
    // alert("all fields are mandatory");
    err.innerText = "All fields are mandatory";
    return;
  }

  localStorage.setItem("nam", nam.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", pass.value);
  window.location.href = "./profile.html";
}

const heading = document.querySelector(".fullname");
const e = document.getElementById("e");
const pa = document.getElementById("pa");

heading.innerText = "Fullname:" + localStorage.getItem("nam");
e.innerText = "Email:" + localStorage.getItem("email");
pa.innerText = "Password:" + localStorage.getItem("password");

function logout() {
  localStorage.clear();
}
