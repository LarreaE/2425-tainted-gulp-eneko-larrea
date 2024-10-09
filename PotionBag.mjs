

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

export default PotionBag