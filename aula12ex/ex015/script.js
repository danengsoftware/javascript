function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-h.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-h.jpg')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-h.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-h.jpg')
            }                          
                
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-m.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulta-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            } 

        }
        res.style.textAlign = 'center'
        res.innerHTML =`Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}