# Data Encryption Package

This package provides functions for encrypting and decrypting data using the AES encryption algorithm.

## Installation

You can install this package via npm:

```bash
npm install data-decr-encr
```

## Usage

```javascript
const { encryptData, decryptData } = require('data-decr-encr');

// Encrypt data
const encrypted = encryptData('Hello, World!');

// Decrypt data
const decrypted = decryptData(encrypted);

console.log('Encrypted:', encrypted);
console.log('Decrypted:', decrypted);
```

## API

### encryptData(data)

Encrypts the provided data using AES encryption algorithm.

- `data` (string): The data to encrypt.

Returns the encrypted data in base64 encoding.

### decryptData(encryptedData)

Decrypts the provided encrypted data using AES encryption algorithm.

- `encryptedData` (string): The encrypted data in base64 encoding.

Returns the decrypted data.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
