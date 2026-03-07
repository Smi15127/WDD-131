let level = 5
let health = 100
let maxHealth = 100
let defense = 5

function updateUI(){

document.getElementById("level").textContent = level
document.getElementById("health").textContent = health
document.getElementById("maxHealth").textContent = maxHealth
document.getElementById("defense").textContent = defense

}

function takeDamage(){

let incomingDamage = 20

let reducedDamage = incomingDamage - defense

if(reducedDamage < 1){
reducedDamage = 1
}

health -= reducedDamage

if(health < 0){
health = 0
}

updateUI()

}

function levelUp(){

level += 1

maxHealth += 20

defense += 2

health += 20

if(health > maxHealth){
health = maxHealth
}

updateUI()

}