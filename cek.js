const axios = require('axios');

// API endpoint dan API key
const apiUrl = 'https://otpcepat.com/api/handler_api.php';
const apiKey = 'b0d169c15a0947fb93744974c7bba61c';

// Fungsi untuk mendapatkan balance
async function getBalance() {
    try {
        console.log('Sending request to API...');
        const response = await axios.get(apiUrl, {
            params: {
                api_key: apiKey,
                action: 'getBalance'
            }
        });
        console.log('Response received:', response.data);
        
        const data = response.data;
        const saldo = data?.data?.saldo;
        if (saldo !== undefined) {
            console.log(`Balance: ${saldo}`);
        } else {
            throw new Error('Failed to retrieve balance');
        }
    } catch (error) {
        console.error('Error:', error.message || 'Unknown error');
    }
}

// Panggil fungsi untuk mendapatkan balance
getBalance();
