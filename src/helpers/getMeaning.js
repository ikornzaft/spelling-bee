const getMeaning = (word) => {
    console.log("WORD: ", word);    
    if (/\s/.test(word)) return "No meaning found";

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    let meaning;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            meaning = data[0].meanings[0].definitions[0].definition;
            console.log(meaning)
            // return meaning;
        })
        .catch(err => {
            console.log(err)
        });
        return meaning;
    }


export default getMeaning;