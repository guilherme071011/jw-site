// Rolagem suave ao clicar no menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Botão WhatsApp flutuante
const whatsappButton = document.createElement('a');
whatsappButton.href = "https://wa.me/5535999405769";
whatsappButton.target = "_blank";
whatsappButton.innerHTML = "💬";
whatsappButton.style.cssText = `
  position: fixed; bottom: 20px; right: 20px;
  background-color: #25D366; color: white;
  border-radius: 50%; width: 60px; height: 60px;
  display: flex; align-items: center; justify-content: center;
  font-size: 30px; text-decoration: none;
`;
document.body.appendChild(whatsappButton);
