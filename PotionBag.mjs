

class PotionBag {
    constructor(potions){
        this.potions = potions
    }

    static create(ingredients,cauldron)
    {
        console.log(ingredients);
        
        let potions = [];
        
        for (const key in ingredients) {
            console.log(ingredients[key]);
            
            for (const j in ingredients) {
                
                const potion = cauldron.createPotion(ingredients[key],ingredients[j]);
                if (potion.name != 'Failed Potion' && !isInPouch(potions,potion.name)) {
                    potions.push(potion);
                }
            }
        }

        console.log(potions);
        
    }
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