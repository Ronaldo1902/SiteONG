// ===============================
// MENU MOBILE
// ===============================
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
}

// Fecha o menu ao clicar em algum link (mobile)
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("active");
    });
});

// ===============================
// MÁSCARAS DE INPUT
// ===============================

// Máscara para telefone
const telInput = document.getElementById("telefone");
if (telInput) {
    telInput.addEventListener("input", () => {
        let v = telInput.value.replace(/\D/g, "");
        if (v.length > 11) v = v.slice(0, 11);

        if (v.length > 6) {
            telInput.value = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7, 11)}`;
        } else if (v.length > 2) {
            telInput.value = `(${v.slice(0, 2)}) ${v.slice(2, 6)}`;
        } else {
            telInput.value = `(${v}`;
        }
    });
}

// Máscara para CPF
const cpfInput = document.getElementById("cpf");
if (cpfInput) {
    cpfInput.addEventListener("input", () => {
        let v = cpfInput.value.replace(/\D/g, "");
        v = v.slice(0, 11);
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        cpfInput.value = v;
    });
}

// Máscara para CEP
const cepInput = document.getElementById("cep");
if (cepInput) {
    cepInput.addEventListener("input", () => {
        let v = cepInput.value.replace(/\D/g, "");
        v = v.slice(0, 8);
        v = v.replace(/(\d{5})(\d)/, "$1-$2");
        cepInput.value = v;
    });
}

// ===============================
// FORMULÁRIO – EXIBIR MENSAGEM DE SUCESSO
// ===============================
function handleSubmit(event) {
    event.preventDefault();

    const message = document.getElementById("successMessage");

    if (message) {
        message.style.display = "block";
    }

    // Limpa o formulário
    event.target.reset();

    // Some após alguns segundos
    setTimeout(() => {
        message.style.display = "none";
    }, 4000);
}

// ===============================
// ANIMAÇÃO SUAVE AO ROLAR A PÁGINA
// ===============================
const animatedElements = document.querySelectorAll(".about, .impact-cards, .contact, .cta");

function animateOnScroll() {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

