function findLongestWord(text) {
    const words = text.split(' '); // Dividir el texto en palabras

    let longestWord = ''; // Inicializar la palabra más larga
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text), "Es la palabra más larga"); // Resultado esperado: "programación"
