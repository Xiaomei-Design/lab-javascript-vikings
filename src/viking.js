// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
    }

}

    // Viking
class Viking extends Soldier {
    
    constructor(name, health, strength, ) {
        super (health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else return `${this.name} has died in act of combat`
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else return 'A Saxon has died in combat'
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random()* this.saxonArmy.length)];
        const result= randomSaxon.receiveDamage(randomViking.strength);
        for (let i = 0; i < this.saxonArmy.length; i++) {
            if (this.saxonArmy[i].health <= 0) {
                this.saxonArmy.splice(this.saxonArmy[i], 1)
            };
        };
        return result;
    }

    saxonAttack() {
        const randomSaxon = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random()* this.saxonArmy.length)];
        const result = randomViking.receiveDamage(randomSaxon.strength);
        for (let i = 0; i < this.vikingArmy.length; i++) {
            if (this.vikingArmy[i].health <= 0) {
                this.vikingArmy.splice(this.vikingArmy[i], 1)
            };
        };
        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) return 'Vikings have won the war of the century!';
        else if (this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survived another day...';
        else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) return 'Vikings and Saxons are still in the thick of battle.'
    }
}
