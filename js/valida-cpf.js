export default function validoCPF(campo){
    /* The `campo.value.replace(/\.|-/g, "")` is removing any dots (`.`) or dashes (`-`)
    from the `campo` value using a regular expression with the `replace()` method. The
    `g` flag means that it will replace all occurrences of the pattern, not just the
    first one. */
    const cpf = campo.value.replace(/\.|-/g, ""); 
    validaNumerosRepetidos(cpf);
};

function validaNumerosRepetidos(cpf){
    // percorre a lista, caso cpf seja encontrado retorna TRUE caso contrario retorna FALSE
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf);
};

