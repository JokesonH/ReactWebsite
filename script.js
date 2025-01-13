const canvas = document.getElementById('jerseyCanvas');
const ctx = canvas.getContext('2d');

const jerseyColorInput = document.getElementById('jerseyColor');
const jerseyTextInput = document.getElementById('jerseyText');
const logoUploadInput = document.getElementById('logoUpload');
const resetButton = document.getElementById('resetButton');
const exportCodeButton = document.getElementById('exportCodeButton');
const exportButton = document.getElementById('exportButton');

let jerseyColor = jerseyColorInput.value;
let jerseyText = '';
let logoImage = null;

// Draw Jersey Base
function drawJersey() {
  ctx.fillStyle = jerseyColor;
  ctx.fillRect(50, 50, 300, 400); // Jersey shape

  // Jersey outline
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.strokeRect(50, 50, 300, 400);
}

// Draw Text
function drawText() {
  if (jerseyText) {
    ctx.fillStyle = '#000';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(jerseyText, canvas.width / 2, 120);
  }
}

// Draw Logo
function drawLogo() {
  if (logoImage) {
    const logoSize = 100;
    ctx.drawImage(logoImage, canvas.width / 2 - logoSize / 2, 180, logoSize, logoSize);
  }
}

// Render Canvas
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawJersey();
  drawText();
  drawLogo();
}

// Export Design
exportButton.addEventListener('click', () => {
  const designDetails = {
    jerseyColor,
    jerseyText,
    logo: logoImage ? 'Uploaded' : 'Not uploaded',
  };

  const textContent = `
  Jersey Design Details:
  ----------------------
  Jersey Color: ${designDetails.jerseyColor}
  Jersey Text: ${designDetails.jerseyText}
  Logo: ${designDetails.logo}
  `;

  const blob = new Blob([textContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'jersey-design.txt';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});

// Export Code
exportCodeButton.addEventListener('click', () => {
  const jsCode = \`${js_content}\`;
  const blob = new Blob([jsCode], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'script.js';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});

// Event Listeners
jerseyColorInput.addEventListener('input', (e) => {
  jerseyColor = e.target.value;
  render();
});

jerseyTextInput.addEventListener('input', (e) => {
  jerseyText = e.target.value;
  render();
});

logoUploadInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      logoImage = new Image();
      logoImage.onload = render;
      logoImage.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});

resetButton.addEventListener('click', () => {
  jerseyColor = '#ff0000';
  jerseyText = '';
  logoImage = null;
  jerseyColorInput.value = jerseyColor;
  jerseyTextInput.value = '';
  logoUploadInput.value = null;
  render();
});

// Initial Render
render();
--
