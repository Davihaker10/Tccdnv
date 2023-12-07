const form = document.getElementById("myFor");

form.addEventListener("submit"),
    function(event) {
        event.preventDefault();

        // Validação dos campos do formulário
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name === "" || email === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
    }

form.addEventListener("submit"),
    function(event) {
        event.preventDefault();

        // Validação dos campos do formulário
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name === "" || email === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
    }

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Coleta os dados do formulário
    var nome = document.getElementById('nome').value;
    var mensagem = document.getElementById('mensagem').value;

    // Envia os dados para o serviço de email via EmailJS
    emailjs.send("service_lg1q1au", "eRVzQZYnsF1yW_kNy", {
            from_name: nome,
            message: mensagem,
            to_email: "davigeta00@gmail.com"
        })
        .then(function(response) {
            console.log('Email enviado com sucesso!', response);
            // Exibe a mensagem de confirmação após o envio
            document.getElementById('meuFormulario').reset();
            document.getElementById('mensagemEnviada').style.display = 'block';
        }, function(error) {
            console.error('Erro ao enviar email:', error);
        });
});