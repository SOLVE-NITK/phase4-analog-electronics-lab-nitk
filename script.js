const URLS = [
  {
    name: "Logic gates using diodes",
    url: "assets/diodes/index.html",
  },
  {
    name: "Familiarization of Clamping Circuits",
    url: "assets/clamping/index.html",
  },
  {
    name: "Transient response of series RC circuit having DC excitation",
    url: "assets/transient-response/index.html",
  },
];

function displayExperiment(element) {
  console.log(element.textContent.trim());
  URLS.map((ele) => {
    if (ele.name == element.textContent.trim()) {
      document.getElementById("frame").src = ele.url;
    }
  });
}
