const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to check if a string is a number
const isNumber = (str) => {
  return !isNaN(str) && !isNaN(parseFloat(str));
};

// Helper function to check if a string is an alphabet
const isAlphabet = (str) => {
  return /^[a-zA-Z]+$/.test(str);
};

// Helper function to create concatenated string with alternating caps in reverse order
const createConcatString = (alphabets) => {
  if (alphabets.length === 0) return "";
  
  // Flatten all alphabets into individual characters and reverse
  const allChars = alphabets.join('').split('').reverse();
  
  // Apply alternating caps starting with uppercase
  return allChars.map((char, index) => {
    return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  }).join('');
};

// Main API endpoint
app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    
    // Validate input
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid input. 'data' must be an array."
      });
    }

    // Initialize arrays for categorization
    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;

    // Process each item in the data array
    data.forEach(item => {
      if (isNumber(item)) {
        const num = parseFloat(item);
        if (num % 2 === 0) {
          evenNumbers.push(item.toString());
        } else {
          oddNumbers.push(item.toString());
        }
        sum += num;
      } else if (isAlphabet(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        specialCharacters.push(item);
      }
    });

    // Create concatenated string
    const concatString = createConcatString(alphabets);

    // Prepare response
    const response = {
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialCharacters,
      sum: sum.toString(),
      concat_string: concatString
    };

    res.status(200).json(response);

  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({
      is_success: false,
      error: "Internal server error occurred while processing the request."
    });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    message: "BFHL API is running!",
    endpoint: "POST /bfhl",
    description: "Send a POST request with data array to process"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoint: POST http://localhost:${PORT}/bfhl`);
});

module.exports = app;
