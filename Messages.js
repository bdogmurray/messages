// Generate Random messages  //

let finalSentence = [];


//  message part data  //
const nouns = ["The guy ", "The gal ", "The zebra ", "The albatros ", "The elephant "];
const verbs = ["ran quickly ", "stomped loudly ", "shuffled morosely ", "walked quietly ", "tip-toed gently "];
const endings = ["to the bathroom.", "through the attic.", "under the ladder.", "between the flowers.", "from here to there."];

//  generate random number 0-4 //

const getRandom = () => {
    return Math.floor(Math.random() * 5);
}

//  pull random pieces of each part to make sentences  //

function makeSentence() {
    finalSentence.push(nouns[getRandom()]);
    //console.log(finalSentence);
    finalSentence.push(verbs[getRandom()]);
    //console.log(finalSentence);
    finalSentence.push(endings[getRandom()]);
    // return finalSentence;
    // console.log(finalSentence);
    const formatted = finalSentence.join('');
    console.log(formatted);
};
makeSentence();

// console.log(finalSentence);

