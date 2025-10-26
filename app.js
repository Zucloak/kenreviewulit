const studyData = {
    topics: [
        {
            id: 'separable',
            title: 'Separable Equations',
            icon: 'fas fa-cut',
            microLesson: {
                theme: 'food',
                summary: `The foundational stance.
It’s about breaking a problem
down to its purest parts.

You isolate x terms on one side
and y terms on the other,
making them easy to conquer.`,
                analogy: `Think like a master chef.
Before cooking, you prep.
Vegetables in one bowl,
spices in another.

This is *mise en place*.
You separate everything, so when
it's time to integrate (cook),
the process is flawless.`,
                formula: `Initial mix:
$$ \\frac{dy}{dx} = f(x)g(y) $$
Clean separation:
$$ \\frac{dy}{g(y)} = f(x)dx $$`,
                visual: `<img src="https://i.imgur.com/2J7fSR2.gif" alt="Chef preparing ingredients">`,
                relevance: `Models simple growth and decay,
like population change or
how a hot drink cools down.
It's for systems where the rate
of change depends on the state.`,
                tip: `"Mise en place! Separate your
variables before you integrate."`
            }
        },
        {
            id: 'homogeneous',
            title: 'Homogeneous Equations',
            icon: 'fas fa-layer-group',
            microLesson: {
                theme: 'gym',
                summary: `A more complex battlefield.
The variables look too mixed
to separate at first.

But you spot a hidden balance:
every term has the same "degree."
This uniformity is the key.`,
                analogy: `Imagine a full-body workout.
You balance opposing muscles—
push/pull, upper/lower body—
for holistic strength.

The substitution \`y = vx\` is your
crucial adjustment in form,
turning a difficult lift into
a manageable one.`,
                formula: `The balanced form:
$$ M(x,y)dx + N(x,y)dy = 0 $$
The technique adjustment:
$$ y = vx \\implies dy = vdx + xdv $$`,
                visual: `<img src="https://media1.tenor.com/m/qu7Qq_tzdasAAAAd/gym-deadlift.gif" alt="Weightlifter with good form">`,
                relevance: `Appears in physics when dealing
with properties that scale
uniformly, like in certain
fluid dynamics problems.`,
                tip: `"Same degree? Balanced set.
Adjust your form with y=vx."`
            }
        },
        {
            id: 'exact',
            title: 'Exact Equations',
            icon: 'fas fa-check-circle',
            microLesson: {
                theme: 'anime',
                summary: `A moment of pure clarity.
The equation looks chaotic,
but you see it as a single,
elegant technique in reverse.

It’s a "one-hit KO"
if you spot the opening.`,
                analogy: `You're in a high-stakes battle.
Your opponent unleashes a
flurry of complex attacks.
You see the pattern.

In one fluid motion, you
execute a perfect counter that
neutralizes their entire assault.
That’s an exact equation.`,
                formula: `The opening:
$$ \\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} $$
The single, powerful move:
$$ F(x,y) = C $$`,
                visual: `<img src="https://i.imgur.com/7T2Gz8s.gif" alt="Anime perfect counter">`,
                relevance: `This is the language of
conservation laws in physics,
where F(x,y) often relates
to potential energy.`,
                tip: `"See the balance? It's a one-hit
KO. Find the source, F(x,y)."`
            }
        },
        {
            id: 'linear',
            title: 'Linear Equations',
            icon: 'fas fa-chart-line',
            microLesson: {
                theme: 'gaming',
                summary: `A common opponent with a
standard pattern of attack.
It’s straightforward but needs
a special tool to defeat.

You must craft a "power-up"—
the integrating factor—that
makes the equation vulnerable.`,
                analogy: `Your champion is strong but
getting overwhelmed. You forge a
critical item, like a Rabadon's
Deathcap, and equip it.

Their power skyrockets.
The integrating factor, μ(x),
is that game-changing item.`,
                formula: `The opponent:
$$ \\frac{dy}{dx} + P(x)y = Q(x) $$
The ultimate weapon:
$$ \\mu(x) = e^{\\int P(x)dx} $$`,
                visual: `<img src="https://i.imgur.com/3q3Q9Y1.gif" alt="TFT item power up">`,
                relevance: `Linear equations are everywhere.
They model electrical circuits,
mixing problems, and the
cooling of objects.`,
                tip: `"Linear opponent? Forge your
item, μ(x), and multiply."`
            }
        },
        {
            id: 'bernoulli',
            title: 'Bernoulli Equations',
            icon: 'fas fa-bolt',
            microLesson: {
                theme: 'anime',
                summary: `This opponent is a master
of disguise. It looks non-linear
and intimidating due to an
extra yⁿ term.

But this is a trick. A simple,
clever substitution will break
the illusion.`,
                analogy: `A formidable villain appears.
The hero has a hidden card: a
transformation. They power up,
and in their new form, the
villain is manageable.

The substitution z = y¹⁻ⁿ is
that transformation. It changes
your perspective.`,
                formula: `The disguised enemy:
$$ \\frac{dy}{dx} + P(x)y = Q(x)y^n $$
The transformation:
$$ z = y^{1-n} $$`,
                visual: `<img src="https://media1.tenor.com/m/23OrgfQvJcEAAAAd/deku-full-cowl.gif" alt="Deku Full Cowl">`,
                relevance: `A core science principle:
if you can't solve a problem,
transform it into one you
*can* solve.`,
                tip: `"See that rogue yⁿ? A disguise.
Transform and reveal its true
linear form!"`
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
            // Close sidebar on selection in mobile view
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });
        topicNav.appendChild(link);
    });

    function loadTopic(id) {
        const topic = studyData.topics.find(t => t.id === id);
        if (!topic) return;

        welcomeScreen.style.display = 'none';
        topicScreen.style.display = 'block';

        topicTitle.textContent = topic.title;

        const { microLesson } = topic;
        const { theme, summary, analogy, formula, visual, relevance, tip } = microLesson;

        // Helper to convert multiline strings to <p> tags
        const toParagraphs = (str) => str.split('\n').map(line => `<p>${line}</p>`).join('');

        let contentHTML = `
            <div class="micro-lesson-card ${theme}">
                <h4>🎯 Concept Summary</h4>
                <div class="content-block">${toParagraphs(summary)}</div>

                <h4>🧠 Analogy or Comparison</h4>
                <div class="content-block">${toParagraphs(analogy)}</div>

                <h4>📘 Formula or Example (LaTeX)</h4>
                <div class="content-block formula">${formula.replace(/\n/g, '<br>')}</div>

                <h4>🎬 GIF or Visual Reference</h4>
                <div class="content-block">${toParagraphs(visual)}</div>

                <h4>💡 Real-World Relevance</h4>
                <div class="content-block">${toParagraphs(relevance)}</div>

                <div class="recall-tip">
                    🔥 <strong>Quick Recall Tip:</strong> ${tip.replace(/"/g, '')}
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
    const themeSwitcher = document.getElementById('theme-switcher');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const sidebar = document.getElementById('sidebar');

    // Hamburger Menu
    hamburgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Theme Switcher
    const themes = ['default', 'food', 'gaming', 'anime', 'gym'];
    let currentTheme = 0;
    themeSwitcher.addEventListener('click', () => {
        currentTheme = (currentTheme + 1) % themes.length;
        document.body.className = `theme-${themes[currentTheme]}`;
    });

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
                ${topic.microLesson.summary}.
                Analogy: ${topic.microLesson.analogy}.
                Relevance: ${topic.microLesson.relevance}.
                Recall Tip: ${topic.microLesson.tip}.
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
            const backContent = flashcardContainer.querySelector('.flashcard-back');
            backContent.innerHTML = flashcards[currentCard].answer;
            // Add a class if the content is a formula for specific styling
            if (flashcards[currentCard].question === 'Key Formula') {
                backContent.classList.add('formula-card');
            } else {
                backContent.classList.remove('formula-card');
            }
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

        // Rerender LaTeX in flashcards
        if (window.MathJax) {
            window.MathJax.typeset();
        }
    }

    function createFlashcardsForTopic(topic) {
        const cards = [];
        const { microLesson } = topic;

        const formatAnswer = (str) => str.replace(/\n/g, '<br>');

        cards.push({ question: 'Concept Summary', answer: formatAnswer(microLesson.summary) });
        cards.push({ question: 'Analogy', answer: formatAnswer(microLesson.analogy) });
        cards.push({ question: 'Key Formula', answer: microLesson.formula });
        cards.push({ question: 'Recall Tip', answer: formatAnswer(microLesson.tip) });
        return cards;
    }
});
