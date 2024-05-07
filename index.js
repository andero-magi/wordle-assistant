const LENGTH = 5;

let words = require("an-array-of-english-words")

let bannedChars = "weisa"

let requiredChars = [
    {letter: 'd', notSlots: [3, 2]},
    {letter: 't', notSlots: [3]}
]

let setWords = "____h"

let matching = words.filter(string => {
    if (string.length != LENGTH) {
        return false
    }

    for (let i = 0; i < bannedChars.length; i++) {
        let banned = bannedChars[i]

        if (string.indexOf(banned) == -1)  {
            continue
        }

        return false
    }

    for (let i in requiredChars) {
        let req = requiredChars[i]
        let word = req.letter
        let bannedSlots = req.notSlots

        let index = string.indexOf(word)

        if (index == -1) {
            return false
        }

        while (setWords[index] == word) {
            index = string.indexOf(word, index + 1)
            
            if (index == -1) {
                return false
            }
        }

        if (bannedSlots.indexOf(index) != -1) {
            return false
        }
        if (setWords[index] != '_') {
            return false
        }
    }

    for (let i = 0; i < LENGTH; i++) {
        let ch = setWords[i]

        if (ch == '_') {
            continue
        }

        if (string[i] == ch) {
            continue
        }

        return false
    }

    return true
})

console.log(matching)