function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 && Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade <= 4) {
                img.setAttribute('src', 'baby-mas.jpg')
                document.body.style.backgroundColor = 'skyblue'
            } else if (idade < 13) {
                img.setAttribute('src', 'kid-mas.jpg')
                document.body.style.backgroundColor = 'skyblue'
            } else if (idade <= 18) {
                img.setAttribute('src', 'adol-mas.jpg')
                document.body.style.backgroundColor = 'skyblue'
            } else if (idade >= 19 && idade < 39) {
                img.setAttribute('src', 'adult-mas.jpg')
                document.body.style.backgroundColor = 'skyblue'
            } else if (idade >= 40) {
                img.setAttribute('src', 'vô-mas.jpg')
                document.body.style.backgroundColor = 'skyblue'
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade <= 4) {
                img.setAttribute('src', 'baby-fem.jpg')
                document.body.style.backgroundColor = 'pink'
            } else if (idade < 13) {
                img.setAttribute('src', 'kid-fem.jpg')
                document.body.style.backgroundColor = 'pink'
            } else if (idade < 18) {
                img.setAttribute('src', 'adol-fem.jpg')
                document.body.style.backgroundColor = 'pink'
            } else if (idade > 21 && idade < 40) {
                img.setAttribute('src', 'adult-fem.jpg')
                document.body.style.backgroundColor = 'pink'
            } else {
                img.setAttribute('src', 'vó-fem.jpg')
                document.body.style.backgroundColor = 'pink'
            }
        }   res.innerHTML = `Seu Gênero é ${gen} e você tem ${idade} Anos.`
            res.appendChild(img)
    }
}
