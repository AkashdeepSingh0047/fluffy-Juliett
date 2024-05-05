// Define NATO phonetic alphabets
const natoPhoneticSet1 = {
    'A': 'Alice',
    'B': 'Bob',
    'C': 'Cindy',
    'D': 'Dan',
    'E': 'Emily',
    'F': 'Fred',
    'G': 'Grace',
    'H': 'Harry',
    'I': 'Ivy',
    'J': 'Jack',
    'K': 'Kate',
    'L': 'Luke',
    'M': 'Mia',
    'N': 'Noah',
    'O': 'Olivia',
    'P': 'Peter',
    'Q': 'Quinn',
    'R': 'Rose',
    'S': 'Sam',
    'T': 'Tim',
    'U': 'Ursula',
    'V': 'Victor',
    'W': 'Wendy',
    'X': 'Xavier',
    'Y': 'Yvonne',
    'Z': 'Zach'
};

const natoPhoneticSet2 = {
    'A': 'Arrow',
    'B': 'Bear',
    'C': 'Cat',
    'D': 'Dog',
    'E': 'Elephant',
    'F': 'Fish',
    'G': 'Gorilla',
    'H': 'Horse',
    'I': 'Iceberg',
    'J': 'Jaguar',
    'K': 'Koala',
    'L': 'Lion',
    'M': 'Monkey',
    'N': 'Narwhal',
    'O': 'Octopus',
    'P': 'Panda',
    'Q': 'Quokka',
    'R': 'Rabbit',
    'S': 'Snake',
    'T': 'Turtle',
    'U': 'Unicorn',
    'V': 'Vulture',
    'W': 'Whale',
    'X': 'Xenopus',
    'Y': 'Yak',
    'Z': 'Zebra'
};

const natoPhoneticSet3 = {
    'A': 'Andy',
    'B': 'Bella',
    'C': 'Charlie',
    'D': 'Daisy',
    'E': 'Eddie',
    'F': 'Fiona',
    'G': 'Gary',
    'H': 'Hannah',
    'I': 'Isaac',
    'J': 'Jessica',
    'K': 'Kevin',
    'L': 'Lily',
    'M': 'Max',
    'N': 'Nora',
    'O': 'Oliver',
    'P': 'Penny',
    'Q': 'Quincy',
    'R': 'Rachel',
    'S': 'Sam',
    'T': 'Tom',
    'U': 'Ursula',
    'V': 'Victor',
    'W': 'Willow',
    'X': 'Xavier',
    'Y': 'Yara',
    'Z': 'Zoe'
};

// Function to convert text to NATO phonetic
function convertToNato(text) {
    const sets = [natoPhoneticSet1, natoPhoneticSet2, natoPhoneticSet3];
    const usedLetters = {};
    let output = '';

    text.toUpperCase().split('').forEach(char => {
        if (char in usedLetters) {
            // If the letter has been used before, move to the next set
            const setIndex = usedLetters[char];
            const nextSetIndex = (setIndex + 1) % sets.length;
            output += sets[nextSetIndex][char] || char;
            usedLetters[char] = nextSetIndex;
        } else {
            // If the letter is encountered for the first time, use from the first set
            output += sets[0][char] || char;
            usedLetters[char] = 0;
        }
    });

    return output;
}

// Event listener for convert button
$('#convertBtn').click(function() {
    const inputText = $('#textInput').val();
    const outputText = convertToNato(inputText);
    $('#output').html(`<li class="list-group-item">${outputText}</li>`);
});

// Event listener for clear button
$('#clearBtn').click(function() {
    $('#textInput').val('');
    $('#output').html('');
});