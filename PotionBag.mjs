

class PotionBag {
    constructor(potions){
        this.potions = potions
    }

    static create(ingredients,cauldron)
    {
        console.log(ingredients);
        
        let potions = [];
        
        for (let i = 0; i < ingredients.length; i++) {

            for (let j = i + 1; j < ingredients.length; j++) {
                const potion = cauldron.createPotion(ingredients[i],ingredients[j]);
                potions.push(potion);
            }
        }
        console.log(potions);
        
    }
}

function isCombined(i1,i2,combinations)
{
    for (let i = 0; i < combinations.length; i++) {
        if (combinations[i].includes(i1) && combinations[i].includes(i2)) {
            console.log(true);
            
            return true
        }        
    }
    return false
}
function isInPouch(pouch,potion_name)
{
    for (let i = 0; i < pouch.length; i++) {
        if (pouch[i].name === potion_name) {
            return true
        }        
    }
    return false
}

export default PotionBag