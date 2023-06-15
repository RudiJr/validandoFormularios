export default function maiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    validaIdade(dataNascimento);

    console.log(validaIdade(dataNascimento))
};


/* `getUTCFullYear()` is a method of the `Date` object in
    JavaScript that returns the year of the specified date
    according to universal time. It returns a four-digit number
    representing the year of the date in the UTC time zone. */
    
function validaIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
};
