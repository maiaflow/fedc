const inputs = document.querySelectorAll('input');
const message = "Please provide a valid email";
const nomessage = "no";

for (const input of inputs) {
  if (input.matches(':invalid')) {
    document.querySelector('span.error').innerHTML = message;
  } else {
    document.querySelector('span.error').innerHTML = nomessage;
  }
}
