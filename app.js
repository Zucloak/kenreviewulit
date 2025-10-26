document.addEventListener('DOMContentLoaded', () => {
    let xp = 0;
    let streak = 0;

    const xpValue = document.getElementById('xp-value');
    const streakValue = document.getElementById('streak-value');

    const studyData = {
        'Food Science': [
            { question: 'What is the Maillard reaction?', answer: 'A chemical reaction between amino acids and reducing sugars that gives browned food its distinctive flavor.' },
            { question: 'What is fermentation?', answer: 'A metabolic process that produces chemical changes in organic substrates through the action of enzymes.' }
        ],
        'TFT Strategy': [
            { question: 'What is "hyper rolling"?', answer: 'A strategy where a player spends a large amount of gold on rerolling the shop at a low level to find multiple copies of low-cost units.' },
            { question: 'What is a "slam item"?', answer: 'Building and using a powerful item early in the game to maintain health and win streaks, even if it\'s not the perfect item for the final build.' }
        ]
    };

    const topicList = document.getElementById('topic-list');
    const flashcardContainer = document.getElementById('flashcard-container');

    function updateHUD() {
        xpValue.textContent = xp;
        streakValue.textContent = streak;
    }

    function loadTopics() {
        topicList.innerHTML = '';
        for (const topic in studyData) {
            const li = document.createElement('li');
            li.textContent = topic;
            li.addEventListener('click', () => loadFlashcards(topic));
            topicList.appendChild(li);
        }
    }

    function loadFlashcards(topic) {
        flashcardContainer.innerHTML = `<h2>${topic}</h2>`;
        studyData[topic].forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'flashcard';
            cardElement.innerHTML = `<div class="front">${card.question}</div><div class="back">${card.answer}</div><button class="tts-btn">Read Aloud</button>`;
            cardElement.addEventListener('click', () => {
                cardElement.classList.toggle('flipped');
                if (cardElement.classList.contains('flipped')) {
                    xp += 10;
                    streak++;
                    updateHUD();
                }
            });
            const ttsButton = cardElement.querySelector('.tts-btn');
            ttsButton.addEventListener('click', (event) => {
                event.stopPropagation();
                const text = cardElement.classList.contains('flipped') ? card.answer : card.question;
                const utterance = new SpeechSynthesisUtterance(text);
                speechSynthesis.speak(utterance);
            });
            flashcardContainer.appendChild(cardElement);
        });
    }

    const themeSelect = document.getElementById('theme-select');
    themeSelect.addEventListener('change', (event) => {
        document.body.className = event.target.value;
    });

    const bgMusic = document.getElementById('bg-music');
    const playPauseBtn = document.getElementById('play-pause-btn');

    playPauseBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            bgMusic.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    loadTopics();
    updateHUD();
});