// =========================================================
// COMO INSERIR SONS E IMAGENS
// =========================================================
// 1) IMAGENS:
//    Substitua os blocos com textos como [INSERIR IMAGEM ... AQUI]
//    por tags <img src="seu-arquivo.png" alt="...">.
//
// 2) SONS:
//    Nos pontos marcados com "INSERIR SOM AQUI", use por exemplo:
//      const audio = new Audio('sons/acerto.mp3');
//      audio.play();
//
// 3) SUGESTÃO DE ARQUIVOS:
//    capa.png, narrativa.png, acerto.png, erro.png,
//    tempo.png, vitoria.png, suspense.png
// =========================================================

const TIMER_SECONDS = 60;
const suspects = ["Thales", "Vera", "Patrícia", "Pedro"];
const culprit = "Pedro";

// Agora há apenas 1 pista por nível.
// A pista é liberada ao acertar a 5ª questão de cada nível.
const questions = [
  { id: 1, level: 1, prompt: "Júlia tinha 7 reais e ganhou mais 5 reais da avó. Com quantos reais ela ficou?", choices: ["10 reais", "11 reais", "12 reais", "13 reais", "14 reais"], answer: 2 },
  { id: 2, level: 1, prompt: "Na lancheira havia 9 biscoitos. Júlia comeu 3. Quantos sobraram?", choices: ["5", "6", "7", "8", "9"], answer: 1 },
  { id: 3, level: 1, prompt: "A professora escreveu 8 contas no quadro e depois acrescentou mais 4. Quantas contas ficaram no quadro?", choices: ["10", "11", "12", "13", "14"], answer: 2 },
  { id: 4, level: 1, prompt: "Pedro tinha 10 lápis e perdeu 2. Com quantos lápis ficou?", choices: ["6", "7", "8", "9", "10"], answer: 2 },
  { id: 5, level: 1, prompt: "Vera tinha 6 adesivos e ganhou mais 6. Quantos adesivos ela ficou?", choices: ["10", "11", "12", "13", "14"], answer: 2 },

  { id: 6, level: 2, prompt: "Júlia levou 14 salgadinhos para o recreio e comeu 5. Quantos sobraram?", choices: ["7", "8", "9", "10", "11"], answer: 2 },
  { id: 7, level: 2, prompt: "Na sala havia 7 mochilas de um lado e 8 do outro. Quantas mochilas havia ao todo?", choices: ["13", "14", "15", "16", "17"], answer: 2 },
  { id: 8, level: 2, prompt: "A professora separou 15 folhas e usou 4. Quantas folhas ainda restaram?", choices: ["9", "10", "11", "12", "13"], answer: 2 },
  { id: 9, level: 2, prompt: "Thales tinha 9 apontadores na coleção e ganhou mais 7. Quantos apontadores ele passou a ter?", choices: ["14", "15", "16", "17", "18"], answer: 2 },
  { id: 10, level: 2, prompt: "Ana tinha 13 canetinhas e emprestou 4. Com quantas ficou?", choices: ["7", "8", "9", "10", "11"], answer: 2 },

  { id: 11, level: 3, prompt: "No recreio, 11 alunos foram ao pátio e depois chegaram mais 6. Quantos alunos ficaram no pátio?", choices: ["15", "16", "17", "18", "19"], answer: 2 },
  { id: 12, level: 3, prompt: "A turma fez 18 continhas e já corrigiu 7. Quantas faltam corrigir?", choices: ["9", "10", "11", "12", "13"], answer: 2 },
  { id: 13, level: 3, prompt: "Patrícia tinha 8 borrachas e ganhou mais 9. Quantas borrachas ela ficou?", choices: ["15", "16", "17", "18", "19"], answer: 2 },
  { id: 14, level: 3, prompt: "Pedro tinha 17 figurinhas e perdeu 6. Quantas sobraram?", choices: ["9", "10", "11", "12", "13"], answer: 2 },
  { id: 15, level: 3, prompt: "Júlia juntou 10 sucos na festa da escola e depois ganhou mais 8. Quantos sucos ela teve ao todo?", choices: ["16", "17", "18", "19", "20"], answer: 2 },

  { id: 16, level: 4, prompt: "A professora levou 19 livros para a sala e emprestou 7. Quantos livros sobraram?", choices: ["10", "11", "12", "13", "14"], answer: 2 },
  { id: 17, level: 4, prompt: "Na mochila de Vera havia 9 lápis. Ela colocou mais 10. Quantos lápis ficaram na mochila?", choices: ["17", "18", "19", "20", "21"], answer: 2 },
  { id: 18, level: 4, prompt: "A turma tinha 20 minutos para terminar a atividade. Já passaram 8 minutos. Quantos minutos faltam?", choices: ["10", "11", "12", "13", "14"], answer: 2 },
  { id: 19, level: 4, prompt: "Júlia tinha 11 balas e ganhou mais 8. Quantas balas ela passou a ter?", choices: ["17", "18", "19", "20", "21"], answer: 2 },
  { id: 20, level: 4, prompt: "Pedro guardou 16 papéis e jogou fora 4. Com quantos papéis ficou?", choices: ["10", "11", "12", "13", "14"], answer: 2 },

  { id: 21, level: 5, prompt: "Na merenda, havia 12 pães e chegaram mais 7. Quantos pães ficaram ao todo?", choices: ["17", "18", "19", "20", "21"], answer: 2 },
  { id: 22, level: 5, prompt: "A professora preparou 18 desafios e a turma resolveu 6. Quantos desafios faltam?", choices: ["10", "11", "12", "13", "14"], answer: 2 },
  { id: 23, level: 5, prompt: "Thales tinha 13 moedas e ganhou mais 6. Quantas moedas ele passou a ter?", choices: ["17", "18", "19", "20", "21"], answer: 2 },
  { id: 24, level: 5, prompt: "Patrícia tinha 20 folhas e usou 8. Quantas folhas sobraram?", choices: ["10", "11", "12", "13", "14"], answer: 2 },
  { id: 25, level: 5, prompt: "Júlia ganhou 14 pontos em um jogo e depois mais 5. Quantos pontos fez ao todo?", choices: ["17", "18", "19", "20", "21"], answer: 2 },

  { id: 26, level: 6, prompt: "Na mochila havia 17 objetos e Júlia retirou 5. Quantos objetos sobraram?", choices: ["10", "11", "12", "13", "14"], answer: 2 },
  { id: 27, level: 6, prompt: "A professora separou 9 cadernos e depois mais 10. Quantos cadernos havia ao todo?", choices: ["17", "18", "19", "20", "21"], answer: 2 },
  { id: 28, level: 6, prompt: "Pedro tinha 15 tampinhas e perdeu 3. Quantas tampinhas ficaram?", choices: ["10", "11", "12", "13", "14"], answer: 2 },
  { id: 29, level: 6, prompt: "No recreio, 11 crianças estavam na fila e chegaram mais 8. Quantas crianças ficaram na fila?", choices: ["17", "18", "19", "20", "21"], answer: 2 },
  { id: 30, level: 6, prompt: "Júlia tinha 18 reais e gastou 6 no lanche da cantina. Com quantos reais ela ficou?", choices: ["10 reais", "11 reais", "12 reais", "13 reais", "14 reais"], answer: 2 }
];

const levelClues = {
  1: "PISTA DO NÍVEL 1: Quem pegou o lanche estava sentado perto da mochila de Júlia.",
  2: "PISTA DO NÍVEL 2: Quem pegou o lanche podia alcançar a mochila sem sair muito do lugar.",
  3: "PISTA DO NÍVEL 3: O colega culpado estava atrás de Júlia.",
  4: "PISTA DO NÍVEL 4: Vera e Patrícia se tornam menos prováveis pelas pistas encontradas.",
  5: "PISTA DO NÍVEL 5: O culpado inventou uma explicação rápida para justificar seu movimento.",
  6: "PISTA DO NÍVEL 6: Todas as pistas apontam para Pedro."
};

let questionIndex = 0;
let timeLeft = TIMER_SECONDS;
let timerInterval = null;
let score = 0;
let collectedClues = [];
let selectedSuspect = "";

const screenIds = ["cover", "story1", "story2", "story3", "story4", "story5", "story6", "question", "correct", "wrong", "timeout", "suspect", "victory", "finalWrong"];

function showScreen(id) {
  stopTimer();
  screenIds.forEach(screenId => {
    document.getElementById(screenId).classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
  if (id === "question") startTimer();
}

function showStoryScreen(number) {
  showScreen(`story${number}`);
}

function startGame() {
  questionIndex = 0;
  timeLeft = TIMER_SECONDS;
  score = 0;
  collectedClues = [];
  selectedSuspect = "";
  // INSERIR SOM AQUI: abertura / introdução
  showScreen("story1");
}

function goToFirstQuestion() {
  questionIndex = 0;
  timeLeft = TIMER_SECONDS;
  renderQuestion();
  showScreen("question");
}

function renderQuestion() {
  const q = questions[questionIndex];
  document.getElementById("challengeTitle").textContent = `DESAFIO ${q.id}`;
  document.getElementById("promptBox").textContent = q.prompt;
  document.getElementById("levelLabel").textContent = `Nível ${q.level}`;
  document.getElementById("scoreValue").textContent = String(score).padStart(2, "0");

  const choicesBox = document.getElementById("choicesBox");
  choicesBox.innerHTML = "";
  const letters = ["A", "B", "C", "D", "E"];

  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.textContent = `${letters[index]}) ${choice.toUpperCase()}`;
    button.onclick = () => handleAnswer(index);
    choicesBox.appendChild(button);
  });

  renderClues();
  updateTimerUI();
}

function maybeUnlockLevelClue(question) {
  const isLastQuestionOfLevel = question.id % 5 === 0;
  const clue = levelClues[question.level];
  const alreadyCollected = collectedClues.includes(clue);

  if (isLastQuestionOfLevel && clue && !alreadyCollected) {
    collectedClues.push(clue);
  }
}

function handleAnswer(choiceIndex) {
  const q = questions[questionIndex];
  if (choiceIndex === q.answer) {
    score += 10;
    maybeUnlockLevelClue(q);
    // INSERIR SOM AQUI: resposta certa
    showScreen("correct");
  } else {
    // INSERIR SOM AQUI: resposta errada
    showScreen("wrong");
  }
}

function goNext() {
  questionIndex += 1;
  if (questionIndex >= questions.length) {
    renderSuspects();
    showScreen("suspect");
    return;
  }
  timeLeft = TIMER_SECONDS;
  renderQuestion();
  showScreen("question");
}

function restartCurrentQuestion() {
  timeLeft = TIMER_SECONDS;
  renderQuestion();
  showScreen("question");
}

function startTimer() {
  stopTimer();
  timerInterval = setInterval(() => {
    timeLeft -= 1;
    updateTimerUI();
    if (timeLeft <= 0) {
      stopTimer();
      // INSERIR SOM AQUI: tempo esgotado
      showScreen("timeout");
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerUI() {
  const percentage = Math.max(0, Math.min(100, (timeLeft / TIMER_SECONDS) * 100));
  const timerCircle = document.getElementById("timerCircle");
  const timerValue = document.getElementById("timerValue");
  timerValue.textContent = timeLeft;
  timerCircle.style.background = `conic-gradient(#ff3131 ${percentage * 3.6}deg, #e8edf2 0deg)`;
}

function renderClues() {
  const cluesBox = document.getElementById("cluesBox");
  cluesBox.innerHTML = "";

  if (!collectedClues.length) {
    cluesBox.innerHTML = '<div class="empty-clue">A pista de cada nível aparece ao acertar a 5ª questão daquele nível.</div>';
    return;
  }

  collectedClues.forEach(clue => {
    const div = document.createElement("div");
    div.className = "clue-item";
    div.textContent = `• ${clue}`;
    cluesBox.appendChild(div);
  });
}

function renderSuspects() {
  const grid = document.getElementById("suspectGrid");
  const confirmBtn = document.getElementById("confirmSuspectBtn");
  grid.innerHTML = "";
  selectedSuspect = "";
  confirmBtn.disabled = true;

  suspects.forEach(name => {
    const button = document.createElement("button");
    button.className = "suspect-button";
    button.innerHTML = `
      <div class="suspect-image">[IMAGEM DE ${name.toUpperCase()}]</div>
      <div class="suspect-name">${name}</div>
    `;
    button.onclick = () => {
      document.querySelectorAll(".suspect-button").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      selectedSuspect = name;
      confirmBtn.disabled = false;
    };
    grid.appendChild(button);
  });
}

function finishInvestigation() {
  if (!selectedSuspect) return;
  if (selectedSuspect === culprit) {
    // INSERIR SOM AQUI: vitória final
    showScreen("victory");
  } else {
    // INSERIR SOM AQUI: suspeito incorreto / suspense
    showScreen("finalWrong");
  }
}

function fullRestart() {
  stopTimer();
  questionIndex = 0;
  timeLeft = TIMER_SECONDS;
  score = 0;
  collectedClues = [];
  selectedSuspect = "";
  showScreen("cover");
}
