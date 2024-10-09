

class Character {
    constructor(fullName,health,magick,stamina,potions)
    {
        this.fullName = fullName;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }

    static from(playerData,potions)
    {
        console.log(playerData.players[0]);
        const fullName = `${playerData.players[0].name} the ${playerData.players[0].class}` 
        return new Character(fullName,playerData.players[0].health,playerData.players[0].magick,playerData.players[0].stamina,potions);
    }

    drinkEmAll()
    {
        console.log(`${this.fullName} Comienza a beber las pociones de una en una`);
        console.log("--------------------------");
        
        for (let i = 0; i < this.potions.potions.length; i++) {
            const potion = this.potions.potions[i];
            console.log("Gulp");
            if (potion.name === 'Potion of Sanity') {
                this.health += potion.value;
                this.stamina += potion.value;
                this.magick += potion.value;

                console.log("Joseph ha bebido el elixir deseado y es purificado, sumando el valor de la pocion a todos sus atributos");
                break;
            }
            else if(potion.name === 'Failed Potion') {
                console.log("Joseph se encuentra una poción fallida, decide no beberla");
            }
            else if (potion.name.includes('Potion')) {  
                if (potion.name.includes('Health')) {
                    this.health += potion.value;
                    console.log("la poción '" + potion.name + "' ha curado " + potion.value + " puntos dejando a nuestro heroe a " + this.health + " puntos de vida");
                }
                else if (potion.name.includes('Stamina')) {
                    this.stamina += potion.value;
                    console.log("la poción '" + potion.name + "' ha recuperado " + potion.value + " puntos dejando a nuestro heroe a " + this.stamina + " puntos de stamina");
                }
                else if (potion.name.includes('Magick')) {
                    this.magick += potion.value;
                    console.log("la poción '" + potion.name + "' ha recuperado " + potion.value + " puntos dejando a nuestro heroe a " + this.magick + " puntos de magick");
                }
                else {
                    this.health += 1;
                    this.stamina += 1;
                    this.magick += 1;
                    console.log("Joseph se encuentra una poción peculiar : " + potion.name);
                    console.log("Al ser una poción todos sus atributos se ven levemente beneficiados");                
                }
            }
            else if (potion.name.includes('Poison')) {
                if (potion.name.includes('Health')) {
                    this.health -= potion.value;
                    console.log("la poción '" + potion.name + "' ha dañado " + potion.value + " puntos dejando a nuestro heroe a " + this.health + " puntos de vida");
                    if (this.health <= 0) {
                        console.log("Joseph ha fallecido");
                        break;
                    }
                }
                else if (potion.name.includes('Stamina')) {
                    this.stamina -= potion.value;
                    console.log("la poción '" + potion.name + "' ha infligido " + potion.value + " puntos dejando a nuestro heroe a " + this.stamina + " puntos de stamina");
                    if (this.stamina <= 0) {
                        console.log("Joseph está completamente agotado y no puede moverse mas");
                        break;
                    }
                }
                else if (potion.name.includes('Magick')) {
                    this.magick -= potion.value;
                    console.log("la poción '" + potion.name + "' ha infligido " + potion.value + " puntos dejando a nuestro heroe a " + this.magick + " puntos de magick");
                    if (this.magick <= 0) {
                        console.log("A Joseph le han drenado toda su magia y el hechizo caos del Erudito X.G termina por rematarlo.");
                        break;
                    }
                }
                else {
                    this.health -= 1;
                    this.stamina -= 1;
                    this.magick -= 1;
                    console.log("Joseph se encuentra una poción peculiar : " + potion.name);
                    console.log("Al ser un veneno todos sus atributos se ven levemente perjudicados");          
                    if (this.health <= 0) {
                        console.log("Joseph ha fallecido");
                        break;
                    }
                    if (this.stamina <= 0) {
                        console.log("Joseph está completamente agotado y no puede moverse mas");
                        break;
                    }
                    if (this.magick <= 0) {
                        console.log("A Joseph le han drenado toda su magia y el hechizo caos del Erudito X.G termina por rematarlo.");
                        break;
                    }
                }
            }
        }
    }
}

export default Character