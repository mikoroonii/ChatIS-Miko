let namepaints = {};
let npTemplate;
let username = "mikoroonii";
let activeNamepaint = "";

document.addEventListener("DOMContentLoaded", function(event) {
    npTemplate = document.getElementById('namepaintpreview');

    fetch('namepaints.json')
    .then(response => response.json())
    .then(namepaintsResponse => {
        for (const namepaint of Object.values(namepaintsResponse)) {
            console.log(namepaint);
        }
        namepaints = namepaintsResponse;
        updateNamepaintPreviews();
    })
    .catch(error => console.error('Error loading namepaints.json:', error));
});

function updateNamepaintPreviews() {
    const container = document.getElementById('namepaint-container');
    container.innerHTML = '';

    for (const paintObj of namepaints) {
        const newPaint = npTemplate.content.cloneNode(true);
        const previewWrapper = newPaint.querySelector('div.np-preview-card');
        previewWrapper.addEventListener('click', function() {
            setActiveNamepaint(paintObj.class);
        });
        previewWrapper.setAttribute('data-paint', paintObj.class);
        const previewText = newPaint.querySelector('.np-display-text');
        const nameLabel = newPaint.querySelector('.np-name');

        previewText.textContent = username;
        previewText.setAttribute('data-text', username);
        
        if (paintObj.class != 'none') {
            previewText.classList.add(paintObj.class, 'namepainted');
        } else
        {
            previewText.style.color = 'white';
        }
        
        nameLabel.textContent = paintObj.name;
        
        container.appendChild(newPaint);
    }
}

function updateUsername(){
    username = document.getElementById('username').value.trim() === '' ? 'mikoroonii' : document.getElementById('username').value;
    updateNamepaintPreviews();
}


function setActiveNamepaint(className){
    const activeNamepaints = document.querySelectorAll('.active');
    activeNamepaints.forEach(el => el.classList.remove('active'));
    const paint = document.querySelector(`[data-paint="${className}"]`);
    if (paint) {
        paint.classList.add('active');
        activeNamepaint = className;
    }
    const submitBtn = document.querySelector('.submit-button');
    submitBtn.hidden = false;
}

async function submitNamepaint() {
    const container = document.getElementById('confirmation-container');
    const timerBar = document.getElementById('timer-bar');
    const btnText = document.getElementById('btn-text');
    
    // Changed "username-input" to "username" to match your HTML
    const usernameValue = document.getElementById('username').value; 

    if (!usernameValue) {
        alert("Please enter a username first.");
        return;
    }

    container.style.display = 'block';
    let timeLeft = 30;
    
    const countdown = setInterval(() => {
        timeLeft--;
        const percentage = (timeLeft / 30) * 100;
        timerBar.style.width = percentage + '%';
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            btnText.innerText = 'TIMEOUT';
            timerBar.style.background = '#ff4444';
        }
    }, 1000);

    const data = {
        username: usernameValue,
        namepaint_class: activeNamepaint
    };

    try {
        const response = await fetch('https://api.mikoroonii.com/chat/namepaintsubmit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            clearInterval(countdown);
            timerBar.style.width = '100%';
            timerBar.style.background = '#44ff44';
            btnText.innerText = 'SUCCESS!';
        } else {
            clearInterval(countdown);
            btnText.innerText = result.reason === 'timeout' ? 'EXPIRED' : 'ERROR';
            timerBar.style.background = '#ff4444';
        }
    } catch (err) {
        clearInterval(countdown);
        btnText.innerText = 'FAILED TO CONNECT';
        timerBar.style.background = '#ff4444';
    }
}