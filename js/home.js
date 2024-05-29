document.getElementById("submitMessage").addEventListener("click", readData);

function readData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("textarea").value;

  const convert = require("xml-js");

  let obj = new Object();

  obj.name = name;
  obj.email = email;
  obj.message = message;

  const xml = convert.js2xml({ data: obj }, { compact: true, spaces: 2 });
}
(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
