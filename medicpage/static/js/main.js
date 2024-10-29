function calculate(){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    var imc = weight / height ** 2;
    console.log(imc);

    var text = ""
    if (imc < 18.5){
        text = "Abaixo do peso"
    } else if (imc < 24.9){
        text = "Peso normal"
    } else if (imc < 29.9){
        text = "Sobrepeso"
    } else if (imc < 34.9){
        text = "Obesidade grau I"
    } else if (imc < 39.9){
        text = "Obseidade grau II"
    } else if (imc < 49.9){
        text = "Obsedidade grau III"
    } else if (imc < 59.9){
        wtext = "Obsedidade grau IV"
    } else if (imc > 60){
        text = "Obseidade grau V"
    }
    document.getElementById("text-area").innerText = text
}