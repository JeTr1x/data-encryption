// data-encryption.js

const crypto = require('crypto');

// Encryption key and algorithm
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // Generate a random key (256 bits)

/**
 * Encrypts data using AES encryption algorithm
 * @param {string} data - The data to encrypt
 * @returns {string} - Encrypted data in base64 encoding
 */
function encryptData(data) {
    const iv = crypto.randomBytes(16); // Generate a random IV (128 bits)
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(data, 'utf-8', 'base64');
    encrypted += cipher.final('base64');
    return iv.toString('base64') + ':' + encrypted;
}

/**
 * Decrypts data encrypted using AES encryption algorithm
 * @param {string} encryptedData - The encrypted data in base64 encoding
 * @returns {string} - Decrypted data
 */
function decryptData(encryptedData) {
    const [iv, encryptedText] = encryptedData.split(':').map(str => Buffer.from(str, 'base64'));
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText, 'base64', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}

module.exports = { encryptData, decryptData };
