function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = window.document.getElementById('txtano')
    var result = window.document.querySelector('div#result') 
    if (txtano.value.length == 0 || Number(txtano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(txtano.value)
        result.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-menino.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-menina.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Você é ${gênero} e tem ${idade} anos.`
        result.appendChild(img)
    }
}