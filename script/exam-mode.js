function checkExamMode() {
    let now = new Date();
    let hours = now.getHours();

    if (hours >= 12 && hours < 17) { // Mode examen actif
        document.body.innerHTML = `
            <div class="exam-container">
                <div class="exam-box">
                    <h1>⛔ Mode Examen Activé</h1>
                    <p>L'accès aux cours est désactivé pendant cette période.</p>
                    <!--<a href="../index.html">Retour à l'accueil</a>-->
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
            a {
            display: inline-block;
            margin-top: 15px;
            text-decoration: none;
            color: #fff;
            background: #1f2afd;
            padding: 10px 20px;
            border-radius: 10px;
            font-weight: bold;
            transition: background 0.3s ease-in-out, transform 0.2s;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        a:hover {
            background: #000DFF;
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
    `;
    document.head.appendChild(style);
}

window.onload = checkExamMode;
