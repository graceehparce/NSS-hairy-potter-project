let primaryKey = 1

export const makePottery = (shape, weight, height) => {
    let potteryObject = {}
    potteryObject.shape = shape;
    potteryObject.weight = weight;
    potteryObject.height = height;
    potteryObject.id = primaryKey++;
    return potteryObject
} 
