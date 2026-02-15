const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const textarea = document.getElementById("message");
const dialog = document.getElementById("success--dialog");
const closeDialog = document.getElementById("close--dialog");

closeDialog.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  dialog.close();
});

emailjs.init({
  publicKey: "vMwPi89JAbuopiypg",
});

document
  .getElementById("contact--form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_8ngwdke", "template_pctsj4n", this)
      .then(() => {
        console.log("SUCCESS!");
        this.reset();
        dialog.style.display = "block"
        dialog.showModal();
        closeDialog.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          dialog.style.display = "none";
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  });


