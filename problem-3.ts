//problem 3

const countWordOccurrences = (sentence: string, word: string) : number =>{
    const sentenceArray = sentence.split(' ');
    const findWord = sentenceArray.filter((w) => w.toLocaleLowerCase() === word.toLocaleLowerCase());
    return findWord.length;
}

const occurentCount = countWordOccurrences('I love typescript', 'typescript');
console.log(occurentCount)