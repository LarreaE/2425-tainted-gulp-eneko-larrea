

class PotionBag {
    constructor(potions){
        this.potions = potions
    }

    static create(ingredients,cauldron)
    {
        console.log(ingredients);
        
        let potions = [];
        let ingredientCombinations = [];

        for (const key in ingredients) {
            
            for (const j in ingredients) {
                
                const potion = cauldron.createPotion(ingredients[key],ingredients[j]);
                if (potion.name != 'Failed Potion' && !isCombined(ingredients[key],ingredients[j], ingredientCombinations)) {
                    potions.push(potion);
                    ingredientCombinations.push(ingredients[key] + ingredients[j])
                }
            }
        }
        
    }
}

function isCombined(i1,i2,combinations)
{
    console.log("i1: " + i1);
    console.log("i2: " + i2);
    console.log(combinations);
    
    if (i1 === i2) 
    {
        for (let i = 0; i < combinations.length; i++) {
            if (combinations[i].includes(i1+i2)) {
                console.log(repe);
                
                return true
            }        
        }
    }
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