function calcularPi(n) {
    let soma = 0.0;
    for (let m = 0; m < n; m++) {
        const termo = (16 ** -m) * (
            (4 / (8 * m + 1)) -
            (2 / (8 * m + 4)) -
            (1 / (8 * m + 5)) -
            (1 / (8 * m + 6))
        );
        soma += termo;
    }
    return soma;
}

function encontrarNParaPrecisao() {
    const piReferencia = 3.141592;
    const precisao = 1e-4;
    let n = 0;
    while (true) {
        const aproximacao = calcularPi(n);
        if (Math.abs(aproximacao - piReferencia) < precisao) {
            break;
        }
        n++;
    }
    return n;
}

function calcularPiUsuario() {
    const n = parseInt(document.getElementById("n").value);
    if (isNaN(n) || n < 0) {
        alert("Por favor, insira um número válido e maior ou igual a 0 para n.");
        return;
    }

    const aproximacao = calcularPi(n);
    document.getElementById("resultado").innerText = `Aproximação de π com ${n} termos: ${aproximacao.toFixed(6)}`;

    const nPrecisao = encontrarNParaPrecisao();
    document.getElementById("n-precisao").innerText = `Valor de n para precisão de 10^-4: ${nPrecisao}`;
}


window.calcularPiUsuario = calcularPiUsuario;