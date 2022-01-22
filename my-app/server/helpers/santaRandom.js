exports.SantaRandom = function (object) {
    let names = Object.keys(object);
    let len = names.length;
    let namesObj = {};

    for (let i = 1; i <= len; i++) {
        namesObj[i] = names[i - 1]
    }
    let gived = [];

    for (let i = 1; i <= len; i++) {
        let randomNumber = Math.ceil(Math.random() * len)
        if (gived.includes(randomNumber)) {
            i--;
            continue;
        }
        if (randomNumber == i) {
            i--;
            continue;
        }
        gived.push(randomNumber);
    }
    let sendingItem = {};
    for (let i = 0; i < len; i++) {
        sendingItem[object[names[i]]] = namesObj[gived[i]];
    }


    return sendingItem

}