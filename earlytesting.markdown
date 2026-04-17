---
layout: page
title: Early Testing
permalink: /testing/
background_image: true
background_image_url: public/backgrounds/riften.png
---

<div class="centerdiv">
This page is where you may find pre-releases of Winds of the North.
Please be sure to read the disclaimer below before downloading and playing any pre-release.
<br>

</div>

# Important

<div class="centerdiv">
  <hr class="thin-hr">
</div>

Before going any futher, please read the following disclaimer:

- Any versions of the modlist linked on this page are TEST VERSIONS. You may encounter bugs. You may encounter issues. Pre-releases are not intended for very long term stable use.
- The purpose of these pre-releases is to assist with identifying any issues ahead of a full release. My hopeis that this brings polished full releases that contain fewer glaring bugs and issues.
- I cannot guarantee that any save made on a pre-release of the modlist will be compatible with the future full release or other pre-releases. You should assume that saves will not be compatible with the next release unless I state otherwise here on this page.
- Please keep in mind that any information outside of this page may not hold true for pre-releases. ie. Details on the Creation Club Integration page, or the gameplay guide will only ever be correct for full releases.
- Finally, please do not modify pre-releases. These are meant to help identify bugs and other issues with the list. They are not intended for long term play. Its a waste of my time, and yours, to install other mods on top of a pre-release and then make posts reporting issues. 

# Reporting Bugs and Issues

<div class="centerdiv">
  <hr class="thin-hr">
</div>

As I stated above, these pre-releases are intended help identify bugs ahead of time. This means you all need a place to make reports.

The best place for this is the **[Lost Outpost Discord server](https://discord.gg/WF66mMu)**. 
<br>
You should open a support post there detailing as much about the bug as you can. And please, for Talos' sake, mention that you are using a pre-release version of the modlist.

# Pre-Releases

<div class="centerdiv">
  <hr class="thin-hr">
</div>

[Winds of the North - 4.0.0 R.C. 7](https://github.com/colinswrath/WindsOfTheNorth/releases/download/4.0.0rc7/WindsoftheNorth.wabbajack)

## How to Install

<div class="centerdiv">
  <hr class="thin-hr">
</div>

Because these are early test versions, its not the same list that you would get directly through the Wabbajack UI.

You can install test versions by following the steps below:

1. Download the test version linked above.
2. If you don't have Wabbajack installed, download it [here](https://www.nexusmods.com/site/mods/403) and install it. Otherwise, open Wabbajack.
3. Click on the "Browse Lists" button on the left.
4. Click on "Install from Disk" at the top right.
5. Select the "Winds of the North.wabbajack" file that you downloaded in step 1.
6. After the UI pulls up the list, select an install location
7. Click the install button at the bottom right and wait for the list to install.


## Things to Look For

<div class="centerdiv">
  <hr class="thin-hr">
</div>

Beyond looking for general bugs and the like, there are a few things that I am specifically looking to test. 

- The new Granite hill location and it's quests
- The quest "The Cursed Tribe" has recieved a new quest expansion.
- A great deal of Simonrim has been updated, so mainly just keep an eye out for any oddities there.

## Changelog

<div class="centerdiv">
  <hr class="thin-hr">
</div>

![](../images/WindsofTheNorthLogo2k-4.0.0.png)

# 4.0.0 RC 7

### Key Info

## Patch Notes

<hr class="thin-hr">

### Misc

 - With this update, I would like to test the waters with Precision. August's new mod "Precision - Attack Collision Fixes" fixed some of the largest issues I had with it. I have been playing around, and I think with these fixes and some tweaked settings, it will be a really good addition to the list.
   - Combat has quite a bit more...oomph to it with Precision. Hits feel like they have a lot of punch behind them.
   - As expected, It may feel a bit different than vanilla in regards to when you think attacks should or should not have it you. Attempts have been made to make the reach feel similar to before, but collisions being tied to weapons now  means that individual animations do have an affect on things.
 - Chapter 2 had a massive update that adds tons of new palette tracks.
 - Included a default ini for FirstPersonFOV in the "Wotn - Custom MCM Settings and Scripts" mod
 - CS Grass Collision has been disabled by default. It is causing repeatable and consistant crashes in the intro (on my end and others). Looking at the CS code repo it seems it has been addressed, but that has not been released yet to nexus. I am choosing to disable this module. While it is cool its not worth the instability.
 - Removed Persistant Favorites due to instability
 
### Bug Fixes and Tweaks

 - Fix: Fixed rank 1 of Perfect Parry requiring level 70 (rank 1 should be level 40 and rank 2 should be level 70)

## Mod Changes

### Updated

 - SkyUI
 - MCM Helper
 - SkyPatcher
 - Auto Input Switch
 - Chapter II - Jeremy Soule Inspired Music
 - Spell Perk Item Distributor (SPID)
 - First Person FOV and Tween Menu Fix SKSE
 - Siege at Icemoth
 - Granite Hill - Cut Content Restoration


### Added

 - Precision
 - Precision Creatures
 - Nemesis Creatures BEHAVIOUR compatibility
 - Nemesis Creature Behaivour - WereWolf Addon
 - Precision - Attack Collision Fixes
 - WotN - Precision - Settings

### Removed

 - Persistent Favorites


# 4.0.0 RC 6

### Key Info

## Patch Notes

<hr class="thin-hr">

### Bug Fixes and Tweaks

 - Fix: Updating SkyUI fixed a display issue in the magic menu
 - Fix: Empowered Strike (Enchanting perk) should now function with the Dragonborn Respec
 - Fix: Mystic Bound Greatsword effect doesn't have the MAG_MagicSummonWeapon keyword
 - Fix: Blackreach map was appearing as covered with rocks, this has been fixed

## Mod Changes

### Updated

 - SkyUI
 - Chitin Armors and Weapons Retexture SE
 - Survival Mode Improved - SKSE
 - Why I Came to Skyrim
 - Iron Armors and Weapons Retexture SE
 - Andrealphus' Papyrus Functions
 - Myrwatch - Tweaks and Enhancements
 - First Person FOV and Tween Menu Fix SKSE
 - HorsePower - Modernized Horse Riding (Total Riding Overhaul)
 - Complete Widescreen Fix for Vanilla and SkyUI
 - Stuck Underwater Visuals and Sounds Fix SKSE

### Added

### Removed

 - Bonemold Armors and Weapons Retexture SE (No longer needed)
 - Falmer Armors and Weapons Retexture SE (No longer needed)

# 4.0.0 RC 5

### Key Info

 - This is save safe with other 4.0.0 pre-releases only

## Patch Notes

<hr class="thin-hr">

### Misc

 - I removed Simplicity of Sea - Water Color and Transparency Tweaks, because normal "Water Mod" matched LOD much much better. The tweaks did look nice, but matching LOD is much more important to me. Plus normal Water Mod still looks nice anyway (nicer than vanilla)

### Bug Fixes and Tweaks

 - Fix: Fixed bloated man's grotto being treated as being in Oblivion
 - Fix: Fixed an issue where healing your injury would actually kill you instead (oopsy)
 - Fix: Fixed debug notifications showing when hitting someone while having the armor breaker perk
 - Fix: Fixed injuries not being applied to the player when Survival Mode was off
 - Fix: Fixed second rank of the block perk "Defensive Stance" being at level 30 (it should have been level 70)
 - Fix: Fixed second rank of the two-handed perk "Perfect Parry" being at level 40 (it should have been level 70)
 - Fix: Fixed a bug where carriages to hearthfire homes no longer worked
 - Fix: Fixed debug notification on armor breaker perk
 - Fix: Corrected bound bow damage in bow speed normalize plugin
 - Tweaks: hid loadingmenu.swf and tweenmenu.swf in complete widescreen fix

## Mod Changes

### Updated

 - Imperial Thalmor Stormcloak Patrols Fixes - Soldiers and Prisoners World Encounters
 - Simplicity of Splatter - High-Res Blood Textures
 - Survival Mode Improved - SKSE
 - Siege at Icemoth
 - Granite Hill - Cut Content Restoration
 - Unofficial Skyrim Special Edition Patch - USSEP
 - Myrwatch - Tweaks and Enhancements
 - SkyUI

### Added

 - Item Stacking Tweaks
 - Widescreen Scale Removed for 1-6-1130 and higher

### Removed

 - Simplicity of Sea - Water Color and Transparency Tweaks
 - Wider MCM Menu for SkyUI
 - Quest Journal Fix for SkyUI (no longer needed)

# 4.0.0 RC 4

### Key Info

 - This is save safe with other 4.0.0 pre-releases only

## Patch Notes

<hr class="thin-hr">

### Misc

 - Addition: I have modifed Character Menu SE further to display your chosen trait from Apprentice.

### Bug Fixes and Tweaks

 - Fix: Fixed a bug where NPCs could go into a down state after closing the Character Menu
 - Fix: Fixed a bug where NPCs would stop their walking/running animation and restart it (instead of freezing in place) upon open/close of the Character Menu.

## Mod Changes

### Updated

 - Unofficial Skyrim Special Edition Patch - USSEP
 - CC Farming - Tweaks Enhancements and Quest Expansion

### Added

 - Persistent Favorites
 - Stuck Underwater Visuals and Sounds Fix SKSE

### Removed

 - Unstack Stolen Items (No source available)

# 4.0.0 RC 3

### Key Info

 - This is save safe with other 4.0.0 pre-releases only

## Patch Notes

<hr class="thin-hr">

### Misc
 - This should be the last major feature RC for 4.0.0. I plan for any RCs after this to be bugfix and/or rebalance updates.
 - Several redundant or no longer up to date things have been removed
 - SKSE Menu Framework has been removed. Im not really a fan of it functionally, and its a bit funky with the double tap LB on controllers. If you want to change the fov, First Person FOV is still in the list and its default fov values can be changed in the ini (still the only way to *actually* do it).
 - A really neat new mod has been added called "Character Menu SE" which allows you to see your character, class, your stats, faction ranks, and more in a new UI. I have gone through the effort of doing UI and DLL work to patch this for Hand to Hand and Apprentice.
 - In relation to the above, the Tween Menu overhaul has been added so that you may easily navigate to the character menu without a hotkey (which would otherwise feel kind of disembodied). I have modified the Tween Menu to show navigation items in a more similar fashion to vanilla ie. Magic on the left, inventory on the right. 
     - The journal entry has been moved to the bottom under the map. The top menu houses the skills and character menu
 - Why I came to Skyrim has been added as a neat RP flavor item. You do not have to, but if you choose to read the book near the quick start chest you may choose a starting quest to give you an initial goal in the world.

### Bug Fixes and Tweaks

 - Fix: Fixed errant log when selecting a class
 - Fix: Fixed conflicts with the Dual Wield Behavior fixes patch
 - Tweak: Horses now cost 2500 gold instead of 1000 (keep in mind they are much more useful with H to Horse and Horse Power than in vanilla)

## Mod Changes

### Updated

 - Granite Hill - Cut Content Restoration
 - Open Animation Replacer
 - First Person FOV and Tween Menu Fix SKSE
 - Sound Record Distributor
 - Floating Subtitles
 - Unstack Stolen Items

### Added

 - Tween Menu Overhaul
 - Character Menu SE
 - Why I came to Skyrim
 - Why I came to Skyrim - for Optional Quick Start - SE
 - Why I Came to Skyrim - Select Your Own Quest
 - Character Menu SE - Hand to Hand Patch

### Removed

 - Adamant - No Killmove Descriptions (no longer necessary with Adamant 6 Beta)
 - Hand to Hand - Jump Perks Addon (for now)
 - Starfrost Injuries (superceded by adamantium)
 - SKSE Menu Framework


# 4.0.0 RC 2

### Key Info

 - This is save safe with other 4.0.0 pre-releases only

## Patch Notes

<hr class="thin-hr">

### Misc

 - Actually updated to the most recent Simonrim betas. Whoopsie
 - Inverse Square Lighting and Extended Translucency have been disabled at boot

### Bug Fixes

 - Going forward, hostlers should no longer sell the wild horses location map

## Mod Changes

### Updated

 - Simonrim - Beta

### Added

 - First Person FOV and Tween Menu Fix SKSE
 - Alt-Tab Stuck Key Fix NG
 - SKSE Menu Framework

---

# 4.0.0 RC 1

### Key Info

 - This update is NOT save safe with previous versions. NOT save safe. Please keep a backup of your 3.0.3 saves, and if you accidently updated to 3.1.0, then you can fine the old 3.0.3 WJ file on the nexus.

## Patch Notes

<hr class="thin-hr">

### Misc
 - 4.0.0 so soon after 3.0.0 you might ask?! Yes, and I'm excited for it. Possibly more than any previous update I have done!
 - The list has now been merged back into a single profile instead of two separate ones. It was a fun experiment while it lasted, but I have come to the conclusion that most people were using the expanded profile anyway. The new default profile is a bit of a mix between the expanded and the former default profiles.
   - This comes with several advantages. Managing two profiles was extremely cumbersome. Going back to a single profile allows me to more efficiently make updates.
 - The Beta for the new Simonrim mod "Apprentice - A Class Overhaul" has been added to the list. 
   - This mod adds a class and trait system to the game in the character creator (similar to previous elder scrolls games). 
   - Your major and minor skills are now dictated by your class selection rather than just the race that you choose, and traits can be chosen for additional effect. 
 - The latest betas for the Simonrim suite have been added. There are a ton of bug fixes, and balance changes made to Mysticism, Adamant, and Hand to Hand.
 - You might notice that there is now a grey bar on the TrueHUD widget for enemies. This symbolizes the stagger cooldown for Blade and Blunt.
   - If you did not read the Blade and Blunt page, some of you may not have even been aware that there was a stagger cooldown for enemies, which is why the bar has been added.
   - The player also has a stagger bar above the health bar.
 - As of 4.0.0 we have almost returned to the same visual suite that we enjoyed in Winds of the North 1.0.0!
    - Vanilla weathers are back (plus true storms)
    - The original Cathedral Landscapes grass cut that Winds of the North 1.0.0 used has been lost to time, but I have remade a new cut in the same spirit.
 - The TrueHUD bars have been returned to their original vanilla positions
 - I have also continued to thin the list down a little bit. 
   - Some mods that were very simple record tweaks/fixes were merged into WotN - Tweaks to keep plugin bloat down (for my own sanity's sake)
 - Regarding changes to new content, Wyrmstooth has been removed. However, I elected to add "Granite Hill - Cut Content Restoration"
 - Immersive Equipment Displays has been removed. This was done mostly for stylistic choice reasons, as Simple Dual Sheath does most of what I would want anyway. I find the player model being loaded down with every single piece of favorited gear to be a bit too much.
   - Frustration with default profiles not loading on user's machines also played a small role in this decision.
 - I have modified the weapon styles draw animations mod to no longer require IED (we always used default sheath positions so we really didn't need that part of it). This way, we can keep Simple Dual Sheath and the fancy animations for it.
 - Some new optionals have been added. Barlow Condensed font, and Floating Subtitles. These are disabled by default and are there for people to play with should they want.
   - Barlow Condensed also has integrated compatibility with Floating Subtitles (ie. the floating subtitles will be the new font)
   - I have also included a new patch I made for Floating Subtitles and the other existing optional font, "Sovngarde"
   - When you enable Floating Subtitles, it will activate an esp in your load order. It does not matter where it goes.
 - "Horse Whistle Key" and it's companion mod, "Follower's Ride Horses" have been swapped back out for Press H to Horse.
   - I must also mention I have modified Press H to Horse with some scripting adjustments and bug fixes. 
   - Wild Horses is technically in the list because Press H to Horse requires some of its scripts. However, the wild horses will not spawn in the world and their quests should never start.
 - On the topic of horses, horses now have much nicer riding animations and they run a bit faster as well.

### Bug Fixes

 - Fix: Fixed a possible but rare crash with SMI when searching for a bed nearby
 - Fix: The Necromancer's Journal from Plague of the dead is no longer marked as a quest object
 - Fix: Random zombie attacks from plague of the dead should no longer happen (they were supposed to be disable)
 - Fix: Fixed a json parse error from sorcerer's crafting categories json
 - Fix: The CC quest "Unholy Vigil" should not have been startable. This should now actually be true (may not be save retroactive)
 - Fix: Fixed incorrect values on region weather chances
 - Fix: The heavy armor sprint stamina effect should no longer show in the effects UI
 - Fix: Fixed Xavbio's horse armor retexture not working
 - Fix: Shield Wall should now properly be a level 40 perk
 - Fix: Many staves for Saints and Seducers were not properly patched for Sorcerer numbers. This has been amended.
 - Fix: Fixed a bug in Scion where the 25% sneak attack bonus for the Dark Elf racial was not working
 - Fix: "Hot Boar Stew" now properly requires boar meat instead of horker meat
 - Fix: Your first person camera height should now be correct in relation to your 3rd person model height (I released a new mod to fix this)
 - Fix: Press H to Horse: Fixed a potential source of stack dumps
 - Fix: Press H to Horse: You should now be able to swap inventory tabs properly with a controller when in a Horse's inventory

## Mod Changes

### Updated

 - Perk Entry Point Extender
 - powerofthree's Papyrus Extender
 - Siege at Icemoth
 - Actor Value Generator
 - Mysticism - A Magic Overhaul (Beta)
 - Adamant - A Perk Overhaul (Beta)
 - Blade and Blunt - A Combat Overhaul (Beta)
 - Starfrost - A Survival Overhaul (Beta)
 - Thaumaturgy (Beta)
 - Unique Armors and Weapons Retexture SE
 - Regenerated Nemesis Patch
 - Survival Mode Improved - SKSE
 - Skypatcher
 - Stagger Effect Fix
 - Dragon Armors and Weapons Retexture SE
 - Nordic Snow
 - CC Tundra Homestead - Tweaks and Enhancements
 - CC Myrwatch - Tweaks and Enhancements
 - Community Shaders
 - Subsurface Scattering - Community Shaders
 - Skylighting - Community Shaders
 - Grass Collision - Community Shaders
 - Upscaling - Community Shaders
 - Caught Red Handed - Quest Expansion
 - Orcish Armors and Weapons Retexture SE
 - Daedric Armors and Weapons Retexture SE
 - Survival Mode Improved - SKSE
 - Comprehensive Attack Rate Patch - SKSE
 - More Ferries - Fast Travel Improvement
 - Photo Mode
 - Crash Logger SSE AE VR - PDB support
 - Contextual Crosshair


### Added

 - Security Overhaul SKSE - Add-ons
 - Proving Honor Companions Quest Progression Fix
 - Assorted Behavior Fixes
 - Apprentice - A Class Overhaul Beta
 - Savos Aren's Regrets Restored - Cut Content Restoration
 - Improved Companions - Questline Tweaks
 - Imperial Thalmor Stormcloak Patrols Fixes - Soldiers and Prisoners World Encounters
 - Thieves Guild Holdup Improvements
 - Rebalanced Ebony Draugr Weaponry
 - Stuck in Saarthal - Use Any Spell to Escape
 - Ill Met Bolar's Oathblade
 - Enhanced Reanimation
 - Skyforge Steel - Art and Honor
 - Faction Armors and Weapons Retexture SE
 - First Person Height Fix SKSE
 - Simplicity of Splatter - High-Res Blood Textures
 - Avanchnzel Dwemer Piston Sound Hotfix
 - FYX - Alpha Blood Blending Bug - NG
 - Animation Motion Revolution
 - HorsePower - Modernized Horse Riding (Total Riding Overhaul)
 - Simplicity of Sea - Water Color and Transparency Tweaks
 - Vanilla Jarl Longhouse Mesh Fix
 - Favorite Misc Items
 - Smoothcam
 - Bethesda Plugin Manager
 - Favorite Misc Items
 - Unstack Stolen Items
 - Barlow Condensed - Font Replacer
 - UIExtensions
 - Cathedral Grass
 - Less saturated Cathedral grass for ENB complex grass
 - Cathedral Landscapes - Swamp Grass Alternatives
 - Granite Hill - Cut Content Restoration
 - The Cursed Tribe - Quest Expansion
 - Universal Arrow Spin - SKSE plugin
 - All Thieves Guild Jobs Concurrently
 - Less Tedious Thieves Guild
 - Barlow Condensed (optional)
 - Floating Subtitles (optional)
 - First Person Camera Height Fix - SKSE

### Removed

 - Aetherius - A Race Overhaul (Replaced with Apprentice - A Class Overhaul)
 - Aetherius - Race Menu Racial Passive Descriptions
 - Truly Neutral Prisoners
 - Thalmor don't report to Stormcloaks
 - Racemenu (this was necessary for Apprentice. Please do not ask me if I think you can re-add it. No)
 - Infinite Dragon Variants
 - Simonrim StarterChest (Replaced by Apprentice - Quick Start patch)
 - Dawnguard Armors and Weapons Retexture SE
 - Vampires Armors and Weapons Retexture SE
 - Thieves Guild Armors Retexture SE
 - Nightingale Armors and Weapons Retexture SE
 - Dark Brotherhood Armors Retexture SE
 - Forsworn Armors and Weapons Retexture SE
 - Wolf Armors and Weapons Retexture SE
 - Water Effects (merged into main CS)
 - Terrain Shadows (merged into main CS)
 - Wyrmstooth
 - Wyrmstooth Uses the Cause Style Oblivion Gate
 - Wyrmstooth - The Cause Patch
 - Wyrmstooth - Rare Curios Patch
 - Wyrmstooth Mysticism Consistency Patch
 - Dragon War - Wyrmstooth patch
 - Sensible Quest Prerequisites - Wyrmstooth
 - Dragon Priest Hood Variants - Wyrmstooth
 - Armory of the Dragon Cult - Wyrmstooth
 - Stonehollow Overhaul for Wyrmstooth
 - Stendarr's Chosen - Wyrmstooth
 - Unique Red Wave
 - East Empire Company Armor
 - Draugr Enemy Asset Diversity Bugfix
 - DEAD - Draugr Enemy Asset Diversity
 - Rebalanced Ebony Draugr Weaponry - DEAD Patch
 - Unique Towns - Base Object Swapper
 - Dremora Use Daedric
 - Vanilla CS
 - Swords of the Southfringe - Spell Knight Expansion and Distribution (for now)
 - Swords of Southfringe - Adamant Patch
 - Spell Knight Armors Retexture SE
 - Swords of the Sanctum - Artificer
 - Stendarr's Chosen - Stendarr's Hammer Reintegration
 - Bandit Lines Expansion - Werebeasts dont talk (rolled into WotN - Tweaks)
 - Only Once (rolled into WotN - Tweaks)
 - Taarie's Dialogue Fix (rolled into WotN - Tweaks)
 - Mistwatch Ending - More Options (rolled into WotN - Tweaks)
 - Vampire Allies Factions Fix (rolled into WotN - Tweaks)
 - Ranged Block Recoil Fix (Not needed with Misc Bugfix Compilation)
 - See Through Portals and Oblivion Gates
 - Horse Whistle Key
 - Followers Ride Horses
 - Immersive Equipment Displays
 - Missile's IED Preset