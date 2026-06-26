// Função que recebe o número do botão clicado (0, 1, 2, 3 ou 4)
        function mudarTab(index) {
            
            // PASSO 1: O APAGÃO (Esconder tudo)
            // Pega todos os textos de conteúdo
            const todosConteudos = document.querySelectorAll('[id^="content-"]');
            // Pega todos os botões do menu
            const todosBotoes = document.querySelectorAll('[id^="tab-"]');
            // Passa por cada conteúdo e diz: "Fique invisível!" (Adiciona 'hidden')
            todosConteudos.forEach(div => {
                div.classList.add('hidden');
            });

            // Passa por cada botão e diz: "Fique transparente!" (Remove a cor bege)
            todosBotoes.forEach(li => {
                li.classList.remove('border-[#6D3914]', 'bg-[#eaddcf]', 'font-bold', 'text-[#4C2B08]');
                li.classList.add('border-transparent', 'text-[#6D3914]');
            });

            // PASSO 2: A REVELAÇÃO (Mostrar só o escolhido)
            
            // Pega o texto que tem o número que você clicou
            const conteudoParaMostrar = document.getElementById(`content-${index}`);
            // Tira a capa de invisibilidade dele
            conteudoParaMostrar.classList.remove('hidden');

            // Pega o botão que você clicou
            const botaoParaAcender = document.getElementById(`tab-${index}`);
            // Pinta ele de bege e coloca a borda marrom
            botaoParaAcender.classList.remove('border-transparent', 'text-[#6D3914]');
            botaoParaAcender.classList.add('border-[#6D3914]', 'bg-[#eaddcf]', 'font-bold', 'text-[#4C2B08]');
        }