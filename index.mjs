

import Cauldron from "./Cauldron.mjs";
import Character from "./Character.mjs";
import Ingredients from "./Ingredients.mjs";
import PotionBag from "./PotionBag.mjs";
import { getBagData, getIngredientsData } from "./service.mjs";

const execute = async () => {
    try {
        const data = await getIngredientsData();
        const bagsData = await getBagData();

        const ingredients = Ingredients.load(data)

        const cauldron = new Cauldron(ingredients);
        
        const red_potionBag = PotionBag.create(bagsData.players[0].pouch_green,cauldron)

        showPotions(red_potionBag);
        const joseph = Character.from(bagsData,red_potionBag);
        showCharacter(joseph);

        joseph.drinkEmAll();

    } catch (error) {
        console.log(error);
    }

}

function showPotion(potion) {
    console.log(`${potion.name}`);
    console.log(`Value:         ${potion.value}`);
    console.log(`Weight:        ${potion.weight}`);
    console.log(`Time:          ${potion.time}`);
    console.log(`--------------------------`);

    
}
function showCharacter(character)
{
    console.log(`${character.fullName}`);
    console.log(`--------------------------`);
    console.log(`Health:            ${character.health}`);
    console.log(`Magick:            ${character.magick}`);
    console.log(`Stamina:           ${character.stamina}`);
    for (let i = 0; i < character.potions.potions.length; i++) {
        console.log(`Potion ${i}:   ${character.potions.potions[i].name}`);
        
    }
    console.log(`--------------------------`);

}
function showPotions(potion_bag) {
    console.log("SHOWING POTION BAG");
    for (let i = 0; i < potion_bag.potions.length; i++) {
        showPotion(potion_bag.potions[i]);
    }
}

const showIngredients = async (ingredients) => {

    for (const key in ingredients.ingredients) {
        console.log(ingredients.ingredients[key].name);
        console.log(ingredients.ingredients[key].effects);
    }
}
execute();

