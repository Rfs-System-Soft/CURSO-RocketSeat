console.log('================ Números pares entre 32 e 321 ================')

function numPares(x, y) {
    while (x <= y) {
        var resto = x % 2
        if (resto == 0) {
            console.log('Números pares: ' + x)
        }
        x += 1
    }
}

numPares(32, 321)

