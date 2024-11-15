![](https://raw.githubusercontent.com/colinswrath/WindsOfTheNorth/main/images/WindsofTheNorthLogo2k.png)

<p align="center">
  [ <a href="https://www.nexusmods.com/skyrimspecialedition/mods/112972">Nexus</a> |
  <a href="https://github.com/colinswrath/WindsOfTheNorth/blob/main/README.md">Installation</a> |
  <a href="https://loadorderlibrary.com/lists/winds-of-the-north">Modlist</a> ]
</p>

---

# Changelog
- [2.0.2](#202) November 9 2024
- [2.0.1](#201) October 30 2024
- [2.0.0](#200) October 30 2024
- [1.1.13](#1113) July 22 2024
- [1.1.12](#1112) June 28 2024
- [1.1.11](#1111) June 15 2024
- [1.1.10](#1110) May 31 2024
- [1.1.9](#119) May 17 2024
- [1.1.8](#118) May 11 2024
- [1.1.7](#117) May 9 2024
- [1.1.6](#116) May 2 2024
- [1.1.5](#115) April 29 2024
- [1.1.4](#114) April 22 2024
- [1.1.3](#113) April 19 2024
- [1.1.2](#112) April 12 2024
- [1.1.1](#111) April 8 2024
- [1.1.0](#110) April 4 2024
- [1.0.8](#108) March 21 2024
- [1.0.7](#107) March 20 2024
- [1.0.6](#106) March 16 2024
- [1.0.5](#105) March 15 2024
- [1.0.4](#104) March 11 2024
- [1.0.3](#103) March 11 2024
- [1.0.2](#102) March 9 2024
- [1.0.1](#101) March 8 2024
- [1.0.0](#100) March 8 2024

## 2.0.2

Key Info
 - This update is Save-Safe

<Details>
<summary>Patch Notes</summary>

### About

### Misc 

 - Updated Modlist Update Checker and Modlist Maintenance ini files.
 - The default starting difficulty has been changed to Adept.
 - Leather Scout now requires steel smithing to craft.
 - A small change to crusader has now been made. Before, you did not gain any perk points after level 50. Now, you will gain 1 additional perk point at level 55,60,65,70,75,etc... until level 100
 - Cleaned up some unnecessary changes from the main conflict patch
 - Disabled sleep, wait, and fast travel encounters in Extended Encounters
 - Photo mode - reduced full screen screenshot load screen chance to 5%, set painting load screen chance to 0%
 - Photo mode - time will now freeze by default when opening photo mode

### Bug Fixes

 - Fixed an issue where Stormcloak weapons were visible during the intro scene
 - Adjusted misdirection perk description to add missing period
 - Fixed Tall Papa Blessing experience bonus not working, and showing duplicate effects
 - Fixed Caravan Captain's note being enabled before Arniel's Endeavour.
 - Removed the backpack CC leveled list injection 
   - Technically this will not take effect until a new save, as the leveled list injection would have already occured on an existing save. But this is not a big deal, it just means you will see more backpacks at vendors than you otherwise would.
 - Redistributed backpacks in a much more tame manner. They should now be much less common, and they will be available at: 
   - Tier 1 -> level 1
   - Tier 2 -> level 15
   - Tier 3 -> level 25
 - Backpacks are now no longer craftable at level 1 with no perk investment. 
 - Crafting bags now requires the following perks:
   - Tier 1 -> Basic smithing
   - Tier 2 -> Intermediate smithing
   - Tier 3 -> Advanced Smithing
 - Removed several changes from "The College of Mages" mod
   - Removed edits to college boots
   - Archmage boots have been re-enabled


</Details>
<Details>
<summary>Changes</summary>

### Updated

 - Photo Mode
 - City Bag Checks
 - Extended Guard Dialogue
 - Skyrim Silver - Currency Swapper for Windhelm
 - The Only Cure - Quest Expansion
 - Unarmed Behaviors Expanded

### Added

 - Classic Weathers
 - Classic Weathers Extended
 - Perk Entry Point Extender
 - Unarmed Weapon Speed Scaling and Unlocked Movement
 - Mehrunes Dagon Unique Shrine - Shrine Objects Swapped - Base Object Swapper
 - Better Atronach Forge Offering Box - No More Dwemer Dresser - High Polygon Summoning Circle
 - Extended Encounters - Settings Loader

### Removed

</Details>

## 2.0.1

 - Recompiled to remove Scripts.zip compatibility. No other changes.

## 2.0.0 - The Treasury Update

Key Info
 - This update is NOT Save-Safe!!

<Details>
<summary>Patch Notes</summary>

### About
 - With 2.0.0 comes the first major rework that this list has ever recieved. As such, 2.0.0 has undergone many additions, updates, and removals. 

 - Perhaps the largest change, that I hope will not be too controversial, is the removal of the majority of the enemy mods. 
I feel for consistency's sake that this was a choice that I needed to make.
In their place I have added BnB's "Level Based Difficulty", which scales the difficulty as you level up. I have also elected to add a few mods that more or less modify the aesthetic of some enemies (mainly Draugr).

 - The title of this update comes from the addition of my own mod called "Treasury Exchange". It replaces Merchant Exchange with a fully voiced NPC in the Markarth Treasury house.

 - Other larger changes include switching from "Timing is Everything" to "Arena Quest Requirements", the addition of the currency swapper COIN mod series by TateTaylorOH, and a rework of some of the Creation Club integration (additional supported Creation Club items are listed below)

### Misc 

 - "Character Lighting" has been re-enabled by default.
 This is something that is usually disabled by Community Shaders. 
 However disabling this in conjunction with the very vanilla-like setup that WotN has causes characters to be too dark and lose much of their detail. Character lighting has been re-enabled by default in this list.
 - The default difficulty has been changed to Expert. Feel free to lower this if you deem it too difficult.
 - Grass mods have been removed in favor of vanilla grass.
 - Support for several new AE creations has been added. (Details under Added section below)
 - Updated Xedit, texgen, and dyndolod path arguments to be relative to install
 - Regenerated xlodgen, ACMOS (for roads on map), TexGen, and Dyndolod
 - Regenerated ImmersiveEquipmentMeshGen for mirrored left sheaths (for Simple Dual Sheaths)
 - Disabled the smithy items behind the general store in Winterhold.
 - Most of the formerly included enemy mods, except Dragon War, have been removed.
 - Added DEAD, Humanoid Dragon Priests, and switched to the normal version of Cannibal Draugr on Solstheim.
 - Made Dragon Priest footsteps silent from Humanoid Dragon Priests
 - Disabled Dragon Priests dropping ash piles upon death
 - Rearanged the tracks in the music merge, and added more silent and palette tracks.
 - Jumping stamina cost reduced from 12 stamina to 8

</Details>
<Details>
<summary>Changes</summary>

### Updated

 - Powerofthree's Papyrus Extender
 - Base Object Swapper
 - Powerofthree's Tweaks
 - Photo Mode
 - Dragon War - A Dragon Overhaul
 - Dynamic Random Dragons
 - Dragon Hunting
 - Civil War Lines Expansion
 - Unique Towns - Base Object Swapper
 - Armory of the Dragon Cult - Dragon Priest Armor
 - ERM - Enhanced Rocks and Mountains
 - Environs - The Ruined Tundra Farmhouse
 - Environs - Hroggar's House
 - CC Farming - Tweaks Enhancements and Quest Expansion
 - Security Overhaul SKSE - Lock Variations
 - Iron Armors and Weapons Retexture SE
 - Environs - Abandoned Abodes
 - Press H to Horse
 - The Only Cure - Quest Expansion
 - NPCs React To Invisibility
 - Knight of the North - Divine Crusader Reworked
 - Deadly Spell Impacts
 - Description Framework
 - The Heart of Dibella - Quest Expansion
 - Canis Hysteria - The Werewolf Disease
 - Merlin the Corgi
 - Gladys the Corgi
 - C.O.I.N
 - Siege at Icemoth
 - Press H to Horse
 - True Directional Movement - Modernized Third Person Gameplay
 - FormList Manipulator - FLM
 - Face Sculptor Expanded
 - More Informative Console
 - Creation Cave (Switched to AIO version)
 - Simplicity of Snow
 - Orcish Armors and Weapons Retexture SE
 - Creation Club - Adjustments Rebalancing and Variants (switched to AIO version)
 - CoMap
 - Nordic Snow
 - FormList Manipulator - FLM
 - Forsworn Armors and Weapons Retexture SE
 - Wolf Armors and Weapons Retexture SE
 - Iron Armors and Weapons Retexture SE
 - East Empire Company Armor
 - Animated Forge Water
 - Assorted mesh fixes
 - Extended Guard Dialogue
 - Extended Bandit Dialogue
 - Unofficial Skyrim Special Edition Patch
 - Crash Logger SSE AE VR - PDB support
 - powerofthree's Tweaks
 - powerofthree's Papyrus Extender
 - RUGNAROK - Special Edition
 - Dyndolod 3.0
 - Dyndolod Resources
 - Dyndolod DLL SE
 - Base Object Swapper
 - Winds of The North Music Merge

### Added
 - Support for additional creation club items:
    - Umbra
    - Stendarr's Hammer
    - Dawnfang & Duskfang
    - Arms of Chaos
    - The Staff of Hasedoki
    - The Gray Cowl
    - Bittercup
    - Headman's Cleaver
    - Sunder and Wraithguard
 - Arena - Quest Requirements
 - Winterhold - Smelt Cellar
 - Falmer Servant Lines Expansion
 - Extended Encounters
 - Infiltration - Quest Expansion
 - The Gift of Saturalia - A Quest for the Holidays
 - Destroy The Dark Brotherhood - Quest Expansion
 - Environs - Tundra Farmhouse - Patch Collection
 - Environs - Hroggar's House - Patch Collection
 - Enhanced Vanilla Mountain Textures
 - Container Distribution Framework
 - Currency Swapper
 - Security Overhaul SKSE - Extra Locks - 11 New Locks
 - Skyrim Silver - Currency Swapper for Windhelm
 - Gibberish - Currency Swapper
 - Elven Supremecy - Currency Swapper for Thalmor
 - Morrowind Mint - Currency Swapper for Solstheim
 - CC Dawnfang and Duskfang - No Forced Quest
 - Sunder and Wraithguard - Arniel's Endeavor
 - D.E.A.D. - Draugr Enemy Asset Diversity
 - Ancient Nord Stalhrim
 - 1st Person Greatsword Idle Animation Fix
 - Local Map Upgrade
 - dTry's Key Utils
 - dTry Plugin Updates
 - EVE - Power Attack Direction Fix - AE
 - Unarmed Behaviors Expanded
 - Stonehollow Overhaul for Wyrmstooth
 - Destination Weddings
 - Treasury in the Treasure House
 - C.O.I.N. - Treasury Exchange
 - Harvest Your Blood for Septimus
 - HD Vanilla Landscapes
 - Use or Take SKSE
 - Read or Take SKSE
 - Riften Gate Restored
 - Erandur Dialogue Edits
 - Taarie's Dialogue Fix
 - Humanoid Dragon Priests

### Removed

 - Madness and Order
 - Timing is Everything (Replaced with Arena - Quest Requirements Addon)
 - Timing is Everything - Settings Loader
 - Thugs Not Assassins - Timing is Everything Patch
 - Skyrim Is Luminous
 - Cathedral Landscapes
 - Less saturated Cathedral grass for ENB complex grass
 - Cathedral Landscapes - Swamp Grass Alternatives
 - Cathedral - 3D Grass Library - Meshes
 - Cathedral - 3D Solstheim Grass
 - Landscape Fixes for Grass Mods
 - Complementary Grass Fixes
 - Grass Fixes for Creation Club Mods
 - Pocket Mammoths
 - Unique Towns Vanilla - Bubbling Brew Patch (Redundant)
 - Seasonal Saturalia Merchant - Vanilla Seasons (replaced with The Gift of Saturalia)
 - Dark Brotherhood Rising Revengeance
 - Armory of the Dragon Cult - Unenchanted Robes and Armors (Redundant)
 - Happy Little Shrubs
 - Tamrielic Distribution
 - Madmen - A Forsworn Overhaul (and related patches)
 - DFNFConflictResolution.esp (Custom Patch no longer needed)
 - Lawless - A Bandit Overhaul
 - Verious patches for Lawless
 - King Priest (and related patches)
 - Hokoron (and related patches)
 - Dragon Cult (and related patches)
 - ERM - Enhanced Rocks and Mountains (Replaced with Enhanced Vanilla Mountain Textures)
 - NPC reduced poison damage
 - STAYDOWN
 - Relics of the Crusader
 - Swords of the Sanctum - Moved Book Addon (no longer supported)
 - C.O.I.N. - Merchant Exchange
 - High Poly Vanilla Hair
 - SSEUT - Landscape

</Details>


## 1.1.13

Key Info
 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins

<Details>
<summary>Patch Notes</summary>

### Bug Fixes

 - Fixed an issue where Modlist Update Checker was reporting the list out of date (I forgot to update the ini last update)

</Details>
<Details>
<summary>Changes</summary>

### Updated

 - Simply Skin - Male
 - Simply Skin - Female
 - More Informative Console
 - Open Animation Replacer
 - Photo Mode
 - Skill of Sneaking
 - Pirate-King - A Velehk Sain Overhaul and Expansion
 - House of Horrors - Quest Expansion
 - Base Object Swapper
 - Infinite Dragon Variants
 - Caught Red Handed - Quest Expansion
 - Gourmet - Cooking Pots and Baking Ovens
 - NPCs React to Invisibility
 - CC Farming - Tweaks Enhancements and Quest Expansion
 - powerofthree's Papyrus Extender

### Added

 - Dragon Priest Hood Variants
 - Divine Crusader Retexture SE
 - Daedric Armors and Weapons Retexture SE

</Details>

## 1.1.12

Key Info
 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins

<Details>
<summary>Patch Notes</summary>

### Misc 

 - This patch mostly consists of updating mods that needed it. A big highlight is that I updated modlist maintenance to allow better version handling
 - I also fixed the broken readme from 1.1.11

</Details>
<Details>
<summary>Changes</summary>

### Updated

 - Hearthfires Houses Building Fix
 - Base Object Swapper
 - Modlist Maintenance Utility
 - Aetherius - A Race Overhaul
 - Mundus - A Standing Stone Overhaul
 - Open Animation Replacer
 - The Only Cure - Quest Expansion
 - Blade and Blunt - A Combat Overhaul
 - Persistent Favorites
 - Pirate-King - A Velehk Sain Overhaul and Expansion
 - Adamant - No Killmoves Descriptions
 - Assorted mesh fixes

</Details>

## 1.1.11

Key Info
 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins

<Details>
<summary>Patch Notes</summary>

### Misc Changes

 - Switched the SkyHUD preset to "Vanilla Small"

### Bug Fixes

 - Fixed master volume being lowered all the way
 - Deleted load screens from the dyndolod esp (in case anyone had custom display tweaks ini's, causing them to still appear)
 - Fixed an issue where the female version of the ebony warrior's armor had major texture issues (Fixed by reverting back to vanilla female ebony armor from practical femal armors)

</Details>
<Details>
<summary>Changes</summary>

### Updated

 - Ebony Armors and Weapons Retexture SE
 - powerofthree's Tweaks
 - Innocence Lost - Quest Expansion
 - Silver Armor and Weapons Retexture SE
 - powerofthree's Tweaks
 - Iconic's Spiders of Skyrim Retexture

</Details>

## 1.1.10

Key Info
 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins

<Details>
<summary>Patch Notes</summary>

### Misc Changes

### Bug Fixes

 - Fixed a bug where Dyndolod's load screen wasnt being filtered out properly
 - Added patched scripts for Dragon Hunting and Run for your lives

</Details>
<Details>
<summary>Changes</summary>

### Added

 - Ghosts of the Tribunal Retexture SE
 - Vigil Enforcer Retexture SE

### Updated

 - Base Object Swapper
 - Open Animation Replacer
 - Wyrmstooth
 - CC Hendraheim - Tweaks and Enhancements
 - Open Animation Replacer
 - Saints and Seducers - Mysticism Rebalance
 - Assorted mesh fixes
 - Aetherius - Race Menu Racial Passive Descriptions
 - Innocence Lost - Quest Expansion
 - Crash Logger SSE AE VR - PDB support
 - Dragon Priests Retexture SE

</Details>

## 1.1.9

Key Info
 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins
 
<Details>
<summary>Patch Notes</summary>

### Misc Changes

 - Some of the Tamrielic Distribution plugins have been removed that were not actually needed due to other mods covering their functionality

### Bug Fixes

 - Fixed a bug with Winterhold - Bubbling Brew that sometimes caused the shop to be closed when it shouldnt be
 - Fixed an issue where the Blackreach map was bugged
 - Fixed an issue with blade and blunt that caused jump stamina to break after switching races

</Details>
<Details>
<summary>Changes</summary>

### Added

 - Vanilla Makeup HD
 - Vanilla Warpaints Absolution
 - Iconic's Blackreach Crystals Retexture

### Updated

 - Artificer - Xavbio Textures Addon
 - Starfrost - A Survival Overhaul
 - Aetherius - A Race Overhaul
 - Blade and Blunt - A Combat Overhaul
 - Swords of the Sanctum - Spell Knight Expansion and Distribution

### Removed

 - Tamrielic Distribution - Disable AA Iron Quest
 - Tamrielic Distribution - Disable AA Leather Quest
 - Tamrielic Distribution - Disable AA Silver Quest

</Details>

## 1.1.8

Key Info
 - This update is mostly a hotfix
 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions

<Details>
<summary>Patch Notes</summary>

### Update tasks

 - As of the most recent update, blade and blunt updated injury chances above 90%. Toggle Survival Mode off and back on again to update the value properly.s

### Bug Fixes

 - Reverted Apothecary update
 - Fixed an issue where I did not select the difficulty persistence fix in the Complete Widescreen fixes mod

</Details>

<Details>
<summary>Changes</summary>

### Updated

 - Reverted Apothecary to previous version

</Details>

## 1.1.7

Key Info

 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - If you were having issues loading up the game with Skills of Sneaking or Items Stolen Bugfix, please be sure you have followed the install instructions and installed VC++. (I made sure I updated the link)
 - You can ignore prompts about missing plugins

<Details>
<summary>Patch Notes</summary>

### Misc Changes

 - The list now uses Aetherius' Breton Spell Absorb plugin
 - With the addition of CSSET as a base, I do not feel the need to bloat the list's size with PC - Clutter so that has been removed.
 - Community Shaders - Water Caustics have been disabled by default due to repeated reports of majorly impacted performance. It is still present in the list and may optionally be enabled again if you desire to do so

### Bug Fixes

 - I discovered that with post 7.0.0 versions of SPID, the visiting advisor outfit tweak distro just magically stopped working. I could not get it to work no matter which permutation of configuration I tried. It worked okay with pre 7.0.0 versions of SPID. Therefore, I switched the mod over to using SkyPatcher runtime distribution and it worked like a charm without issues.
 - Fixed an issue with Falas Selvayn not selling anything but the Stag Prince Bow (Thank Delta for helping me fix this)
 - Fixed an issue where torches are invisible when equipped
 - Fixed a bug in Starfrost that caused hunger not to show in UI

### Balance Changes

 - The extra plots added by CC Farming TNE are no longer available for purchase (it had up to 121 plots available which is..alot)
 - Silver Hand armor is now equivilant to Steel Armor instead of roughly Steel Plate

</Details>

<Details>
<summary>Changes</summary>

### Updated

 - Visiting advisor outfit tweak
 - Blade and Blunt - A Combat Overhaul
 - Starfrost - A Survival Overhaul
 - Gourmet - A Cooking Overhaul
 - Gourmet - Cooking Pots and Baking Ovens
 - Aetherius - A Race Overhaul
 - Mundus - A Standing Stone Overhaul
 - Adamant - A Perk Overhaul
 - Apothecary - An Alchemy Overhaul
 - Apothecary - Fishing Patch
 - Description Framework
 - Aetherius - Race Menu Racial Passive Descriptions


### Added

 - SkyPatcher
 - Cleaned Skyrim SE Textures (bsa replacement in stock game)
 - Animated Forge Water
 - Simply Skin Male Texture Replacer
 - Simply Skin Female Texture Replacer
 - Simply Skins Briarheart textures (provided by Foamimi)

### Removed

 - Jumping Costs Stamina - Alternative Stamina Cost Options (superceded by BnB update)
 - Dynamic Animation Casting - NG
 - Project Clarity - Clutter
 - Tempered Skins for Males
 - Tempered Skins for Females
 - Tempered Racial Textures
 - Vanilla Body with UNP Textures

</Details>

## 1.1.6

Key Info

 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins

<Details>
<summary>Patch Notes</summary>

### Misc Changes

 - Selected the rusty Champion's Cudgel texture in the fomod for Xav's Imperial Retexture

### Bug Fixes

 - Fixed issue with wrong art on h2h and security skill trees
 - Fixed issue where Vendil Severin was not spawning with the Severin Family Ring

</Details>

<Details>
<summary>Changes</summary>

### Updated

 - Swords of the Sanctum - Spell Knight Expansion and Distribution
 - Custom Skills Framework
 - Persistent Favorites

### Added

 - Skyrim SE Skill Interface Re-Texture (SSIRT) - Hand to Hand Patch
 - Skill of Sneaking
 - Items Stolen Bug Fix

</Details>

## 1.1.5

Key Info

 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins

<Details>
<summary>Patch Notes</summary>

### Misc

 - Re-enabled whiterun ground stone upscale textures from Shadow's uspcale
 - CoMap - Switched to Obscured Undiscovered Markers - Small Diamond
 - CoMap - bObscuredUndiscovered has been set to 1 in the ini

### Balance Changes

 - Lawless had the Orc from the "Old Orc" encounter always spawn with a set of Orcish armor. This led to Orcish armor being accessible pretty early on.
     - Therefore, his outfit pulls from a new leveled list similar to lawless bandit chiefs (but no helmet)

### Bug Fixes

 - Caught a few more stragglers with the IED preset. (please follow these instructions to load the new default preset)
   - Press backspace in game
   - Select file -> Default Config -> import
   - Make sure the user radio button is selected (should be by default)
   - Select "Ok" and then "Ok" again
 - Fixed missing texture on ebony greatsword

</Details>

<Details>
<summary>Changes</summary>

### Updated

 - Constructible Object Custom Keyword System
 - CoMAP - Common Marker Addon Project
 - Modlist Maintenance Utility
 - Inventory Interface Information Injector
 - CC Myrwatch - Tweaks and Enhancements
 - Unaggressive Dragon Priests Fix

### Added

 - Discord Rich Presence
 - Contextual Crosshair
 - Press E to Heal Followers

</Details>

## 1.1.4

Key Info

 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins

<Details>
<summary>Patch Notes</summary>

### Misc

 - Disable Actor Fade has been set to true in Display Tweaks

### Balance Changes

 - Scimitars have had their value increased to 235 to make them more difficult to purchase early game. They are elven level damage and readily available early on. (I may nerf their damage in the future)

### Bug Fixes

 - Fixed an issue with some IED items showing up still that I did not want to (like the dragon claws).
    - Most favorited weapons/shield should still show up on the player. I mostly turned off quest items.
     - Press backspace in game
     - Select file -> Default Config -> import
     - Make sure the user radio button is selected (should be by default)
     - Select "Ok" and then "Ok" again
 - ELIF fixes the issue with filled soul gems appearing very small in your inventory

</Details>

<Details>
<summary>Changes</summary>

### Updated

 - Custom Skills Framework
 - Description Framework
 - Stormcrown - A Shout Overhaul

### Added

 - ENB Light Inventory Fix (ELIF)
 - Alchemy XP Fix
 - Adoption Spouse and Moving Fixes

### Removed

 - Simple Snow Improvements - Giant Obelisk Fixes (BOS)

</Details>

## 1.1.3

Key Info

 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins

<Details>
<summary>Patch Notes</summary>

### Misc
 
 - Custom Window was added, with custom icon art provided by Komegaki
 - Made some changes to the default IED preset to disable some things by default listed below:
      - Stamina, Magicka, Health, White Phile Potion/Holder
      - Elder Scrolls
      - Horn of Jurgen Windcaller/Holder
      - Azura's Star
      - Back Skulls
      - Dragon Claws
      - Dragonstone
      - Hip Bone
      - Jagged Crown
      - Klimmek's Supplies
      - Left Skull
      - Right Skull
      - Satchels
      - All Instruments
      - All coin pouches
 - If you want the new IED presets to take effect on an existing save, you will need to import the default config by doing the following
     - Press backspace in game
     - Select file -> Default Config -> import
     - Make sure the user radio button is selected (should be by default)
     - Select "Ok" and then "Ok" again
 - A new utility mod of my own making called "Modlist Maintenance" has been added. It keeps track of the current modlist version on your save among other things. From this point onward (meaning with future save unsafe updates), It will tell you if you've updated to a save unsafe version, it will tell you when it performs updates, and also has the ability to refresh spells on the player upon updating.
 - I am still keeping modlist update checker, as its functionality includes the ability to reach out to see if there are any available updates, which is different than my DLL above.
 - True Directional Movement: Now by default 360 degree movement is only active with your weapon unsheathed.

### Bug Fixes

 - Fixed an issue that was allowing a Glass Battleaxe to spawn in Khajiit caravan lists 
 - Hopefully fixed a bug with Extended Guard Dialogue where guards would get stuck using the same lines over and over again.

</Details>

<Details>
<summary>Changes</summary>

### Updated

 - Starfrost - A Survival Overhaul
 - Spell Perk Item Distributor (SPID)
 - Blade and Blunt - A Combat Overhaul
 - CC Myrwatch - Tweaks and Enhancements
 - More Informative Console
 - Subsurface Scattering
 - Gourmet - A Cooking Overhaul
 - Blade and Blunt - A Combat Overhaul

### Added

 - Custom Window
 - Dynamic Animation Casting - NG
 - Jumping Costs Stamina - Alternative Stamina Cost Options
 - Modlist Maintenance

</Details>

## 1.1.2

Key Info

 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions

<Details>
<summary>Patch Notes</summary>

### Misc
 
 - Engine Fixes updated to fix achievements enabler
 - Starfrost has a new Hunger mechanic added, Blade and Blunt had some good bug fixes and new changes to injury mechanics. 

### Bug Fixes

 - Moved optional widescreen support to end of the install order to fix conflicts with bottom bar swf.
 
</Details>

<Details>
<summary>Changes</summary>

### Updated

 - Blade and Blunt - A Combat Overhaul
 - Spell Perk Item Distributor (SPID)
 - Mysticism - A Magic Overhaul
 - Starfrost - A Survival Overhaul
 - Gourmet - A Cooking Overhaul
 - B.O.O.B.I.E.S (aka Immersive Icons)
 - SSE Engine Fixes (skse64 plugin)

### Added

 - Robber's Gorge Fixes
 - Delphine Skyhaven Bugfix MQ203
 - Remove Creations from Main Menu

### Removed

 - Achievements Mods Enabler

</Details>

## 1.1.1

Key Info

 - This update is Save-Safe (from 1.1.0 Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - Wetness Effects update fixed issues with older graphics cards
 - Click continue when prompted about if you want to load your game with BCS/CCTweaks/Paraphernalia files missing

<Details>
<summary>Patch Notes</summary>

### Ini Changes

 - iNumFocusShadow 4 -> 2

### Misc
 
 - Community Shaders grass complex grass override grass lighting has been turned on
 - BCS-Conflicts file merged into misc conflict resolution patch
 - CCTweaks conflict resolution file merged into misc conflict resolution patch

### Bug Fixes

 - Missile's IED presets were not being loaded by default. This has been fixed

</Details>

<Details>
<summary>Changes</summary>

### Updated

 - CC Farming - Tweaks Enhancements and Quest Expansion
 - Dragon Hunting - Quest Rewards and Alchemy Ingredients
 - Dragon Hunting Apotheocary Patch
 - Crash Logger SSE AE VR - PDB support
 - Winterhold - The Bubbling Brew
 - Wetness Effects
 - LOD Model Library for DynDOLOD (wont matter much until I regen in the next save unsafe update)
 - Dragon Hunting
 - Description Framework

### Added

 - Less saturated Cathedral grass for ENB complex grass
 - Skyrim SE Skill Interface Re-Texture
 - Aetherius - Race Menu Racial Passive Descriptions

### Removed

 - Paraphernalia - Snow Colour Fixes (unnecessary)
 - Capture Warmer

</Details>

## 1.1.0
Key Info

 - This update is NOT save-safe

 <Details>
<summary>Patch Notes</summary>

### Misc
 - DFNF Conflict Resolution - Removed changes for Gift of Saturalia
 - Practical Female armors has been added. I am using all armors except Vampire Armor, Ancient Nord Armor, Nordic Carved, and Imperial Armor
 - Misc Conflict Resolution - Patched ECSS_Mysticism and ECSS - BCS patch 
 - A "disabled by default" mod has been added to support easily turning off TrueHUD floating bars.
 - Fancy fishing has been edited to enable minigame by default. You may turn this off in the MCM if you do not like the minigame
 - Removed SIL lighting color changes to Hearthfire homes. They were way too dark for my tastes.
 - Display Tweaks: enabled the loading screen filter and added Dyndolod.esp to the block list (to prevent the unfunny "gimme your firstborn" loadscreens from appearing)
 - Added gauntlets to all Guards

### Balance Changes

 - Distributed a perk to all NPCs to reduce poison damage by 20%
 - Bounty Quest Redone reward mults have been reconfigured as follows (for Arena consistency):
     - Mages: 2.5 -> 2.0
     - Dwemer: 2.0 -> 2.5
     - Falmer: 1.4 -> 2.5
     - Forsworn: 1.3 -> 1.5
     - Reaver: 1.0 -> 1.25
     - Draugr: 1.2 -> 1.5

### Bug Fixes

 - Gamepad and Vibration has been enabled by default again
 - Removed Customizable Faster Mining Animation because of unfixable sound desync
 - Added a custom plugin to fix Hajvaar not wearing Iron Hand Gauntlets
 - Fixed an issue with The College of Mages and the COM - Sorcery patch where deleted items were occasionally still appearing
 - The Riften ferryman was clipping with the fishing supplies on the dock. He has been moved to the side of the dock, near his boat.
 - Dark Brotherhood Rising Revengeance - Fixed no quest reward bug
 - Dragon Hunting - Fixed Dragon Piercer not being added as a quest reward
 - Fixed a bug with Dragon Hunting where "Dragon Research" would not start 
 - Removed some unnecessary record changes from the misc conflict patch

</Details>

<Details>
<summary>Changes</summary>

### Updated

 - Mundus - A Standing Stone Overhaul
 - Photo Mode
 - Community Shaders
 - Wetness Effects
 - Updated included SSEEdit to 4.1.5c
 - Regenerated xlodgen, ACMOS roads, Texgen, and Dyndolod.
 - Ebony Armors and Weapons Retexture SE
 - The Whispering Door - Quest Expansion
 - Siege at Icemoth
 - Crash Logger SSE AE VR - PDB support

### Added

 - Artificer - Canis Hysteria Patch
 - ImGui Icons
 - Bounty Quests Redone - NG
 - Winterhold - The Bubbling Brew
 - Shadow's Upscale Revolution - Dungeons
 - Seasonal Saturalia Merchant
 - Unique Towns Vanilla - Bubbling Brew Patch
 - Hearthfire Has Snow
 - Practical Female Armors
 - Practical Female iron Armor
 - Practical Female Level Hunter Armor
 - Practical Female Vigil Enforcer Armor
 - Practical Female Steel Soldier Armor
 - Practical Female Iron Plate Armor
 - Practical Female Ebony Plate Armor
 - Pracitcal Female Iron Plate Armor
 - Practical Femal Hide Armors
 - Male Horns for Female Iron Helmet
 - Saints and Seducers - Mysticism Rebalance
 - Water in Wells - mesh-only animated wells
 - Major Cities Mesh Overhaul
 - Open Faced Guard Helmets
 - 3D Whiterun Trellis
 - Dawnguard VA fix (Guard Dialogue Extension)
 - Fancy Fishing - Minigame and Tweaks
 - Vanilla Style UI for Fancy Fishing
 - Run For Your Lives
 - Artificer YATSM patch
 - AWD - Alduins Wall - Descriptions
 - Iconic's Alduin's Wall Retexture
 - Relics of the Crusader Improved
 - Relics of the Crusader Improved - KotN patch

### Removed

 - Headhunter - Bounties Redone
 - Skyrim On Skooma
 - The Gift of Saturalia - A Quest for the Holidays
 - Missile IED Headhunter Better Trophy On Horses
 - Bounty Preview
 - Customizable Faster Mining Animation - OAR or DAR

</Details>

## 1.0.8
Key Info

 - This update is Save-Safe

<Details>
<summary>Patch Notes</summary>

### Bug Fixes
 - Fixed issue where dynamic cubemaps were not properly applying to Ebony Armor
 - Adjusted some of the True Storms weather chances

### Misc
 - Cleaned unnecessary masters form misc conflict resolution patch
 - Moved some book record conflict resolution to the BCS patch instead of the misc patch

</Details>

<Details>
<summary>Changes</summary>

### Updated
 - Misc Conflict Resolution
 - Switched Project Clarity sky textures to full res version instead of half res

### Added
 - Mortal Enemies SE
 - Stay At The System Page NG
 - Instantly Skip Dialogue NG
 - DPI Scaling Fix
 - To Your Face SE - AE - VR
 - Modlist Update Checker

### Removed
 - Mount Anthor Dragon Fix (not needed with Dragon War)

</Details>

## 1.0.7

Key Info

 - This update is Save-Safe

<Details>
<summary>Patch Notes</summary>

### Misc
 - Several of the custom patches are now hosted on the nexus modlist page instead of being included directly in the list
 - LOD is now nexus hosted as well, which should provide faster/more consistent downloads
 - Reverted Schoolsacks of Simonrim's change to mark some bags as unplayable to fix existing saves having invisible inventory bags. (Crafting recipes should still not be accessible)
 - Many of the Cathedral 3D plants were removed. Not because they dont look good (they look great), but because visually they are pretty inconsistant with the rest of the list and stand out quite a bit.

### Balance Changes
 - Timing is Everything - Ebony Warrior quest start level requirement was changed from level 80 to level 50 (50 is the Crusader uncapper "soft" cap)
 - Kachunk consistency adjustments: Elven and Ebony crossbows are no longer locked behind Dawnguard. (Enhanced versions still are)
 - Kachunk consistency adjustments: Nordic crossbow requires intermediate smithing instead of advanced smithing. (For Adamant consistency)

</Details>

<Details>
<summary>Changes</summary>

### Updated

 - Open Animation Replacer
 - Schoolsacks of Simonrim - A CC Backpack Overhaul
 - Community Shaders
 - Dynamic Cubemaps
 - Dynamic Cubemaps - Metals
 - Complete Widescreen Fix for Vanilla and SkyUI

### Removed

 - Project Clarity - Architecture Textures Redone
 - SSEUT - Clutter
 - Cathedral - 3D Mountain Flowers
 - Cathedral 3D Mountain Flowers - Base Object Swapper
 - Cathedral - 3D Mountain Flowers Resized and Desaturated
 - Cathedral - 3D Thistle
 - Cathedral - 3D Tundra Cotton
 - Cathedral - 3D Deathbell
 - Cathedral - 3D Nightshade
 - Plump Cathedral 3D Plants
 - Cathedral Mushrooms

### Added

 - Shadow's Upscale Revolution - Architecture
 - Project Clarity - Clutter
 - Mountain flowers textures from Project Clarity
 - Whiterun Objects SMIMed
 - Capture Warmer
 - Mercantile
 - Reading is Good
 - Oblivion - An Atronach Forge Overhaul
 - Arachnomancy - A Spider Overhaul
 - Customizable Faster Woodcutting Animation - OAR or DAR
 - Customizable Faster Mining Animation - OAR or DAR
 - STAYDOWN - MEDIUM

</Details>

## 1.0.6

Key Info

 - This update is Save-Safe

<Details>
<summary>Patch Notes</summary>

### Misc
 - True Hud indicator changed to level text instead of soul icon

### Balance Changes
 - Morthal Barrow's min encounter zone level has been set to 25 for Arena consistency 
 - Taarengrav Barrow's min encounter zone level has been set to 10 for Arena consistency

### Bug Fixes
 - Fixed Deadly Spell impacts frost decals not applying correctly
 
</Details>

<Details>
<summary>Changes</summary>

### Updated
 - Community Shaders
 - Tree LOD Lighting
 - Grass Lighting
 - Screen-Space Shadows
 - Light Limit Fix

### Added

 - Adamant - No Killmove Descriptions
 - Subsurface Scattering
 - Water Caustics
 - Dynamic Cubemaps - Metals
 - Wetness Effects
 - Custom plugin restoring vanilla eye adaptation for SIL (thank you Delta)
 - Schoolsacks of Simonrim - A CC Backpack Overhaul

### Removed

 - Subsurface Scattering Shaders for Skins
 - Splashes of Storms
 - Simple CC Backpack Rebalance

</Details>

## 1.0.5

Key Info

 - This update is Save-Safe

<Details>
<summary>Patch Notes</summary>

### Settings Adjustments
 - Default difficulty changed to Adept
 - Volume sliders should now be set properly

### Balance Changes
 - Added 1 Travel Pack to the quick start chest

</Details>

<Details>
<summary>Changes</summary>

### Updated

 - Keyword Item Distributor (KID)
 - City Bag Checks

### Added
 - No Killmoves plugin from Blade and Blunt
 - Quest Journal Fix for SkyUI
 - Simon's custom quick start chest edit 

### Removed
 - SkyUI SE - Difficulty Persistence Fix
 - Optional Quick Start - Sensible Gear

</Details>

## 1.0.4

Key Info

 - This update is Save-Safe

<Details>
<summary>Patch Notes</summary>

- Removed the Creation Kit requirement from the Wabbajack Install.

</Details>

## 1.0.3

Key Info

 - This update is Save-Safe

<Details>
<summary>Patch Notes</summary>

### Bug Fixes

 - Fixed load order between High Poly Hair and Vanilla Hair fixes
 - 3DItemXOffset has been set to -6 for SkyUI
 - 3DItemYOffset has been set to 2
 - fActivateButtonPosY has been changed from 417 -> 410 for SkyHUD
 - fActivateInfoPosY has been changed from 517 -> 497 for SkyHUD
 - Creation Club files have been moved to mods 
 - Draugr waking up before triggers resolved with Dragon Cult update

</Details>

<Details>
<summary>Changes</summary>

### Removed

 - Artificer - Dragon Priest Staves (not needed)

### Updated

 - Dragon Cult - A Draugr Overhaul
 - Creation Club Farming - Tweaks Enhancements and Quest Expansion
 - Hendraheim - Tweaks and Enhancements

</Details>

## 1.0.2

Key Info

 - This update is Save-Safe

<Details>
<summary>Changes</summary>

### Updated

 - Actually recompiled with the correct version of Rare Curios this time

</Details>

## 1.0.1

Key Info

 - This update is Save-Safe

<Details>
<summary>Changes</summary>

### Updated

 - Extended Guard Dialogue
 - The Dragon Cult - A Draugr Overhaul
 - Recompiled with Bethesda version of Rare Curios instead of Steam (yes the one you download from Bethesda is different from the one you get when you verify files, its wild). Most modlists use this version as they should. If you have a hash error with Rare Curios, you need to delete your copy of Rare Curios and re-download from the creation menu not Steam. Apologies for the inconvenience.

</Details>

## 1.0.0

Key Info

 - Release