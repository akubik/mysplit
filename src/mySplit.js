module.exports = (phrase, delimiter) => {
    const result = [];
    if (!phrase) {
        return [""];
    }

    if (!delimiter) {
        return Array.from(phrase);
    }
    let lastDelimiter = 0
    for (let i = 0; i < phrase.length; i++) {
        
        if (phrase.charAt(i) === delimiter) {
            result.push(phrase.slice(lastDelimiter, i));
            lastDelimiter = i + 1;
        }
    }

    result.push(phrase.slice(lastDelimiter));
    return result;
}
