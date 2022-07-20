export const firePottery = (object, temp) => {
    let firedObject = object;
    firedObject.fire = true;
    if (temp > 2200) {
        firedObject.cracked = true
    } else {
        firedObject.cracked = false
    } return firedObject
}