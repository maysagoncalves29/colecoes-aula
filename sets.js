const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];

    /// se não colocar argumento has ... = set dentro de um array
    /// se eu quero que os elementos do set se torne um elemento de um array = argumento has ...
}

console.log(valoresUnicos(meuArray));

/// .add() para adicionar valor no set
