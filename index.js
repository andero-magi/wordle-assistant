let words = require("an-array-of-english-words")

let bannedChars = "agnyrwsld"

let requiredChars = [
    {letter: 'o', notSlots: [3]}
]

let setWords = [
    'b', null, 'o', null, null
]

let matching = words.filter(string => {
    if (string.length != 5) {
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

        if (bannedSlots.indexOf(index) != -1) {
            return false
        }
    }

    for (let i in setWords) {
        let ch = setWords[i]

        if (ch == null || ch == undefined) {
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