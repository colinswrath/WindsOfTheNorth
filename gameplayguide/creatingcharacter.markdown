---
layout: page
title: Creating Your Character
permalink: /gameplayguide/creatingyourcharacter
background_image: true
background_image_url: public/stars.png
---
 
<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid #444;
        padding: 10px;
        text-align: Center;
    }

    .argonian { color: gold; }
    .breton { color: lightblue; }
    .darkelf { color: lightcoral; }
    .highelf { color: #aaffaa; }
    .imperial { color: #ff6666; }
    .khajiit { color: lightgreen; }
    .nord { color: #ffaaaa; }
    .orc { color: lightgray; }
    .redguard { color: #ffcc66; }
    .woodelf { color: #66ff66; }
    .skill.warrior { color: #e73d3d; }
    .skill.mage    { color: #6fa8dc; }
    .skill.thief   { color: #6aa84f; }
</style>

**Note: This whole page has currently been updated for Winds of the North 4.0.0 RC 1. As I prepare for the full release I will be updating documentation**

<div style="text-align: center;">
While the literal process of creating your character has not changed much, there are other things to consider while creating your character.
<br>
Skyrim has always embraced the idea that you should be able to venture out and do things without meticulously number-crunching your character. While this is still very much true, you should at least have a general idea of the type of build you want to make.
</div>
<br>

# Starting a New Game
---

Upon starting a new game, you will see a popup asking if you would like to skip the normal introduction (courtesy of [Optional Quick Start](https://www.nexusmods.com/skyrimspecialedition/mods/63953)).

<div class="centerdiv">
    <img alt="" src="../assets/siteImages/popup.webp" style="margin-right: 0.5%;" class="dropshadow responsive-img smallimage">
</div>

As cool as Skyrim's intro is, we've all played through it probably a dozen times at this point, and it's very long. Selecting this option will start you just before exiting the cave outside of Helgen.\
To make up for lost XP and items that you would have acquired during the start, there will be a starter chest just outside where you can select some starting items for your adventure.

Otherwise, you may select no and just continue through the normal Skyrim intro.

# Races, Classes, and Traits
---
As of Winds of the North 4.0.0, you now have many more options when creating your character.\
Your selection of race used to dictate your starting skills, starting spells, and racial abilities. \
After 4.0.0, your race dictates a racial passive and nothing else. Starting skills and spells and more other effects are determined by the class and trait you choose. 
 >This allows for a wider range of more interesting RP oppurtinities and builds, and is similar to how character creation worked in older elder scrolls games

---
## Race

>Your choice of race will grant you a passive ability, detailed below.


<table>
    <tr>
        <th>Race</th>
        <th>Passive</th>
    </tr>
    <tr>
        <td>Argonian</td>
        <td>Your Health, Magicka, and Stamina are increased by 25.</td>
    </tr>
    <tr>
        <td>Breton</td>
        <td>Your Magic Resistance is increased by 25%.</td>
    </tr>
    <tr>
        <td>Dark Elf</td>
        <td>Your Fire Resistance is increased by 50%.</td>
    </tr>
    <tr>
        <td>High Elf</td>
        <td>Your Magicka is increased by 50.</td>
    </tr>
    <tr>
        <td>Imperial</td>
        <td>You receive 1 additional perk point and find more gold in your travels.</td>
    </tr>
    <tr>
        <td>Khajiit</td>
        <td>You spend 20% less Stamina while power attacking or drawing a bow.</td>
    </tr>
    <tr>
        <td>Nord</td>
        <td>Your Frost Resistance is increased by 50%.</td>
    </tr>
    <tr>
        <td>Orc</td>
        <td>Your Health is increased by 50.</td>
    </tr>
    <tr>
        <td>Redguard</td>
        <td>Your Stamina is increased by 50.</td>
    </tr>
    <tr>
        <td>Wood Elf</td>
        <td>Your Movement Speed is increased by 10%.</td>
    </tr>
</table>

---

## Class

>Selecting a class will grant you an additional passive. It will also determine what your starting skills are.

<table>
    <tr>
        <th>Class</th>
        <th>Passive</th>
        <th>Starting Skills</th>
    </tr>
    <tr class="archer">
        <td class="skill warrior">Archer</td>
        <td>You draw your bow 20% faster.</td>
        <td>
            <span class="skill warrior"><u>Archery</u></span>, 
            <span class="skill thief"><u>Alchemy</u></span>, 
            <span class="skill thief"><u>Light Armor</u></span>, 
            <span class="skill warrior"><u>One-handed</u></span>, 
            <span class="skill warrior"><u>Smithing</u></span>
        </td>
    </tr>
    <tr class="barbarian">
        <td class="skill warrior">Barbarian</td>
        <td>Power attacks deal 50% extra damage to enemies who are power attacking, drawing a bow, or casting a spell.</td>
        <td>
            <span class="skill warrior"><u>Two-handed</u></span>, 
            <span class="skill warrior"><u>Archery</u></span>, 
            <span class="skill thief"><u>Hand to Hand</u></span>, 
            <span class="skill thief"><u>Light Armor</u></span>, 
            <span class="skill warrior"><u>Smithing</u></span>
        </td>
    </tr>
    <tr class="crusader">
        <td class="skill warrior">Crusader</td>
        <td>You resist 50% of incoming spell damage when blocking with a shield.</td>
        <td>
            <span class="skill warrior"><u>Block</u></span>, 
            <span class="skill mage"><u>Enchanting</u></span>, 
            <span class="skill warrior"><u>Heavy Armor</u></span>, 
            <span class="skill mage"><u>Restoration</u></span>, 
            <span class="skill warrior"><u>One-handed</u></span>
        </td>
    </tr>
    <tr class="knight">
        <td class="skill warrior">Knight</td>
        <td>You resist 10% of all incoming weapon and spell damage.</td>
        <td>
            <span class="skill warrior"><u>Smithing</u></span>, 
            <span class="skill warrior"><u>Block</u></span>, 
            <span class="skill warrior"><u>Heavy Armor</u></span>, 
            <span class="skill warrior"><u>Two-handed</u></span>, 
            <span class="skill thief"><u>Speech</u></span>
        </td>
    </tr>
    <tr class="spellsword">
        <td class="skill mage">Spellsword</td>
        <td>Destruction spells cost 20% less while you have a weapon equipped.</td>
        <td>
            <span class="skill warrior"><u>One-handed</u></span>, 
            <span class="skill mage"><u>Destruction</u></span>, 
            <span class="skill mage"><u>Enchanting</u></span>, 
            <span class="skill warrior"><u>Heavy Armor</u></span>, 
            <span class="skill mage"><u>Restoration</u></span>
        </td>
    </tr>
    <tr class="warrior">
        <td class="skill warrior">Warrior</td>
        <td>Your Health Regeneration is increased by 50%.</td>
        <td>
            <span class="skill warrior"><u>Heavy Armor</u></span>, 
            <span class="skill warrior"><u>Archery</u></span>, 
            <span class="skill warrior"><u>Block</u></span>, 
            <span class="skill warrior"><u>One-handed</u></span>, 
            <span class="skill warrior"><u>Two-handed</u></span>
        </td>
    </tr>
    <tr class="battlemage">
        <td class="skill mage">Battlemage</td>
        <td>Your Armor Rating is increased by 100 while under the effect of an armor spell.</td>
        <td>
            <span class="skill mage"><u>Destruction</u></span>, 
            <span class="skill mage"><u>Alteration</u></span>, 
            <span class="skill mage"><u>Enchanting</u></span>, 
            <span class="skill warrior"><u>Heavy Armor</u></span>, 
            <span class="skill warrior"><u>Two-handed</u></span>
        </td>
    </tr>
    <tr class="healer">
        <td class="skill mage">Healer</td>
        <td>Restoration spells cost 20% less when dual cast.</td>
        <td>
            <span class="skill mage"><u>Restoration</u></span>, 
            <span class="skill mage"><u>Alteration</u></span>, 
            <span class="skill mage"><u>Enchanting</u></span>, 
            <span class="skill mage"><u>Illusion</u></span>, 
            <span class="skill thief"><u>Speech</u></span>
        </td>
    </tr>
    <tr class="mage">
    <td class="skill mage">Mage</td>
    <td>Your Magicka Regeneration is increased by 50%.</td>
    <td>
        <span class="skill mage"><u>Alteration</u></span>, 
        <span class="skill mage"><u>Conjuration</u></span>, 
        <span class="skill mage"><u>Destruction</u></span>, 
        <span class="skill mage"><u>Illusion</u></span>, 
        <span class="skill mage"><u>Restoration</u></span>
    </td>
    </tr>
    <tr class="nightblade">
        <td class="skill mage">Nightblade</td>
        <td>Illusion spells are twice as strong while you are undetected.</td>
        <td>
            <span class="skill mage"><u>Illusion</u></span>, 
            <span class="skill mage"><u>Conjuration</u></span>, 
            <span class="skill mage"><u>Destruction</u></span>, 
            <span class="skill warrior"><u>One-handed</u></span>, 
            <span class="skill thief"><u>Sneak</u></span>
        </td>
    </tr>
    <tr class="sorcerer">
        <td class="skill mage">Sorcerer</td>
        <td>You have a 10% chance to absorb the Magicka from incoming spells.</td>
        <td>
            <span class="skill mage"><u>Enchanting</u></span>, 
            <span class="skill thief"><u>Alchemy</u></span>, 
            <span class="skill mage"><u>Conjuration</u></span>, 
            <span class="skill mage"><u>Destruction</u></span>, 
            <span class="skill warrior"><u>Heavy Armor</u></span>
        </td>
    </tr>
    <tr class="witchhunter">
        <td class="skill thief">Witchhunter</td>
        <td>Your potions last 50% longer.</td>
        <td>
            <span class="skill mage"><u>Conjuration</u></span>, 
            <span class="skill thief"><u>Alchemy</u></span>, 
            <span class="skill warrior"><u>Archery</u></span>, 
            <span class="skill mage"><u>Restoration</u></span>, 
            <span class="skill thief"><u>Light Armor</u></span>
        </td>
    </tr>
    <tr class="agent">
        <td class="skill thief">Agent</td>
        <td>Your poisons last for 50% more hits.</td>
        <td>
            <span class="skill thief"><u>Alchemy</u></span>, 
            <span class="skill warrior"><u>Archery</u></span>, 
            <span class="skill mage"><u>Illusion</u></span>, 
            <span class="skill thief"><u>Sneak</u></span>, 
            <span class="skill thief"><u>Speech</u></span>
        </td>
    </tr>
    <tr class="assassin">
        <td class="skill thief">Assassin</td>
        <td>You deal 25% extra sneak attack damage.</td>
        <td>
            <span class="skill thief"><u>Sneak</u></span>, 
            <span class="skill thief"><u>Alchemy</u></span>, 
            <span class="skill thief"><u>Light Armor</u></span>, 
            <span class="skill warrior"><u>One-handed</u></span>, 
            <span class="skill thief"><u>Security</u></span>
        </td>
    </tr>
    <tr class="monk">
        <td class="skill thief">Monk</td>
        <td>Your Armor Rating is increased by 100 while unarmed.</td>
        <td>
            <span class="skill thief"><u>Hand to Hand</u></span>, 
            <span class="skill mage"><u>Alteration</u></span>, 
            <span class="skill mage"><u>Restoration</u></span>, 
            <span class="skill thief"><u>Security</u></span>, 
            <span class="skill thief"><u>Speech</u></span>
        </td>
    </tr>
    <tr class="rogue">
        <td class="skill thief">Rogue</td>
        <td>You deal 25% extra power attack damage while you have an empty offhand.</td>
        <td>
            <span class="skill thief"><u>Speech</u></span>, 
            <span class="skill thief"><u>Alchemy</u></span>, 
            <span class="skill warrior"><u>One-handed</u></span>, 
            <span class="skill thief"><u>Light Armor</u></span>, 
            <span class="skill thief"><u>Security</u></span>
        </td>
    </tr>
    <tr class="scout">
        <td class="skill warrior">Scout</td>
        <td>Your Stamina Regeneration is increased by 50%.</td>
        <td>
            <span class="skill thief"><u>Light Armor</u></span>, 
            <span class="skill warrior"><u>Archery</u></span>, 
            <span class="skill warrior"><u>Block</u></span>, 
            <span class="skill warrior"><u>One-handed</u></span>, 
            <span class="skill warrior"><u>Smithing</u></span>
        </td>
    </tr>
    <tr class="thief">
        <td class="skill thief">Thief</td>
        <td>You move 20% faster while sneaking.</td>
        <td>
            <span class="skill thief"><u>Security</u></span>, 
            <span class="skill thief"><u>Hand to Hand</u></span>, 
            <span class="skill thief"><u>Light Armor</u></span>, 
            <span class="skill thief"><u>Sneak</u></span>, 
            <span class="skill thief"><u>Speech</u></span>
        </td>
    </tr>
</table>

---

## Trait

>Traits are the final step in the character creation process. Some grant more powerful bonuses with downsides. Some are more for flavor, but there should be an option for everyone. 

<table>
    <tr>
        <th>Trait</th>
        <th>Effect</th>
    </tr>
    <tr class="acrobatic">
        <td class="trait">Acrobatic</td>
        <td>You jump twice as high and take 50% less damage from falling.</td>
    </tr>
    <tr class="arcane">
        <td class="trait">Arcane</td>
        <td>Your spells and enchantments cost 20% less, but you cannot regenerate Magicka in combat.</td>
    </tr>
    <tr class="athletic">
        <td class="trait">Athletic</td>
        <td>Sprinting costs 50% less Stamina out of combat.</td>
    </tr>
    <tr class="beloved">
        <td class="trait">Beloved</td>
        <td>You have the Blessing of Dibella, and carry her amulet.</td>
    </tr>
    <tr class="bitten">
        <td class="trait">Bitten</td>
        <td>You are afflicted by Sanguinare Vampiris.</td>
    </tr>
    <tr class="blessed">
        <td class="trait">Blessed</td>
        <td>You have a small chance to find healing scrolls on fallen enemies.</td>
    </tr>
    <tr class="brute">
        <td class="trait">Brute</td>
        <td>You deal 10% extra damage with weapons, but you move 10% slower.</td>
    </tr>
    <tr class="cannibal">
        <td class="trait">Cannibal</td>
        <td>You have a chance to find human flesh and human hearts on slain enemies.</td>
    </tr>
    <tr class="careful">
        <td class="trait">Careful</td>
        <td>You take less damage while power attacking, drawing a bow, or casting a spell, but deal less damage to enemies who are power attacking, drawing a bow, or casting a spell.</td>
    </tr>
    <tr class="charming">
        <td class="trait">Charming</td>
        <td>Your buying and selling prices are improved by 10%.</td>
    </tr>
    <tr class="coward">
        <td class="trait">Coward</td>
        <td>You move 10% faster, but take 10% extra weapon and spell damage.</td>
    </tr>
    <tr class="drunkard">
        <td class="trait">Drunkard</td>
        <td>Alcohol is twice as strong, but when you are not under the effect of alcohol, your Magicka and Stamina are reduced by 50.</td>
    </tr>
    <tr class="faithless">
        <td class="trait">Faithless</td>
        <td>You cannot benefit from shrines, but you receive one additional perk point.</td>
    </tr>
    <tr class="foolhardy">
        <td class="trait">Foolhardy</td>
        <td>Your armor is 25% more effective when you are not wearing a helmet.</td>
    </tr>
    <tr class="gifted">
        <td class="trait">Gifted</td>
        <td>You receive 10% extra experience.</td>
    </tr>
    <tr class="hoarder">
        <td class="trait">Hoarder</td>
        <td>Your Carry Weight is increased by 100, but your selling prices are reduced by 20%.</td>
    </tr>
    <tr class="milkdrinker">
        <td class="trait">Milkdrinker</td>
        <td>Bonuses from milk are five times stronger, and you find extra milk in your travels.</td>
    </tr>
    <tr class="mundane">
        <td class="trait">Mundane</td>
        <td>You resist 20% of all incoming spell damage, but your spells and enchantments cost five times as much.</td>
    </tr>
    <tr class="novice">
        <td class="trait">Novice</td>
        <td>You no longer benefit from your class’s starting skills.</td>
    </tr>
    <tr class="reckless">
        <td class="trait">Reckless</td>
        <td>You deal extra damage to staggered targets, but take extra damage while staggered.</td>
    </tr>
    <tr class="salty">
        <td class="trait">Salty</td>
        <td>You find extra salt in your travels.</td>
    </tr>
    <tr class="sweettooth">
        <td class="trait">Sweet Tooth</td>
        <td>You have a small chance to find Skooma on fallen enemies.</td>
    </tr>
    <tr class="trollkin">
        <td class="trait">Trollkin</td>
        <td>Your Health Regeneration is increased by 100%, but your Fire Resistance is reduced by 50%.</td>
    </tr>
    <tr class="wanted">
        <td class="trait">Wanted</td>
        <td>You are a wanted criminal, and have bounties in each of Skyrim’s holds.</td>
    </tr>
</table>

