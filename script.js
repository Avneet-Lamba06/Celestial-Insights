// Zodiac sign data
// Zodiac sign data
// Zodiac sign data
// Zodiac sign data
// Zodiac Signs Data
const zodiacSigns = {
  aries: {
    name: "Aries",
    symbol: "♈",
    dates: "Mar 21 - Apr 19",
    element: "Fire",
    description: "Bold, ambitious, and energetic. Natural leaders who love challenges.",
    traits: ["Courageous", "Determined", "Confident", "Enthusiastic", "Optimistic"],
    horoscope:
      "Today brings exciting opportunities for new beginnings. Trust your instincts and take bold action towards your goals.",
  },
  taurus: {
    name: "Taurus",
    symbol: "♉",
    dates: "Apr 20 - May 20",
    element: "Earth",
    description: "Reliable, patient, and practical. Value stability and life's pleasures.",
    traits: ["Reliable", "Patient", "Practical", "Devoted", "Stable"],
    horoscope:
      "Focus on building solid foundations today. Your patience and persistence will lead to beautiful rewards.",
  },
  gemini: {
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 - Jun 20",
    element: "Air",
    description: "Curious, adaptable, and communicative. Quick-witted information lovers.",
    traits: ["Adaptable", "Outgoing", "Intelligent", "Curious", "Versatile"],
    horoscope: "Communication is your superpower today. Share your brilliant ideas and connect with inspiring people.",
  },
  cancer: {
    name: "Cancer",
    symbol: "♋",
    dates: "Jun 21 - Jul 22",
    element: "Water",
    description: "Intuitive, emotional, and nurturing. Deeply caring and protective.",
    traits: ["Loyal", "Emotional", "Sympathetic", "Persuasive", "Intuitive"],
    horoscope: "Listen to your heart today. Your emotions are guiding you toward something meaningful and nurturing.",
  },
  leo: {
    name: "Leo",
    symbol: "♌",
    dates: "Jul 23 - Aug 22",
    element: "Fire",
    description: "Dramatic, outgoing, and confident. Natural performers who love the spotlight.",
    traits: ["Creative", "Passionate", "Generous", "Warm-hearted", "Cheerful"],
    horoscope:
      "Your creativity shines brilliantly today. Express yourself boldly and let your talents illuminate the world.",
  },
  virgo: {
    name: "Virgo",
    symbol: "♍",
    dates: "Aug 23 - Sep 22",
    element: "Earth",
    description: "Analytical, practical, and hardworking. Perfectionists with attention to detail.",
    traits: ["Loyal", "Analytical", "Kind", "Hardworking", "Practical"],
    horoscope: "Your analytical skills are particularly sharp today. Focus on details that others might miss.",
  },
  libra: {
    name: "Libra",
    symbol: "♎",
    dates: "Sep 23 - Oct 22",
    element: "Air",
    description: "Diplomatic, gracious, and fair-minded. Seekers of balance and harmony.",
    traits: ["Diplomatic", "Fair-minded", "Social", "Gracious", "Cooperative"],
    horoscope: "Seek harmony in all your relationships today. Balance and cooperation will bring you inner peace.",
  },
  scorpio: {
    name: "Scorpio",
    symbol: "♏",
    dates: "Oct 23 - Nov 21",
    element: "Water",
    description: "Passionate, resourceful, and brave. Intense and mysterious with strong intuition.",
    traits: ["Resourceful", "Brave", "Passionate", "Stubborn", "True friend"],
    horoscope: "Deep transformation is possible today. Embrace change and trust in your incredible inner strength.",
  },
  sagittarius: {
    name: "Sagittarius",
    symbol: "♐",
    dates: "Nov 22 - Dec 21",
    element: "Fire",
    description: "Generous, idealistic, and adventurous. Freedom lovers exploring new horizons.",
    traits: ["Generous", "Idealistic", "Great sense of humor", "Adventurous", "Philosophical"],
    horoscope: "Adventure calls to your soul today. Expand your horizons and explore exciting new possibilities.",
  },
  capricorn: {
    name: "Capricorn",
    symbol: "♑",
    dates: "Dec 22 - Jan 19",
    element: "Earth",
    description: "Responsible, disciplined, and ambitious. Practical achievers of goals.",
    traits: ["Responsible", "Disciplined", "Self-control", "Good managers", "Ambitious"],
    horoscope: "Your hard work is about to pay off magnificently. Stay focused on your goals and maintain discipline.",
  },
  aquarius: {
    name: "Aquarius",
    symbol: "♒",
    dates: "Jan 20 - Feb 18",
    element: "Air",
    description: "Progressive, original, and independent. Humanitarian helpers of others.",
    traits: ["Progressive", "Original", "Independent", "Humanitarian", "Inventive"],
    horoscope: "Innovation and originality are your superpowers today. Think outside the box and inspire others.",
  },
  pisces: {
    name: "Pisces",
    symbol: "♓",
    dates: "Feb 19 - Mar 20",
    element: "Water",
    description: "Compassionate, artistic, and intuitive. Gentle souls with vivid imaginations.",
    traits: ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise"],
    horoscope: "Your intuition is exceptionally strong today. Trust your dreams and let your imagination guide you.",
  },
}

// Astrologers Data
const astrologers = [
  {
    name: "Dr. Priya Sharma",
    specialty: "Vedic Astrology",
    experience: "15+ years",
    rating: 4.9,
    price: "₹50/min",
    avatar: "👩‍🔬",
    languages: ["Hindi", "English"],
    description: "Expert in Vedic astrology with deep knowledge of planetary influences.",
  },
  {
    name: "Pandit Raj Kumar",
    specialty: "Numerology & Palmistry",
    experience: "20+ years",
    rating: 4.8,
    price: "₹45/min",
    avatar: "👨‍🏫",
    languages: ["Hindi", "English", "Sanskrit"],
    description: "Master of ancient numerology and palm reading techniques.",
  },
  {
    name: "Astro Maya",
    specialty: "Tarot & Crystal Healing",
    experience: "12+ years",
    rating: 4.7,
    price: "₹40/min",
    avatar: "🔮",
    languages: ["English", "Hindi"],
    description: "Intuitive tarot reader specializing in love and career guidance.",
  },
  {
    name: "Guru Anand",
    specialty: "Horoscope Matching",
    experience: "25+ years",
    rating: 4.9,
    price: "₹60/min",
    avatar: "🧙‍♂️",
    languages: ["Hindi", "English", "Tamil"],
    description: "Expert in compatibility analysis and marriage predictions.",
  },
  {
    name: "Dr. Sunita Joshi",
    specialty: "Medical Astrology",
    experience: "18+ years",
    rating: 4.8,
    price: "₹55/min",
    avatar: "👩‍⚕️",
    languages: ["Hindi", "English", "Marathi"],
    description: "Specialized in health predictions through astrological analysis.",
  },
  {
    name: "Astro Vikram",
    specialty: "Career & Finance",
    experience: "16+ years",
    rating: 4.6,
    price: "₹48/min",
    avatar: "💼",
    languages: ["English", "Hindi", "Punjabi"],
    description: "Expert guidance for career growth and financial prosperity.",
  },
]

// Blog Posts Data
const blogPosts = [
  {
    title: "Mercury Retrograde: What It Really Means",
    excerpt: "Understanding the true effects of Mercury retrograde and how to navigate this cosmic phenomenon.",
    date: "Dec 15, 2024",
    author: "Dr. Priya Sharma",
    icon: "☿",
  },
  {
    title: "Full Moon Rituals for Manifestation",
    excerpt: "Harness the power of the full moon to manifest your deepest desires and goals.",
    date: "Dec 12, 2024",
    author: "Astro Maya",
    icon: "🌕",
  },
  {
    title: "2025 Predictions: What the Stars Hold",
    excerpt: "Comprehensive astrological predictions for the year 2025 across all zodiac signs.",
    date: "Dec 10, 2024",
    author: "Pandit Raj Kumar",
    icon: "🔮",
  },
  {
    title: "Understanding Your Birth Chart",
    excerpt: "A beginner's guide to reading and interpreting your natal chart for personal insights.",
    date: "Dec 8, 2024",
    author: "Guru Anand",
    icon: "📊",
  },
  {
    title: "Love Compatibility by Zodiac Signs",
    excerpt: "Discover which zodiac signs are most compatible in love and relationships.",
    date: "Dec 5, 2024",
    author: "Dr. Sunita Joshi",
    icon: "💕",
  },
  {
    title: "Planetary Transits and Career Growth",
    excerpt: "How planetary movements can influence your professional life and career decisions.",
    date: "Dec 3, 2024",
    author: "Astro Vikram",
    icon: "🚀",
  },
]

// Service Templates
const serviceTemplates = {
  "birth-chart": {
    title: "Birth Chart Calculator",
    content: `
            <h2>Generate Your Birth Chart</h2>
            <p>Enter your birth details to get a comprehensive natal chart analysis.</p>
            <form class="service-form">
                <div class="form-group">
                    <label>Full Name:</label>
                    <input type="text" id="birthName" placeholder="Enter your full name" required>
                </div>
                <div class="form-group">
                    <label>Date of Birth:</label>
                    <input type="date" id="birthChartDate" required>
                </div>
                <div class="form-group">
                    <label>Time of Birth:</label>
                    <input type="time" id="birthTime" required>
                </div>
                <div class="form-group">
                    <label>Place of Birth:</label>
                    <input type="text" id="birthPlace" placeholder="City, Country" required>
                </div>
                <button type="button" onclick="generateBirthChart()" class="btn-primary">Generate Birth Chart</button>
            </form>
            <div id="birthChartResult" class="service-result hidden"></div>
        `,
  },
  compatibility: {
    title: "Love Compatibility Checker",
    content: `
            <h2>Check Your Compatibility</h2>
            <p>Find out how compatible you are with your partner based on zodiac signs.</p>
            <form class="service-form">
                <div class="form-row">
                    <div class="form-group">
                        <label>Your Sign:</label>
                        <select id="yourSign" required>
                            <option value="">Select your sign</option>
                            ${Object.keys(zodiacSigns)
                              .map((sign) => `<option value="${sign}">${zodiacSigns[sign].name}</option>`)
                              .join("")}
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Partner's Sign:</label>
                        <select id="partnerSign" required>
                            <option value="">Select partner's sign</option>
                            ${Object.keys(zodiacSigns)
                              .map((sign) => `<option value="${sign}">${zodiacSigns[sign].name}</option>`)
                              .join("")}
                        </select>
                    </div>
                </div>
                <button type="button" onclick="checkCompatibility()" class="btn-primary">Check Compatibility</button>
            </form>
            <div id="compatibilityResult" class="service-result hidden"></div>
        `,
  },
  "moon-phases": {
    title: "Moon Phases Tracker",
    content: `
            <h2>Current Moon Phase</h2>
            <div class="moon-tracker">
                <div class="moon-display">
                    <div class="moon-phase-visual" id="currentMoonPhase">🌕</div>
                    <h3 id="moonPhaseName">Full Moon</h3>
                    <p id="moonPhaseDescription">A time of culmination and manifestation</p>
                </div>
                <div class="moon-calendar">
                    <h4>Upcoming Moon Phases</h4>
                    <div id="moonCalendar"></div>
                </div>
                <div class="moon-rituals">
                    <h4>Recommended Rituals</h4>
                    <ul id="moonRituals"></ul>
                </div>
            </div>
        `,
  },
  tarot: {
    title: "Tarot Card Reading",
    content: `
            <h2>Draw Your Tarot Cards</h2>
            <p>Ask a question and draw cards for guidance.</p>
            <div class="tarot-reading">
                <div class="question-input">
                    <label>Your Question:</label>
                    <textarea id="tarotQuestion" placeholder="What would you like guidance on?" rows="3"></textarea>
                </div>
                <div class="card-selection">
                    <h4>Choose Your Spread:</h4>
                    <div class="spread-options">
                        <button onclick="drawCards(1)" class="spread-btn">Single Card</button>
                        <button onclick="drawCards(3)" class="spread-btn">Three Card</button>
                        <button onclick="drawCards(5)" class="spread-btn">Five Card</button>
                    </div>
                </div>
                <div id="tarotResult" class="tarot-result hidden"></div>
            </div>
        `,
  },
  numerology: {
    title: "Numerology Calculator",
    content: `
            <h2>Calculate Your Life Path Number</h2>
            <p>Discover your life path number and its meaning.</p>
            <form class="service-form">
                <div class="form-group">
                    <label>Full Name:</label>
                    <input type="text" id="numName" placeholder="Enter your full name" required>
                </div>
                <div class="form-group">
                    <label>Date of Birth:</label>
                    <input type="date" id="numDate" required>
                </div>
                <button type="button" onclick="calculateNumerology()" class="btn-primary">Calculate Numbers</button>
            </form>
            <div id="numerologyResult" class="service-result hidden"></div>
        `,
  },
  palmistry: {
    title: "Palm Reading Guide",
    content: `
            <h2>Learn to Read Your Palm</h2>
            <div class="palmistry-guide">
                <div class="palm-diagram">
                    <div class="palm-image">✋</div>
                    <div class="palm-lines">
                        <div class="line heart-line" title="Heart Line">💖</div>
                        <div class="line head-line" title="Head Line">🧠</div>
                        <div class="line life-line" title="Life Line">🌱</div>
                        <div class="line fate-line" title="Fate Line">⭐</div>
                    </div>
                </div>
                <div class="palm-meanings">
                    <h4>Major Lines Meaning:</h4>
                    <div class="line-meaning">
                        <strong>Heart Line:</strong> Represents emotions, love, and relationships
                    </div>
                    <div class="line-meaning">
                        <strong>Head Line:</strong> Indicates intelligence, wisdom, and mental approach
                    </div>
                    <div class="line-meaning">
                        <strong>Life Line:</strong> Shows vitality, life force, and major life changes
                    </div>
                    <div class="line-meaning">
                        <strong>Fate Line:</strong> Reveals career path and life direction
                    </div>
                </div>
                <button onclick="getPersonalizedReading()" class="btn-primary">Get Personalized Reading</button>
            </div>
        `,
  },
}

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  initializeWebsite()
})

function initializeWebsite() {
  // Generate hero wheel signs
  generateHeroWheel()

  // Generate zodiac cards
  generateZodiacCards()

  // Generate astrologers
  generateAstrologers()

  // Generate blog posts
  generateBlogPosts()

  // Set current date
  updateCurrentDate()

  // Setup mobile menu
  setupMobileMenu()

  // Setup smooth scrolling
  setupSmoothScrolling()
}

function generateHeroWheel() {
  const wheelSigns = document.getElementById("heroWheelSigns")
  if (!wheelSigns) return

  const signs = Object.keys(zodiacSigns)
  signs.forEach((signKey, index) => {
    const sign = zodiacSigns[signKey]
    const signElement = document.createElement("div")
    signElement.className = "wheel-sign"
    signElement.style.position = "absolute"
    signElement.style.top = "50%"
    signElement.style.left = "50%"
    signElement.style.transformOrigin = "0 0"
    signElement.style.transform = `translate(-50%, -50%) rotate(${index * 30}deg) translateY(-180px)`
    signElement.style.fontSize = "1.5rem"
    signElement.style.color = "rgba(255, 255, 255, 0.8)"
    signElement.textContent = sign.symbol
    signElement.title = sign.name
    wheelSigns.appendChild(signElement)
  })
}

function generateZodiacCards() {
  const zodiacGrid = document.getElementById("zodiacGrid")
  if (!zodiacGrid) return

  zodiacGrid.innerHTML = ""

  Object.keys(zodiacSigns).forEach((signKey) => {
    const sign = zodiacSigns[signKey]
    const card = document.createElement("div")
    card.className = "zodiac-card"
    card.onclick = () => showZodiacDetails(signKey)

    card.innerHTML = `
            <span class="zodiac-symbol">${sign.symbol}</span>
            <h3>${sign.name}</h3>
            <div class="zodiac-dates">${sign.dates}</div>
            <p class="horoscope-text">${sign.horoscope}</p>
        `

    zodiacGrid.appendChild(card)
  })
}

function generateAstrologers() {
  const astrologersGrid = document.getElementById("astrologersGrid")
  if (!astrologersGrid) return

  astrologersGrid.innerHTML = ""

  astrologers.forEach((astrologer) => {
    const card = document.createElement("div")
    card.className = "astrologer-card"

    card.innerHTML = `
            <div class="astrologer-avatar">${astrologer.avatar}</div>
            <h3>${astrologer.name}</h3>
            <div class="astrologer-specialty">${astrologer.specialty}</div>
            <div class="astrologer-rating">
                ${"⭐".repeat(Math.floor(astrologer.rating))} ${astrologer.rating}
            </div>
            <div class="astrologer-price">${astrologer.price}</div>
            <p>${astrologer.description}</p>
            <button class="consult-btn" onclick="consultAstrologer('${astrologer.name}')">
                Consult Now
            </button>
        `

    astrologersGrid.appendChild(card)
  })
}

function generateBlogPosts() {
  const blogGrid = document.getElementById("blogGrid")
  if (!blogGrid) return

  blogGrid.innerHTML = ""

  blogPosts.forEach((post) => {
    const card = document.createElement("div")
    card.className = "blog-card"
    card.onclick = () => openBlogPost(post)

    card.innerHTML = `
            <div class="blog-image">${post.icon}</div>
            <div class="blog-content">
                <h3>${post.title}</h3>
                <div class="blog-meta">By ${post.author} • ${post.date}</div>
                <p class="blog-excerpt">${post.excerpt}</p>
            </div>
        `

    blogGrid.appendChild(card)
  })
}

function updateCurrentDate() {
  const currentDateElement = document.getElementById("currentDate")
  if (currentDateElement) {
    const today = new Date()
    currentDateElement.textContent = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
}

function findZodiacSign() {
  const birthDate = document.getElementById("birthDate").value
  if (!birthDate) {
    alert("Please select your birth date")
    return
  }

  const date = new Date(birthDate)
  const month = date.getMonth() + 1
  const day = date.getDate()

  const signKey = getZodiacSignByDate(month, day)
  const sign = zodiacSigns[signKey]

  const resultDiv = document.getElementById("quickResult")
  resultDiv.innerHTML = `
        <div class="quick-sign-result">
            <span class="result-symbol">${sign.symbol}</span>
            <h3>${sign.name}</h3>
            <p class="result-dates">${sign.dates}</p>
            <p class="result-element">Element: ${sign.element}</p>
            <p class="result-description">${sign.description}</p>
            <div class="result-traits">
                <strong>Key Traits:</strong>
                <div class="traits-list">
                    ${sign.traits.map((trait) => `<span class="trait-tag">${trait}</span>`).join("")}
                </div>
            </div>
        </div>
    `
  resultDiv.classList.remove("hidden")
  resultDiv.scrollIntoView({ behavior: "smooth" })
}

function getZodiacSignByDate(month, day) {
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "aries"
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "taurus"
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "gemini"
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "cancer"
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "leo"
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "virgo"
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "libra"
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "scorpio"
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "sagittarius"
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "capricorn"
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "aquarius"
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "pisces"
}

function refreshHoroscopes() {
  // Simulate refreshing horoscopes with new content
  const horoscopes = [
    "The stars align favorably for new opportunities today.",
    "Your intuition is particularly strong - trust your inner voice.",
    "A chance encounter may lead to something meaningful.",
    "Focus on personal growth and self-improvement today.",
    "Communication with loved ones brings clarity and joy.",
    "Your creative energy is at its peak - express yourself freely.",
    "Financial matters require careful attention and planning.",
    "Health and wellness should be your priority today.",
    "Travel or learning something new will bring fulfillment.",
    "Patience and persistence will lead to success.",
    "Your leadership qualities shine bright today.",
    "Emotional healing and self-care are important now.",
  ]

  const zodiacCards = document.querySelectorAll(".zodiac-card .horoscope-text")
  zodiacCards.forEach((card, index) => {
    const randomHoroscope = horoscopes[Math.floor(Math.random() * horoscopes.length)]
    card.textContent = randomHoroscope
  })

  // Add refresh animation
  const refreshBtn = document.querySelector(".refresh-btn i")
  refreshBtn.style.transform = "rotate(360deg)"
  setTimeout(() => {
    refreshBtn.style.transform = "rotate(0deg)"
  }, 500)
}

function showZodiacDetails(signKey) {
  const sign = zodiacSigns[signKey]
  const modalContent = `
        <h2>${sign.symbol} ${sign.name}</h2>
        <div class="zodiac-details">
            <div class="detail-section">
                <h3>Dates</h3>
                <p>${sign.dates}</p>
            </div>
            <div class="detail-section">
                <h3>Element</h3>
                <p>${sign.element}</p>
            </div>
            <div class="detail-section">
                <h3>Description</h3>
                <p>${sign.description}</p>
            </div>
            <div class="detail-section">
                <h3>Key Traits</h3>
                <div class="traits-grid">
                    ${sign.traits.map((trait) => `<span class="trait-badge">${trait}</span>`).join("")}
                </div>
            </div>
            <div class="detail-section">
                <h3>Today's Horoscope</h3>
                <p class="horoscope-detailed">${sign.horoscope}</p>
            </div>
        </div>
    `

  openModal(modalContent)
}

function openService(serviceType) {
  const template = serviceTemplates[serviceType]
  if (template) {
    openModal(template.content)
  }
}

function openModal(content) {
  const modal = document.getElementById("serviceModal")
  const modalContent = document.getElementById("modalContent")
  modalContent.innerHTML = content
  modal.style.display = "block"

  // Add styles for service forms
  const style = document.createElement("style")
  style.textContent = `
        .service-form { margin: 2rem 0; }
        .form-group { margin-bottom: 1rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600; }
        .form-group input, .form-group select, .form-group textarea { 
            width: 100%; padding: 0.8rem; border: 2px solid #ddd; border-radius: 8px; 
            font-size: 1rem; 
        }
        .service-result { margin-top: 2rem; padding: 2rem; background: #f8f9fa; border-radius: 10px; }
        .traits-grid, .traits-list { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem; }
        .trait-badge, .trait-tag { 
            background: linear-gradient(45deg, #667eea, #764ba2); color: white; 
            padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.9rem; 
        }
        .zodiac-details { display: grid; gap: 1.5rem; }
        .detail-section h3 { color: #667eea; margin-bottom: 0.5rem; }
        .horoscope-detailed { font-style: italic; line-height: 1.8; }
        .moon-tracker { text-align: center; }
        .moon-display { margin-bottom: 2rem; }
        .moon-phase-visual { font-size: 4rem; margin-bottom: 1rem; }
        .tarot-reading { text-align: center; }
        .spread-options { display: flex; justify-content: center; gap: 1rem; margin: 1rem 0; }
        .spread-btn { 
            background: linear-gradient(45deg, #667eea, #764ba2); color: white; 
            border: none; padding: 0.8rem 1.5rem; border-radius: 25px; cursor: pointer; 
        }
        .palmistry-guide { text-align: center; }
        .palm-image { font-size: 8rem; margin: 2rem 0; }
        .line-meaning { margin: 1rem 0; padding: 1rem; background: #f8f9fa; border-radius: 8px; }
    `
  document.head.appendChild(style)
}

function closeModal() {
  const modal = document.getElementById("serviceModal")
  modal.style.display = "none"
}

function generateBirthChart() {
  const name = document.getElementById("birthName").value
  const date = document.getElementById("birthChartDate").value
  const time = document.getElementById("birthTime").value
  const place = document.getElementById("birthPlace").value

  if (!name || !date || !time || !place) {
    alert("Please fill in all fields")
    return
  }

  const birthDate = new Date(date)
  const month = birthDate.getMonth() + 1
  const day = birthDate.getDate()
  const signKey = getZodiacSignByDate(month, day)
  const sign = zodiacSigns[signKey]

  const resultDiv = document.getElementById("birthChartResult")
  resultDiv.innerHTML = `
        <h3>Birth Chart for ${name}</h3>
        <div class="chart-summary">
            <div class="sun-sign">
                <h4>Sun Sign: ${sign.symbol} ${sign.name}</h4>
                <p>${sign.description}</p>
            </div>
            <div class="chart-details">
                <p><strong>Birth Date:</strong> ${date}</p>
                <p><strong>Birth Time:</strong> ${time}</p>
                <p><strong>Birth Place:</strong> ${place}</p>
            </div>
            <div class="planetary-positions">
                <h4>Key Planetary Positions</h4>
                <div class="planet-grid">
                    <div class="planet-item">☉ Sun in ${sign.name}</div>
                    <div class="planet-item">☽ Moon in ${getRandomSign()}</div>
                    <div class="planet-item">☿ Mercury in ${getRandomSign()}</div>
                    <div class="planet-item">♀ Venus in ${getRandomSign()}</div>
                    <div class="planet-item">♂ Mars in ${getRandomSign()}</div>
                    <div class="planet-item">♃ Jupiter in ${getRandomSign()}</div>
                </div>
            </div>
        </div>
    `
  resultDiv.classList.remove("hidden")
}

function getRandomSign() {
  const signs = Object.keys(zodiacSigns)
  const randomSign = signs[Math.floor(Math.random() * signs.length)]
  return zodiacSigns[randomSign].name
}

function checkCompatibility() {
  const yourSign = document.getElementById("yourSign").value
  const partnerSign = document.getElementById("partnerSign").value

  if (!yourSign || !partnerSign) {
    alert("Please select both zodiac signs")
    return
  }

  const compatibility = calculateCompatibility(yourSign, partnerSign)
  const yourSignData = zodiacSigns[yourSign]
  const partnerSignData = zodiacSigns[partnerSign]

  const resultDiv = document.getElementById("compatibilityResult")
  resultDiv.innerHTML = `
        <h3>Compatibility Analysis</h3>
        <div class="compatibility-result">
            <div class="signs-comparison">
                <div class="sign-info">
                    <span class="sign-symbol">${yourSignData.symbol}</span>
                    <h4>${yourSignData.name}</h4>
                    <p>Element: ${yourSignData.element}</p>
                </div>
                <div class="compatibility-score">
                    <div class="score-circle">
                        <span class="score">${compatibility.score}%</span>
                    </div>
                    <p class="compatibility-level">${compatibility.level}</p>
                </div>
                <div class="sign-info">
                    <span class="sign-symbol">${partnerSignData.symbol}</span>
                    <h4>${partnerSignData.name}</h4>
                    <p>Element: ${partnerSignData.element}</p>
                </div>
            </div>
            <div class="compatibility-details">
                <h4>Compatibility Insights</h4>
                <p>${compatibility.description}</p>
                <div class="compatibility-aspects">
                    <div class="aspect">
                        <strong>Love:</strong> ${compatibility.love}
                    </div>
                    <div class="aspect">
                        <strong>Communication:</strong> ${compatibility.communication}
                    </div>
                    <div class="aspect">
                        <strong>Trust:</strong> ${compatibility.trust}
                    </div>
                </div>
            </div>
        </div>
    `
  resultDiv.classList.remove("hidden")
}

function calculateCompatibility(sign1, sign2) {
  const compatibilityMatrix = {
    aries: {
      leo: 95,
      sagittarius: 90,
      gemini: 85,
      aquarius: 80,
      libra: 75,
      cancer: 60,
      capricorn: 55,
      taurus: 50,
      virgo: 45,
      scorpio: 40,
      pisces: 35,
    },
    taurus: {
      virgo: 95,
      capricorn: 90,
      cancer: 85,
      pisces: 80,
      scorpio: 75,
      leo: 60,
      aquarius: 55,
      aries: 50,
      libra: 45,
      sagittarius: 40,
      gemini: 35,
    },
    gemini: {
      libra: 95,
      aquarius: 90,
      aries: 85,
      leo: 80,
      sagittarius: 75,
      virgo: 60,
      pisces: 55,
      taurus: 50,
      scorpio: 45,
      capricorn: 40,
      cancer: 35,
    },
    cancer: {
      scorpio: 95,
      pisces: 90,
      taurus: 85,
      virgo: 80,
      capricorn: 75,
      libra: 60,
      aries: 55,
      gemini: 50,
      sagittarius: 45,
      leo: 40,
      aquarius: 35,
    },
    leo: {
      aries: 95,
      sagittarius: 90,
      gemini: 85,
      libra: 80,
      aquarius: 75,
      scorpio: 60,
      taurus: 55,
      cancer: 50,
      virgo: 45,
      capricorn: 40,
      pisces: 35,
    },
    virgo: {
      taurus: 95,
      capricorn: 90,
      cancer: 85,
      scorpio: 80,
      pisces: 75,
      sagittarius: 60,
      gemini: 55,
      leo: 50,
      aries: 45,
      aquarius: 40,
      libra: 35,
    },
    libra: {
      gemini: 95,
      aquarius: 90,
      leo: 85,
      sagittarius: 80,
      aries: 75,
      capricorn: 60,
      cancer: 55,
      virgo: 50,
      pisces: 45,
      taurus: 40,
      scorpio: 35,
    },
    scorpio: {
      cancer: 95,
      pisces: 90,
      virgo: 85,
      capricorn: 80,
      taurus: 75,
      aquarius: 60,
      leo: 55,
      libra: 50,
      aries: 45,
      gemini: 40,
      sagittarius: 35,
    },
    sagittarius: {
      leo: 95,
      aries: 90,
      libra: 85,
      aquarius: 80,
      gemini: 75,
      pisces: 60,
      virgo: 55,
      scorpio: 50,
      cancer: 45,
      taurus: 40,
      capricorn: 35,
    },
    capricorn: {
      virgo: 95,
      taurus: 90,
      scorpio: 85,
      pisces: 80,
      cancer: 75,
      aries: 60,
      libra: 55,
      leo: 50,
      gemini: 45,
      sagittarius: 40,
      aquarius: 35,
    },
    aquarius: {
      libra: 95,
      gemini: 90,
      sagittarius: 85,
      aries: 80,
      leo: 75,
      taurus: 60,
      scorpio: 55,
      cancer: 50,
      capricorn: 45,
      virgo: 40,
      pisces: 35,
    },
    pisces: {
      scorpio: 95,
      cancer: 90,
      capricorn: 85,
      taurus: 80,
      virgo: 75,
      gemini: 60,
      sagittarius: 55,
      aries: 50,
      leo: 45,
      libra: 40,
      aquarius: 35,
    },
  }

  const score = compatibilityMatrix[sign1]?.[sign2] || compatibilityMatrix[sign2]?.[sign1] || 50

  let level, description, love, communication, trust

  if (score >= 90) {
    level = "Excellent Match"
    description =
      "You two are a perfect cosmic match! Your energies complement each other beautifully, creating a harmonious and fulfilling relationship."
    love = "Passionate and deep connection"
    communication = "Natural understanding"
    trust = "Complete faith in each other"
  } else if (score >= 75) {
    level = "Great Compatibility"
    description =
      "You have wonderful compatibility! While there may be some differences, your core values and approaches to life align well."
    love = "Strong romantic bond"
    communication = "Good understanding with effort"
    trust = "High level of trust"
  } else if (score >= 60) {
    level = "Good Potential"
    description =
      "You have good potential together! With understanding and compromise, you can build a strong and lasting relationship."
    love = "Growing affection"
    communication = "Requires patience"
    trust = "Building trust over time"
  } else if (score >= 45) {
    level = "Challenging but Possible"
    description =
      "Your relationship may face challenges, but with dedication and mutual respect, you can overcome differences and grow together."
    love = "Requires work"
    communication = "Needs improvement"
    trust = "Must be developed"
  } else {
    level = "Difficult Match"
    description =
      "You may face significant challenges in this relationship. Success requires exceptional commitment and understanding from both partners."
    love = "Complex dynamics"
    communication = "Major differences"
    trust = "Challenging to establish"
  }

  return { score, level, description, love, communication, trust }
}

function drawCards(numCards) {
  const tarotCards = [
    { name: "The Fool", meaning: "New beginnings, innocence, spontaneity", icon: "🃏" },
    { name: "The Magician", meaning: "Manifestation, resourcefulness, power", icon: "🎩" },
    { name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine", icon: "🔮" },
    { name: "The Empress", meaning: "Femininity, beauty, nature, abundance", icon: "👑" },
    { name: "The Emperor", meaning: "Authority, establishment, structure, father figure", icon: "⚔️" },
    { name: "The Hierophant", meaning: "Spiritual wisdom, religious beliefs, conformity", icon: "📿" },
    { name: "The Lovers", meaning: "Love, harmony, relationships, values alignment", icon: "💕" },
    { name: "The Chariot", meaning: "Control, willpower, success, determination", icon: "🏆" },
    { name: "Strength", meaning: "Strength, courage, persuasion, influence", icon: "🦁" },
    { name: "The Hermit", meaning: "Soul searching, introspection, inner guidance", icon: "🕯️" },
    { name: "Wheel of Fortune", meaning: "Good luck, karma, life cycles, destiny", icon: "🎡" },
    { name: "Justice", meaning: "Justice, fairness, truth, cause and effect", icon: "⚖️" },
    { name: "The Hanged Man", meaning: "Suspension, restriction, letting go", icon: "🙃" },
    { name: "Death", meaning: "Endings, beginnings, change, transformation", icon: "🦋" },
    { name: "Temperance", meaning: "Balance, moderation, patience, purpose", icon: "🌈" },
    { name: "The Devil", meaning: "Bondage, addiction, sexuality, materialism", icon: "😈" },
    { name: "The Tower", meaning: "Sudden change, upheaval, chaos, revelation", icon: "⚡" },
    { name: "The Star", meaning: "Hope, faith, purpose, renewal, spirituality", icon: "⭐" },
    { name: "The Moon", meaning: "Illusion, fear, anxiety, subconscious, intuition", icon: "🌙" },
    { name: "The Sun", meaning: "Positivity, fun, warmth, success, vitality", icon: "☀️" },
    { name: "Judgement", meaning: "Judgement, rebirth, inner calling, absolution", icon: "📯" },
    { name: "The World", meaning: "Completion, accomplishment, travel, fulfillment", icon: "🌍" },
  ]

  const selectedCards = []
  for (let i = 0; i < numCards; i++) {
    const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)]
    selectedCards.push(randomCard)
  }

  const question = document.getElementById("tarotQuestion").value || "General guidance"

  let spreadLayout = ""
  if (numCards === 1) {
    spreadLayout = '<div class="single-card">Card: Guidance</div>'
  } else if (numCards === 3) {
    spreadLayout = '<div class="three-card"><span>Past</span><span>Present</span><span>Future</span></div>'
  } else if (numCards === 5) {
    spreadLayout =
      '<div class="five-card"><span>Past</span><span>Present</span><span>Future</span><span>Challenge</span><span>Outcome</span></div>'
  }

  const resultDiv = document.getElementById("tarotResult")
  resultDiv.innerHTML = `
        <h3>Your Tarot Reading</h3>
        <p><strong>Question:</strong> ${question}</p>
        ${spreadLayout}
        <div class="cards-drawn">
            ${selectedCards
              .map(
                (card, index) => `
                <div class="tarot-card">
                    <div class="card-icon">${card.icon}</div>
                    <h4>${card.name}</h4>
                    <p>${card.meaning}</p>
                </div>
            `,
              )
              .join("")}
        </div>
        <div class="reading-summary">
            <h4>Reading Summary</h4>
            <p>The cards suggest focusing on ${selectedCards[0].meaning.split(",")[0].toLowerCase()} in your current situation. Trust your intuition and remain open to the guidance the universe is providing.</p>
        </div>
    `
  resultDiv.classList.remove("hidden")
}

function calculateNumerology() {
  const name = document.getElementById("numName").value
  const date = document.getElementById("numDate").value

  if (!name || !date) {
    alert("Please fill in all fields")
    return
  }

  // Calculate Life Path Number
  const birthDate = new Date(date)
  const day = birthDate.getDate()
  const month = birthDate.getMonth() + 1
  const year = birthDate.getFullYear()

  const lifePathNumber = calculateLifePathNumber(day, month, year)
  const destinyNumber = calculateDestinyNumber(name)

  const numerologyMeanings = {
    1: {
      meaning: "Leadership and Independence",
      description: "You are a natural leader with strong independence and pioneering spirit.",
    },
    2: {
      meaning: "Cooperation and Harmony",
      description: "You excel in partnerships and have a gift for bringing people together.",
    },
    3: {
      meaning: "Creativity and Communication",
      description: "You are highly creative with excellent communication skills and artistic talents.",
    },
    4: {
      meaning: "Stability and Hard Work",
      description: "You are practical, reliable, and excel at building solid foundations.",
    },
    5: {
      meaning: "Freedom and Adventure",
      description: "You crave freedom and adventure, with a natural curiosity about the world.",
    },
    6: {
      meaning: "Nurturing and Responsibility",
      description: "You are naturally nurturing with a strong sense of responsibility for others.",
    },
    7: {
      meaning: "Spirituality and Analysis",
      description: "You are deeply spiritual with strong analytical and intuitive abilities.",
    },
    8: {
      meaning: "Material Success and Power",
      description: "You have strong business acumen and the ability to achieve material success.",
    },
    9: {
      meaning: "Humanitarian and Wisdom",
      description: "You are humanitarian by nature with old soul wisdom and compassion.",
    },
  }

  const resultDiv = document.getElementById("numerologyResult")
  resultDiv.innerHTML = `
        <h3>Your Numerology Profile</h3>
        <div class="numerology-results">
            <div class="number-result">
                <h4>Life Path Number: ${lifePathNumber}</h4>
                <p><strong>${numerologyMeanings[lifePathNumber].meaning}</strong></p>
                <p>${numerologyMeanings[lifePathNumber].description}</p>
            </div>
            <div class="number-result">
                <h4>Destiny Number: ${destinyNumber}</h4>
                <p><strong>${numerologyMeanings[destinyNumber].meaning}</strong></p>
                <p>${numerologyMeanings[destinyNumber].description}</p>
            </div>
            <div class="numerology-summary">
                <h4>Personal Insights</h4>
                <p>Your Life Path Number ${lifePathNumber} combined with Destiny Number ${destinyNumber} suggests a unique blend of ${numerologyMeanings[lifePathNumber].meaning.toLowerCase()} and ${numerologyMeanings[destinyNumber].meaning.toLowerCase()}. This combination gives you the potential to achieve great things while staying true to your authentic self.</p>
            </div>
        </div>
    `
  resultDiv.classList.remove("hidden")
}

function calculateLifePathNumber(day, month, year) {
  let sum = day + month + year
  while (sum > 9) {
    sum = sum
      .toString()
      .split("")
      .reduce((a, b) => Number.parseInt(a) + Number.parseInt(b), 0)
  }
  return sum
}

function calculateDestinyNumber(name) {
  const letterValues = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 1,
    K: 2,
    L: 3,
    M: 4,
    N: 5,
    O: 6,
    P: 7,
    Q: 8,
    R: 9,
    S: 1,
    T: 2,
    U: 3,
    V: 4,
    W: 5,
    X: 6,
    Y: 7,
    Z: 8,
  }

  let sum = 0
  for (const char of name.toUpperCase()) {
    if (letterValues[char]) {
      sum += letterValues[char]
    }
  }

  while (sum > 9) {
    sum = sum
      .toString()
      .split("")
      .reduce((a, b) => Number.parseInt(a) + Number.parseInt(b), 0)
  }
  return sum
}

function getPersonalizedReading() {
  const readings = [
    "Your heart line suggests a deep capacity for love and emotional connection.",
    "The head line indicates strong analytical abilities and clear thinking.",
    "Your life line shows vitality and a strong life force energy.",
    "The fate line reveals a clear sense of purpose and direction in life.",
    "Your palm shows signs of creativity and artistic talents.",
    "The mounts on your palm indicate strong leadership qualities.",
    "Your fingers suggest excellent communication skills.",
    "The palm lines indicate a balanced approach to life decisions.",
  ]

  const randomReading = readings[Math.floor(Math.random() * readings.length)]
  alert(`Personalized Palm Reading: ${randomReading}\n\nFor a detailed reading, consult with our expert palmists!`)
}

function consultAstrologer(name) {
  alert(
    `Connecting you with ${name}...\n\nIn a real application, this would open a chat or call interface with the selected astrologer.`,
  )
}

function openBlogPost(post) {
  const modalContent = `
        <h2>${post.title}</h2>
        <div class="blog-post-meta">
            <span>By ${post.author}</span> • <span>${post.date}</span>
        </div>
        <div class="blog-post-content">
            <p>${post.excerpt}</p>
            <p>This is where the full blog post content would appear. In a real application, this would contain the complete article with detailed astrological insights, tips, and guidance.</p>
            <p>Our expert astrologers share their knowledge to help you navigate life's challenges and opportunities through the wisdom of the stars.</p>
        </div>
        <div class="blog-actions">
            <button class="btn-primary" onclick="subscribeNewsletter()">Subscribe for More</button>
            <button class="btn-secondary" onclick="sharePost('${post.title}')">Share Post</button>
        </div>
    `
  openModal(modalContent)
}

function subscribeNewsletter() {
  const email = document.getElementById("newsletterEmail")?.value || prompt("Enter your email address:")
  if (email && email.includes("@")) {
    alert("Thank you for subscribing! You will receive daily cosmic insights and astrological updates.")
    if (document.getElementById("newsletterEmail")) {
      document.getElementById("newsletterEmail").value = ""
    }
  } else {
    alert("Please enter a valid email address.")
  }
}

function sharePost(title) {
  if (navigator.share) {
    navigator.share({
      title: title,
      text: "Check out this amazing astrology article!",
      url: window.location.href,
    })
  } else {
    // Fallback for browsers that don't support Web Share API
    const url = window.location.href
    navigator.clipboard.writeText(`${title} - ${url}`).then(() => {
      alert("Link copied to clipboard!")
    })
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

function setupMobileMenu() {
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")
    })

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
      })
    })
  }
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("serviceModal")
  if (event.target === modal) {
    closeModal()
  }
}

// Add some interactive effects
document.addEventListener("DOMContentLoaded", () => {
  // Add hover effects to cards
  const cards = document.querySelectorAll(".zodiac-card, .service-card, .astrologer-card, .blog-card")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Add parallax effect to floating stars
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const stars = document.querySelectorAll(".floating-star")

    stars.forEach((star, index) => {
      const speed = 0.2 + index * 0.1
      star.style.transform = `translateY(${scrolled * speed}px)`
    })
  })
})
