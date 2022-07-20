let toSellPottery = []

export const toSellOrNotToSell = (object) => {

    if (object.weight >= 6) {
        object.price = 40
    } else {
        object.price = 20
        if (object.cracked === false) {
            toSellPottery.push(object)
            console.log("test")
        }
    } return toSellPottery
}

export const usePottery = () => {
    return toSellPottery.slice()

}