

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
}

export default Character