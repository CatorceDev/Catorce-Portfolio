const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const textarea = document.getElementById("message");
const dialog = document.getElementById("success--dialog")

dialog.showModal();


emailjs.init({
    publicKey: "vMwPi89JAbuopiypg",
});

document.getElementById("contact--form").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm("service_8ngwdke", "template_pctsj4n", this)
        .then(()=>{
            console.log("SUCCESS!");
            this.reset();

        })
        .catch((error)=>{
            console.log("FAILED...", error);
        });
});