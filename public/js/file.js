function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.querySelector("#preview").src = e.target.result;
            document.querySelector("#preview").style.display = "block"
        };       
        file.readAsDataURL(this.files[0]);
    }
}

document.querySelector("#imagem").addEventListener("change", readImage, false);



