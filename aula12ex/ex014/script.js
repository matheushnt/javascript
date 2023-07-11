function carregar() {
    var corpo = window.document.body
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'manha.png'
        corpo.style.background = '#D9BF71'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'tarde.png'
        corpo.style.background = '#F26D3A'
        
    } else {
        //BOA NOITE
        img.src = 'noite.png'
        corpo.style.background = '#150240'
    }
}