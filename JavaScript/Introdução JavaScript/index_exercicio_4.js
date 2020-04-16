var anosEstudos = 14

function experiencia(anos) {

    if (anos < 1) {
        console.log('\n========== Tempo de estudos: ' + anosEstudos + ' meses. ==========\n')
    } else if (anos == 1) {
        console.log('\n========== Tempo de estudos: ' + anosEstudos + ' ano. ==========\n')
    } else {
        console.log('\n========== Tempo de estudos: ' + anosEstudos + ' anos. ==========\n')
    }

    if (anos <= 1) {
        console.log('Usuário: * Iniciante *\n')
    } else if (anos > 1 && anos <= 3) {
        console.log('Usuário: ** Intermediário **\n')
    } else if (anos > 3 && anos <= 6) {
        console.log('Usuário: *** Avançado ***\n')
    } else {
        console.log('Usuário: **** Jedi Master ****\n')
    }
}

experiencia(anosEstudos)

