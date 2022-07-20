export const potteryList = (array) => {
    let htmlString = ""
    for (let each of array) {
        htmlString += `<section class="pottery">
            <h2 class="pottery__shape"> ${each.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${each.weight} grams and is ${each.height} cm in height
            </div>
            <div class="pottery__price">
                Price is ${each.price}
            </div>
        </section >`
    } return htmlString
}