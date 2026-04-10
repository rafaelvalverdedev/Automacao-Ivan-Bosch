async function iniciar() {
    const texto = await fetchCSV('./relatorio_contas_a_pagar.csv');
    const dados = parseCSV(texto);

    console.log(dados);

    // exemplo de uso real:
    dados.forEach(item => {
        console.log(item.fornecedor);
        console.log(item.valor);
    });
}

