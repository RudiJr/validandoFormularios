export default function validoCPF(campo){
    /* The `campo.value.replace(/\.|-/g, "")` is removing any dots (`.`) or dashes (`-`)
    from the `campo` value using a regular expression with the `replace()` method. The
    `g` flag means that it will replace all occurrences of the pattern, not just the
    first one. */
    const cpf = campo.value.replace(/\.|-/g, ""); 
    console.log(cpf)
};


