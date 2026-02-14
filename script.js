
// Government Schemes Database
const schemesData = {
    student: [
        {
            name: "PM Scholarship Scheme",
            eligibility: "12th pass students with 60%+ marks",
            benefit: "₹2,000 - ₹3,000 per month for higher education",
            howToApply: "Apply online at scholarships.gov.in",
            icon: "graduation-cap"
        },
        {
            name: "Post Matric Scholarship",
            eligibility: "SC/ST/OBC students after 10th standard",
            benefit: "Full tuition fees + maintenance allowance",
            howToApply: "Through state government education portal",
            icon: "book"
        },
        {
            name: "National Scholarship Portal (NSP)",
            eligibility: "Students from economically weaker sections",
            benefit: "Various scholarship amounts based on course",
            howToApply: "Register at scholarships.gov.in with Aadhaar",
            icon: "laptop"
        }
    ],
    senior: [
        {
            name: "Indira Gandhi National Old Age Pension",
            eligibility: "Citizens aged 60+ from BPL families",
            benefit: "₹200-500 per month directly to bank account",
            howToApply: "Visit nearest Panchayat or Municipal office with age proof",
            icon: "user-clock"
        },
        {
            name: "Pradhan Mantri Vaya Vandana Yojana (PMVVY)",
            eligibility: "Senior citizens aged 60 years and above",
            benefit: "Guaranteed pension with 7.4% annual return",
            howToApply: "Through Life Insurance Corporation (LIC) offices",
            icon: "money-bill-wave"
        },
        {
            name: "Senior Citizen Savings Scheme",
            eligibility: "Individuals aged 60+ years",
            benefit: "8% interest rate with tax benefits under 80C",
            howToApply: "Visit any post office or authorized bank branch",
            icon: "piggy-bank"
        }
    ],
    farmer: [
        {
            name: "PM-KISAN (Kisan Samman Nidhi)",
            eligibility: "All landholding farmers across India",
            benefit: "₹6,000 per year in three equal installments",
            howToApply: "Register at pmkisan.gov.in or visit nearest CSC",
            icon: "tractor"
        },
        {
            name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
            eligibility: "All farmers growing notified crops",
            benefit: "Comprehensive crop insurance against natural calamities",
            howToApply: "Through banks during crop sowing season",
            icon: "shield-alt"
        },
        {
            name: "Kisan Credit Card (KCC)",
            eligibility: "Farmers with ownership or cultivation rights",
            benefit: "Easy loans up to ₹3 lakh at 4% interest",
            howToApply: "Apply at any nationalized bank with land documents",
            icon: "credit-card"
        }
    ],
    woman: [
        {
            name: "Pradhan Mantri Matru Vandana Yojana",
            eligibility: "Pregnant and lactating mothers",
            benefit: "₹5,000 cash benefit in three installments",
            howToApply: "Register at nearest Anganwadi Center",
            icon: "female"
        },
        {
            name: "Beti Bachao Beti Padhao",
            eligibility: "Girl child and parents",
            benefit: "Education support and financial benefits",
            howToApply: "Open account at post office or authorized bank",
            icon: "child"
        },
        {
            name: "Stand Up India Scheme",
            eligibility: "SC/ST and women entrepreneurs",
            benefit: "Bank loans between ₹10 lakh to ₹1 crore",
            howToApply: "Through any scheduled commercial bank",
            icon: "business-time"
        },
        {
            name: "Mahila E-Haat",
            eligibility: "Women entrepreneurs and SHGs",
            benefit: "Online platform to showcase and sell products",
            howToApply: "Register at mahilaehaat-mksp.gov.in",
            icon: "store"
        }
    ],
    business: [
        {
            name: "Mudra Loan (PMMY)",
            eligibility: "Small business owners and entrepreneurs",
            benefit: "Collateral-free loans up to ₹10 lakh",
            howToApply: "Apply at any bank or visit udyamimitra.in",
            icon: "briefcase"
        },
        {
            name: "Startup India Scheme",
            eligibility: "New businesses registered within last 10 years",
            benefit: "Tax exemptions, easy compliance, funding support",
            howToApply: "Register at startupindia.gov.in",
            icon: "rocket"
        },
        {
            name: "MSME Udyam Registration",
            eligibility: "Micro, Small and Medium Enterprises",
            benefit: "Priority in government tenders, subsidies, easy loans",
            howToApply: "Free online registration at udyamregistration.gov.in",
            icon: "industry"
        },
        {
            name: "Credit Guarantee Scheme (CGS)",
            eligibility: "MSME businesses without collateral",
            benefit: "Collateral-free credit facility up to ₹2 crore",
            howToApply: "Through scheduled commercial banks",
            icon: "hand-holding-usd"
        }
    ]
};

// DOM Elements
const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotOptions = document.getElementById('chatbotOptions');
const optionButtons = document.querySelectorAll('.option-btn');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');

// Open/Close Chatbot
chatbotBtn.addEventListener('click', () => {
    chatbotWindow.classList.add('active');
    chatbotBtn.style.display = 'none';
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.classList.remove('active');
    chatbotBtn.style.display = 'flex';
});

// Handle Category Selection
optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const categoryText = button.textContent.trim();
        
        // Add user message
        addUserMessage(categoryText);
        
        // Hide options
        chatbotOptions.style.display = 'none';
        
        // Show schemes after delay
        setTimeout(() => {
            showSchemes(category);
        }, 800);
    });
});

// Add User Message
function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'user-message';
    messageDiv.innerHTML = `
        <div class="user-avatar">
            <i class="fas fa-user"></i>
        </div>
        <div class="message-content">
            <p>${text}</p>
        </div>
    `;
    chatbotMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Add Bot Message
function addBotMessage(html) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    messageDiv.innerHTML = `
        <div class="bot-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            ${html}
        </div>
    `;
    chatbotMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Show Schemes for Category
function showSchemes(category) {
    const schemes = schemesData[category];
    
    let schemesHTML = '<p><strong>Great! Here are the schemes available for you:</strong></p>';
    
    schemes.forEach((scheme, index) => {
        schemesHTML += `
            <div class="scheme-card-chat">
                <h4><i class="fas fa-${scheme.icon}"></i> ${scheme.name}</h4>
                <p><span class="label">✓ Eligibility:</span> ${scheme.eligibility}</p>
                <p><span class="label">💰 Benefit:</span> ${scheme.benefit}</p>
                <p><span class="label">📝 How to Apply:</span> ${scheme.howToApply}</p>
            </div>
        `;
    });
    
    schemesHTML += `
        <p><strong>Need more information?</strong></p>
        <p>📞 Helpline: 1800-XXX-XXXX</p>
        <p>🌐 Visit: <a href="https://www.india.gov.in" target="_blank" style="color: #d4af37;">india.gov.in</a></p>
    `;
    
    addBotMessage(schemesHTML);
    
    // Show restart button
    setTimeout(() => {
        addBotMessage(`
            <p>Would you like to explore another category?</p>
            <button onclick="restartChat()" style="background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%); color: #0f2557; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: 600; margin-top: 10px;">
                🔄 Start Over
            </button>
        `);
    }, 500);
}

// Restart Chat
function restartChat() {
    chatbotMessages.innerHTML = `
        <div class="bot-message">
            <div class="bot-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p><strong>Namaste! 🙏</strong></p>
                <p>I'm your CEVORA Assistant. I'll help you find the right government schemes.</p>
                <p><strong>Who are you?</strong></p>
            </div>
        </div>
    `;
    chatbotOptions.style.display = 'flex';
    scrollToBottom();
}

// Scroll to Bottom
function scrollToBottom() {
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Handle Send Button (for typed questions)
chatbotSend.addEventListener('click', () => {
    const userInput = chatbotInput.value.trim();
    if (userInput) {
        addUserMessage(userInput);
        chatbotInput.value = '';
        
        // Simple keyword matching
        setTimeout(() => {
            respondToQuery(userInput);
        }, 800);
    }
});

// Enter key to send
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        chatbotSend.click();
    }
});

// Simple AI-like Response
function respondToQuery(query) {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('student') || lowerQuery.includes('scholarship') || lowerQuery.includes('education')) {
        showSchemes('student');
    } else if (lowerQuery.includes('senior') || lowerQuery.includes('old') || lowerQuery.includes('pension') || lowerQuery.includes('retirement')) {
        showSchemes('senior');
    } else if (lowerQuery.includes('farmer') || lowerQuery.includes('agriculture') || lowerQuery.includes('farm') || lowerQuery.includes('crop')) {
        showSchemes('farmer');
    } else if (lowerQuery.includes('woman') || lowerQuery.includes('women') || lowerQuery.includes('mother') || lowerQuery.includes('girl')) {
        showSchemes('woman');
    } else if (lowerQuery.includes('business') || lowerQuery.includes('loan') || lowerQuery.includes('startup') || lowerQuery.includes('entrepreneur')) {
        showSchemes('business');
    } else {
        addBotMessage(`
            <p>I understand you're looking for information about government schemes.</p>
            <p>Could you please select a category or ask about:</p>
            <ul style="margin: 10px 0; padding-left: 20px;">
                <li>Student scholarships</li>
                <li>Senior citizen benefits</li>
                <li>Farmer support</li>
                <li>Women empowerment</li>
                <li>Business loans</li>
            </ul>
        `);
    }
}

// Make Category Cards on Homepage Clickable
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        // Get the category from the card's h3 text
        const cardTitle = card.querySelector('h3').textContent.trim();
        
        let category = '';
        if (cardTitle.includes('Student')) category = 'student';
        else if (cardTitle.includes('Senior')) category = 'senior';
        else if (cardTitle.includes('Farmer')) category = 'farmer';
        else if (cardTitle.includes('Women')) category = 'woman';
        else if (cardTitle.includes('Business')) category = 'business';
        
        if (category) {
            // Open chatbot
            chatbotWindow.classList.add('active');
            chatbotBtn.style.display = 'none';
            
            // Add user message
            addUserMessage(cardTitle);
            
            // Hide options
            chatbotOptions.style.display = 'none';
            
            // Show schemes after delay
            setTimeout(() => {
                showSchemes(category);
            }, 800);
        }
    });
    
    // Add cursor pointer style
    card.style.cursor = 'pointer';
});


// Search Functionality
const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');

function performSearch() {
    const query = searchBar.value.trim().toLowerCase();
    
    if (!query) {
        alert('Please enter a search term');
        return;
    }
    
    // Open chatbot
    chatbotWindow.classList.add('active');
    chatbotBtn.style.display = 'none';
    
    // Clear previous messages and show search query
    chatbotMessages.innerHTML = `
        <div class="bot-message">
            <div class="bot-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p><strong>Namaste! 🙏</strong></p>
                <p>I'm your CEVORA Assistant.</p>
            </div>
        </div>
    `;
    
    addUserMessage(`Search: ${query}`);
    chatbotOptions.style.display = 'none';
    
    // Show loading
    setTimeout(() => {
        addBotMessage('<p>🔍 Searching through government schemes...</p>');
    }, 500);
    
    // Perform search
    setTimeout(() => {
        searchSchemes(query);
    }, 1500);
}

// Search through all schemes
function searchSchemes(query) {
    let foundSchemes = [];
    
    // Search through all categories
    for (let category in schemesData) {
        schemesData[category].forEach(scheme => {
            // Check if query matches scheme name, eligibility, or benefit
            if (
                scheme.name.toLowerCase().includes(query) ||
                scheme.eligibility.toLowerCase().includes(query) ||
                scheme.benefit.toLowerCase().includes(query) ||
                category.includes(query)
            ) {
                foundSchemes.push({
                    ...scheme,
                    category: category
                });
            }
        });
    }
    
    // Display results
    if (foundSchemes.length > 0) {
        let resultsHTML = `<p><strong>Found ${foundSchemes.length} scheme(s) matching "${query}":</strong></p>`;
        
        foundSchemes.forEach(scheme => {
            resultsHTML += `
                <div class="scheme-card-chat">
                    <h4><i class="fas fa-${scheme.icon}"></i> ${scheme.name}</h4>
                    <p><span class="label">Category:</span> ${capitalizeCategory(scheme.category)}</p>
                    <p><span class="label">✓ Eligibility:</span> ${scheme.eligibility}</p>
                    <p><span class="label">💰 Benefit:</span> ${scheme.benefit}</p>
                    <p><span class="label">📝 How to Apply:</span> ${scheme.howToApply}</p>
                </div>
            `;
        });
        
        resultsHTML += `
            <p><strong>Need more information?</strong></p>
            <p>📞 Helpline: 1800-XXX-XXXX</p>
            <p>🌐 Visit: <a href="https://www.india.gov.in" target="_blank" style="color: #d4af37;">india.gov.in</a></p>
        `;
        
        addBotMessage(resultsHTML);
    } else {
        addBotMessage(`
            <p><strong>No schemes found for "${query}"</strong></p>
            <p>Try searching for:</p>
            <ul style="margin: 10px 0; padding-left: 20px;">
                <li>scholarship</li>
                <li>pension</li>
                <li>loan</li>
                <li>farmer</li>
                <li>women</li>
                <li>business</li>
            </ul>
            <p>Or select a category below:</p>
        `);
        
        // Show category options again
        chatbotOptions.style.display = 'flex';
    }
    
    // Show restart button
    setTimeout(() => {
        addBotMessage(`
            <button onclick="restartChat()" style="background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%); color: #0f2557; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: 600; margin-top: 10px;">
                🔄 Start New Search
            </button>
        `);
    }, 500);
    
    // Clear search bar
    searchBar.value = '';
}

// Helper function to capitalize category names
function capitalizeCategory(category) {
    const categoryNames = {
        'student': 'Students & Youth',
        'senior': 'Senior Citizens',
        'farmer': 'Farmers & Agriculture',
        'woman': 'Women Empowerment',
        'business': 'Business & Enterprise'
    };
    return categoryNames[category] || category;
}

// Event listeners for search
searchBtn.addEventListener('click', performSearch);

searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});