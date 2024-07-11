function registerCompany() {
    const form = document.getElementById('registerForm');
    const formData = new FormData(form);
    const url = 'http://20.244.56.144/test/register';

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('registerResult');
        resultDiv.innerHTML = `<strong>Registration Successful!</strong><br>`;
        resultDiv.innerHTML += `Client ID: ${data.clientID}<br>`;
        resultDiv.innerHTML += `Client Secret: ${data.clientSecret}<br>`;
    })
    .catch(error => {
        console.error('Error:', error);
        const resultDiv = document.getElementById('registerResult');
        resultDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
    });
}

function authenticateCompany() {
    const companyName = document.getElementById('authCompanyName').value;
    const clientID = document.getElementById('authClientID').value;
    const clientSecret = document.getElementById('authClientSecret').value;
    const url = 'http://20.244.56.144/test/auth';

    const payload = {
        companyName: companyName,
        clientID: clientID,
        clientSecret: clientSecret
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('authResult');
        resultDiv.innerHTML = `<strong>Authentication Successful!</strong><br>`;
        resultDiv.innerHTML += `Authorization Token: ${data.authorizationToken}<br>`;
    })
    .catch(error => {
        console.error('Error:', error);
        const resultDiv = document.getElementById('authResult');
        resultDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
    });
}
