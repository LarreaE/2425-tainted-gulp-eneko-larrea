

class PotionBag {
    constructor(potions){
        this.potions = potions
    }

    static create(ingredients,cauldron)
    {        
        let potions = [];
        
        for (let i = 0; i < ingredients.length; i++) {

            for (let j = i + 1; j < ingredients.length; j++) {
                const potion = cauldron.createPotion(ingredients[i],ingredients[j]);
                potions.push(potion);
            }
        }
        
        return new PotionBag(potions);
    }
}

export default PotionBag