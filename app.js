const studyData = {
    topics: [
        {
            id: 'separable',
            title: 'Separable Equations',
            icon: 'fas fa-cut',
            content: {
                description: "These are the simplest type - you can literally 'separate' the variables to different sides of the equation.",
                standardForm: 'dy/dx = f(x)g(y) or M(x)dx + N(y)dy = 0',
                solutionSteps: [
                    'Separate variables: dy/g(y) = f(x)dx',
                    'Integrate both sides: ∫dy/g(y) = ∫f(x)dx',
                    'Solve for y if possible',
                    "Don't forget the +C!"
                ],
                example: {
                    theme: 'food',
                    question: 'Solve: dy/dx = 2y/x',
                    steps: [
                        'Separate: dy/y = 2dx/x',
                        'Integrate: ∫dy/y = ∫2dx/x → ln|y| = 2ln|x| + C',
                        'Solve: y = e^(2ln|x| + C) = e^C * x² = Cx²',
                    ],
                    analogy: 'Like separating ingredients before cooking!'
                }
            }
        },
        {
            id: 'homogeneous',
            title: 'Homogeneous Equations',
            icon: 'fas fa-layer-group',
            content: {
                description: 'These equations have terms of the same "degree" - think of it like a balanced meal with equal portions!',
                standardForm: 'M(x,y)dx + N(x,y)dy = 0, where M and N are homogeneous functions of the same degree.',
                solutionSteps: [
                    'Check if M and N are homogeneous of same degree',
                    'Substitute y = vx, so dy = vdx + xdv',
                    'The equation becomes separable in v and x',
                    'Solve as separable equation',
                    'Substitute back y/x for v'
                ],
                example: {
                    theme: 'gym',
                    question: 'Solve: (x² + y²)dx + 2xydy = 0',
                    steps: [
                        'Both M and N are degree 2 ✓',
                        'Substitute y = vx, dy = vdx + xdv',
                        'Equation becomes: (1 + 3v²)dx + 2vx dv = 0',
                        'Separate: dx/x + 2v/(1+3v²)dv = 0',
                        'Solve and substitute back'
                    ],
                    analogy: 'Like adjusting your form to make an exercise easier!'
                }
            }
        },
        {
            id: 'exact',
            title: 'Exact Equations',
            icon: 'fas fa-check-circle',
            content: {
                description: "These equations are already 'perfect' - they're the differential of some function, like a perfectly balanced meal!",
                standardForm: 'M(x,y)dx + N(x,y)dy = 0, with the condition: ∂M/∂y = ∂N/∂x',
                solutionSteps: [
                    'Check if ∂M/∂y = ∂N/∂x',
                    'Find F such that ∂F/∂x = M and ∂F/∂y = N',
                    'Integrate M with respect to x: F = ∫M dx + g(y)',
                    "Differentiate with respect to y and compare with N to find g'(y)",
                    "Integrate g'(y) to find g(y)",
                    'Solution: F(x,y) = C'
                ],
                example: {
                    theme: 'anime',
                    question: 'Solve: (y cos x + 2xeʸ)dx + (sin x + x²eʸ - 1)dy = 0',
                    steps: [
                        'Check: ∂M/∂y = cos x + 2xeʸ = ∂N/∂x ✓',
                        'F = ∫(y cos x + 2xeʸ)dx = y sin x + x²eʸ + g(y)',
                        "∂F/∂y = sin x + x²eʸ + g'(y) = sin x + x²eʸ - 1",
                        "So g'(y) = -1 → g(y) = -y",
                        'Solution: y sin x + x²eʸ - y = C'
                    ],
                    analogy: 'Like finding the perfect technique in an anime battle!'
                }
            }
        },
        {
            id: 'linear',
            title: 'Linear Equations',
            icon: 'fas fa-chart-line',
            content: {
                description: 'These equations follow a straight path - once you find the right "multiplier" (integrating factor), they become easy!',
                standardForm: 'dy/dx + P(x)y = Q(x)',
                solutionSteps: [
                    'Identify P(x) and Q(x)',
                    'Find integrating factor: μ(x) = e^∫P(x)dx',
                    'Multiply the equation by μ(x)',
                    'Left side becomes d/dx[μ(x)y]',
                    'Integrate both sides: μ(x)y = ∫μ(x)Q(x)dx + C',
                    'Solve for y'
                ],
                example: {
                    theme: 'gaming',
                    question: "Solve: y' + 2y cos x = sin²x cos x",
                    steps: [
                        'P(x) = 2 cos x, Q(x) = sin²x cos x',
                        'μ(x) = e^∫2 cos x dx = e^{2 sin x}',
                        'Multiply: e^{2 sin x}y\' + 2 cos x e^{2 sin x}y = sin²x cos x e^{2 sin x}',
                        'Left side is d/dx[e^{2 sin x}y]',
                        'Integrate: e^{2 sin x}y = ∫sin²x cos x e^{2 sin x}dx',
                        'Solve for y'
                    ],
                    analogy: "Like using an item to boost your champion's power in TFT!"
                }
            }
        },
        {
            id: 'bernoulli',
            title: 'Bernoulli Equations',
            icon: 'fas fa-bolt',
            content: {
                description: 'These look complicated but can be transformed into linear equations with a simple substitution!',
                standardForm: 'dy/dx + P(x)y = Q(x)yⁿ',
                solutionSteps: [
                    'Identify n, P(x), and Q(x)',
                    'Substitute: z = y^(1-n)',
                    'Differentiate to find dz/dx',
                    'Substitute into original equation',
                    'It becomes linear in z!',
                    'Solve as linear equation',
                    'Substitute back y = z^(1/(1-n))'
                ],
                example: {
                    theme: 'food',
                    question: "Solve: y' + xy = xy²",
                    steps: [
                        'n = 2, P(x) = x, Q(x) = x',
                        'z = y^(1-2) = y^(-1)',
                        'dz/dx = -y^(-2) dy/dx',
                        'Substitute: -y² dz/dx + xy = xy²',
                        'Divide by -y²: dz/dx - xz = -x (linear!)',
                        'Solve as linear equation'
                    ],
                    analogy: 'Like transforming a complex recipe into simple steps!'
                }
            }
        },
        {
            id: 'decision',
            title: 'Decision Tree',
            icon: 'fas fa-sitemap',
            content: {
                description: 'Not sure which method to use? Follow this flowchart!',
                decisionTree: [
                    { type: 'question', text: 'Start: Given a differential equation M(x,y)dx + N(x,y)dy = 0' },
                    { type: 'question', text: 'Question 1: Can you separate variables? (Can write as f(x)dx + g(y)dy = 0)' },
                    { type: 'answer', text: 'YES → Use Variable Separable method' },
                    { type: 'answer', text: 'NO → Go to Question 2' },
                    { type: 'question', text: 'Question 2: Are M and N homogeneous of the same degree?' },
                    { type: 'answer', text: 'YES → Use Homogeneous method (substitute y = vx)' },
                    { type: 'answer', text: 'NO → Go to Question 3' },
                    { type: 'question', text: 'Question 3: Is it exact? (Check if ∂M/∂y = ∂N/∂x)' },
                    { type: 'answer', text: 'YES → Use Exact Equation method' },
                    { type: 'answer', text: 'NO → Go to Question 4' },
                    { type: 'question', text: 'Question 4: Can you write it as dy/dx + P(x)y = Q(x)?' },
                    { type: 'answer', text: 'YES → Use Linear Equation method' },
                    { type: 'answer', text: 'NO → Go to Question 5' },
                    { type: 'question', text: 'Question 5: Can you write it as dy/dx + P(x)y = Q(x)yⁿ?' },
                    { type: 'answer', text: 'YES → Use Bernoulli Equation method' },
                    { type: 'answer', text: 'NO → Try Integrable Combinations or other methods' }
                ],
                analogy: {
                    theme: 'gym',
                    text: 'Choosing the right method is like selecting the right exercise for your workout goals. You wouldn\'t do bicep curls to strengthen your legs!'
                }
            }
        },
        {
            id: 'tips',
            title: 'Quick Tips',
            icon: 'fas fa-lightbulb',
            content: {
                description: 'Helpful tips tailored to your interests!',
                quickTips: [
                    {
                        theme: 'food',
                        title: 'Food Tips',
                        tips: [
                            "Separable Equations: Like separating ingredients before cooking - keep x's and y's on different sides!",
                            "Integrating Factor: Like a special sauce that makes everything come together perfectly."
                        ]
                    },
                    {
                        theme: 'gaming',
                        title: 'TFT Tips',
                        tips: [
                            "Decision Making: Like choosing your comp - identify the equation type first!",
                            "Substitution: Like pivoting your comp when it's not working - try a different approach!"
                        ]
                    },
                    {
                        theme: 'anime',
                        title: 'Anime Tips',
                        tips: [
                            "Exact Equations: Like finding the perfect battle technique - everything just fits!",
                            "Bernoulli Equations: Like a power-up transformation - they look scary but become manageable!"
                        ]
                    },
                    {
                        theme: 'gym',
                        title: 'Gym Tips',
                        tips: [
                            "Practice: Like building muscle - you need consistent practice to get stronger!",
                            "Form Matters: Like proper lifting form - follow the solution steps carefully!"
                        ]
                    }
                ],
                memoryTechniques: [
                    'Separable: "Separate like ingredients"',
                    'Homogeneous: "Same degree, substitute y=vx"',
                    'Exact: "Check M_y = N_x, then find F"',
                    'Linear: "Find μ(x), multiply, integrate"',
                    'Bernoulli: "Substitute z = y^(1-n)"'
                ]
            }
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const topicNav = document.getElementById('topic-nav');
    const topicTitle = document.getElementById('topic-title');
    const topicContent = document.getElementById('topic-content');
    const welcomeScreen = document.getElementById('welcome-screen');
    const topicScreen = document.getElementById('topic-screen');

    // Populate topic navigation
    studyData.topics.forEach(topic => {
        const link = document.createElement('a');
        link.classList.add('topic-link');
        link.setAttribute('data-id', topic.id);
        link.innerHTML = `<i class="${topic.icon}"></i><span>${topic.title}</span>`;
        link.addEventListener('click', () => {
            loadTopic(topic.id);
            document.querySelectorAll('.topic-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
        topicNav.appendChild(link);
    });

    function loadTopic(id) {
        const topic = studyData.topics.find(t => t.id === id);
        if (!topic) return;

        welcomeScreen.style.display = 'none';
        topicScreen.style.display = 'block';

        topicTitle.textContent = topic.title;
        let contentHTML = `
            <p>${topic.content.description}</p>
            <h3><i class="fas fa-shapes"></i> Standard Form</h3>
            <div class="code-block">${topic.content.standardForm}</div>
        `;

        if (topic.content.solutionSteps) {
            contentHTML += `
                <h3><i class="fas fa-footsteps"></i> Solution Steps</h3>
                <ol>
                    ${topic.content.solutionSteps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            `;
        }

        if (topic.content.example) {
            contentHTML += `
                <div class="example-card ${topic.content.example.theme}">
                    <h4><i class="fas fa-lightbulb"></i> Example: ${topic.content.example.analogy}</h4>
                    <p><strong>Question:</strong> ${topic.content.example.question}</p>
                    <ul>
                        ${topic.content.example.steps.map(step => `<li>${step}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (topic.content.decisionTree) {
            contentHTML += `
                <h3><i class="fas fa-sitemap"></i> Decision Tree</h3>
                ${topic.content.decisionTree.map(node => `<div class="tree-node ${node.type}">${node.text}</div>`).join('')}
            `;
        }

        if (topic.content.quickTips) {
            contentHTML += `
                <h3><i class="fas fa-star"></i> Quick Tips</h3>
                <div class="quick-tips">
                    ${topic.content.quickTips.map(tip => `
                        <div class="tip-card ${tip.theme}">
                            <h4>${tip.title}</h4>
                            <ul>${tip.tips.map(t => `<li>${t}</li>`).join('')}</ul>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        if (topic.content.memoryTechniques) {
            contentHTML += `
                <h3><i class="fas fa-brain"></i> Memory Techniques</h3>
                <ul>
                    ${topic.content.memoryTechniques.map(technique => `<li>${technique}</li>`).join('')}
                </ul>
            `;
        }


        topicContent.innerHTML = contentHTML;
    }

    // Gamification Engine
    let player = {
        xp: 0,
        level: 1,
        streak: 0,
        lastStudy: null
    };

    const RANK_NAMES = ['Initiate', 'Apprentice', 'Adept', 'Master', 'Grandmaster'];
    const XP_PER_LEVEL = 100;

    function updateHUD() {
        const rank = RANK_NAMES[player.level - 1] || 'Legend';
        document.getElementById('rank').textContent = rank;
        document.getElementById('xp-text').textContent = `${player.xp}/${XP_PER_LEVEL}`;
        document.getElementById('xp-fill').style.width = `${(player.xp / XP_PER_LEVEL) * 100}%`;
        document.getElementById('streak').innerHTML = `<i class="fas fa-fire"></i> ${player.streak}`;
    }

    function addXp(amount) {
        player.xp += amount;
        if (player.xp >= XP_PER_LEVEL) {
            player.level++;
            player.xp -= XP_PER_LEVEL;
            // You can add a level-up notification here!
        }
        updateStreak();
        savePlayerData();
        updateHUD();
    }

    function updateStreak() {
        const now = new Date();
        const last = new Date(player.lastStudy);
        const diff = (now - last) / (1000 * 60 * 60); // Difference in hours

        if (!player.lastStudy || diff > 48) {
            player.streak = 1;
        } else if (diff > 24) {
            player.streak++;
        }
        player.lastStudy = now;
    }

    function savePlayerData() {
        localStorage.setItem('playerData', JSON.stringify(player));
    }

    function loadPlayerData() {
        const savedData = localStorage.getItem('playerData');
        if (savedData) {
            player = JSON.parse(savedData);
        }
        updateHUD();
    }

    // Initial load
    loadPlayerData();

    // Example of how to add XP when a topic is viewed
    topicNav.addEventListener('click', (e) => {
        if (e.target.closest('.topic-link')) {
            addXp(10); // Add 10 XP for viewing a topic
        }
    });

    // Audio Integration
    const bgMusic = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
    const ttsButton = document.getElementById('tts-button');

    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            bgMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        }
    });

    ttsButton.addEventListener('click', () => {
        const topicId = document.querySelector('.topic-link.active').getAttribute('data-id');
        const topic = studyData.topics.find(t => t.id === topicId);
        if (topic) {
            const textToRead = `
                Topic: ${topic.title}.
                ${topic.content.description}.
                Standard Form: ${topic.content.standardForm}.
                Solution Steps: ${topic.content.solutionSteps.join('. ')}.
            `;
            speechSynthesis.cancel(); // Cancel any previous speech
            const utterance = new SpeechSynthesisUtterance(textToRead);
            speechSynthesis.speak(utterance);
        }
    });

    // Flashcard Mode
    const flashcardModeButton = document.getElementById('flashcard-mode-button');
    flashcardModeButton.addEventListener('click', () => {
        const topicId = document.querySelector('.topic-link.active').getAttribute('data-id');
        enterFlashcardMode(topicId);
    });

    function enterFlashcardMode(topicId) {
        const topic = studyData.topics.find(t => t.id === topicId);
        if (!topic) return;

        const flashcards = createFlashcardsForTopic(topic);
        let currentCard = 0;

        const flashcardContainer = document.createElement('div');
        flashcardContainer.className = 'flashcard-container';

        flashcardContainer.innerHTML = `
            <div class="flashcard">
                <div class="flashcard-inner">
                    <div class="flashcard-front"></div>
                    <div class="flashcard-back"></div>
                </div>
            </div>
            <div class="flashcard-nav">
                <button id="prev-card"><i class="fas fa-arrow-left"></i></button>
                <span id="card-counter">${currentCard + 1}/${flashcards.length}</span>
                <button id="next-card"><i class="fas fa-arrow-right"></i></button>
            </div>
            <button id="exit-flashcard-mode"><i class="fas fa-times"></i> Exit</button>
        `;

        document.getElementById('main-content').appendChild(flashcardContainer);
        const cardInner = flashcardContainer.querySelector('.flashcard-inner');

        function updateCard() {
            flashcardContainer.querySelector('.flashcard-front').innerHTML = `<h3>${flashcards[currentCard].question}</h3>`;
            flashcardContainer.querySelector('.flashcard-back').innerHTML = `<p>${flashcards[currentCard].answer}</p>`;
            flashcardContainer.querySelector('#card-counter').textContent = `${currentCard + 1}/${flashcards.length}`;
            cardInner.classList.remove('is-flipped');
        }

        cardInner.addEventListener('click', () => cardInner.classList.toggle('is-flipped'));

        flashcardContainer.querySelector('#prev-card').addEventListener('click', () => {
            if (currentCard > 0) {
                currentCard--;
                updateCard();
            }
        });

        flashcardContainer.querySelector('#next-card').addEventListener('click', () => {
            if (currentCard < flashcards.length - 1) {
                currentCard++;
                updateCard();
                addXp(5); // 5 XP for reviewing a card
            }
        });

        flashcardContainer.querySelector('#exit-flashcard-mode').addEventListener('click', () => {
            flashcardContainer.remove();
        });

        updateCard();
    }

    function createFlashcardsForTopic(topic) {
        const cards = [];
        cards.push({ question: 'Standard Form', answer: topic.content.standardForm });
        topic.content.solutionSteps.forEach((step, i) => {
            cards.push({ question: `Step ${i + 1}`, answer: step });
        });
        if (topic.content.example) {
            cards.push({ question: 'Example Question', answer: topic.content.example.question });
            cards.push({ question: 'Example Analogy', answer: topic.content.example.analogy });
        }
        return cards;
    }
});
