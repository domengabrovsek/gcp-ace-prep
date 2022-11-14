const fs = require('fs');
const pdf = require('pdf-parse');

// parse the question part
const parseQuestion = (entry) => {
  return entry
    .match(new RegExp(/(?<=#\d).+?(?=A)/gms))
    .pop()
    .split('\n')
    .filter(Boolean)
    .join(' ')
    .replaceAll('\x00', 'fi')
    .replaceAll(/\d{1,3} /gms, '')
    .trim();
}

// parse the answer part - always 4 answers (A,B,C,D)
const parseAnswer = (letter, entry) => {

  let regex;

  switch (letter) {
    case 'A':
      regex = new RegExp(/(?<=A\. ).+?(?=B\.)/s);
      break;
    case 'B':
      regex = new RegExp(/(?<=B\. ).+?(?=C\.)/s);
      break;
    case 'C':
      regex = new RegExp(/(?<=C\. ).+?(?=D\.)/s);
      break;
    case 'D':
      regex = new RegExp(/(?<=D\. ).+?(?=Correct)/s);
      break;
    default:
      break;
  }

  return entry
    .match(regex)
    .pop()
    .split('\n')
    .filter(Boolean)
    .join(' ')
    .replaceAll('ג€', '"')
    .replaceAll('\x00', 'fi');
}

// parse the "correct" answer part
const parseCorrectAnswer = (entry) => {
  return entry.match(new RegExp(/Correct Answer: [A|B|C|D]/s)).pop().split(': ')[1];
}

const parseContent = (data) => {
  const entries = data.text.split('Question ');
  const result = {
    entries: []
  }

  // remove first entry because it contains no valueable data
  entries.shift(0);

  entries.forEach((entry, index) => {

    try {
      // parse all the stuff and save it to qa (questions and answers) object
      const qa = {
        number: entry.split('\n')[0],
        question: parseQuestion(entry),
        answerA: parseAnswer('A', entry),
        answerB: parseAnswer('B', entry),
        answerC: parseAnswer('C', entry),
        answerD: parseAnswer('D', entry),
        correctAnswer: parseCorrectAnswer(entry),
        // TODO: add community voted answers
      }

      result.entries.push(qa)

    } catch (error) {
      console.log('Error while processing entry', index);
    }
  })

  return result;
}

(async () => {

  // open the pdf file
  console.log('reading pdf ...');
  const dataBuffer = fs.readFileSync('questions-answers/ace-exam-no-discussions.pdf');

  // parse pdf file to text
  console.log('parsing pdf ...');
  const data = await pdf(dataBuffer);

  // parse the data and save it into a simpler format
  console.log('parsing data ...');
  const result = parseContent(data);

  // save parsed data into a file
  console.log('saving data ...');
  fs.writeFileSync('results.json', JSON.stringify(result), { encoding: 'utf-8' });

  console.log('done!');
})();