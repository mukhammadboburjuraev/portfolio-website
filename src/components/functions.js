function downloadResume() {
  const link = document.createElement("a");
  link.href = "/Juraev_Mukhammadbobur.pdf";
  link.download = "Juraev_Mukhammadbobur.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export { downloadResume };
