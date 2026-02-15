emailjs.init({
    publicKey: "vMwPi89JAbuopiypg",
});

document.getElementById("contact--form").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm("service_8ngwdke", "template_pctsj4n", this)
        .then(()=>{
            console.log("SUCCESS!")
        })
        .catch((error)=>{
            console.log("FAILED...", error);
        });
});