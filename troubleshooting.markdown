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
    <img src="{{ site.baseurl }}/assets/siteImages/vccmissing.png" width="25%" style="margin-right: 0.5%;" class="dropshadow">
</div>

**Fix:** Its very likely that you have skipped installation step for Visual C++ Redistribution Package.\
It can be found here: [Visual C++ x64](https://aka.ms/vs/17/release/vc_redist.x64.exe)