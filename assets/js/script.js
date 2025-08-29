function teste(element) {
  // Remove a classe active de todos os links
  document.querySelectorAll("div a").forEach(a => a.classList.remove("active"));
  
  // Adiciona active apenas no que foi clicado
  element.classList.add("active");
}

function download(nome){
  const link = document.createElement("a");
  link.href = `../docs/${nome} CR.pdf`; // caminho do PDF
  link.download = `${nome}.pdf`;  // nome do arquivo ao baixar
  link.click(); // dispara o download
}