// Interações progressivas do site Rede Prato Cheio.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-contato");
  if (!form) return;

  const status = document.querySelector("#form-status");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = "Confira os campos obrigatórios e corrija os dados destacados.";
      return;
    }
    status.textContent = "Validação concluída no navegador. Esta versão não envia nem armazena os dados; conecte um back-end antes de usar em produção.";
  });
});
