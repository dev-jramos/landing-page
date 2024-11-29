// Função para iniciar a sessão de equilíbrio energético
function iniciarSessao() {
    const sessaoStatus = document.getElementById('sessaoStatus');
    const audioSessao = document.getElementById('audioSessao');
    const botao = document.getElementById('iniciarSessao');

    // Inicia o áudio de meditação
    audioSessao.play();

    // Modifica o texto do botão e status
    botao.disabled = true; // Desabilita o botão
    sessaoStatus.textContent = "A sessão está em andamento. Relaxe e respire profundamente. Sinta a energia fluindo.";
    
    // Ao terminar o áudio
    audioSessao.onended = function() {
        sessaoStatus.textContent = "Sessão concluída. Esperamos que você tenha se sentido mais equilibrado e tranquilo!";
        botao.disabled = false; // Reabilita o botão
    };
}

// Função para processar o formulário de contato
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário recarregue a página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        document.getElementById('respostaContato').textContent = "Obrigado pelo seu contato, " + nome + "! Em breve, entraremos em contato.";
        document.getElementById('formContato').reset();
    } else {
        document.getElementById('respostaContato').textContent = "Por favor, preencha todos os campos.";
    }
});
