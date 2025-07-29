---
layout: page
title: Troubleshooting Guide
permalink: /support/troubleshooting/
background_image: true
background_image_url: public/stars.png
---

<div style="text-align: center;">
The troubleshooting guide contains some common problems and their potential solutions.
<br>
If you do not see your issue listed below, or the fix did not work, then head over to the <a href="https://discord.gg/WF66mMu">Lost Outpost Discord server</a> and make a support post.
</div>

<div class="centerdiv">
  <hr class="thin-hr">
</div>

## I had a crash in game, what do I do?

Please open a report under the support channel in the [Lost Outpost Discord server](https://discord.gg/WF66mMu). You should include details about what you were doing when the crash happened, what to do to reproduce the crash if possible, and last but certainly not least, a crashlog pertaining to the CTD. **Be sure to include your crashlogs in the report.**

## Where can I find my crash logs?

`Documents\My Games\Skyrim Special Edition\SKSE`

<div class="centerdiv">
  <hr class="thin-hr">
</div>

## SKSE Plugin Loading error after launch

<div class="centerdiv">
    <img alt="" src="{{ site.baseurl }}/assets/siteImages/vccmissing.png" width="25%" style="margin-right: 0.5%;" class="dropshadow responsive-img">
</div>

**Fix:** Its very likely that you have skipped installation step for Visual C++ Redistribution Package.\
It can be found here: [Visual C++ x64](https://aka.ms/vs/17/release/vc_redist.x64.exe)

## "Unable to download Data_ccbgssse037-curios"

1. Navigate to your Steam Skyrim Data folder
2. Within the data folder, delete the 2 curios files "ccbgssse037-curios.bsa" and "ccbgssse037-curios.esl"
3. Launch Skyrim through Steam and click the Creations button on the main menu
4. Find and download the Rare Curios CC files
5. Exit the game
6. Rerun the Wabbajack installer

## "Game hangs up at compiling shaders when launching"

This list includes "Community Shaders". These shaders do not support intel integrated graphics. If you are not using an Nvidia, AMD, or Intel ARC gpu then you need to disable all mods under the "Shaders" separator.