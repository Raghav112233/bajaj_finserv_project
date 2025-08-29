# BFHL REST API

A Node.js REST API that processes arrays and returns categorized data including even/odd numbers, alphabets, special characters, sum calculations, and concatenated strings.

## Features

- **POST /bfhl** endpoint for processing data arrays
- Categorizes input data into numbers, alphabets, and special characters
- Returns even/odd numbers separately
- Calculates sum of all numbers
- Creates concatenated string with alternating caps in reverse order
- Comprehensive error handling and validation
- Ready for deployment on Vercel, Railway, or Render

## API Endpoint

- **Method**: POST
- **Route**: `/bfhl`
- **Status Code**: 200 (success)

## Request Format

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

## Response Format

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Example Requests

### Example A
**Request**: `["a", "1", "334", "4", "R", "$"]`
**Response**: Numbers separated, sum calculated, alphabets converted to uppercase, special characters identified, concatenated string created.

### Example B
**Request**: `["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]`
**Response**: Even numbers [2, 4, 92], odd numbers [5], alphabets [A, Y, B], special characters [&, -, *], sum 103, concatenated string "ByA".

### Example C
**Request**: `["A", "ABcD", "DOE"]`
**Response**: No numbers (empty arrays), alphabets [A, ABCD, DOE], no special characters, sum 0, concatenated string "EoDdCbAa".

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd bfhl-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

4. **Test the API**
   - Server runs on `http://localhost:3000`
   - Health check: `GET /`
   - Main endpoint: `POST /bfhl`

## Dependencies

- **express**: Web framework for Node.js
- **cors**: Cross-origin resource sharing middleware
- **nodemon**: Development dependency for auto-reloading

## Project Structure

```
bfhl-api/
├── index.js          # Main server file with API logic
├── package.json      # Project dependencies and scripts
├── vercel.json       # Vercel deployment configuration
├── .gitignore        # Git ignore rules
└── README.md         # Project documentation
```

## Logic Implementation

### Data Processing
- **Numbers**: Identified using `!isNaN()` check, separated into even/odd arrays
- **Alphabets**: Detected using regex `/^[a-zA-Z]+$/`, converted to uppercase
- **Special Characters**: Everything else (symbols, spaces, etc.)

### Concatenated String
- All alphabets flattened into individual characters
- Characters reversed in order
- Alternating caps applied (starting with uppercase)

### Response Format
- All numbers returned as strings
- `is_success` indicates operation status
- Consistent user_id, email, and roll_number
- Proper error handling with descriptive messages

## Deployment

### Vercel Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in project directory
3. Follow prompts to deploy

### Manual Deployment
1. Push code to GitHub
2. Connect repository to Vercel dashboard
3. Deploy automatically on push

### Live API Endpoint
Your API is now live at: `https://bajaj-finserv-project-ihl9rkqm2.vercel.app/bfhl`

**Note**: Make sure deployment protection is disabled in Vercel dashboard for public access.

## Testing

### Command Line Testing

**cURL (Command Prompt):**
```bash
curl -X POST -H "Content-Type: application/json" -d "{\"data\": [\"a\", \"1\", \"334\", \"4\", \"R\", \"$\"]}" https://bajaj-finserv-project-ihl9rkqm2.vercel.app/bfhl
```

**PowerShell:**
```powershell
$body = @{data = @("a", "1", "334", "4", "R", "$")} | ConvertTo-Json
Invoke-RestMethod -Uri "https://bajaj-finserv-project-ihl9rkqm2.vercel.app/bfhl" -Method Post -Body $body -ContentType "application/json"
```

### GUI Testing Tools
- **Postman**: Import the collection
- **Thunder Client**: VS Code extension
- **Insomnia**: API testing tool

## Error Handling

- **400**: Invalid input (missing or non-array data)
- **500**: Internal server errors
- **200**: Successful processing

## License

MIT License - feel free to use and modify as needed.

## Author

John Doe - BFHL Assignment Submission
