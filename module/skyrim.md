* <https://fitgirl-repacks.site/the-elder-scrolls-v-skyrim-anniversary-edition/>.
* <https://drive.google.com/file/d/169Wx9r5H98yLsegt7lQdoN80OYcYlZa1/view>.
* <https://www.nexusmods.com/skyrimspecialedition/mods/34705?tab=files&file_id=454679>.
* <https://www.nexusmods.com/skyrimspecialedition/mods/32444?tab=files>.
* <https://skse.silverlock.org/>.

```ini
[General]
bAlwaysActive=1
```

```ini
[Main]

## Level of information printed to the log
#
#    debug
#    verbose
#    message
#    warning
#    error
#    fatal
#
LogLevel=debug

## Automatically adjust some settings which may cause issues.
#
#  Changes:
#
#    iFPSClamp=0
#    uMaxNumPhysicsStepsPerUpdate=3
#    uMaxNumPhysicsStepsPerUpdateComplex=1
#
#  Note: Values are modified in-memory and are not written to Skyrim.ini.
#        Physics values are not modified if HAVOK master switch is off.
#
#  Don't disable unless you know what you're doing.
#
AdjustGameSettings=true


[Render]

## Select the display mode.
#
#    true  - Exclusive fullscreen mode
#    false - Windowed mode
#
#  Note: This option overrides 'bFull Screen' in SkyrimPrefs.ini if uncommented.
# 
Fullscreen=false

## Select windowed or borderless fullscreen mode. Only applies when Fullscreen=false.
#
#    true  - Borderless fullscreen
#    false - Windowed mode
#
#  Note: This option overrides 'bBorderless' in SkyrimPrefs.ini if uncommented.
#
Borderless=true

## Stretch game window across the entire screen in borderless fullscreen mode.
#
#  Use with a flip SwapEffect option for best results.
#
#  Note: For optimal performance and full feature support when upscaling, your 
#        system must have windowed hardware composition support (check the log).
#        Windowed hardware composition only works with flip.
#
BorderlessUpscale=true

## Set the game resolution. Only applies in windowed and borderless fullscreen mode (when Fullscreen=false).
#
#  Provided for convenience. Easily scale or set the resolution in windowed/borderless fullsceen mode.
#
#  Note: These options override iSize W and iSize H in SkyrimPrefs.ini. They have no effect when commented out.
#
Resolution=1440x900
#ResolutionScale=0.75

## Disable swap chain buffer resizing when window dimensions change (e.g. when upscaling).
#
#  Enable if you're experiencing effect issues with ENB when upscaling.
#
DisableBufferResizing=false
#DisableTargetResizing=false

## Enable/disable VSync.
#
#  IMPORTANT: If you're using borderless mode and want to disable VSync, EnableTearing must be set to true.
#
#  Note: This option overrides 'iVSyncPresentInterval' in SkyrimPrefs.ini
#
EnableVSync=true

## VSync present interval, same as 'iVSyncPresentInterval' in SkyrimPrefs.ini. Only applies if EnableVSync=true.
#
#  If SwapEffect is 'discard' or 'sequential':
#    Synchronize presentation after the nth vertical blank.
#
#  If SwapEffect is 'flip_sequential':
#    Synchronize presentation for at least n vertical blanks.
#
#  More info: https://docs.microsoft.com/en-us/windows/win32/api/dxgi/nf-dxgi-idxgiswapchain-present
#
#  Valid range: 1-4
#
#  Provided as a separate option to avoid confusion.
#
#  It's recommended to leave this at the default value (1). Higher values effectively reduce framerate.
#  For example, a value of 2 at 60Hz would cut framerate in half.
#
VSyncPresentInterval=1

## Required for disabling V-Sync in borderless/windowed mode. Only works with a flip SwapEffect option.
#
#  More info: https://docs.microsoft.com/en-us/windows/win32/direct3ddxgi/variable-refresh-rate-displays
#
#  ENB WARNING: Disable this if you have ForceVSync set to true in enblocal.ini, otherwise your game might freeze on startup.
#
EnableTearing=false

## Number of buffers in the swap chain, including the front buffer.
#
#  More info: https://docs.microsoft.com/en-us/windows/win32/api/dxgi/ns-dxgi-dxgi_swap_chain_desc
#
#  Valid range: 1-8
#  
#  Set to 0 to select automatically.
#
#  Note: Borderless fullscreen with flip model requires at least 2, if the value is lower it will be adjusted automatically.
#
SwapBufferCount=0

## Determines how the presentation buffer is handled.
#
#  Valid options:
#
#     auto
#     discard
#     sequential
#     flip_sequential
#     flip_discard
#
#  Options starting with 'flip_' indicate DXGI flip model, a relatively new feature which greatly improves borderless
#  fullscreen performance. While testing I couldn't notice any difference in performance compared to exclusive fullscreen mode.
#  In contrast, the old presentation model suffers lower FPS and noticeable stuttering. Additionally, many features which used
#  to require exclusive fullscreen now work in borderless. I was pleasantly surprised to learn that G-Sync works without having
#  to enable it for windowed mode.
#
#  WARNING: Don't use flip model in exclusive fullscreen mode, the game might freeze on start.
#
#  Read more about DXGI flip model here: https://devblogs.microsoft.com/directx/dxgi-flip-model/
#
#  It's recommended to leave this on auto as the best option will be selected based on detected capabilities.
#
#  Note: Flip model requires at least Windows 8.1 (only flip_sequential supported), but I highly recommend Windows 10 Spring 
#        Creators update or later if you want the best experience.
#
SwapEffect=auto

## Number of frames allowed to be queued for rendering. 
#
#  NOTE: This option was renamed in 0.3.8. In earlier versions the option had no effect.
#
#  Valid range: 1-16 (0 leaves it at default)
#
#  Bethesda default is 2 for SE, 1 for AE.
#
#  WARNING: Values above 2 could have a negative impact on overall performance.
#
#  Tip:
#
#    Try NVIDIA's ultra low latency mode or AMD anti-lag, it may work even better. There 
#    were still occasional stutters with MaxFrameLatency=1 depending on what I was looking 
#    at, ULLM eliminated them completely.

#    Note that ULLM has a fixed FPS penalty. It seems that this is by design. The delta is larger
#    with higher fps, for example when you'd normally get 144 you'll see around 138 with latency set
#    to ultra.
#
#    Keep in mind that driver control panel settings take precedence so this option will be 
#    overriden.
#
MaxFrameLatency=0

## Determines how scaling is done in exclusive fullscreen mode.
#
#  Valid options:
#
#     unspecified
#     centered
#     stretched
#
ScalingMode=unspecified

## Maximum allowed monitor refresh rate. Applies only in exclusive fullscreen mode.
#
#  This overrides Bethesda's hardcoded limitation of 60Hz. The game will request the highest 
#  available refresh rate (as reported by DirectX), but there is no guarantee you'll actually
#  get it. It's completely up to your system.
#
#  You DO NOT NEED TO MESS WITH THIS SETTING unless you want to lower the refresh rate or
#  have a monitor capable of running above 240Hz. This is not a fixed value just an upper 
#  limit of what the game is allowed to request.
#
MaximumRefreshRate=120

## General framerate limit. Applies everywhere, except where more specific limits are set (see below).
#
#  Warning: This plugin replaces the built-in limiter by default, 'bLockFramerate' will have no effect. 
#           If you want to limit the framerate, you'll have to explicitly configure it here.
#
#  Bethesda default: 60
#
FramerateLimit=120

## Determines if the limiter is placed before or after frame presentation.
#
#  Placement can affect performance when a framerate limit is being imposed.
#
#  0 - before (favor consistent frametimes)
#  1 - after  (favor input latency)
#
FramerateLimitMode=0

## General UI framerate limit. Applies everywhere in paused menus, except where more specific limits are set.
#
#  Setting this or more specific options to -1 disables the respective limit explicitly.
#
UIFramerateLimit=0
UIFramerateLimitVSyncOff=true

## Framerate limit for the map. Useful if you want to adjust the map movement speed.
#
UIFramerateLimitMap=0
UIFramerateLimitMapVSyncOff=false

## Framerate limit for the inventory, magic, gift, barter, container and favorites menus. 
#
UIFramerateLimitInventory=0
UIFramerateLimitInventoryVSyncOff=true

## Framerate limit for the journal. 
#
UIFramerateLimitJournal=0
UIFramerateLimitJournalVSyncOff=true

## Framerate limit for custom menus. 
#
UIFramerateLimitCustom=0
UIFramerateLimitCustomVSyncOff=true

## Framerate limit for the main menu. 
#
#  It's recommended to keep this at 60 and UIFramerateLimitMainVSyncOff to false.
#
UIFramerateLimitMain=0
UIFramerateLimitMainVSyncOff=true

## Framerate limit for the race menu. 
#
UIFramerateLimitRace=0
UIFramerateLimitRaceVSyncOff=true

## Framerate limit for the perk tree. 
#
UIFramerateLimitPerk=0
UIFramerateLimitPerkVSyncOff=true

## Framerate limit while reading books. 
#
UIFramerateLimitBook=0
UIFramerateLimitBookVSyncOff=true

## Framerate limit while picking locks. 
#
UIFramerateLimitLockpick=0
UIFramerateLimitLockpickVSyncOff=true

## Framerate limit for the console. 
#
UIFramerateLimitConsole=0
UIFramerateLimitConsoleVSyncOff=true

## Framerate limit for the tween menu. 
#
UIFramerateLimitTween=0
UIFramerateLimitTweenVSyncOff=true

## Framerate limit for the sleep/wait menu. 
#
UIFramerateLimitSleepWait=0
UIFramerateLimitSleepWaitVSyncOff=true

## Framerate limit while loading the game.
#
#  Uncapping the loading scren is supposed to load your game faster, however I've 
#  found no evidence of that. If anything, it might induce ILS or crash your game.
#
#  It's recommended you leave this at 60 and LoadingScreenFramerateLimitVSyncOff=false.
#  If you do choose to uncap, do not set a limit above 120 FPS.
#
LoadingScreenFramerateLimit=60
LoadingScreenFramerateLimitVSyncOff=false

## Additional time to keep the loading screen limit active (in seconds).
#
#  Use this alongisde LoadingScreenFramerateLimit=60 to address some issues
#  which may pop up due to high FPS immediatelly after loading.
#
LoadingScreenLimitExtraTimePostLoad=2
LoadingScreenLimitExtraTime=2


[HAVOK]

## Master switch.
#
#  Set to false to fall back to Skyrim.ini HAVOK settings.
#
Enabled=true

## Adjusts fMaxTime and fMaxTimeComplex dynamically based on current framerate.
#
#  If set to false, fMaxTime and fMaxTimeComplex will be calculated and set automatically based on MaximumFramerate 
#  option (see below), but you'll lose the performance benefit which comes from re-adjusting these values each 
#  frame to match the framerate.
#
#  Consider 'false' as 'static' mode, which calculates physics values automatically so you
#  don't have to.
#
#  Read the description of MaximumFramerate option below for more info.
#
#  It's recommended to leave this enabled.
#
#  Note: In contrast to Havok Fix, the method used here is compatible with any third party OSD tools
#        such as RivaTuner Statistics Server, since it hooks in the engine instead of the D3D libraries.
#
DynamicMaxTimeScaling=true

## fMaxTime and fMaxTimeComplex are not calculated below 
## this threshold.
#
#  Lower values may benefit peformance if your system is struggling to render at 60 FPS.
#
#  Default: 60 
#
MinimumFramerate=60

## fMaxTime and fMaxTimeComplex are not calculated above this threshold.
#   
#  If DynamicMaxTimeScaling=true and this is set to 0, the plugin attempts to determine this value 
#  based on VSync (refresh rate) and FramerateLimit option. If it's unable to do so (for example if VSync
#  is off or mode is borderless fullscreen and no limit is set) it defaults to 240.
# 
#  If DynamicMaxTimeScaling=false, this setting is used to calculate fMaxTime and fMaxTimeComplex once and
#  apply both values. 
#  If DynamicMaxTimeScaling=false and this is set to 0, the plugin attempts to determine this value based 
#  on VSync/refresh rate and FramerateLimit option. If it's unable to do so, it defaults to 60.
#
#  If Fullscreen=true and EnableVSync=true or FramerateLimit is set, it's recommended you set this to 0
#  to let the plugin determine the value automatically.
#  Otherwise make sure it's set a comfortable margin higher than the maximum framerate your machine can 
#  achieve in-game (excluding menus and loading screens) or you will see physics issues. It's recommended
#  to set a framerate limit at or below this value (FramerateLimit option in Render section).
#
MaximumFramerate=120

## Adjust the negative offset of fMaxTimeComplex relative to fMaxTime.
#
#  Valid range: 0 - 30
#
MaxTimeComplexOffset=30

## Adjust amount of damage dealt when hit by physics objects based on frametime. 
#
#  Note that this doesn't fix the faster collision response, only alleviates higher health damage at 
#  higher framerates.
#
#  Since there's a good chance of getting killed in a misfortunate encounter with a kettle even at 60 FPS, 
#  you can reduce or disable damage dealt with PhysicsDamageMult (valid range: 0 - 1).
#
PhysicsDamagePatch=true
PhysicsDamageMult=1

## Lowers HAVOK engine CPU consumption at the expense of physics simulation quality.
#
#  Bethesda uses less demanding physics settings in "complex" scenes like civil war battles. 
#  If this is enabled these settings will be used everywhere.
#
#  Only recommended on CPU-bound low-end systems.
#
PerformanceMode=false

## Add fMaxTime and fMaxTimeComplex to OSD.
#
#  Also indicates which value is currently in use.
#
OSDStatsEnabled=false


[Controls]

## Fixes an issue where you're not able to move in third person at high framerates.
#   
#  This issue can occur when movement is slowed, for example when over-encumbered or when
#  the bow is drawn. Keep in mind that you may experience the issue even at 60 FPS if
#  movement is slowed down enough.
#
#  If necessary, adjust MovementThreshold variable below.
#
ThirdPersonMovementFix=true

## Controls an internal variable related to movement/damping.
#
#  Lower values ensure movement works at lower movement speeds/higher framerate.
#
#  Only in effect when ThirdPersonMovementFix=true
#
#  Valid range: 0.01 - 5
#
#  Bethesda default: 5
#
MovementThreshold=0.25

## Untie first person horizontal look sensitivity from framerate when sitting down
#
SittingHorizontalLookSensitivityFix=true

## Untie map keyboard movement speed from framerate.
#
#  Also normalizes diagonal keyboard movement speed.
#
#  Note: overrides fMapMoveKeyboardSpeed:MapMenu in Skyrim.ini, configure the speed below.
#
MapMoveKeyboardSpeedFix=true

## Speed multiplier for keyboard map movement.
#
#  Only in effect when MapMoveKeyboardSpeedFix=true.
#
#  Valid range: -20 - 20. Negative values reverse the movement direction. 1 is roughly the 
#  same speed as vanilla at 60 FPS.
#
MapMoveKeyboardSpeedMult=1

## Untie auto vanity camera rotation speed from framerate.
#
AutoVanityCameraSpeedFix=true

## Untie dialogue look speed from framerate.
#
DialogueLookSpeedFix=true

## Ramp up look speed incrementally as the cursor approaches the edge of the screen.
#
#  Use [Controls] fPCDialogueLookStart in Skyrim.ini to set distance from the edge where the camera starts moving.
#
DialogueLookSmoothEdge=false

## Untie gamepad cursor speed from framerate.
#
#  Bethesda implemented this fix in 1.6.x (that's why this caused slow cursor movement) but they used
#  the wrong frame timer, one that's affected by global time multiplier. This patch corrects that and 
#  unties cursor movement from in-game timescale.
#
GamepadCursorSpeedFix=true

## Untie lockpick mouse rotation speed from framerate.
#
#  Note that this bug slows down rotation with higher framerates, if you got used to the
#  slower speed adjust [Interface] fPickMouseRotationSpeed in Skyrim.ini (default is 15).
#
LockpickRotationSpeedFix=true

## Untie free camera vertical sensitivity from framerate.
#
FreeCameraVerticalSensitivityFix=false

## Untie free camera movement speed from framerate.
#
FreeCameraMovementSpeedFix=false


## These are only available on AE until Engine Fixes is updated.

## Untie vertical look sensitivity from framerate (EngineFixes)
#
VerticalLookSensitivityFix=true

## Fix camera movement sensitivity during slow time (EngineFixes)
#
SlowTimeCameraMovementFix=true


[Window]

## Locks mouse cursor within the borders of the game window.
#
#  Fixes the invisible runaway mouse glitch plaguing people with multiple monitors who keep a window
#  open on the neighboring monitor and it keeps scrolling while playing the game.
#
LockCursor=true

## Minimize the game window if it loses focus.
#
#  Useful in borderless fullscreen mode if alt-tabbing just pushes the game window to the background
#  instead of minimizing it.
#
#  WARNING: Avoid using this with ENB or ReShade, things might break when alt-tabbing.
#
ForceMinimize=false

## Disables the window ghosting feature.
#
#  Useful in windowed/borderless fullscreen mode.
#
#  Read more: https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-disableprocesswindowsghosting
#
DisableProcessWindowsGhosting=true

## Automatically center the game window on the monitor where it spawns.
#
#  Useful in windowed mode.
#
AutoCenter=false

## Offset the game window position relative to the primary monitor.
#
#  Overrides iLocation X and iLocation Y in Skyrim.ini. Provided for convenience.
#
OffsetX=0
OffsetY=0


[Papyrus]

## Set the maximum time scripts are allowed to run per cycle based on current framerate.
#
#  Normally scripts are given a fixed max. amount of execution time per cycle controlled by
#  fUpdateBudgetMS - 1.2 ms by default, roughly 7% of each cycle at 60 FPS, 17% at 144, 29% at
#  240, .. The higher your framerate, the harder it gets to sustain it under heavy script load.
#
#  This attempts to even things out by adjusting the limit based on time it took to complete 
#  the previous cycle. Less budget is alloted at higher framerates.
#
#  Formula:
#
#    fUpdateBudgetMS = lastCycleTime * (UpdateBudgetBase / 16.66667)
#
#  Note: fUpdateBudgetMS never goes above UpdateBudgetBase (see below).
#
DynamicUpdateBudget=false

## Amount of time scripts are alloted at or below 60 FPS (in milliseconds).
#
#  Recommended to leave at default. If you use a different fUpdateBudgetMS value in Skyrim.ini,
#  set the same here.
#
#  Bethesda default: 1.2
#
UpdateBudgetBase=1.2

## Budget is not calculated beyond this limit.
#
#  Set this at or above your maximum framerate.
#
#  At 144 minimum budget is 0.5 ms, 0.3 ms at 240.
#
#  Valid range: 60 - 300
#
BudgetMaxFPS=240

## Fixes a bad range check in Actor.SetExpressionOverride papyrus function.
#
#  The bug makes "Dialogue Anger" expression unavailable via this function.
#
SetExpressionOverridePatch=true

## Add fUpdateBudgetMS to OSD.
#
OSDStatsEnabled=false

## Add VM overstressed indicator to OSD.
#
#  If enabled, OSD will indicate when the scripting engine is under excessive load. 
#  Keep in mind that it's normal for the VM to become overstressed for short periods, 
#  for instance after fast travelling a bunch of events might fire at once. 
#  However if the indicator is constantly showing, you've got a problem. Usually poorly 
#  made and heavily scripted mods are to blame. Examine the stack to see what's going on.
#
#  In the best case scanario you'll rarely (if ever) see this indicator.
#
OSDWarnVMOverstressed=true

[Miscellaneous]

## Disables scanning missing plugin .ini files. May significantly improve startup times with many plugins.
#
#  By default the engine looks for every single .ini option for each installed plugin, without checking
#  if the .ini file actually exists. Massive waste of time and resources, especially when the user has a
#  heavily modded game.
#
#  Note: This is unrelated to the PrivateProfileRedirector plugin and is fully compatible with it. If you
#        use it alongside that plugin the difference won't be felt, but it still prevents the CPU from doing
#        a bunch of useless work at startup.
#
SkipMissingPluginINI=true

## Filter loadscreens by plugin name.
#
#  LoadScreenAllow and LoadScreenBlock take comma separated plugin names (case-insensitive).
#
#  Example usage:
#
#    Allow only Wyrmstooth and LOTD loadscreens:
#      
#      LoadScreenAllow=Wyrmstooth.esp,LegacyoftheDragonborn.esm
#      LoadScreenBlock=All
#
#    Block only vanilla and DLC loadscreens:
#      
#      LoadScreenAllow=
#      LoadScreenBlock=Skyrim.esm,Dawnguard.esm,Dragonborn.esm,Hearthfires.esm
#
#    Block all loadscreens:
#      
#      LoadScreenAllow=
#      LoadScreenBlock=All
#
#
#  Note: In cases where only loadscreens with conditions are allowed, it is possible that none 
#        will show even if no others are available.
#
LoadScreenFilter=false
LoadScreenAllow=
LoadScreenBlock=All

## Remove all lens flare from weather records.
#
#  This is done in-memory and is not persistent.
#
DisableWeatherLensFlare=false

## Disable actor fade when camera intersects the body.
#
DisableActorFade=false

## Disable player fade when camera intersects the body.
#
DisablePlayerFade=false


[OSD]

## Enable the on-screen display.
#
Enable=true
InitiallyOn=true

## Comma separated list of displayed stats.
#
#    fps                - Framerate
#    bare_fps           - Just the framerate, no formatting
#    frametime          - Frametime
#    bare_frametime     - Just the frametime, no formatting
#    counter            - Frame counter
#    vram               - Video ram usage (used / budget) *
#    all                - Everything
#
#  * Note that this line does not show total amount of memory available but rather
#  the OS allocated budget which can vary based on how much is consumed by other 
#  applications. If usage exceeds the budget, you'll likely experience stuttering. 
#  Requires DXGI 1.4.
#
#  Stats related to specific drivers are configured in their respective sections.
#
Show=bare_fps

## How often the OSD updates (in seconds).
#
UpdateInterval=0.3

## Keys used used to toggle the OSD.
#
#  ComboKey uses built-in constants, ToggleKey is a DX scan code (https://www.creationkit.com/index.php?title=Input_Script)
#
#  ComboKey:
#
#    1 - Left Shift
#    2 - Right Shift
#    3 - Left Control
#    4 - Right Control
#    5 - Left Alt
#    6 - Right Alt
#    7 - Left Win
#    8 - Right Win
#
#  ComboKey=1 and ToggleKey=0xD2 is Left Shift + Insert
#
ComboKey=1
ToggleKey=0xD2

## Align the OSD.
#
#    1 - Top Left
#    2 - Top Right
#    3 - Bottom Left
#    4 - Bottom Right
#
Align=1

## OSD position offset (X Y).
#
Offset=4 4

## Font scale (X Y)
#
#  Omit Y for uniform scaling
#
Scale=1.0 0.9

## Adjust font scale based on amount of lines drawn.
#
AutoScale=true

## Scale font size based on window size.
#
#  Size remains constant when resolution to window size ratio != 1, for example 
#  when playing at non-native resolutions.
#
ScaleToWindow=true

## Set a custom font.
#
#  You can generate bitmaps from fonts installed on your system with MakeSpriteFont.
#  https://github.com/microsoft/DirectXTK/wiki/MakeSpriteFont
#
#  Run the tool with /NoPremultiply and place files in Data\SKSE\Plugins\SDTFonts
#
FontFile=

## Font and outline color (RGBA).
#
Color=255 255 255 255
OutlineColor=0 0 0 255

## Outline offset.
#
OutlineOffset=1
```
