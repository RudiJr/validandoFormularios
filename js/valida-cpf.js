export default function validoCPF(campo){
    /* The `campo.value.replace(/\.|-/g, "")` is removing any dots (`.`) or dashes (`-`)
    from the `campo` value using a regular expression with the `replace()` method. The
    `g` flag means that it will replace all occurrences of the pattern, not just the
    first one. */
    const cpf = campo.value.replace(/\.|-/g, ""); 
    validaNumerosRepetidos(cpf);
    validaPrimeiroDigito(cpf);
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
    ];

    return numerosRepetidos.includes(cpf);
};

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    /* This code block is iterating over the first 9 digits of the CPF number (stored in the `cpf`
    variable) and calculating the sum of the multiplication between each digit and a decreasing
    multiplier. The `soma` variable is initialized as 0 and incremented by the result of each
    multiplication. The `multiplicador` variable starts at 10 and is decremented by 1 in each iteration. */
    for(let tamanho = 0; tamanho < 9; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    };
   
    /* `soma = (soma * 10) % 11;` is calculating the remainder of the division of `soma` multiplied by
    10 by 11. This operation is part of the algorithm to validate the first verification digit of a
    CPF number. The result of this operation is used to determine the value of the first
    verification digit. */
    soma = (soma * 10) % 11;
    
    /* This code block is checking if the calculated sum (`soma`) is equal to 10 or 11. If it is, it sets
    `soma` to 0. This is because the first verification digit of a CPF number can only be a number
    between 0 and 9, so if the calculated sum is 10 or 11, it means that the verification digit should
    be 0. */
    if(soma == 10 || soma == 11){
        soma = 0;
    };

    return soma != cpf[9];
};
