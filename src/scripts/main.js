// Imports go first
import { firePottery } from './kiln.js'
import { makePottery } from './potteryWheel.js'
import { toSellOrNotToSell } from './potteryCatalog.js'
import { usePottery } from './potteryCatalog.js'
import { potteryList } from './potteryList.js'


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 5, 13)
let pot = makePottery("pot", 4, 15)
let vase = makePottery("vase", 3, 19)
let plate = makePottery("plate", 1, 13)
let bowl = makePottery("bowl", 2, 18)



// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 1080)
let firedPot = firePottery(pot, 2400)
let firedVase = firePottery(vase, 2010)
let firedPlate = firePottery(plate, 1900)
let firedBowl = firePottery(bowl, 2600)



// Determine which ones should be sold, and their price
let sellableMug = toSellOrNotToSell(firedMug)
let sellablePot = toSellOrNotToSell(firedPot)
let sellableVase = toSellOrNotToSell(firedVase)
let sellablePlate = toSellOrNotToSell(firedPlate)
let sellableBowl = toSellOrNotToSell(firedBowl)

let theArray = usePottery()

// Invoke the component function that renders the HTML list
let finalHTML = potteryList(theArray)

const parentHTMLelement = document.querySelector(".potteryList")
parentHTMLelement.innerHTML = finalHTML

console.log(theArray)