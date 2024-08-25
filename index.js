import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

// Define your routes and their corresponding handlers
app.get('/bfhl', (req, res) => {
  res.json({
    operation_code: 1,
  });
});

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const numberArray = [];
  const alphaArray = [];
  let maxLowerCaseChar = null;

  data.forEach((element) => {
    if (!isNaN(element)) {
      numberArray.push(element);
    } else if (typeof element === 'string') {
      if (element.match(/^[a-zA-Z]$/)) {
        alphaArray.push(element);
        if (element === element.toLowerCase() && (!maxLowerCaseChar || element > maxLowerCaseChar)) {
          maxLowerCaseChar = element;
        }
      }
    }
  });

  res.status(201).json({
    is_success: true,
    user_id: 'meghana_kulkarni_25122003',
    email: 'meghana.venkatrao2021@vitstudent.ac.in',
    roll_number: '21BEC0651',
    numbers: numberArray,
    alphabets: alphaArray,
    highest_lowercase_alphabet: maxLowerCaseChar ? [maxLowerCaseChar] : [],
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
