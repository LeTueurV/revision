function checkExamMode() {
    let now = new Date();
    let hours = now.getHours();

    if (hours >= 10 && hours < 12) { // Mode examen actif
        document.body.innerHTML = `
            <div class="exam-container">
                <div class="exam-box">
                    <h1>⛔ Mode Examen Activé</h1>
                    <p>L'accès aux cours est désactivé pendant cette période.</p>
                </div>
            </div>
        `;
        applyExamStyles(); // Appliquer le CSS du mode examen
    }
}

function applyExamStyles() {
    let style = document.createElement("style");
    style.innerHTML = `
        body {
            background: linear-gradient(135deg, #6B73FF 0%, #000DFF 100%);
            color: white;
            font-family: 'Poppins', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .exam-container {
            text-align: center;
            background: rgba(255, 255, 255, 0.9);
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            animation: fadeIn 0.8s ease-in-out;
        }
        .exam-box h1 {
            font-size: 2.5rem;
            color: #FF0000;
            margin-bottom: 10px;
        }
        .exam-box p {
            font-size: 1.2rem;
            color: #333;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}

window.onload = checkExamMode;
