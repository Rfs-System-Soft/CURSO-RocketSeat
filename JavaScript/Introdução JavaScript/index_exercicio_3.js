var skills = ['JavaScript', 'ReactJS', 'React Native']

var verifica = skills.indexOf('JavaScript')

var retorna

function temHabilidade(skills) {
    
    if (verifica === -1) {
        retorna = false
    } else if (verifica > -1) {
        retorna = true
    }
    
    console.log(retorna)
}

temHabilidade(skills)

