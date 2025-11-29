---
layout: page
title: Changelog
permalink: /changelog/
background_image: true
title_background_image: false
disable_title_header: true
background_image_url: public/stars.png
---

<style>
h2,h3,h4,h5 {
  text-align: left;
}

</style>

![](images/WindsofTheNorthLogo2k.png)

- [3.0.1](#301) November 28 2025
- [3.0.0](#300) November 22 2025
  - [3.0.0 Release Candidate 4](#300-rc-4)
  - [3.0.0 Release Candidate 3](#300-rc-3)
  - [3.0.0 Release Candidate 2](#300-rc-2)
  - [3.0.0 Release Candidate 1](#300-rc-1)
  - [3.0.0 alpha 2](#300-alpha-2)
  - [3.0.0 alpha 1](#300-alpha-1)
- [2.0.9](#209) February 14 2025
- [2.0.8](#208) January 17 2025
- [2.0.7](#207) December 20 2024
- [2.0.6](#206) December 9 2024
- [2.0.5](#205) December 6 2024
- [2.0.4](#204) December 6 2024
- [2.0.3](#203) November 25 2024
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

---

# 3.0.1

### Key Info
 - This update is save safe with 3.0.0+

## Patch Notes

<hr class="thin-hr">

### Misc

 - Character lighting has been disabled

### Bug Fixes

 - Fix: Fixed an issue where Stormcloak weapons were visible during the intro scene
 - Fix: Fixed an issue where sneak attack killmoves could still happen (one of the moves in the disable killmoves mod weren't conditioned off correctly)
 - Fix: I THINK I fixed the issue with the IED profile not sticking upon creating a new game. 
     - This was hard for me to diagnose on my end in the first place, which makes it hard to test as well. 
     - I think this would only work for new saves. For existing saves, I think you will still need to import the default profile to get it to stick (press backspace -> import -> default -> ok)
 - Fix: Added a patch for Misc Bugfix Compilation and Thaumaturgy so that new Thaumaturgy Stalhrim Gauntlets and Bracers share the mesh changes from Misc Bugfix Compilation

## Mod Changes

### Updated

 - Perk Entry Point Extender
 - Use or Take SKSE
 - Death Idle Fix
 - Skyrim Misc Bugfix Compilation
 - Simple Immersive Civil War Soldiers
 - Regional Sounds Expansion (SRD - Wilds Dungeons Towns Ambience Birds - Fixes)
 - ImGui Icons
 - Simplicity of Snow
 - Saints and Seducers Retexture SE
 - powerofthree's Papyrus Extender
 - Fishermen Fish
 - Optional Quick Start - SE

Expanded
 - Siege at Icemoth

### Added

 - Vanilla CS
 - XP32 True Ragdoll Physics

### Removed

 - Twilight
 - True Storms - Cut (Vanilla CS handles this)

# 3.0.0

### Key Info
 - This update is NOT Save-Safe with any previous version of Winds of the North

## About
3.0.0 is Winds of the North's second major update!

## Patch Notes

<hr class="thin-hr">

### Overview

 - 3.0.0 marks the most significant change in direction for Winds of the North yet. Instead of focusing on adding more content or trying to integrate all of the CC, I have decided to concentrate on improving the base game and making everything feel more consistent. 

 - I am aware that many people, even myself, still want to enjoy new content in the list.
   - As such, Winds of the North now has two profiles. 
   - There is the default profile which is the more focused and lean version of the list. 
   - There is the new "Expanded" profile which contains much of the added content that was formerly in the list by default.
 - This update also pushes the visuals back a bit closer back to the vanilla style, which has always been important to me.

 - For those of you who aren't aware, Additional Music was deleted from the nexus, which made the longstanding Winds of the North version 2.0.9 uninstallable (ie. It brought the list down).
   - While 3.0.0 itself has recieved very extensive and lengthy testing (more than any previous version), I did not have ample time to fully update the documentation to the extent that I wished. I was planning on doing that when I was ready. Given the situation, I did not want to let that be the holdup for making the list available to download again. 
   - Please bear with me as I continue to update the site in the coming days. If any information seems inacurrate and you have a question, feel free to ask in Discord and I or others will answer.
 - At this point, 3.0.0 had been in testing for several months now. I would like to thank everyone that took the time to report the many bugs that were fixed. Being able to bring Winds of the North back into action with 3.0.0 this easily would not have been possible without your all's help.
 - 3.0.0 was developed in a series of release candidates and alphas, and it is a bit much to try to merge into one single list of changes. If you are curious about the finer details the changelogs for each are listed below. 
   - I have included a summary of what I think the most impactful changes are. 
   - Again, you can check the changelogs for the alphas and RCs to see all of the changes starting with [3.0.0 alpha 1](#300-alpha-1).

### Summary

#### Visual Changes

  - Happy Little Trees has been replaced with a combination of Enhanced Vanilla Trees and Tree Branches 2k
  - Classic Weathers has been removed and replaced with the Vanilla/Custom True storms cut that Winds of the North 1.0.0 used.
  - Community Shader's new Skylighting, upscaling, Sky Sync, LOD Blending, Terrain Blending, and more has been added.

#### Quest and Location additions

  - All of the new location and quest mods have been moved to the Extended profile (Except for ECSS)
  - There has been many small scale quest and immersion tweak mods added, from things like "Neutral Civil War forts", to adding a steward in Dawnstar (yes, Dawnstar did not have a steward)
  - "Favor Quests Separated" and "Miscellaneous Quests are Favors" have been added, and should hopefully make Skyrim's many favor quests a little less painful.
  - Scroll Enchanters have been added to major cities (Thanks again August)

#### Misc List Tweaks

 - Updated Mo2 to version 2.5.2
 - The size of the list has been substantially reduced
 - Switched Mo2 Theme to vs15 Dark
 - Optimized LOD generation for better performance and size
 - You can now block/bash with a staff (Staff Blocking and Bashing by Asrak)
 - Extended Encounters has been removed.
 - TrueHUD's floating bars have been re-enabled by default (they are very useful). The optional file to disable them still remains.

### Bug Fixes

 - There have been dozens of bug fixes, some major some minor (too many to list here). Each fix is listed in the changelog of the RC it was made in below.

### Balance Changes

 - There have been quite a few tweaks to balance. Some of the more important ones are:
 - High level Draugr no longer have Ebony weapons. 
   - This didn't make much sense lore wise and the abundance of Ebony gear broke the economy. 
   - Instead, they have been swapped to Honed Ancient Nord weapons, and the formerly Ebony weilding Draugr have been given a version of the corresponding mastery perk from Adamant that gives them a 20% boost to damage. 
   - This should bring their damage output roughly in line with Ebony except you now don't get cracked loot from them.
 - A new DLL for Arena has been added (right now its a wotn exclusive).
   - In encounter zones higher than your level, the new Arena DLL will limit the evaluated level of hard and very hard spawns to +5 and +10 levels higher than the encounter zone. 
   - Please note: This does not mean that enemies that are higher level than that can't spawn. Sometimes entries in leveled lists at X level will have a higher level NPC actually tied to them.
   - For example, the level 18 list entry for Mikrul Gauldurson is actually a level 24 NPC.
 - All bow draw speeds have no been normalized (yes most bows all had different draw speeds in vanilla)
 - And much much more. Again, individual changes are listed below in the changelogs.

## Changes (From 3.0.0 RC4 to 3.0.0 release)

<hr class="thin-hr">

### Bug Fixes and Balance Changes
 
 - Fix: A temporary workaround has been found for the 1 handed stagger issue on Trolls, Bears, and Sabre Cats
 - Fix: The enchanted Telvanni Shoes in the College of Winterhold have been swapped for unenchanted ones
 - Fix: Gourmet - Mushroom stews have had their value increased to match the cost of other stews that provide the same bonuses
 - Fix: Gourmet - Ash Yam soup and Jazbay dumplings have also had their values corrected
 - Fix: Fixed Siege at Icemoth dungeons being picked up for word wall quests for real this time
 - Fix: Shields being invisible on Cannibal Draugr
 - Balance Change - The Pirate King Garb and Boots now disallow enchanting

### Updated

 - Enhanced Vanilla Landscapes
 - Serious Civil War Fort Personnel
 - Neutral Civil War Forts
 - A Steward for Dawnstar
 - Skyrim Extended Cut - Saints and Seducers
 - Neutral Civil War Forts
 - Skypatcher
 - powerofthree's papyrus extender
 - Dyndolod

Expanded

 - Winds of the North - Music Merge

# 3.0.0 RC 4

<div class="centerdiv">
  <hr class="thin-hr">
</div>

### Key Info

 - This RC is save safe with RC3
 
## Patch Notes

<div class="centerdiv">
  <hr class="thin-hr">
</div>

## Changes (from previous 3.0.0 RC)

### Bug Fixes and Balance Changes

 - New Feature: In encounter zones higher than your level, the new Arena DLL will limit the evaluated level of hard and very hard spawns to +5 and +10 levels higher than the encounter zone. 
   - Please note that this does not mean that enemies that are higher level than that can't spawn. Because sometimes entries in leveled lists at X level will have a higher level NPC actually tied to them.
   - For example, the level 18 list entry for Mikrul Gauldurson is actually a level 24 NPC.
 - Fix: Actually enabled Skylighting in the Default profile (whoopsie and sorry).
 - Change: Disabled the bReplaceImports option in Engine Fixes.
 - Fix: Some of the wardrobes in Wintersand manor (Tundra Homestead) were spawning dozens of black briar mead bottles
 - Fix: Jonquil's corpse did not have proper template assignment, causing dark face bug
 - Fix: Vampires had a chance of spawning with hooded robes and a circlet, causing them to appear naked. The jewelry has been limited to rings and necklaces so that should no longer happen
 - Fix (Expanded profile): You should no longer recieve radiant quests to the Word Walls in Siege At Icemoth
 - Fix: Fixed an issue with SMI that would cause the health bar to flicker when injured
 - Fix: Fixed some ownership flags on some soulgems in the Hall of Countenance
 - Fix: Fixed a bug with Scion where hitting your followers with Vampire's Seduction would break them once the effect went away (Kudos to bressingham for reporting and providing a save file to make this bug easier to track down)

### Updated

 - Community Shaders
 - Grass Collision
 - SkyPatcher
 - Papyrus Tweaks NG
 - Survival Mode Improved - SKSE
 - CC Tundra Homestead - Tweaks and Enhancements (THTE)
 - THTE - CC Fishing Patch
 - THTE - USSEP Patch
 - Skyrim Cell load Freeze fix NG

### Added

Both Profiles
 - Sorcerer - Saints & Sedurcer's Patch
 - Sorcerer - YASTM + Saints & Seducer's Patch
 - ECSS - Simonrim Helmet Rebalance
 - THTE - USSEP Patch
 - Vanilla Skies Enhanced (Sun and Night Sky upscales)
 
New Optionals for both Profiles
  - Sovngarde - Mist's Font Replacer (Light)
  - 12th century Bookfont
  - Sovngarde - 12th Century Bookfont patch

Expanded
 - East Empire Company Armor
 - DEAD - Draugr Enemy Asset Diversity
 - Draugr Enemy Asset Diversity Bugfix

### Removed

Both Profiles
 - Light Placer
 - CS Lights


# 3.0.0 RC 3

<div class="centerdiv">
  <hr class="thin-hr">
</div>

### Key Info

 - Skylighting has been re-enabled, and I have tweaked it to turn down how dark it makes things. It is a pretty important CS module, and helps make other features like water effects and dynamic cubemaps better.
 - Thank you to all those who have been testing and reporting bugs. Special thanks to Aerin who did really thorough testing, reported a lot of bugs, and even provided fixes for some of them.
 - I am still working through other bug fixes and changes, but I wanted to release the ones I have so far in a more incremental fashion for testing. 

## Patch Notes

<div class="centerdiv">
  <hr class="thin-hr">
</div>

## Changes (from previous 3.0.0 RC)

### Bug Fixes and Balance Changes
 
 - Removed most of the factional vampire variants that were present. (no more chef, stormcloak, imperial, vigilant, etc vampires)
 - Balance Change: High level Draugr no longer have Ebony weapons. 
   - This didn't make much sense lore wise and the abundance of Ebony gear broke the economy. 
   - Instead, they have been swapped to Honed Ancient Nord weapons, and the formerly Ebony weilding Draugr have been given a version of the corresponding mastery perk from Adamant that gives them a 20% boost to damage. 
   - This should bring their damage output roughly in line with Ebony except you now dont get cracked loot from them.
 - Change: Tolfdir now gives you the original enchanted Arch Mage boots with the robes. The un-enchanted boots are in the arch mage quarters.
 - Change: Several forts should no longer have the orc stronghold icon on them.
 - Change: Shalidor's Insights scrolls have been updated to be either a 25% magnitude buff (Restoration, Destruction, Illusion) or a 50% duration buff (Alteration, Conjuration) (Plugin provided by Aerin)
 - Change: A new WIP plugin for Arena has been added that dynamically adjusts the modifier used for hard and very hard spawns to more smoothly maintain their difficulty relative to you. 
   - For example, lets say you go to a bandit camp in vanilla Arena. Once you become level 10 a very hard enemy may be up to level 15. At level 20 they could be up to level 30. Once you hit level 40 the enemies could theoretically be up to level 60 (there are no level 60 bandits but hopefully you get the point)
   - As you can see the scaling could quickly grow out of hand. This plugin will adjust the modifier to try to maintain a 10 level gap after level 20.
 - Fix: Fixed Inverse Kinematics bug with walking (ie, walking down a slope was not causing character's feet/knees/etc to adjust their position)
 - Fix: When in default profile, all extended profile mods were at the bottom, not in their seperators
 - Fix: Unicorn horse armor recipes were showing at forge. That has been fixed. (they shouldnt be, there is no unicorn)
 - Fix: The "Book Door" leading backwards from Chapter V to Chapter IV of Untold Legends was incorrectly listed as leading to Chapter III. (Thanks Aerin for the file)
 - Fix: Fixed a bug where the Blade of Woe dropped by Astrid in the Abandoned Shack does not have the Artificer enchant. (Thanks again Aerin)
 - Fix: Fix floating plants outside of Fellglow Keep
 - Fix: Installed the Dragon War patch for Wyrmstooth (whoopsie)
 - Fix: There was certain scenarios where dynamically placed lights from magic effects could "flashbang" the player. Since it seems to be some sort of light/shader issue lights on magic effects from CS Lights have been disabled.
 - Fix: The Hawking Horker now carries Gourmet food items
 - Fix: Morthal Lairs Wares now carries Gourmet food items
 - Fix: Fixed a typo in Environs. "You must have head about the vampires." -> "You must have heard about the vampires."
 - Fix: Morthal Lairs Wares door had no sound when opening 
 - Fix: The Red Wave wasnt getting swapped for its unique model in Wyrsmtooth
 - Fix: Attacking the "On the way to the wedding" encounter bodyguard would cause the "Nobles traveling with bodyguard" guard to aggro on sight
 - Fix: Forwarded a butt load of conflicts in the bow normalization plugin that I somehow missed before.
 - Fix: Removed the Dissallow Enchanting keyword on the unenchanted archmage boots. The base value has also been lowered.
 - Fix: Runoff caverns map marker is no longer visible by default (again)


### Updated

 - Community Shaders
 - Skylighting
 - Grass Collision
 - Upscaling
 - Crash Logger SSE AE VR - PDB support
 - CS Lights
 - Survival Mode Improved - SKSE
 - Robber's Gorge Fixes
 - Light Placer
 - SkyPatcher

### Added

Both Profiles
 - Skyrim Freeze Fix
 - Artificer - Astrid Blade of Woe Fix
 - Blood of the Ancients Fix
 - Fixed Enthir TG Vendor Chest
 - Mysticism - Sun Spell Fix
 - Untold Legends - Chapter Door Fix
 - WotN - Colovian Brandy Consistency
 - Cannibal Draugr on Solstheim
 - Shalidor's Insights - Simonrim Integration
 - Slightly Better Civil War - Reward Tweaks

Expanded
 - Dragon War - Wyrmstooth Patch

### Removed

# 3.0.0 RC 2

<div class="centerdiv">
  <hr class="thin-hr">
</div>

### Key Info

 - A new optional "Expanded" profile has been added to Winds of the North 3.0.0. The expanded profile contains much of the new content that was included in earlier versions of Winds of the North. It has new quests, new lands, music, and more. The default Winds of the North profile still remains the much more thinned down version of the list. 
 - You can select the profile at the top left of the screen in mo2.
 - RC 1 saves are compatible with the Default profile only.
 - Hopefully this should go without saying, but "Expanded" profile saves and "Default" profile saves are not cross compatible with each other.
 - In addition, the total install size of the list has been reduced to around 92GB or so (down from just at 99ish).
 - There are some additional small bugfixes and tweaks I am working on, but I did not want to wait any longer to put out the Expanded profile for testing.
 
## Patch Notes

<div class="centerdiv">
  <hr class="thin-hr">
</div>

### Bug Fixes and Balance Changes

 - Balance Change: Dragons have had their physical and spell damaged reduced by 25%. This combined with the spawn difficulty change in the previous patch should hopefully result in less problematic dragons. They are still going to be hard, and they should be.
 - Balance Change: The enchanted Telvanni Robes in the Archmage's quarters have been replaced with an unenchanted version.
 - Balance Change: The extra set of unhooeded Archmage's Robes in the Archmage's quarters has been swapped with an unenchanted version. This should prevent anyone..acquiring them too early 
 - Balance Change: Partially filled soul gems from YASTM have had their values adjusted to more closely match the standard set by Sorcerer.
 - Fix: I forgot to forward conflicts from Artificer to the Bow Speed normalization plugin
 - Fix: There should now be default sharpening values for Community Shaders upscaling (DLSS -> 0.1, FSR -> 0.7)
 - Fix: The global bloom threshold has been raised by 100 (effectively disabling it). This should get rid of items that are glowing super bright when they shouldnt.
 - Fix: Crusader Faster is now disabled by default. If you were enjoying it feel free to re-enable.
 - Fix: Disabled a newer setting in the Engine Fixes ini that I believe was the source of some crashing.
 - Fix: Graphical issue with ice rocks

## Changes (from previous 3.0.0 RC)

### Updated

 - Community Shaders
 - Skylighting
 - Grass Collision
 - Upscaling
 - Crash Logger SSE AE VR - PDB support
 - CS Lights
 - Survival Mode Improved - SKSE

### Added

Both Profiles
 - Comprehensive Attack Rate Patch - SKSE
 - Dragon War - Rebalanced


Expanded Profile
 - Forgotten Seasons
 - Wyrmstooth
 - Siege at Icemoth
 - Morthal Barrow
 - Taarengrav Barrow
 - Mementos - Morthal Barrow
 - Mementos - Taarengrav Barrow
 - Open for Business - Lawbringer for Fort Icemoth (used for the tweaks)
 - Unique Red Wave
 - Wyrmstooth - The Cause Patch
 - Wyrmstooth - Rare Curios Patch
 - Wyrmstooth - Mysticism Consistency
 - Stonehollow Overhaul for Wyrmstooth
 - Caught Red Handed - Quest Expansion
 - The Innocence Lost - Quest Expansion
 - Infiltration - Quest Expansion
 - The Heart of Dibella - Quest Expansion
 - The Whispering Door - Quest Expansion
 - The Only Cure - Quest Expansion
 - House of Horrors - Quest Expansion
 - Nilheim - Quest Expansion
 - Sensible Quest Prerequisites - Rise of Wyrmstooth

### Removed

 - Animated Filled Soul Gems
 - Animated Filled Soul Gems - Sorcerer Patch

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

## Patch Notes

<div class="centerdiv">
  <hr class="thin-hr">
</div>

### Overview

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

---

# 2.0.9

### Key Info
 - This update is Save-Safe
 - Not save safe if upgrading from pre 2.0.0 versions
 - You can ignore prompts about missing plugins (several patches have been renamed. This is okay)

 
## Patch Notes

<hr class="thin-hr">

### Bug Fixes

 - Fixed a bug that could cause the player to get downed on death instead of killed.
 - The Runoff Caverns and Champions Rest map markers should no longer start visible (Added to Wotn - Tweaks)

 
## Changes

<hr class="thin-hr">

### Updated

 - Community Shaders
 - CS Lights
 - NPCs Take Cover
 - Optional Quick Start - SE
 - Housecarls Pre-Thaneship
 - Additional Music
 - Knotwork
 - Hunters not Bandits
 - Container Distribution Framework
 - Elven Supremacy - Currency Swapper for Thalmor
 - Morrowind Mint

### Added

 - QuickLoot IE
 - Really Seriously Improved Sparks
 - Media Keys Fix SKSE
 - Ranged Block Recoil Fix
 - Sprint Stuttering Fix

### Removed

---

# 2.0.8

### Key Info
 - This update is Save-Safe
 - Not save safe if upgrading from pre 2.0.0 versions
 - You can ignore prompts about missing plugins (several patches have been renamed. This is okay)

## Patch Notes

<hr class="thin-hr">

### Misc

 - New Additional Music update brings some new palette tracks to the music mix
 - Additional bloom adjustments to imagespaces. Should take care of most instances of weathers that look very bloomy
 - Followers should no longer automatically get a "Hunting Bow" added to their inventory. Existing followers on a save may still have one, but should not re appear after removal.
 - Only two mods in the list were using Skypatcher, just distributing outfits to 3 NPCs. These have been manually distributed and Skypatcher has been removed.
 - Shadow map resolution has been dropped back to 2048 for now.
 - Grass draw distance has been changed from 7000->10000
 - Zombie attacks encounters have been removed. They are honestly just annoying and happened way too often.
 - Crusader - Two Handed and One Handed XP rate increased slightly

### Bug Fixes

 - Fixed Aylied Casks in Rielle containing every restoration tome
 - Fixed bug that caused sun spells to not work on the barrier in Morthal Barrow
 - Fixed East Empire Merceneries not using the East Empire Company armor
 - Update to Xavbio Leather armor fixes gap in armor at neck
 - Halldir's Cairn, and Forsaken Cave containers should now contain Drakr
 - Rielle and Potema's tomb containers should no longer contain Drakr (Unfortunately for now, the Draugr in Potema's tomb will still carry drakr due to how NPC death items work)
 - Wights in Rielle no longer carry Drakr, only Mala
 
## Changes

<hr class="thin-hr">

### Updated

 - Additional Music
 - Ebony Armors and Weapons Retexture SE
 - Photo Mode
 - Default Face NPCs fixed
 - The Gift of Saturalia - A Quest for the Holidays
 - Dynamic Crafting Animations
 - Leather armors retexture to fix neck gaps
 - Classic Weathers Redone
 - Better Grabbing
 - Falmer Servant Lines Expansion
 - Container Distribution Framework
 - Community Shaders
 - Run for Your Lives
 - Morthal Barrow
 - Simply Skin - Male
 - Simply Skin - Female
 - The Heart of Dibella - Quest Expansion
 - Knotwork
 - Mainland Staff Enchanters
 - CC Staves - Mysticism Consistency Patch - Vendor Inventory Adjusted
 - WotN - Custom MCM settings
 - WotN - Custom Plugins
 - Community Shaders
 - Screen-space Shadows

### Added

 - Loading Screen Truce AE
 - Immersive Khajiit Caravan Mules
 - Forsworn Skinchangers
 - Mainland Staff Enchanting - Hearthfire Addon
 - COIN - Exclusions (Custom patch)
 - CS Light
 - Light Placer
 - I'm walkin' here NG
 - Authentic Eyes

### Removed

 - Natura - Posion crash fix (no longer needed)
 - Skypatcher
 - QuickLoot IE (For now, due to stutter when opening menu)

---

# 2.0.7

### Key Info
 - This update is Save-Safe
 - Not save safe if upgrading from pre 2.0.0 versions
 - You can ignore prompts about missing plugins (several patches have been renamed. This is okay)


### Patch Notes

<hr class="thin-hr">

#### Misc
 
 - Siege At Icemoth Plauge Breath shout has been removed. It is redundant with Stormcrown's "Poison Breath" shout
 - Shadowmap resolution has been changed from 2048 -> 4096. Some of you with low end systems may have a performance impact (Or you might not). This should help alot with the really bad shadow aliasing when using CS.
 - Hid several notifications so that you won't see any when starting a new game
 - Killmoves have been turn off by default again, but the plugin has been seperated into its own mod under "Optional Tweaks". If you want killmoves all you need to do is disable the mod and you are good to go.

#### Bug Fixes

 - Fixed SMI applying health AV penalty from cold with Starfrost on
 - Fix Dragon War crash with Arctic meshes
 - Fixed issue where dragon encounters could enable before they were supposed to if you did the battle of Whiterun before "Blade in the Dark".
 - Turned TrueHUD's boss bar off by default (disabling "Disable TrueHUD floating bars" under optional will re-enable them)
   - I was going to keep the boss bars for boss enemies only, but there seems to be an issue with the normal bars not always disabling with the boss bars.
 - Supply and demand perk will now affect Pilgrim priestly vendors
 - The various Simonrim sun spells will now work on the barrier in Morthal Barrow
 - Fixed a bug where dialogue to turn in a bounty was available when it should not be.
 - The bounty quest redone message that showed when completing a quest did not match the standard that the rest of the game uses. It did say "Added Gold, 100". This has been changed to the usual "Gold (100) Added"
 - Conjure Harrowstorm Gargoyle spell tome now uses the correct inventory icon
 - Fixed a bug in CS that causes outlines around the screen in exterior locations
 - Fixed Aetherial Crown being temperable when it shouldn't.


### Changes

#### Updated

 - Community Shaders
 - Dragon Hunting
 - Dragon War
 - Better Grabbing
 - Siege At Icemoth
 - Catir Club - Immersive Creation Club Integration
  
#### Added

 - New Minor Quest Abilities for Simonrim - Agent of Mara - Agent of Dibella - Sailor's Repose
 - Better Esbern Voice Consistency Fix
 - Better Esbern Voice Consistency Fix - Dragon Hunting patch
 - Classic Weathers Redone
 - Quickloot - IE
 - PapyrusUtil SE - Modders Scripting Utility Functions
 - Notification Filter - Remove unwanted notifications
 - Jelidity - 3D Vanilla Mountain Flowers
 - Vampire Allies Factions Fix
 - Thalmor Don't Report To Stormcloaks
 - Edmond's Assassin of Old - Immersive Vanilla Bug Fix
 - Mistwatch Ending - More Options
 - powerofthree's Tweaks

#### Removed

 - Classic Weathers
 - Classic Weathers - Extended
 - True Storms
 - True Storms - Cut
 - True Storms patches
 - PC Flowers

---

# 2.0.6

### Key Info
 - PLEASE be sure to delete your shader cache folder in overwrite if updating
 - This update is Save-Safe
 - Not save safe if upgrading from pre 2.0.0 versions
 - You can ignore prompts about missing plugins

### Patch Notes

### About

#### Misc

  - Removed the optional addon from Blade and Blunt that disabled all kill moves (I like my two handed executions, sorry)
  - Character lighting re-enabled by default

#### Bug Fixes

 - Fixed crashing on first fast travel attempt 
 - Controller was accidently disabled by default in the last update
 - The ENB light included with Arctic would sometimes cause a blue square to appear when casting spell. Disabled ENB light from Arctic.
 - Disabled Dynamic Cubemaps - Metals addon for now as it had some problems (not to worry, armor is still pretty shiny)
 - The Amulet of Zenithar's effect was incorrectly named "Fortify Carry Weight". It should now say "Fortify Barter"
 - Fixed Ice Storm from NPCs hitting you with damage twice

### Changes

#### Updated
  
  - Community Shaders
  - Light Limit Fix
  - Custom Journeyman DLL
  - Classic Weathers Extended

#### Added

  - Terrain Shadows
  - Wotn - Heightmaps
  - Less Visually Obtrusive Cloak Spell Effects
  - Dragon Hunting - Oblivion patch

#### Removed

 - Iconics statues
 - Project Clarity - Sky
 - Sky Reflection Fix (Was merged into base CS)
 - Blade and Blunt - No Kill Moves optional

---

# 2.0.5

### Key Info
 - PLEASE be sure to delete your shader cache folder in overwrite if updating
 - This update is Save-Safe
 - Not save safe if upgrading from pre 2.0.0 versions


### Patch Notes

### About

 - This update is mainly to update to the new and improved version of Community Shaders. You may see a slight performance gain. Also PLEASE be sure to delete your shader cache folder in overwrite
   - Check out the CS 1.0 [Changelog for more details](https://www.nexusmods.com/skyrimspecialedition/articles/9415)

#### Misc

 - Disabled character lighting. It looks good enough with this version of CS to disable. You may still notice crushed dark colors but I prefer it this way as the subsurface scattering really shines.
 - For those of you using 20 series Nvidia cards and up, the list will use CS' DLAA anti aliasing instead of TAA. 
   - If you are using an older card or an AMD card, it should default to using FSR 3.1 AA. If you want to adjust sharpness or use TAA, press "End" to access Community Shader's menu and navigate to "Display"
 - "Water Caustics" is now "Water Effects". It has been reenabled by default due to reported performance improvements.

#### Bug Fixes

### Changes

#### Updated

 - Community Shaders
 - Screen-Space Shadows
 - Light Limit Fix
 - Grass Lighting
 - Grass Collision
 - Subsurface Scattering
 - Wetness Effects

#### Removed

 - Light limit fix - Candle Glow (no longer needed)
 - Dynamic Cubemaps (merged into base Community Shaders)
 - Tree LOD lighting (merged into base Community Shaders)
 - Water Blending (merged into base Community Shaders)
 - TAA Sharpen



# 2.0.4

### Key Info
 - This update is Save-Safe
 - Not save safe if upgrading from pre 2.0.0 versions
 - You can ignore prompts about missing plugins


### Patch Notes

### About

 - This update is mostly a bug fix update, with some noteworthy mod additions.
 - I added a Trello board for better bug, tweaks, and mod addition tracking (https://trello.com/b/GGDpdYFg/winds-of-the-north-public-board)

#### Misc 

 - Re-enabled the ability to customize value of relic coins in COIN mcm
 - Disabled the free (and expensive) spell tomes in the hall of Attainment (sorry, too OP)
 - Made some additional tweaks to Extended Encounters
   - Disabled fist fight encounter. (Its a neat idea but it kinda feels like two NPCs bugged out when you see it)
 - Dragon War - "Dragonkind" 25% flat damage reduction has been removed
 - You should no longer automatically use spell tomes instead of picking up
 - Disabled TrueHUD's floating enemy bars in favor of MoreHUDs enemy bars. (Floating boss bars still remain)
 - Made the mo2 splash screen a bit smaller 1080 -> 720
 
#### Bug Fixes

 - Fixed duplication of staff enchanters in the Arcaneaum.
 - Fixed CC backpacks not being distributed to vendors
 - Fixed two soul gem holders and soul gems clipping through the enchanter and staff enchanters in the Hall of Countenance (soul gems may not move on an existing save. You can use grab to move them if you want)
 - I have shipped an updated build of SMI with the list that I haven't released to the nexus yet, it should fix some bugs such as:
   - Fixed an issue where incorrect Seasons Multipliers were being used
   - Fixed an issue detecting CC camping
   - Moved Av penalty calculations to their own class which updates more frequently than the core mod
 - Fixed errors in Coin - Hand To Hand patch
 - Fixed "Cure" spell duplicate messages for real this time
 - Re-enabled the hoodless Archmage's robes in the Archmage's quarters
 - Fixed several pieces of enchanted armor having the wrong enchantment for their name
 - Fixed errors in Dragon War - Wyrmstooth patch
 - Update to Dragon War - Wyrmstooth patch to fix Dragons not shouting



### Changes

#### Updated

 - Fisherman Fish
 - Currency Swapper
 - Classic Weathers Extended
 - Steel Armors and Weapons Retexture SE
 - Dragon War - A Dragon Overhaul
 - Vanilla Remastered - Every Single Texture Upscaled and Reworked

#### Added

 - Skyrim Reworked - Hotfix
 - Extended Encounters and Pilgrim - Vigilants Hunt True Daedra Worshippers
 - Better Grabbing
 - TAA Sharpen
 - Better Esbern Voice Consistency Fix
 - Andrealphus' Papyrus Functions (Needed for Dragon War)
 - Knotwork
 - Relics of the Crusader Improved



# 2.0.3

### Key Info
 - This update is Save-Safe
 - Not save safe if upgrading from pre 2.0.0 versions
 - You can ignore prompts about missing plugins


### Patch Notes

### About

 - This update brings the addition of "Staff Enchanting Plus" to the list.
 - "Sorcerer - A Staff and Scroll Overhaul" had already provided the ability to make staves for spells you know using soul gems. However, the underlying workings of the system in "Staff Enchanting Plus" 
  functions the same as a weapon enchanter. This means you can rename your staves, use different staff models for different enchants, and it works with mod added spells outside of simonrim (not that there is very many of those in Winds of the North).
 - Additionally, I have added "Skyrim Every Single Texture Upscaled and Reworked" and removed the previous upscales for architecture and dungeons. This new mod covers every single Skyrim texture. I am using it as a "base coat" if you will.
 - This patch includes some other misc bug fixes and balance changes.

#### Misc 

 - To elaborate on the change mentioned above, staff enchanters will now be available at most hold capitals. You may also craft various staves at the staff enchanter given you have the appropriate smithing perks. (I may change this to the forge in the future)
 - Made some adjustments to the master conflict resolution patch. Some changes were moved to new esps, or to the WOTN - Tweaks patch where appropriate
 - NPCs will no longer sometimes refuse to talk to you while using necromancy spells
 - Bounty reward numbers have been adjusted to be a bit lower overall, but more balanced across the board (Think ~800 Gold reward for a level 32 Giant now, instead of 2000+)
 - Patched "Tovinaan" Dragon Priest from Siege at Icemoth with Humanoid Dragon Priests
 - Removed gold from Candlehearth chests
 - The "Naughty Thief" world encounter should happen less often, and only in cities rather than towns or inns
 - Turned off Extended Encounters dragon encounters
 - The player stat meters have been moved to the bottom left corner of the screen a la Oblivion. Is this like vanilla? No, but I found this to be much more optimal than having to look across multiple spots on the bottom of your screen to see your stats.
  With the bars placed at the bottom left, all it takes is a single look.
 
#### Bug Fixes

 - Reverted accidental SkyUI font size change
 - Fixed Fists of Randagulf not being temperable
 - Cure spell and associated scrolls will no longer show duplicate messages.
 - Domination should no longer control dragons
 - Modified several loading screens to align with Simonrim mechanics.
 - Fixed Artificer Warrior's Focus perk still applying despite wearing a helmet
 - Fixed two issues with the Blade and Blunt DLL (I backported fixes from a newer in progress version for this list)
   - Jumping should now consistently cost stamina instead of only working sometimes for people
   - Horses should no longer have infinite stamina when riding with your weapon drawn.
 - Fixed an issue with Modlist Maintenance that caused a save to be falsely flagged as out of date.
 - Camera height should now match the size of the actor
 - Moved the SkyrimUncapper.ini to be present in the actual uncapper mod folder. Which hopefully should fix a seemingly rare issue where the uncapper does not find an ini



### Changes

#### Updated

 - Simplicity of Settlements - Dragon Bridge - Base Object Swapper
 - Modlist Maintenance Utility
 - Dynamic Crafting Animations

#### Added

 - Disable Annoying Werewolf Killmove
 - Mementos - Morthal Barrow
 - Mementos - Taarengrav Barrow
 - Mementos - Destroy the Dark Brotherhood QE
 - Flute Animation Fix
 - Finally Non-Imperial Steel B Gauntlets and Boots for The Elder Scrolls V Skyrim Special Edition
 - Staff Enchanting Plus
 - Mainland Staff Enchanters
 - Skyrim Every Single Texture Upscaled and Reworked (replaced base game BSAs in Game Root with these BSAs)
 - Anim Object Swapper
 - Fishermen Fish
 - Auto Audio Switch
 - Silent Dragon Priest Steps (Custom patch)
 - Simonrim - Staff Enchanting Plus (Custom patch and DLL)
 - Bring Meeko to Lod
 - Housecarls Pre-Thaneship
 - Vittorias Alternate Wedding
 - Bound Weapon Fix

#### Removed

 - Persistant Favorites (Due to CTD)
 - Old custom "vanillaeyeadaptation" plugin
 - Duplicate Artificer - YASTM patch
 - Shadow's Upscale Revolution - Dungeons
 - Shadow's Upscale Revolution - Architecture
 - SSE High Quality Music (redundant. Audio files were already covered by UHDAP)



## 2.0.2

### Key Info
 - This update is Save-Safe


### Patch Notes

#### Misc 

 - Updated Modlist Update Checker and Modlist Maintenance ini files.
 - The default starting difficulty has been changed to Adept.
 - Leather Scout now requires steel smithing to craft.
 - A small change to crusader has now been made. Before, you did not gain any perk points after level 50. Now, you will gain 1 additional perk point at level 55,60,65,70,75,etc... until level 100
 - Cleaned up some unnecessary changes from the main conflict patch
 - Disabled sleep, wait, and fast travel encounters in Extended Encounters
 - Photo mode - reduced full screen screenshot load screen chance to 5%, set painting load screen chance to 0%
 - Photo mode - time will now freeze by default when opening photo mode

#### Bug Fixes

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
 - Fixed an issue where a few more of the CC Sunder and Wraithguard notes would appear before Arniel's Endeavour was completed (the skeleton's and chests will appear afterwards)



### Changes

#### Updated

 - Photo Mode
 - City Bag Checks
 - Extended Guard Dialogue
 - Skyrim Silver - Currency Swapper for Windhelm
 - The Only Cure - Quest Expansion
 - Unarmed Behaviors Expanded

#### Added

 - Classic Weathers
 - Classic Weathers Extended
 - Perk Entry Point Extender
 - Unarmed Weapon Speed Scaling and Unlocked Movement
 - Mehrunes Dagon Unique Shrine - Shrine Objects Swapped - Base Object Swapper
 - Better Atronach Forge Offering Box - No More Dwemer Dresser - High Polygon Summoning Circle
 - Extended Encounters - Settings Loader



# 2.0.1

 - Recompiled to remove Scripts.zip compatibility. No other changes.

# 2.0.0 - The Treasury Update

### Key Info
 - This update is NOT Save-Safe!!


### Patch Notes

### About
 - With 2.0.0 comes the first major rework that this list has ever recieved. As such, 2.0.0 has undergone many additions, updates, and removals. 

 - Perhaps the largest change, that I hope will not be too controversial, is the removal of the majority of the enemy mods. 
I feel for consistency's sake that this was a choice that I needed to make.
In their place I have added BnB's "Level Based Difficulty", which scales the difficulty as you level up. I have also elected to add a few mods that more or less modify the aesthetic of some enemies (mainly Draugr).

 - The title of this update comes from the addition of my own mod called "Treasury Exchange". It replaces Merchant Exchange with a fully voiced NPC in the Markarth Treasury house.

 - Other larger changes include switching from "Timing is Everything" to "Arena Quest Requirements", the addition of the currency swapper COIN mod series by TateTaylorOH, and a rework of some of the Creation Club integration (additional supported Creation Club items are listed below)

#### Misc 

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



### Changes

#### Updated

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

#### Added
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

#### Removed

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




## 1.1.13

### Key Info
 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins


### Patch Notes

#### Bug Fixes

 - Fixed an issue where Modlist Update Checker was reporting the list out of date (I forgot to update the ini last update)

### Changes

#### Updated

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

#### Added

 - Dragon Priest Hood Variants
 - Divine Crusader Retexture SE
 - Daedric Armors and Weapons Retexture SE

## 1.1.12

### Key Info
 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins


### Patch Notes

#### Misc 

 - This patch mostly consists of updating mods that needed it. A big highlight is that I updated modlist maintenance to allow better version handling
 - I also fixed the broken readme from 1.1.11



### Changes

#### Updated

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



## 1.1.11

### Key Info
 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins


### Patch Notes

#### Misc Changes

 - Switched the SkyHUD preset to "Vanilla Small"

#### Bug Fixes

 - Fixed master volume being lowered all the way
 - Deleted load screens from the dyndolod esp (in case anyone had custom display tweaks ini's, causing them to still appear)
 - Fixed an issue where the female version of the ebony warrior's armor had major texture issues (Fixed by reverting back to vanilla female ebony armor from practical femal armors)



### Changes

#### Updated

 - Ebony Armors and Weapons Retexture SE
 - powerofthree's Tweaks
 - Innocence Lost - Quest Expansion
 - Silver Armor and Weapons Retexture SE
 - powerofthree's Tweaks
 - Iconic's Spiders of Skyrim Retexture



## 1.1.10

### Key Info
 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins


### Patch Notes

#### Misc Changes

#### Bug Fixes

 - Fixed a bug where Dyndolod's load screen wasnt being filtered out properly
 - Added patched scripts for Dragon Hunting and Run for your lives



### Changes

#### Added

 - Ghosts of the Tribunal Retexture SE
 - Vigil Enforcer Retexture SE

#### Updated

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



## 1.1.9

### Key Info
 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins
 

### Patch Notes

#### Misc Changes

 - Some of the Tamrielic Distribution plugins have been removed that were not actually needed due to other mods covering their functionality

#### Bug Fixes

 - Fixed a bug with Winterhold - Bubbling Brew that sometimes caused the shop to be closed when it shouldnt be
 - Fixed an issue where the Blackreach map was bugged
 - Fixed an issue with blade and blunt that caused jump stamina to break after switching races



### Changes

#### Added

 - Vanilla Makeup HD
 - Vanilla Warpaints Absolution
 - Iconic's Blackreach Crystals Retexture

#### Updated

 - Artificer - Xavbio Textures Addon
 - Starfrost - A Survival Overhaul
 - Aetherius - A Race Overhaul
 - Blade and Blunt - A Combat Overhaul
 - Swords of the Sanctum - Spell Knight Expansion and Distribution

#### Removed

 - Tamrielic Distribution - Disable AA Iron Quest
 - Tamrielic Distribution - Disable AA Leather Quest
 - Tamrielic Distribution - Disable AA Silver Quest



## 1.1.8

### Key Info
 - This update is mostly a hotfix
 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions


### Patch Notes

### Update tasks

 - As of the most recent update, blade and blunt updated injury chances above 90%. Toggle Survival Mode off and back on again to update the value properly.s

#### Bug Fixes

 - Reverted Apothecary update
 - Fixed an issue where I did not select the difficulty persistence fix in the Complete Widescreen fixes mod




### Changes

#### Updated

 - Reverted Apothecary to previous version



## 1.1.7

### Key Info

 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - If you were having issues loading up the game with Skills of Sneaking or Items Stolen Bugfix, please be sure you have followed the install instructions and installed VC++. (I made sure I updated the link)
 - You can ignore prompts about missing plugins


### Patch Notes

#### Misc Changes

 - The list now uses Aetherius' Breton Spell Absorb plugin
 - With the addition of CSSET as a base, I do not feel the need to bloat the list's size with PC - Clutter so that has been removed.
 - Community Shaders - Water Caustics have been disabled by default due to repeated reports of majorly impacted performance. It is still present in the list and may optionally be enabled again if you desire to do so

#### Bug Fixes

 - I discovered that with post 7.0.0 versions of SPID, the visiting advisor outfit tweak distro just magically stopped working. I could not get it to work no matter which permutation of configuration I tried. It worked okay with pre 7.0.0 versions of SPID. Therefore, I switched the mod over to using SkyPatcher runtime distribution and it worked like a charm without issues.
 - Fixed an issue with Falas Selvayn not selling anything but the Stag Prince Bow (Thank Delta for helping me fix this)
 - Fixed an issue where torches are invisible when equipped
 - Fixed a bug in Starfrost that caused hunger not to show in UI

### Balance Changes

 - The extra plots added by CC Farming TNE are no longer available for purchase (it had up to 121 plots available which is..alot)
 - Silver Hand armor is now equivilant to Steel Armor instead of roughly Steel Plate




### Changes

#### Updated

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


#### Added

 - SkyPatcher
 - Cleaned Skyrim SE Textures (bsa replacement in stock game)
 - Animated Forge Water
 - Simply Skin Male Texture Replacer
 - Simply Skin Female Texture Replacer
 - Simply Skins Briarheart textures (provided by Foamimi)

#### Removed

 - Jumping Costs Stamina - Alternative Stamina Cost Options (superceded by BnB update)
 - Dynamic Animation Casting - NG
 - Project Clarity - Clutter
 - Tempered Skins for Males
 - Tempered Skins for Females
 - Tempered Racial Textures
 - Vanilla Body with UNP Textures



## 1.1.6

### Key Info

 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins


### Patch Notes

#### Misc Changes

 - Selected the rusty Champion's Cudgel texture in the fomod for Xav's Imperial Retexture

#### Bug Fixes

 - Fixed issue with wrong art on h2h and security skill trees
 - Fixed issue where Vendil Severin was not spawning with the Severin Family Ring




### Changes

#### Updated

 - Swords of the Sanctum - Spell Knight Expansion and Distribution
 - Custom Skills Framework
 - Persistent Favorites

#### Added

 - Skyrim SE Skill Interface Re-Texture (SSIRT) - Hand to Hand Patch
 - Skill of Sneaking
 - Items Stolen Bug Fix



## 1.1.5

### Key Info

 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins


### Patch Notes

#### Misc

 - Re-enabled whiterun ground stone upscale textures from Shadow's uspcale
 - CoMap - Switched to Obscured Undiscovered Markers - Small Diamond
 - CoMap - bObscuredUndiscovered has been set to 1 in the ini

### Balance Changes

 - Lawless had the Orc from the "Old Orc" encounter always spawn with a set of Orcish armor. This led to Orcish armor being accessible pretty early on.
     - Therefore, his outfit pulls from a new leveled list similar to lawless bandit chiefs (but no helmet)

#### Bug Fixes

 - Caught a few more stragglers with the IED preset. (please follow these instructions to load the new default preset)
   - Press backspace in game
   - Select file -> Default Config -> import
   - Make sure the user radio button is selected (should be by default)
   - Select "Ok" and then "Ok" again
 - Fixed missing texture on ebony greatsword




### Changes

#### Updated

 - Constructible Object Custom Keyword System
 - CoMAP - Common Marker Addon Project
 - Modlist Maintenance Utility
 - Inventory Interface Information Injector
 - CC Myrwatch - Tweaks and Enhancements
 - Unaggressive Dragon Priests Fix

#### Added

 - Discord Rich Presence
 - Contextual Crosshair
 - Press E to Heal Followers



## 1.1.4

### Key Info

 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins


### Patch Notes

#### Misc

 - Disable Actor Fade has been set to true in Display Tweaks

### Balance Changes

 - Scimitars have had their value increased to 235 to make them more difficult to purchase early game. They are elven level damage and readily available early on. (I may nerf their damage in the future)

#### Bug Fixes

 - Fixed an issue with some IED items showing up still that I did not want to (like the dragon claws).
    - Most favorited weapons/shield should still show up on the player. I mostly turned off quest items.
     - Press backspace in game
     - Select file -> Default Config -> import
     - Make sure the user radio button is selected (should be by default)
     - Select "Ok" and then "Ok" again
 - ELIF fixes the issue with filled soul gems appearing very small in your inventory




### Changes

#### Updated

 - Custom Skills Framework
 - Description Framework
 - Stormcrown - A Shout Overhaul

#### Added

 - ENB Light Inventory Fix (ELIF)
 - Alchemy XP Fix
 - Adoption Spouse and Moving Fixes

#### Removed

 - Simple Snow Improvements - Giant Obelisk Fixes (BOS)



## 1.1.3

### Key Info

 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - You can ignore prompts about missing plugins


### Patch Notes

#### Misc
 
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

#### Bug Fixes

 - Fixed an issue that was allowing a Glass Battleaxe to spawn in Khajiit caravan lists 
 - Hopefully fixed a bug with Extended Guard Dialogue where guards would get stuck using the same lines over and over again.




### Changes

#### Updated

 - Starfrost - A Survival Overhaul
 - Spell Perk Item Distributor (SPID)
 - Blade and Blunt - A Combat Overhaul
 - CC Myrwatch - Tweaks and Enhancements
 - More Informative Console
 - Subsurface Scattering
 - Gourmet - A Cooking Overhaul
 - Blade and Blunt - A Combat Overhaul

#### Added

 - Custom Window
 - Dynamic Animation Casting - NG
 - Jumping Costs Stamina - Alternative Stamina Cost Options
 - Modlist Maintenance



## 1.1.2

### Key Info

 - This update is Save-Safe (from 1.1.0+ Only)
 - Not save safe if upgrading from pre 1.1.0 versions


### Patch Notes

#### Misc
 
 - Engine Fixes updated to fix achievements enabler
 - Starfrost has a new Hunger mechanic added, Blade and Blunt had some good bug fixes and new changes to injury mechanics. 

#### Bug Fixes

 - Moved optional widescreen support to end of the install order to fix conflicts with bottom bar swf.
 



### Changes

#### Updated

 - Blade and Blunt - A Combat Overhaul
 - Spell Perk Item Distributor (SPID)
 - Mysticism - A Magic Overhaul
 - Starfrost - A Survival Overhaul
 - Gourmet - A Cooking Overhaul
 - B.O.O.B.I.E.S (aka Immersive Icons)
 - SSE Engine Fixes (skse64 plugin)

#### Added

 - Robber's Gorge Fixes
 - Delphine Skyhaven Bugfix MQ203
 - Remove Creations from Main Menu

#### Removed

 - Achievements Mods Enabler



## 1.1.1

### Key Info

 - This update is Save-Safe (from 1.1.0 Only)
 - Not save safe if upgrading from pre 1.1.0 versions
 - Wetness Effects update fixed issues with older graphics cards
 - Click continue when prompted about if you want to load your game with BCS/CCTweaks/Paraphernalia files missing


### Patch Notes

### Ini Changes

 - iNumFocusShadow 4 -> 2

#### Misc
 
 - Community Shaders grass complex grass override grass lighting has been turned on
 - BCS-Conflicts file merged into misc conflict resolution patch
 - CCTweaks conflict resolution file merged into misc conflict resolution patch

#### Bug Fixes

 - Missile's IED presets were not being loaded by default. This has been fixed




### Changes

#### Updated

 - CC Farming - Tweaks Enhancements and Quest Expansion
 - Dragon Hunting - Quest Rewards and Alchemy Ingredients
 - Dragon Hunting Apotheocary Patch
 - Crash Logger SSE AE VR - PDB support
 - Winterhold - The Bubbling Brew
 - Wetness Effects
 - LOD Model Library for DynDOLOD (wont matter much until I regen in the next save unsafe update)
 - Dragon Hunting
 - Description Framework

#### Added

 - Less saturated Cathedral grass for ENB complex grass
 - Skyrim SE Skill Interface Re-Texture
 - Aetherius - Race Menu Racial Passive Descriptions

#### Removed

 - Paraphernalia - Snow Colour Fixes (unnecessary)
 - Capture Warmer



## 1.1.0
### Key Info

 - This update is NOT save-safe

 
### Patch Notes

#### Misc
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

#### Bug Fixes

 - Gamepad and Vibration has been enabled by default again
 - Removed Customizable Faster Mining Animation because of unfixable sound desync
 - Added a custom plugin to fix Hajvaar not wearing Iron Hand Gauntlets
 - Fixed an issue with The College of Mages and the COM - Sorcery patch where deleted items were occasionally still appearing
 - The Riften ferryman was clipping with the fishing supplies on the dock. He has been moved to the side of the dock, near his boat.
 - Dark Brotherhood Rising Revengeance - Fixed no quest reward bug
 - Dragon Hunting - Fixed Dragon Piercer not being added as a quest reward
 - Fixed a bug with Dragon Hunting where "Dragon Research" would not start 
 - Removed some unnecessary record changes from the misc conflict patch




### Changes

#### Updated

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

#### Added

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

#### Removed

 - Headhunter - Bounties Redone
 - Skyrim On Skooma
 - The Gift of Saturalia - A Quest for the Holidays
 - Missile IED Headhunter Better Trophy On Horses
 - Bounty Preview
 - Customizable Faster Mining Animation - OAR or DAR



## 1.0.8
### Key Info

 - This update is Save-Safe


### Patch Notes

#### Bug Fixes
 - Fixed issue where dynamic cubemaps were not properly applying to Ebony Armor
 - Adjusted some of the True Storms weather chances

#### Misc
 - Cleaned unnecessary masters form misc conflict resolution patch
 - Moved some book record conflict resolution to the BCS patch instead of the misc patch




### Changes

#### Updated
 - Misc Conflict Resolution
 - Switched Project Clarity sky textures to full res version instead of half res

#### Added
 - Mortal Enemies SE
 - Stay At The System Page NG
 - Instantly Skip Dialogue NG
 - DPI Scaling Fix
 - To Your Face SE - AE - VR
 - Modlist Update Checker

#### Removed
 - Mount Anthor Dragon Fix (not needed with Dragon War)



## 1.0.7

### Key Info

 - This update is Save-Safe


### Patch Notes

#### Misc
 - Several of the custom patches are now hosted on the nexus modlist page instead of being included directly in the list
 - LOD is now nexus hosted as well, which should provide faster/more consistent downloads
 - Reverted Schoolsacks of Simonrim's change to mark some bags as unplayable to fix existing saves having invisible inventory bags. (Crafting recipes should still not be accessible)
 - Many of the Cathedral 3D plants were removed. Not because they dont look good (they look great), but because visually they are pretty inconsistant with the rest of the list and stand out quite a bit.

### Balance Changes
 - Timing is Everything - Ebony Warrior quest start level requirement was changed from level 80 to level 50 (50 is the Crusader uncapper "soft" cap)
 - Kachunk consistency adjustments: Elven and Ebony crossbows are no longer locked behind Dawnguard. (Enhanced versions still are)
 - Kachunk consistency adjustments: Nordic crossbow requires intermediate smithing instead of advanced smithing. (For Adamant consistency)




### Changes

#### Updated

 - Open Animation Replacer
 - Schoolsacks of Simonrim - A CC Backpack Overhaul
 - Community Shaders
 - Dynamic Cubemaps
 - Dynamic Cubemaps - Metals
 - Complete Widescreen Fix for Vanilla and SkyUI

#### Removed

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

#### Added

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



## 1.0.6

### Key Info

 - This update is Save-Safe


### Patch Notes

#### Misc
 - True Hud indicator changed to level text instead of soul icon

### Balance Changes
 - Morthal Barrow's min encounter zone level has been set to 25 for Arena consistency 
 - Taarengrav Barrow's min encounter zone level has been set to 10 for Arena consistency

#### Bug Fixes
 - Fixed Deadly Spell impacts frost decals not applying correctly
 



### Changes

#### Updated
 - Community Shaders
 - Tree LOD Lighting
 - Grass Lighting
 - Screen-Space Shadows
 - Light Limit Fix

#### Added

 - Adamant - No Killmove Descriptions
 - Subsurface Scattering
 - Water Caustics
 - Dynamic Cubemaps - Metals
 - Wetness Effects
 - Custom plugin restoring vanilla eye adaptation for SIL (thank you Delta)
 - Schoolsacks of Simonrim - A CC Backpack Overhaul

#### Removed

 - Subsurface Scattering Shaders for Skins
 - Splashes of Storms
 - Simple CC Backpack Rebalance



## 1.0.5

### Key Info

 - This update is Save-Safe


### Patch Notes

### Settings Adjustments
 - Default difficulty changed to Adept
 - Volume sliders should now be set properly

### Balance Changes
 - Added 1 Travel Pack to the quick start chest




### Changes

#### Updated

 - Keyword Item Distributor (KID)
 - City Bag Checks

#### Added
 - No Killmoves plugin from Blade and Blunt
 - Quest Journal Fix for SkyUI
 - Simon's custom quick start chest edit 

#### Removed
 - SkyUI SE - Difficulty Persistence Fix
 - Optional Quick Start - Sensible Gear



## 1.0.4

### Key Info

 - This update is Save-Safe


### Patch Notes

- Removed the Creation Kit requirement from the Wabbajack Install.



## 1.0.3

### Key Info

 - This update is Save-Safe


### Patch Notes

#### Bug Fixes

 - Fixed load order between High Poly Hair and Vanilla Hair fixes
 - 3DItemXOffset has been set to -6 for SkyUI
 - 3DItemYOffset has been set to 2
 - fActivateButtonPosY has been changed from 417 -> 410 for SkyHUD
 - fActivateInfoPosY has been changed from 517 -> 497 for SkyHUD
 - Creation Club files have been moved to mods 
 - Draugr waking up before triggers resolved with Dragon Cult update




### Changes

#### Removed

 - Artificer - Dragon Priest Staves (not needed)

#### Updated

 - Dragon Cult - A Draugr Overhaul
 - Creation Club Farming - Tweaks Enhancements and Quest Expansion
 - Hendraheim - Tweaks and Enhancements



## 1.0.2

### Key Info

 - This update is Save-Safe


### Changes

#### Updated

 - Actually recompiled with the correct version of Rare Curios this time



## 1.0.1

### Key Info

 - This update is Save-Safe


### Changes

#### Updated

 - Extended Guard Dialogue
 - The Dragon Cult - A Draugr Overhaul
 - Recompiled with Bethesda version of Rare Curios instead of Steam (yes the one you download from Bethesda is different from the one you get when you verify files, its wild). Most modlists use this version as they should. If you have a hash error with Rare Curios, you need to delete your copy of Rare Curios and re-download from the creation menu not Steam. Apologies for the inconvenience.



## 1.0.0

### Key Info

 - Release