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

[Winds of the North - 3.0.0 Alpha 1](https://github.com/colinswrath/WindsOfTheNorth/releases/download/3.0.0a1/Winds.of.the.North.wabbajack)

[Winds of the North - 3.0.0 Alpha 2](https://github.com/colinswrath/WindsOfTheNorth/releases/download/3.0.0a2/Winds.of.the.North.wabbajack)

[Winds of the North - 3.0.0 R.C. 1](https://github.com/colinswrath/WindsOfTheNorth/releases/download/3.0.0rc1/WindsoftheNorth.wabbajack)


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

- Wedding locations with destination weddings
- The Civil Questline. Specifically the fort takover quests.
- Most miscellaneous quests should count as favors for being thane.
- The deadlands from the Cause creation. This list uses the Cause - Reduced Cut, so the gate is now in the Mehrunes Dagon shrine, and may be opened there if you can figure out how.

## Changelog

<div class="centerdiv">
  <hr class="thin-hr">
</div>

![](../images/WindsofTheNorthLogo2k-3.0.0.png)

# 3.0.0 RC 1

<div class="centerdiv">
  <hr class="thin-hr">
</div>

### Key Info

 - This update is NOT Save-Safe with previous alphas:
 - I did want to keep this version save compatible with the previous alpha version, but I was unable to do so for a few reasons. I do not want to make any compromises on the full 3.0.0 release.
   - I removed Staff of Hasedoki Creation. To be honest, I thought I had already done this.
   - The esl cell edit bug was fixed properly by Engine Fixes. Support for Myrwatch TnE has transitioned to using that fix instead of the workaround mod that it used to depend on. This is a safe unsafe change, but best in the long run.
   - Please do keep in mind these test versions were meant for this kind of thing. They were not intended for long term play as the disclaimer says on this page. While I have put some effort into attempting to make these test versions save safe when I can, I will not put off important updates to make an alpha or RC save safe (I only do this for full releases).

 - Given that the update was save unsafe now anyway, I took the opportunity to make a few adjustments. 
   - In earlier alphas of WotN 3.0.0, Wyrmstooth and some other content mods were removed because I wanted the list to focus on providing a more cohesive and polished experience rather than provide lots of extra content. As development on 3.0.0 has gone on, and I have inched closer and closer to that goal, I found it counterintuitive that Siege at Icemoth and the dungeon mods remained in the list. As much as I like them, they have been removed.


## Upscaling

   - A very large and welcome change has been the addition of the latest version of Community Shaders, which now has upscaling and frame generation. 
     - After some rigerous testing on multiple different systems on my part, I have landed on the default settings of DLSS/FSR quality and frame gen OFF.  
  - If you would like to configure these settings you can press the "End" key. The CS menu should show up, and then you can navigate to the "Upscaling" option on the sidebar to change settings.
    - DLAA/FSR-AA is more taxing than using DLSS/FSR quality or TAA. However, it tends to look quite a bit better, especially FSR-AA vs FSR quality.
    - For some people, TAA may perform much better than even DLSS. I believe this can happen when you are CPU bound instead of GPU bound.
    - Feel free to enable Frame Gen if you need to. In my experience it has worked decently well. There is a little input lag. You may also get some slight ghosting in some situations, like looking at running water. However, if you need the performance then I think its very much worth it.
    - Everyone's system is different. Play around with the settings if you want and choose what works best for you.
  - Unfortunately, it doesn't look like I can specify a default sharpness value in the CS settings for the list. I use a sharpness value of 0.0 with DLSS. FSR defaults to a sharpness of 1.0 (on a scale of 0 to 1.0) and I think that is way to much. I find I get best results with a sharpness value of either 0 or 0.1 with FSR-AA, and maybe 0.3 with FSR quality.
  

## Patch Notes

<div class="centerdiv">
  <hr class="thin-hr">
</div>

### Bug Fixes

 - Fixed a problem where many lights were extra bright and bloomy
 - Fixed an issue where the dragonclaws were still showing up on player's body when in inventory
 - In my quest to address issues with extremely over-leveled dragons, I have adjusted the most common dragon encounter to spawn at (hopefully) lower levels. Ideally, you should now encounter standard dragons that are at most about 10 levels higher than you, rather than running into level 75 dragons when you’re around level 40. I am still working to pinpoint exactly why this was happening, but I’m hoping this change will do the trick.

 - I have overhauled the armor equipping system from Horse Whistle key to use misc items instead of armor items, like how Press H to Horse works. When you place them in your horse's inventory they should equip the corresponding armor. This will fix a couple of problems that were present in the normal armor system from Horse Whistle Key like being able to equip horses armor on yourself.
 - You now need the Basic Smithing perk to create Steel Horse armor
 - You now need the Rare Smithing perk to create Elven Horse Armor

## Changes (from previous 3.0.0 alpha version)

### Updated

 - Description Framework
 - powerofthree's Tweaks7
 - Skyrim Misc Bugfix Compilation
 - SSE Engine Fixes (skse64 plugin)
 - Elven Armors and Weapons Retexture SE
 - Mysticism (from simonrim discord)
 - Adamant (from simonrim discord)
 - Blade and Blunt (from simonrim discord)
 - Hand to Hand (from simonrim discord)
 - Photo Mode
 - Thalmor Don't Report To Stormcloaks
 - Magic Fixes and Tweaks SKSE
 - Masterwork
 - Skyrim Misc Bugfix Compilation
 - Community Shaders
 - Wetness Effects - Community Shaders
 - Subsurface Scattering - Community Shaders
 - Screen Space Shadows - Community Shaders
 - Screen Space Global Illumination (SSGI) - Community Shaders
 - Grass Collision - Community Shaders
 - Skylighting - Community Shaders
 - Terrain Variation - Community Shaders
 - Spell Knight Armors Retexture SE
 - Unique Armors and Weapons Retexture SE
 - Simplicity of Sea (Formerly known as Water Mod)
 - Steel Armors and Weapons Retexture SE
 - Mysterium Xarxes

### Added

 - Scion - Custom I4 Icons
 - Upscaling - Community Shaders

### Removed

 - Chapter 2 - Jeremey Soule Inspired Music
 - The Northern Diaries
 - Winds of the North - Music Merge
 - Staff of Hasedoki CC (I honestly thought I had already removed it in earlier 3.0.0 alphas)
 - Myrwatch - Editable Home Cells (Cell Bug Workaround) 
 - Light Limit Fix (now integrated into the main CS mod)
 - Magic Fixes and Tweaks SKSE
 - Siege at Icemoth
 - Morthal Barrow
 - Morthal Barrow - SImonrim Patch
 - Mementos - Morthal Barrow
 - Taarengrav Barrow
 - Mementos - Taarengrav Barrow
 - Extended Encounters
 - Extended Encounters - Settings Loader
 - Extended Encounters and Pilgrim - Vigilants Hunt True Daedra Worshippers

# 3.0.0 Alpha 2

<div class="centerdiv">
  <hr class="thin-hr">
</div>

 - This update is not save safe from 3.0.0 Alpha 1. This is because I had to regenerate LOD. 

## Patch Notes

<div class="centerdiv">
  <hr class="thin-hr">
</div>

 - Skylighting CS module has been disabled by default, but still included in the list as an optional enable
 - SSGI (AO only) remains on for its improved AO. 
 - Fixed some errors with Misc Bugfix Compilation and USSEP
 - Fixed an issue where the Dremora bosses in the Deadlands did not have any weapons

## Changes (from previous 3.0.0 alpha version)

### Updated

 - QuickLoot IE Vanilla Skin - Updated for QLIE 3.3.0 and above
 - Community Shaders
 - Light Limit Fix
 - Inverse Square Lighting
 - Vittorias Alternate Wedding
 - Light Placer
 - Unofficial Skyrim Special Edition Patch
 - Andrealphus' Papyrus Functions
 - Bring Meeko To Lod
 - The Gildergreen Grows
 - Imperial Armors and Weapons Retexture SE
 - Load Screen Shading Fix
 - Mundus - A Standing Stone Overhaul
 - Blade and Blunt - A Combat Overhaul
 - Skyrim Misc Bugfix compilation


### Added

 - Terrain Variation
 - Sky Sync
 - Cloud Shadows
 - Fancy Fishing
 - Vanilla Style UI for Fancy Fishing
 - Load Screen Shading Fix: Optional Purple Argonian Barkeep
 - See Through Portals and Oblivion Gates
 - Terrain Blending

# 3.0.0 Alpha 1

<div class="centerdiv">
  <hr class="thin-hr">
</div>

 - This update is Save-Safe
 - Not save safe if upgrading from pre 2.0.0 versions
 - You can ignore prompts about missing plugins (several patches have been renamed. This is okay)

3.0.0 is Winds of the North's second major update!

## Patch Notes

<div class="centerdiv">
  <hr class="thin-hr">
</div>

### Overview

 - 3.0.0 marks the most significant change in direction for Winds of the North yet. Instead of focusing on adding more content or trying to integrate all of the CC, I have decided to concentrate on improving the base game and making everything feel more consistent. The result is a leaner and more focused modlist.
 
 This update also pushes the visuals a bit closer to the vanilla art style, which has always been important to me. 
 I'll discuss some of the highlights below. Be sure to check out the full changelog as well if you are curious about the finer details.

#### Visual Changes

  - Happy Little Trees has been replaced with a combination of Enhanced Vanilla Trees and Tree Branches 2k
  - Classic Weathers has been removed, and has been replaced with the Vanilla/Custom True storms cut that Winds of the North 1.0.0 used.
  - Community Shader's Skylighting has been added
  - SSGI with just AO (Indirect Lighting has been disabled by default) has been added

#### Quest and Location Changes

  - Wyrmstooth has been removed
  - There has been many small scale quest and immersion tweak mods added, from things like "Neutral Civil War forts", to adding a steward in Dawnstar (yes, Dawnstar did not have a steward)
  - "Favor Quests Separated" and "Miscellaneous Quests are Favors" have been added, and should hopefully make Skyrim's many favor quests a little less painful.
  - Scroll Enchanters have been added to major cities (Thanks again August)

#### CC Integration Changes

  - With 3.0.0, Creation Club integration has had another re-evaluation pass. This was done in the interest of continuing to provide a polished and consistent experience, and not a decision I take lightly. Most of the disabled creations are artifacts from previous games that did not make sense in Skyrim. Others were just creations that I am personally not a fan of.

#### Misc List Tweaks

 - Increased the chances of seeing crossbows on bandits
 - Updated Mo2 to version 2.5.2
 - Switched Mo2 Theme to vs15 Dark
 - Extended Encounters: Public Execution and Thief stealing clothes events have been removed
 - Optimized LOD generation for better performance and size
 - Leather Scout armor is now distributed alongside the other AA armors
 - All bow draw speeds have now been normalized (yes most bows all had different draw speeds in vanilla)
 - You can now block/bash with a staff (Staff Blocking and Bashing by Asrak)
 - TrueHUD's floating bars have been re-enabled by default (they are very useful). The optional file to disable them still remains.

### Bug Fixes

 - Carriages to Hearthfire houses from another Hearthfire House carriage no longer cost gold
 - Fixed an issue where Simply Skin was overwriting textures from CoverKhajiits and F.A.R.
 - Fixed an issue with SMI that caused it to disable fast travel even when Survival Mode was disabled.
 - Fixed an issue with Orcish Scaled Gauntlets by adding Xavbio's cubemap addon
 - Fix Saarthal miners mining in the air
 - The "Warmth" and "Hearthfire" spell tomes now use the correct alteration inventory icon
 - staffExperienceIgnoreEnchantmentCost in scrambled bugs was accidently left set to false.
 - Line and Lure black box is no longer present

## Changes

<div class="centerdiv">
  <hr class="thin-hr">
</div>

### Updated

 - Siege at Icemoth
 - More Carriages - Fast Travel Improvement
 - CC Farming - Tweaks Enhancements and Quest Expansion
 - Light Placer
 - CS Light
 - Unofficial Skyrim Special Edition Patch - USSEP
 - Morthal Where's Wares
 - Journeyman - A Fast Travel Overhaul
 - Weapon Styles - Draw-Sheathe animations for IED
 - Dark Brotherhood Armors Retexture SE
 - powerofthree's Papyrus Extender
 - Leather Armors Retexture SE
 - Glass Armors and Weapons Retexture SE
 - Community Shaders
 - Water Effects
 - Wetness Effects
 - Subsurface Scattering
 - Grass Collision
 - Light Limit Fix
 - Dragon Armors and Weapons Retexture SE
 - Wolf Armors and Weapons Retexture SE
 - Iron Armors and Weapons Retexture SE
 - Guards and Stormcloaks Armors Retexture SE
 - Ancient Nord Armors and Weapons Retexture SE
 - Forsworn Armors and Weapons Retexture SE
 - Contextual Crosshair
 - Extended Encounters
 - Extended Bandit Dialogue
 - Old Orc Follower
 - No Volkihar Outfits on Regular Vampires
 - CC Farming - Tweaks Enhancements and Quest Expansion
 - Unarmed Behaviors Expanded
 - Photo Mode
 - Vampire Allies Factions Fix
 - Missile's IED Preset
 - Andrealphus' Papyrus Functions
 - Enemies Respect Encounter Zones
 - Vittorias Alternate Wedding
 - DynDOLOD Resources SE 3
 - DynDOLOD 3.0
 - Whiterun Objects SMIMed (and fixes too)
 - Unique Armor and Weapons Retexture
 - Myrwatch - TnE
 - Dragon Hunting
 - Acoustic Space Improvement Fixes
 - powerofthree's Papyrus Extender
 - CoMAP - Common Marker Addon Project
 - Enhanced Worldspace Maps
 - Dragon War
 - Housecarls Pre-Thaneship
 - ImGui Icons
 - Base Object Swapper
 - DFNF - Default Face NPCs Fixed
 - Whiterun Watchtower Doesn't Start Broken
 
## Added Mods

- 3D Junipers - Trees and Berries
- 3rd Person Dual Wield Animation Fix SSE
- A Steward for Dawnstar
- A Steward for Dawnstar - Exiled Jarls Patch
- Actor Value Generator
- Apothecary Universal Ingredient SkyPatcher
- Barstool Exit Animation Fix
- Call Summon Standalone
- CAM - Companions at Mirmulnir
- Capitals and Towns of Skyrim Improved Pathfinding
- Cave Rocks Improved
- CC Farming - TnE - CC Fishing Patch
- CC Tundra Homestead - Tweaks and Enhancements
- Civil War intro scenes run only once
- Combat Music Extender
- Common Clothing Retexture SE
- Considerate Followers - Followers are Silent During Dialogue
- Consistent Vanilla Hair
- Crusader - Faster
- Dawnstar - Hawking Horker - Patch Collection
- Death Idle Fix
- Disconnecting the Transmundane
- Dismiss Steward
- Dremora Use Daedric - Daedric Mail
- Dremora Use Daedric - Daedric Plate
- Dremora Use Daedric - Dremora Leveled List Overhaul
- Dremora Use Daedric - Mysticism
- Dual Wield Behavior Fixes
- DWBF for perk mods
- Elite Sellsword - Quest Requirements Addon
- Elite Sellsword - Redguard Elite Armaments Rebalance and Reintegration
- EMPEROR - Giant Crab Overhaul
- Enhanced Vanilla Landscapes
- Enhanced Vanilla Trees SE
- Enhanced Worldspace Maps
- Environs - The Western Watchtower
- Exiled Jarls Don't Require Favors
- Explosion Collision Fix
- Faster Reanimation - SSE
- Favor Quests Separated
- Favor Quests Seperated - Radiant Requirements Patch
- Favor Quests Seperated - USSEP Patch
- Favorites Menu Effects Description
- Followers Ride Horses
- FYX - Alpha Blood Blending Bug - NG
- Hammering Animation and Sound Fixes
- Horse Behaviour Improvements
- Horse Whistle Key
- Horse Whistle Key - CC Horse Armors
- Horsemen Torch Wield Fix and Mount Tweaks SE
- HPT - Simple Winterhold Housecarl
- Improved Cursors
- Inertia (Floating Gear Fix)
- Inverse Square Lighting
- invisible rune explosion fix
- Land of Razors - The Deadlands Redone
- Loading Menu Overhaul
- Magic Fixes and Tweaks SKSE
- Masterwork - An Anniversary Edition Artifact Overhaul
- Miscellaneous Quests are Favors
- Mistwatch Trapdoor Fix
- Mysterium Xarxes - A SimonRim Addon for The Cause
- Mysterium Xarxes - Sorcerer
- Neutral Civil War Forts
- NVIDIA Reflex Support
- Old Orc Follower
- QuickLoot IE Vanilla Skin - Updated for QLIE 3.3.0 and above
- Relighting Skyrim SE
- Remastered Dwarven Texture Tweaks
- Remove Orphaned Hazards
- Save the Icerunner - Lights Out Alternate Routes
- Screen Space Global Illumination (SSGI)
- Scroll Enchanters - USSEP Patch
- Serious Civil War Fort Commanders
- Serious Civil War Fort Personnel
- Simple Immersive Civil War Soldiers
- Simple Winterhold Housecarl
- Skylighting
- SkyPatcher
- Skyrim Civil War Healers
- Skyrim Civil War Healers Tweaks
- Skyrim Misc Bugfix Compilation
- Skyrim Remastered - Caves Patch
- Skyrim Skill Uncapper for SE and AE
- Smarter Conjuration Minions
- Sorcerer - Scroll Enchanters in Major Cities
- Sound Fix for Large Sector Drives
- Staff Blocking and Bashing
- Stendarr's Chosen - Stendarr's Hammer Reintegration
- Survival Mode - Carry Weight Penalty for Followers (SPID)
- The Gildergreen Grows
- The Stumbling Sabrecat
- THTE - CC Fishing Patch
- Tree Branches 2K
- True Storms - Cut
- True Storms SE - No Fog
- True Storms Special Edition - Thunder Rain and Weather Redone
- Valkyn's Armory
- Valkyn's Armory - ADF and The Cause Reduced Cut
- Vanilla Remastered - Assorted Mesh Fixes
- Vanilla Remastered - USSEP Patch
- Whiterun Watchtower Doesn't Start Broken
- Winterhold - Bubbling Brew - Patch Collection

## Removed Mods

- Ancient Nord Stalhrim
- ANS-Refrozen
- Apothecary - Fishing Patch
- Apothecary - Wyrmstooth Patch
- Artificer - Ghosts Reduced Cut
- AWD - Alduins Wall - Descriptions
- Azura's Star Dungeon Retexture
- BardExpansion
- Bards College Expansion - Unofficial Patches
- Bellyaches Animal and Creature Pack
- Betty Netch
- Bow of Shadows - Reduced Cut
- C.O.I.N. - Adamant and Hand to Hand Patches
- C.O.I.N. - Treasury Exchange
- Cannibal Draugr on Solstheim (Bloodmoon Creature Restoration Project)
- Cathedral Weathers Particle Effects Addon
- Caught Red Handed - Quest Expansion
- Caught Red Handed - USSEP Patch
- CC Alternative Armors - Quest Removal Enchanted Variants and Proper Distribution for Thaumaturgy
- CC Dawnfang and Duskfang - No Forced Quest
- CC Staves - Mysticism Consistency Patch
- CC Staves - Mysticism Consistency Patch - Vendor Inventory Adjusted
- City Bag Checks
- Classic Weathers Redone
- Classic Weathers Redone - Bloom and sound tweaks
- COIN - Coins of Interesting Natures
- COIN-Exclusions
- Complete Gibberish
- Container Distribution Framework
- Currency Swapper
- Custom Window
- DEAD - Draugr Enemy Asset Diversity
- Destroy The Dark Brotherhood - Quest Expansion
- DFNF - Wyrmstooth
- Discord Rich Presence
- Divine Crusader Retexture SE
- Dynamic Cubemaps - Metals
- East Empire Company Armor
- Elven Supremacy - Currency Swapper for Thalmor
- ENB Light Inventory Fix (ELIF)
- Enhanced Map - Blackreach
- Enhanced Map - Skyrim
- Enhanced Map - Solstheim
- Enhanced Map - Soul Cairn
- Enhanced Map - Wyrmstooth
- Face Discoloration Fix
- Fancy Fishing
- Fishing and Survival patch (ESL Flagged)
- FNISBGABFTESVSSE
- Ghosts of the Tribunal - Reduced Cut
- Ghosts of the Tribunal Retexture SE
- Gladys the Corgi
- Gourmet - Forgotten Seasons
- Gourmet - Ghost of the Tribunal Reduced Cut
- Gourmet - Wyrmstooth Patch
- Happy Little Trees
- Happy Little Trees - Less Vibrant Pine Wood
- Happy Little Trees - Vanilla Style Snow
- Happy Little Trees Add-On - DynDOLOD 3
- Hawking Horker - Capitals and Towns Patch
- Hawking Horker - Farmhouse Chimneys Patch
- HD Reworked Bears 4K
- HD Reworked Dogs
- HD Reworked Horses
- HD Reworked Mammoths 4K
- HD Reworked Trolls
- HD Reworked Wolves
- HD Vanilla Landscapes
- Hendraheim - TnE - CC Fishing Patch
- Hendraheim - TnE - Homes Under the Hammer Patch
- Hendraheim - Tweaks and Enhancements
- HLT Patch
- Homes Under the Warhammer
- Horse Stamina HUD - Script-Free
- House of Horrors - Quest Expansion
- Iconic's Alduin's Wall Retexture (16K-8K-4K)
- Iconic's Ash Guardian Retexture
- Iconic's Blackreach Crystals Retexture
- Iconic's Dragon Retexture
- Iconic's Frost - Flame - Storm Atronach Retexture
- Iconic's Jurgen Windcaller Tomb And Horn Retexture
- Iconic's Spiders of Skyrim
- Iconic's Vampire Lord Retexture
- Iconic's Werewolf and Werebear Retexture
- Immersive Khajiit Caravan Mules
- Infiltration - Quest Expansion
- Just Blood - Dirt and Blood Lite
- Knight of the North
- Leather Armor Pants Addon Male Neck Gap Fix
- Mainland Staff Enchanters
- Male Horns for Female Iron Helmet
- Mementos - Destroy the Dark Brotherhood QE
- Merlin the Corgi
- Modlist Update Checker
- Morihaus' Refuge - Lord's Mail Reintegration
- Morrowind Mint
- Morrowind Threads
- Morthal Where's Wares
- MorthalWheresWares-CATOS
- MorthalWheresWares-FC
- Nemesis Creature Behaivour - WereWolf Addon
- Nemesis Creatures BEHAVIOUR compatibility
- Nilheim - Misc Quest Expansion
- No Consequences Patch
- NPCs React To Frenzy
- NPCs React To Invisibility
- NPCs React To Invisibility - Apothecary Patch
- NPCs React To Invisibility - Bow of Shadows Invisibility Patch
- NPCs React To Necromancy (And More)
- NPCs Take Cover - Smarter Anti-Cheese AI
- Pirate's Life for Me
- Practical Female Armors
- Practical Female Ebony Plate Armor
- Practical Female Elven Hunter Armor
- Practical Female Hide Armors
- Practical Female Iron Armor
- Practical Female Iron Plate Armor
- Practical Female Steel Soldier Armor
- Practical Female Vigil Enforcer Armor
- Precision Creatures
- Press H to Horse
- Redguard Elite Reintegration
- Relics of the Crusader Improved
- Relics Of The Crusader Improved - KotN
- Rise Of Wyrmstooth
- RUGNAROK - Special Edition
- RUSTIC CLOTHING - Special Edition
- Schoolsacks of Simonrim - A CC Backpack Overhaul
- Simonrim - Staff Enchanting Plus
- Skyrim Reworked - Hotfix
- Skyrim Reworked - Update 0.93
- Skyrim Silver - Currency Swapper for Windhelm
- Skyrim Skill Uncapper(fixed)
- Slampire's Creation Cave
- Sorcerer - Oreo CC Staves Patch
- Staff Enchanting Plus
- Steel B Ain't Imperial - Thaumaturgy Patch
- Stonehollow Overhaul for Wyrmstooth
- Sunder and Wraithguard - Arniel's Endeavor
- The Gift Of Saturalia
- The Heart of Dibella - Quest Expansion
- The Innocence Lost - Quest Expansion
- The Only Cure - Quest Expansion
- The Whispering Door - Quest Expansion
- Tundra Homestead Exterior Cleanup
- UIExtensions
- Vanilla Makeup HD - HD Racial Colors and Makeup for all Races and Genders - SE
- Vanilla Style UI for Fancy Fishing
- Vanilla Warpaints Absolution
- Warmage of Shornhelm - Redone Spell Knight Armor for Thamauturgy
- Wotn - Heightmaps
- Wyrmstooth
- Wyrmstooth - Mysticism Consistency Patch
- Wyrmstooth Uses The Cause Style Oblivion Gate