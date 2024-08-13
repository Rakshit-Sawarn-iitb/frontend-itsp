


document.getElementById('signatureForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    try {
        const response = await fetch('/compare', {
            method: 'POST',
            body: formData,
            credentials: 'include' // Include cookies (if using session-based authentication)
        });

        const result = await response.json();
        alert(result.is_genuine || result.error);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while verifying the signature.');
    }
});