function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  // Fundo com o céu ao pôr do sol
  background(255, 153, 51); // cor laranja
  drawSun();

  // Desenho do campo
  drawField();

  // Desenho da cidade
  drawCity();

  // Desenho da árvore à esquerda
  drawTree(150, height * 0.75);

  // Desenho do homem plantando à esquerda
  drawMan(600, height * 0.75);
  
  // Desenho da árvore à direita
  drawTreeRight(650, height * 0.75);

  // Desenho do homem plantando à direita
  drawManRight(150, height * 0.75);
}

function drawSun() {
  fill(255, 204, 0);
  noStroke();
  ellipse(width - 100, 100, 80, 80); // sol no canto superior direito
}

function drawField() {
  fill(34, 139, 34); // verde do campo
  noStroke();
  rect(0, height * 0.75, width, height * 0.25); // parte inferior do campo
}

function drawCity() {
  fill(50);
  // Prédios
  rect(100, height * 0.55, 50, height * 0.2);
  rect(200, height * 0.5, 70, height * 0.25);
  rect(330, height * 0.6, 40, height * 0.15);
  rect(400, height * 0.52, 60, height * 0.23);
  rect(500, height * 0.58, 80, height * 0.17);
}

// Função para desenhar uma árvore à esquerda
function drawTree(x, y) {
  // Tronco
  fill(139, 69, 19);
  rect(x, y - 60, 20, 60);
  
  // Folhagem
  fill(34, 139, 34);
  ellipse(x + 10, y - 80, 80, 80);
  ellipse(x - 20, y - 60, 50, 50);
  ellipse(x + 40, y - 60, 50, 50);
}

// Função para desenhar uma árvore à direita
function drawTreeRight(x, y) {
  // Tronco
  fill(139, 69, 19);
  rect(x, y - 60, 20, 60);
  
  // Folhagem
  fill(34, 139, 34);
  ellipse(x + 10, y - 80, 80, 80);
  ellipse(x - 20, y - 60, 50, 50);
  ellipse(x + 40, y - 60, 50, 50);
}

// Função para desenhar o homem à esquerda (plantando)
function drawMan(x, y) {
  // Corpo
  fill(0);
  rect(x, y - 50, 10, 50);
  
  // Cabeça
  ellipse(x + 5, y - 70, 20, 20);
  
  // Braços
  stroke(0);
  line(x + 5, y - 40, x - 10, y - 10); // braço esquerdo
  line(x + 5, y - 40, x + 20, y - 10); // braço direito
  
  // Mãos (mãos nas pontas dos braços)
  fill(139, 69, 19);
  ellipse(x - 10, y - 10, 10, 10); // mão esquerda
  ellipse(x + 20, y - 10, 10, 10); // mão direita
  
  // Perna esquerda
  line(x + 5, y, x - 10, y + 20);
  // Perna direita
  line(x + 5, y, x + 20, y + 20);
  
  // Pés
  fill(0);
  ellipse(x - 10, y + 20, 10, 10); // pé esquerdo
  ellipse(x + 20, y + 20, 10, 10); // pé direito
}

// Função para desenhar o homem à direita (plantando)
function drawManRight(x, y) {
  // Corpo
  fill(0);
  rect(x, y - 50, 10, 50);
  
  // Cabeça
  ellipse(x + 5, y - 70, 20, 20);
  
  // Braços
  stroke(0);
  line(x + 5, y - 40, x - 10, y - 10); // braço esquerdo
  line(x + 5, y - 40, x + 20, y - 10); // braço direito
  
  // Mãos
  fill(139, 69, 19);
  ellipse(x - 10, y - 10, 10, 10); // mão esquerda
  ellipse(x + 20, y - 10, 10, 10); // mão direita
  
  // Perna esquerda
  line(x + 5, y, x - 10, y + 20);
  // Perna direita
  line(x + 5, y, x + 20, y + 20);
  
  // Pés
  fill(0);
  ellipse(x - 10, y + 20, 10, 10); // pé esquerdo
  ellipse(x + 20, y + 20, 10, 10); // pé direito
}
