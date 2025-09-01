const Utilitarios = require("../src/utilitarios");


describe("Teste para verificar metódos da classe utilitarios", () => {

    let utilitario;
    let lista;

    beforeEach(() => { 
        utilitario = new Utilitarios();
    


    });


    test("inverterString - metódo para inverter palavra", () => {
        palavra = utilitario.inverterString('escola');
        expect(palavra).toBe('alocse')
    });

    test("contarCaracteres - contar a quantidade de caracteres de uma String", () => {
        palavra = utilitario.contarCaracteres('caderno');
        expect(palavra).toBe(7)
    });

    test("paraMaiusculas - deixar todos os caracteres de uma String maiusculas", () => {
        palavra = utilitario.paraMaiusculas('prova');
        expect(palavra).toBe("PROVA")
    });

    test("paraMinusculas - deixar todos os caracteres de uma String minusculas", () => {
        palavra = utilitario.paraMinusculas('BORRACHA');
        expect(palavra).toBe("borracha")
    });

    test("primeiraLetraMaiuscula - deve retornar a primeira string com letra maiuscula", () => {
        palavra = utilitario.primeiraLetraMaiuscula('escola');
        expect(palavra).toBe("Escola")
    });

    test("somar - deve retornar a soma de dois valores (a e b)", () => {
        numeros = utilitario.somar(10, 8);
        expect(numeros).toBe(18)
    });

    test("subtrair - deve retornar a subtraçâo de dois valores(a e b)", () => {
        numeros = utilitario.subtrair(700, 253);
        expect(numeros).toBe(447)
    });

    test("multiplicar - deve retornar a multiplicação de dois valores (a e b)", () => {
        numeros = utilitario.multiplicar(300, 17);
        expect(numeros).toBe(5100)
    });

    test("dividir - deve retornar a divisão de dois valores", () => {
        numeros = utilitario.dividir(40, 2);
        expect(numeros).toBe(20)
    });

    test("dividir por 0 - deve retornar um erro", () => {
        expect(() => {utilitario.dividir(40, 0)}).toThrow("Divisão por zero")
        
    });

    test("ehPar - verificar se o número é par", () => {
        expect(utilitario.ehPar(40)).toBe(true)

    });

    test("primeiroElemento = verificar o primeiro elemento de um array", () => {
        lista = utilitario.primeiroElemento([1, 2, 3, 4, 5, 6]);
        expect(lista).toBe(1)
    });

    test("ultimoElemento - verificar o ultimo elemento de um array", () => {
        lista = utilitario.ultimoElemento([1, 2, 3, 4, 5, 6]);
        expect(lista).toBe(6)
    });

    test("tamanhoArray - verificar o tamanho de um array", () => {
        lista = utilitario.tamanhoArray([1, 2, 3, 4, 5, 6]);
        expect(lista).toBe(6)
    });

    test("ordenarArray - ordenar um array", () => {
        lista = utilitario.ordenarArray([6, 5, 4, 3, 2]);
        expect(lista).toEqual([2, 3, 4, 5, 6])
    });

    test("inverterArray - inverter um array", () => {
        lista = utilitario.inverterArray([60, 3, 8, 2, 10]);
        expect(lista).toEqual([10, 2, 8, 3, 60])
    });
    

    test("ehNumero - verificar se é um número", () => {
        numero = utilitario.ehNumero(10);
        expect(numero).toBe(true)
    });
    
    test("repetirTexto - repetir palavras na quantidade de vezes determinada", () => {
        palavra = utilitario.repetirTexto("ana", 3)
        expect(palavra).toBe('anaanaana')
    });

    test("mediaArray - calcular media do array", () => {
        lista = utilitario.mediaArray([10, 20, 30, 40, 50]);
        expect(lista).toBe(30)
    });

    test("removerDuplicados - remover duplicados de um array", () => {
        lista = utilitario.removerDuplicados([10, 20, 20, 30, 30, 40, 50, 50]);
        expect(lista).toEqual([10, 20, 30, 40, 50])
    });


})