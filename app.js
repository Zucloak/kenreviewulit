const studyData = {
    topics: [
        {
            id: 'separable',
            title: 'Separable Equations',
            icon: 'fas fa-cut',
            content: {
                description: "This is the foundational stance, the first and most essential technique in your arsenal. It’s all about breaking a problem down to its purest components. You isolate the x terms on one side and the y terms on the other, making them easy to conquer individually.",
                standardForm: '$$ \\frac{dy}{dx} = f(x)g(y) $$',
                analogy: {
                    theme: 'food',
                    title: 'Mise en Place (Food Prep)',
                    description: "Think of yourself as a master chef. Before you even think about turning on the heat, you prepare your ingredients. You chop your vegetables and place them in one bowl, measure your spices into another, and have your protein ready on a separate plate. This is *mise en place*. You are separating everything, so when it's time to cook (integrate), the process is clean, orderly, and flawless.",
                    formula: '$$ \\frac{dy}{g(y)} = f(x)dx $$',
                    visual: "A satisfying GIF of a chef neatly separating egg yolks from whites, or quickly chopping vegetables and sweeping them into separate containers.",
                    relevance: "This technique is crucial for modeling simple growth and decay processes, like population growth, radioactive decay, or how a hot drink cools down. It’s about understanding systems where the rate of change depends on the current state.",
                    tip: "Mise en place! Separate your variables before you integrate."
                }
            }
        },
        {
            id: 'homogeneous',
            title: 'Homogeneous Equations',
            icon: 'fas fa-layer-group',
            content: {
                description: 'These equations are more complex. At first glance, the variables are too mixed to separate. But you, the strategist, recognize a hidden balance: every term has the same "degree." This uniformity is the key to victory.',
                standardForm: '$$ M(x,y)dx + N(x,y)dy = 0 $$',
                analogy: {
                    theme: 'gym',
                    title: 'A Balanced Workout',
                    description: "Imagine designing a full-body workout. You need to balance opposing muscle groups—push and pull, upper and lower body—to ensure stable, holistic strength. A homogeneous equation is like a perfectly balanced set of exercises. To execute it properly, you need the right form. The substitution `y = vx` is that crucial adjustment in your technique—like shifting your grip or stance—that transforms a difficult lift into a manageable one.",
                    formula: '$$ y = vx \\quad \\text{and} \\quad dy = vdx + xdv $$',
                    visual: "GIF of a professional weightlifter adjusting their grip and stance before a heavy deadlift. The subtle change allows them to lift immense weight with perfect form.",
                    relevance: "These equations appear in fields like physics and engineering, especially when dealing with properties that scale uniformly, like certain fluid dynamics or elasticity problems.",
                    tip: "Same degree? Balanced set. Adjust your form with y=vx."
                }
            }
        },
        {
            id: 'exact',
            title: 'Exact Equations',
            icon: 'fas fa-check-circle',
            content: {
                description: "This is a moment of pure clarity in battle. You see an equation that looks like a chaotic mess, but you recognize it as the result of a single, elegant technique—the chain rule in reverse. It’s not a fight; it’s a 'one-hit KO' if you see the opening.",
                standardForm: '$$ M(x,y)dx + N(x,y)dy = 0 $$',
                analogy: {
                    theme: 'anime',
                    title: 'The Perfect Counter',
                    description: "You're in a high-stakes battle. Your opponent unleashes a complex flurry of attacks. But you've trained for this. You see the pattern, the hidden weakness. In a single, fluid motion, you execute a perfect counter that neutralizes their entire assault. That’s an exact equation. It's already the derivative of a single 'potential function,' and your job is to see it and trace it back to the source.",
                    formula: '$$ \\frac{\\partial M}{\\partial y} = \\frac{\partial N}{\\partial x} \\quad \\implies \\quad F(x,y) = C $$',
                    visual: "GIF of an anime swordsman (like Gojo from Jujutsu Kaisen or Levi from Attack on Titan) effortlessly deflecting a seemingly unstoppable attack with one precise, decisive movement.",
                    relevance: "This is the language of conservation laws in physics. The potential function F(x,y) is often related to potential energy, and the equation describes a system where energy is conserved.",
                    tip: "See the perfect balance (∂M/∂y = ∂N/∂x)? It's a one-hit KO. Find the source technique, F(x,y)."
                }
            }
        },
        {
            id: 'linear',
            title: 'Linear Equations',
            icon: 'fas fa-chart-line',
            content: {
                description: "This is a common opponent, a standard pattern of attack. It’s straightforward, but requires a special tool to defeat. You need to craft a 'power-up item'—the integrating factor—that transforms the equation and makes it vulnerable.",
                standardForm: '$$ \\frac{dy}{dx} + P(x)y = Q(x) $$',
                analogy: {
                    theme: 'gaming',
                    title: 'Equipping a Game-Changing Item (TFT)',
                    description: "You're in a crucial Teamfight Tactics match. Your main champion is strong but is getting overwhelmed. You need a force multiplier. You forge a critical item, like an Infinity Edge or a Rabadon's Deathcap, and equip it to them. Suddenly, their power skyrockets, and they slice through the enemy team. The integrating factor, μ(x), is that game-changing item.",
                    formula: '$$ \\mu(x) = e^{\\int P(x)dx} $$',
                    visual: "GIF from TFT where a champion is given a powerful item, and their character model begins to glow as they unleash a devastatingly powerful new attack.",
                    relevance: "Linear equations are everywhere. They model electrical circuits (RLC circuits), mixing problems (salt in a tank), and the cooling of objects. They are the workhorse of first-order differential equations.",
                    tip: "Facing a linear opponent? Forge your item, μ(x), and multiply its power."
                }
            }
        },
        {
            id: 'bernoulli',
            title: 'Bernoulli Equations',
            icon: 'fas fa-bolt',
            content: {
                description: "This opponent is a master of disguise. It looks non-linear and intimidating because of an extra yⁿ term. But this is a trick. A simple, clever substitution will break the illusion and reveal it for what it truly is: a Linear Equation in a costume.",
                standardForm: '$$ \\frac{dy}{dx} + P(x)y = Q(x)y^n $$',
                analogy: {
                    theme: 'anime',
                    title: 'The Transformation Power-Up',
                    description: "A formidable villain appears, seemingly unbeatable. But the hero has a hidden card to play: a transformation. They power up (like a Super Saiyan or activating a Bankai), and in their new form, the villain's attacks are suddenly manageable. The substitution z = y¹⁻ⁿ is that transformation. It changes your perspective, turning an impossible nonlinear fight into a linear one you already know how to win.",
                    formula: '$$ z = y^{1-n} $$',
                    visual: "A dramatic GIF of an anime character's transformation sequence (like Deku activating Full Cowl or Ichigo's Bankai reveal). They are surrounded by energy as they change form, ready to dominate the fight.",
                    relevance: "This technique is a prime example of a core engineering and science principle: if you can't solve a problem, transform it into one you can solve. It appears in fluid dynamics and population models where there are limiting factors (the yⁿ term).",
                    tip: "See that rogue yⁿ? It's a disguise. Transform and reveal its true linear form!"
                }
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

        const { description, analogy } = topic.content;

        let contentHTML = `
            <div class="topic-summary">
                <p>${description}</p>
            </div>

            <div class="analogy-card ${analogy.theme}">
                <h3>🧠 Analogy: ${analogy.title}</h3>
                <p>${analogy.description}</p>

                <h4>📘 Formula or Example</h4>
                <div class="formula">${analogy.formula}</div>

                <h4>🎬 Visual Reference</h4>
                <p class="visual-ref">${analogy.visual}</p>

                <h4>💡 Real-World Relevance</h4>
                <p>${analogy.relevance}</p>

                <div class="recall-tip">
                    🔥 <strong>Quick Recall Tip:</strong> ${analogy.tip}
                </div>
            </div>
        `;

        topicContent.innerHTML = contentHTML;

        // Rerender LaTeX
        if (window.MathJax) {
            window.MathJax.typeset();
        }
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
        if(topic.content.analogy && topic.content.analogy.formula) {
            cards.push({ question: 'Key Formula/Substitution', answer: topic.content.analogy.formula });
        }
        if(topic.content.analogy && topic.content.analogy.tip) {
            cards.push({ question: 'Recall Tip', answer: topic.content.analogy.tip });
        }
        return cards;
    }
});
