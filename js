// ========================================
// CURRÍCULO PROFISSIONAL - JAVASCRIPT
// ========================================

// Configuração de dados do currículo
const curriculoData = {
    pessoal: {
        nome: "Seu Nome Completo",
        cargo: "Desenvolvedor Web",
        telefone: "(00) 00000-0000",
        email: "seuemail@email.com",
        instagram: "@seuinstagram",
        twitter: "@seutwitter",
        linkedin: "@seulinkedin"
    },
    sobre: "Desenvolvedor web apaixonado por criar experiências digitais incríveis. Especializado em front-end com foco em CSS e JavaScript.",
    habilidades: [
        "HTML5",
        "CSS3", 
        "JavaScript",
        "React",
        "Node.js",
        "Git",
        "Responsive Design",
        "UI/UX"
    ],
    experiencias: [
        {
            cargo: "Desenvolvedor Front-End",
            empresa: "Nome da Empresa",
            periodo: "Janeiro 2023 - Presente",
            descricao: "Desenvolvimento de interfaces responsivas e interativas usando HTML, CSS e JavaScript."
        }
    ],
    formacao: [
        {
            curso: "Curso/Graduação em Tecnologia",
            instituicao: "Instituição de Ensino",
            periodo: "2020 - 2024"
        }
    ]
};

// ========================================
// FUNÇÃO: Copiar para Área de Transferência
// ========================================
function copiarParaClipboard(texto, elemento) {
    navigator.clipboard.writeText(texto)
        .then(() => {
            mostrarNotificacao('Copiado: ' + texto, 'sucesso');
            animarCopiado(elemento);
        })
        .catch(err => {
            console.error('Erro ao copiar:', err);
            mostrarNotificacao('Erro ao copiar texto', 'erro');
        });
}

// ========================================
// FUNÇÃO: Mostrar Notificação
// ========================================
function mostrarNotificacao(mensagem, tipo = 'info') {
    // Remove notificação anterior se existir
    const notificacaoExistente = document.querySelector('.notificacao');
    if (notificacaoExistente) {
        notificacaoExistente.remove();
    }

    // Cria nova notificação
    const notificacao = document.createElement('div');
    notificacao.className = `notificacao ${tipo}`;
    notificacao.textContent = mensagem;
    
    // Estilos inline
    notificacao.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${tipo === 'sucesso' ? '#4CAF50' : '#f44336'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notificacao);
    
    // Remove após 3 segundos
    setTimeout(() => {
        notificacao.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notificacao.remove(), 300);
    }, 3000);
}

// ========================================
// FUNÇÃO: Animar elemento ao copiar
// ========================================
function animarCopiado(elemento) {
    elemento.style.transform = 'scale(1.1)';
    elemento.style.background = 'rgba(255, 255, 255, 0.4)';
    
    setTimeout(() => {
        elemento.style.transform = 'scale(1)';
        elemento.style.background = 'rgba(255, 255, 255, 0.2)';
    }, 200);
}

// ========================================
// FUNÇÃO: Efeito Parallax no Header
// ========================================
function aplicarParallax() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}

// ========================================
// FUNÇÃO: Animação de Digitação
// ========================================
function animarDigitacao(elemento, texto, velocidade = 50) {
    let i = 0;
    elemento.textContent = '';
    
    const digitar = () => {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
            setTimeout(digitar, velocidade);
        }
    };
    
    digitar();
}

// ========================================
// FUNÇÃO: Observer para animações ao scroll
// ========================================
function observarElementos() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// ========================================
// FUNÇÃO: Adicionar eventos aos contatos
// ========================================
function inicializarContatos() {
    const contatos = document.querySelectorAll('.contact-item');
    
    contatos.forEach(contato => {
        contato.addEventListener('click', function() {
            const texto = this.querySelector('span').textContent;
            copiarParaClipboard(texto, this);
        });
    });
}

// ========================================
// FUNÇÃO: Animar habilidades
// ========================================
function animarHabilidades() {
    const habilidades = document.querySelectorAll('.skill-tag');
    
    habilidades.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'scale(1)';
        }, index * 100);
    });
}

// ========================================
// FUNÇÃO: Modo escuro/claro
// ========================================
function toggleTema() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    
    localStorage.setItem('tema', isDark ? 'dark' : 'light');
    
    mostrarNotificacao(
        isDark ? 'Modo escuro ativado' : 'Modo claro ativado',
        'sucesso'
    );
}

// ========================================
// FUNÇÃO: Carregar tema salvo
// ========================================
function carregarTema() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// ========================================
// FUNÇÃO: Adicionar botão de tema
// ========================================
function adicionarBotaoTema() {
    const botao = document.createElement('button');
    botao.innerHTML = '🌓';
    botao.className = 'btn-tema';
    botao.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        transition: transform 0.3s;
    `;
    
    botao.addEventListener('click', toggleTema);
    botao.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(180deg)';
    });
    botao.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    document.body.appendChild(botao);
}

// ========================================
// FUNÇÃO: Contador de visualizações
// ========================================
function contadorVisualizacoes() {
    let visitas = parseInt(localStorage.getItem('visitas')) || 0;
    visitas++;
    localStorage.setItem('visitas', visitas);
    
    console.log(`📊 Este currículo foi visualizado ${visitas} vez(es)`);
}

// ========================================
// FUNÇÃO: Imprimir currículo
// ========================================
function imprimirCurriculo() {
    window.print();
}

// ========================================
// FUNÇÃO: Baixar currículo como PDF
// ========================================
function baixarPDF() {
    mostrarNotificacao('Use Ctrl+P ou Cmd+P para salvar como PDF', 'info');
    setTimeout(() => {
        window.print();
    }, 1000);
}

// ========================================
// FUNÇÃO: Validar email
// ========================================
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ========================================
// FUNÇÃO: Formatar telefone
// ========================================
function formatarTelefone(telefone) {
    const numeros = telefone.replace(/\D/g, '');
    
    if (numeros.length === 11) {
        return `(${numeros.slice(0,2)}) ${numeros.slice(2,7)}-${numeros.slice(7)}`;
    }
    return telefone;
}

// ========================================
// FUNÇÃO: Adicionar CSS das animações
// ========================================
function adicionarAnimacoes() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .dark-mode {
            filter: invert(1) hue-rotate(180deg);
        }
        
        .dark-mode img,
        .dark-mode video {
            filter: invert(1) hue-rotate(180deg);
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Currículo carregado com sucesso!');
    
    // Inicializa todas as funcionalidades
    inicializarContatos();
    aplicarParallax();
    observarElementos();
    animarHabilidades();
    adicionarBotaoTema();
    carregarTema();
    contadorVisualizacoes();
    adicionarAnimacoes();
    
    // Log de boas-vindas
    console.log('%c👋 Olá! Obrigado por visitar meu currículo!', 
        'color: #667eea; font-size: 20px; font-weight: bold;');
    
    console.log('%c💼 Desenvolvido com HTML, CSS e JavaScript', 
        'color: #764ba2; font-size: 14px;');
});

// ========================================
// ATALHOS DE TECLADO
// ========================================
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + P = Imprimir
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        imprimirCurriculo();
    }
    
    // Ctrl/Cmd + D = Toggle tema
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        toggleTema();
    }
});

// ========================================
// EXPORTAR FUNÇÕES (se necessário)
// ========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        copiarParaClipboard,
        mostrarNotificacao,
        toggleTema,
        imprimirCurriculo,
        validarEmail,
        formatarTelefone,
        curriculoData
    };
}