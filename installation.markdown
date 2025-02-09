---
layout: page
title: Installation Guide
permalink: /installation/
background_image: true
background_image_url: public/backgrounds/riverwood.png
---

# Contents
- [Requirements](#requirements)
- [Setup](#setup)
- [Installation](#installation)
  - [Install Wabbajack](#install-wabbajack)
  - [Install Winds of the North](#install-winds-of-the-north)
- [Post-Installation](#post-installation-info)
  - [Game Folder](#game-folder)
  - [Widescreen Fixes](#widescreen-fixes)
- [Playing the List](#playing-the-list)
- [Updating the modlist](#updating-the-modlist)
- [Removing the Modlist](#removing-the-modlist)

# Requirements
---

**Winds of the North requires the latest version of [Skyrim Anniversary Edition](https://store.steampowered.com/sub/626153/) on Steam (Currently 1.6.1170)**\
**(GOG or Gamepass not supported)**

The English Steam version of Skyrim is the only supported version.

## Storage Space

<div class="centerdiv">
  <hr class="thin-hr">
</div>

Please note that the below numbers are current estimates and the actual may be larger or smaller depending on version. I highly recommend installing the list on a Solid State Drive, not a traditional HDD.

Downloads: ~50 GB  
Install: ~70 GB  
**TOTAL:** ~120 GB  

 > Wabbajack requires some additional space on your main OS drive for temporary and working files during the installation, this space is not counted towards the total install space of the list for sake of this guide, however Wabbajack roughly accounts for it in the UI.

## Automatic Downloads

<div class="centerdiv">
  <hr class="thin-hr">
</div>

In order for Wabbajack to automatically download mods, you must have a [Premium Membership](https://users.nexusmods.com/account/billing).\
If you do not have a premium membership, Wabbajack will prompt you to manually download the necessary files.

If you activate your premium membership after beginning a Wabbajack install, you can restart Wabbajack to enable automated downloads.

# Setup
---

<div style="text-align: center;">
Before you can install the modlist, there are just a few steps to complete to ensure things go smoothly.
<br>
These steps are only required for installing the Modlist for the first time.
</div>
<br>


## Installing Microsoft Visual C++ Redistribution Package

<div class="centerdiv">
  <hr class="thin-hr">
</div>

 1. Install [Visual C++ x64](https://aka.ms/vs/17/release/vc_redist.x64.exe). **Do not skip this step or the game will crash on startup**

## Steam Setup

<div class="centerdiv">
  <hr class="thin-hr">
</div>

 If you have your Steam Library in Program Files, read [this](https://github.com/LostDragonist/steam-library-setup-tool/wiki/Usage-Guide) and move it elsewhere. Locations such as Desktop, Documents, Downloads, OneDrive, etc. will cause issues with installing and playing the list.\
 I also suggest making use of the [Steam Library Setup Tool](https://github.com/LostDragonist/steam-library-setup-tool/wiki/Usage-Guide) if need be.

## Start the Game Launcher Through Steam

<div class="centerdiv">
  <hr class="thin-hr">
</div>

 1. In your Steam Library, right-click on the menu entry for Skyrim, select `Properties` and then select `Local Files`. Click `Verify Integrity of Game Files` and wait.
 2. Launch the from Steam. You may receive a prompt that your settings were detected or not detected, this does not matter, nor do any options you select here. Simply open the launcher and launch the game.
 3. Once the Skyrim logo appears, you should receive a prompt to "Download All Content?" Accept this option.
 4. If you did not receive a prompt to download, select the Creation Club option from the menu, and you should find a "Download All" prompt in there somewhere. If this message does not appear, you have not purchased the Anniversary Edition Upgrade. Begin again from step 1.
 5. Wait for the download process to complete. Do **NOT** ALT-TAB during this process as it will cause the process to fail and you will have to start over again.
 6. Proceed with the rest of the installation.

# Installation
---

## Install Wabbajack

<div class="centerdiv">
  <hr class="thin-hr">
</div>

 1. Once you have completed pre-installation, download the [latest version of Wabbajack](https://github.com/wabbajack-tools/wabbajack/releases)
 2. Create a folder called "Wabbajack", preferably on an SSD, and extract Wabbajack.exe there. **DO NOT** place it in Program Files, Desktop, Documents, Downloads, OneDrive, etc.

## Install Winds of the North

<div class="centerdiv">
  <hr class="thin-hr">
</div>
 
Downloading and installing Winds of the North can take a while depending on your internet connection and computer. To install Winds of the North, complete the following steps.

- Open Wabbajack and click `Browse Modlists`. Be sure to click the `Show Unofficial Lists` checkbox at the top of the Wabbajack UI.\
- Press the download button on Winds of the North and wait for it to download.

<div style="display: flex; justify-content: center; align-items: center;">
    <img alt="" src="../assets/siteImages/WotnInstallWJ.png" width="70%" style="margin-right: 0.5%;" class="dropshadow responsive-img">
</div>

- Set the installation folder to be somewhere like C:\Games\Winds of the North. **DO NOT place it in Program Files, User folders (such as Desktop, Documents, Downloads, etc.), or in your Skyrim's Steam folder**
> The download location does not need to be on a SSD, but it makes installing faster.
- Press the play button to begin.

<div style="display: flex; justify-content: center; align-items: center;">
    <img alt="" src="../assets/siteImages/WotnWJDownload.png" width="70%" style="margin-right: 0.5%;" class="dropshadow responsive-img">
</div>

- Wabbajack will proceed to download and install all of the mods in the list.
- If the installation is successful then move on to the post installation section. If the installation is unsuccessful, check out the [Troubleshooting Guide](../support/troubleshooting/) or join the [Lost Outpost Discord server](https://discord.gg/WF66mMu) for support.

# Post-Installation Info
---

## Game Folder

Winds of the North uses a Wabbajack feature called Stock Game to keep your Skyrim installation clean. All the files that you need to run the list are in a folder called `Game Root`. You don’t need to copy anything at all.

## Widescreen Fixes

Winds of the North offers some mods to provide Ultrawide and Widescreen Support. Under the **Optional Widescreen** Separator in MO2 you will find some mods that you will want to activate if you are playing on Ultrawide or Widescreen resolutions (21:9 or 32:9).


## Performance Options

Should you find yourself lacking in performance, you may trade in some of the list's visual fidelity for performance by disabling the mods under the "shaders" seperator. If you have a support request, just please mention you have done this in the request. 
Other modifications, such as regenerating LOD, will forfeit support.

# Playing the List
---
 
 - Head over to the installation folder and locate an executable named ModOrganizer.exe and launch it.
 - Make sure "SKSE" is selected, then click the "Run" button in MO2.

<div style="display: flex; justify-content: center; align-items: center;">
  <img alt="" src="../assets/siteImages/mo2.png" width="70%" style="margin-right: 0.5%;" class="dropshadow responsive-img">
</div>

 - Click "New Game".
 - Winds of the North includes "Optional Quick Start" so you may choose to skip the normal Helgen scene, and start at the exit of the Helgen Keep cave.
 - All MCM options that need to be configured have already been pre-configured for you.

# Updating the modlist
---

Versioning for the list will adhere to the following format: `MAJOR.MINOR.PATCH`.
 - `MAJOR`: Any release with a number change here will be considered a major update as at least 1 area of the list was massively overhauled. These updates with **NEVER** be save safe.
 - `MINOR`: Any release with a number change here will be considered a minor update, these updates will usually not be save safe, unless otherwise specified.
 - `PATCH`: Any release with a number change here will be considered a patch, these updates should be save safe and will be used primarily for bugfixes.
 - In some rare cases you may see a fourth number be used, which I will refer to as `HOTFIX`. These list "updates" will be used if the list needs to be recompiled for any reason. There will be no changes in these "updates" as they are purely for maintenance.\
Before updating, please check the [changelog](../changelog/) and back up your saves. You may need to start a new game after certain updates.

Updating is like installing the list. Simply make sure your paths are the same and tick the `overwrite existing modlist` button.

 **Note**: Any mods you have added will be deleted when updating. To make sure that Wabbajack does not delete your added mods upon updating, prefix your mods with **[NoDelete]**.

**ALWAYS** back up saves before an update.\
*Please make sure you back up your saves if you plan on continuing a playthrough across a **save safe** update.*

# Removing the Modlist
Simply delete the entire modlist folder and you should be good to go.
