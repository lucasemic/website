// Simulando a execução de scripts assíncronos (como se fossem seus scripts reais)
function simulateScriptExecution(scriptName, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${scriptName} executado`);
            resolve();
        }, delay);
    });
}

// Espera a execução de todos os scripts (aqui simulados)
Promise.all([
    simulateScriptExecution("Script 1", 5000),  // Simula um script com 5 segundos de execução
]).then(() => {
    // Quando todos os scripts terminarem, ocultamos o loader
    document.getElementById('loader').style.display = 'none';

    // Exibe o conteúdo da página
    document.querySelectorAll('nav, .content, footer').forEach(el => {
        el.style.display = 'block';
    });
});