function updateProgressBar() {
    var percentage = document.getElementById("percentageInput").value;
    if (percentage < 0 || percentage > 100) {
      alert("Porcentaje debe estar entre 0 y 100.");
      return;
    }
    var progressBar = document.getElementById("progress");
    progressBar.style.width = percentage + "%";
  }