document.getElementById('email').addEventListener('input', function() {
    const emailInput = this;
    const emailError = document.getElementById('emailError');
    
    // Regex simples para validação de email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailInput.value === '') {
        emailError.textContent = 'O email é obrigatório.';
        emailInput.setCustomValidity('O email é obrigatório.');
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Por favor, insira um email válido.';
        emailInput.setCustomValidity('Por favor, insira um email válido.');
    } else {
        emailError.textContent = '';
        emailInput.setCustomValidity('');
    }
});

// Evita o envio do formulário se houver erros
document.getElementById('myForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    
    if (!emailInput.checkValidity()) {
        event.preventDefault();
    }
});
