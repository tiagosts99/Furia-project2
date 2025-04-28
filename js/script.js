// Dados do Quiz
const questions = [
    {   // Pergunta 1
      text: "Qual cenário te anima mais?",
      options: [
        { text: "Bombas e explosões", team: "CS:GO" },
        { text: "Poderes e agentes", team: "Valorant" },
        { text: "Batalhas em Summoner's Rift", team: "LoL" },
        { text: "Treinar para ser o próximo campeão", team: "Academy" }
      ]
    },
    {   // Pergunta 2
      text: "Qual qualidade você mais valoriza?",
      options: [
        { text: "Precisão", team: "CS:GO" },
        { text: "Criatividade", team: "Valorant" },
        { text: "Trabalho em equipe", team: "LoL" },
        { text: "Dedicação", team: "Academy" }
      ]
    },
    {   // Pergunta 3
      text: "Se fosse um herói, você seria:",
      options: [
        { text: "Um atirador certeiro", team: "CS:GO" },
        { text: "Um agente astuto", team: "Valorant" },
        { text: "Um campeão indomável", team: "LoL" },
        { text: "Uma jovem promessa", team: "Academy" }
      ]
    },
    {   // Pergunta 4
        text: "Qual serio sua armar ideia?",
        options: [
            { text: "Rifle AK-47 na mão", team: "CS:GO" },
            { text: "Pistola futurista cheia de estilo", team: "Valorant" },
            { text: "Um caderno de treino e garra nos olhos", team: "Academy" },
            { text: "Espada mágica ou cajado poderoso", team: "Lol" }
        ]
    },
    {   // Pergunta 5
        text: "Se você fosse escolher um lema, seria:",
        options: [
            { text: "Pense rápido, aja mas rápido", team: "Valorant" },
            { text: "Treinar hoje para conquistar amanhã.", team: "Academy" },
            { text: "Mirar. Atirar. Vencer.", team: "CS:GO" },
            { text: "Unido somos imbatíveis.", team: "Lol" }
        ]
    },
    {   // Pergunta 6
        text: "Que tipo de revial você mais respeita?",
        options: [
            { text: "O que defende o time até o último segundo.", team: "Lol" },
            { text: "O que nunca desiste, mesmo perdendo.", team: "Academy" },
            { text: "O que surpreende com jogadas geniais.", team: "Valorant" },
            { text: "O que acerta headshot de olhos fechados.", team: "CS:GO" }
        ]
    },
    {   // Pergunta 7
        text: "Qual dessas frases define melhor seu espirito competitivo?",
        options: [
            { text: "Confio na minha evolução", team: "Academy" },
            { text: "Confio na minha criatividade", team: "Valorant" },
            { text: "Confio na minha mira", team: "CS:GO" },
            { text: "Confio no meu time", team: "Lol" }
        ]
    },
    {   // Pergunta 8
        text: "Se pudesse ser reconhecido por algo, seria:",
        options: [
            { text: "Um headshot lendário", team: "CS:GO" },
            { text: "Uma chamada de equipe perfeita", team: "Lol" },
            { text: "Um cluth insano", team: "Valorant" },
            { text: "Uma jornada de crescimento inspiradora", team: "Academy" }
        ]
    },
    {   // Pergunta 9
        text: "Qual desses animes você mais se identifica?",
        options: [
            { text: "Jujutsu Kaisen", team: "Valorant" },
            { text: "Naruto", team: "Lol" },
            { text: "Attack on titan", team: "CS:GO" },
            { text: "My hero academia", team: "Academy" }
        ]
    }

  ];
  
  let fanData = {};
  let scores = { "CS:GO": 0, "Valorant": 0, "LoL": 0, "Academy": 0 };
  let currentQuestion = 0;
  
  // DOM Elements
  const personalDataSection = document.getElementById('personal-data');
  const quizSection = document.getElementById('quiz');
  const resultSection = document.getElementById('result');
  const questionText = document.getElementById('question-text');
  const optionButtons = [
    document.getElementById('option-0'),
    document.getElementById('option-1'),
    document.getElementById('option-2'),
    document.getElementById('option-3')
  ];
  
  // Formulário de Dados Pessoais
  document.getElementById('form-data').addEventListener('submit', function(e) {
    e.preventDefault();
    fanData.name = document.getElementById('name').value;
    fanData.email = document.getElementById('email').value;
    fanData.age = document.getElementById('age').value;
  
    personalDataSection.style.display = 'none';
    quizSection.style.display = 'block';
    loadQuestion();
  });
  
  // Carregar Pergunta
  function loadQuestion() {
    if (currentQuestion < questions.length) {
      const q = questions[currentQuestion];
      questionText.innerText = q.text;
      q.options.forEach((opt, idx) => {
        optionButtons[idx].innerText = opt.text;
        optionButtons[idx].onclick = () => {
          scores[opt.team]++;
          currentQuestion++;
          loadQuestion();
        };
      });
    } else {
      showResult();
    }
  }
  
  // Mostrar Resultado
  function showResult() {
    quizSection.style.display = 'none';
    resultSection.style.display = 'block';
    
    const bestTeam = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    document.getElementById('team-name').innerText = bestTeam;


  
}
  
  
  // Compartilhar no WhatsApp
  document.getElementById('share-btn').addEventListener('click', () => {
    const bestTeam = document.getElementById('team-name').innerText;
    const text = `Eu fiz o quiz da FÚRIA e sou ${bestTeam}! Faça também: `;
    const url = encodeURIComponent(window.location.href);
    const link = `https://wa.me/?text=${encodeURIComponent(text)}${url}`;
    window.open(link, '_blank');
  });
  