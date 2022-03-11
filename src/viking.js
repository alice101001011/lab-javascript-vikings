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
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else return `A Saxon has died in combat`;
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
    const randomAttackedSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomAttackingViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const battle = randomAttackedSaxon.receiveDamage(
      randomAttackingViking.strength
    );

    this.saxonArmy.forEach((saxon) => {
      if (saxon.health <= 0) {
        this.saxonArmy.splice([saxon]);
      }
    });

    return battle;
  }

  saxonAttack() {
    const randomAttackedViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomAttackingSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const battle = randomAttackedViking.receiveDamage(
      randomAttackingSaxon.strength
    );

    this.vikingArmy.forEach((viking) => {
      if (viking.health <= 0) {
        this.vikingArmy.splice([viking]);
      }
    });

    return battle;
  }

  showStatus() {}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
