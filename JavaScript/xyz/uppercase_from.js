function showOutput() {
    let text = document.getElementById("inputText").value;

    let result = text.replace(/\b\w/g, function(letter){
        return letter.toUpperCase();
    });

    document.getElementById("result").innerText = result;
}
