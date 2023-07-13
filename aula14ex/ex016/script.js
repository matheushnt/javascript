function contar() {
    let ini = window.document.querySelector('input#txti')
    let fim = window.document.querySelector('input#txtf')
    let passo = window.document.querySelector('input#txtp')
    let result = window.document.querySelector('div#result')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        result.innerHTML = 'Impossível contar!'
        // window.alert('[ERROR] Faltam dados!')
    } else {
        result.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem Progressiva
            for(let c = i; c <= f; c += p) {
                result.innerHTML += `&nbsp${c} &nbsp\u{1F449}`
            }
        } else {
            //Contagem Regressiva
            for(let c = i; c >= f; c -= p) {
                result.innerHTML += `&nbsp ${c} &nbsp\u{1F449}`
            }
        }
        result.innerHTML += `\u{1F3C1}`
    }
}