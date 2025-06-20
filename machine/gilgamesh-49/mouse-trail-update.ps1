Add-Type @"
using System.Runtime.InteropServices;
public class PInvoke {
[DllImport("user32.dll")] public static extern int SystemParametersInfo(int uiAction, int uiParam, int[] pvParam, int fWinIni);
[DllImport("user32.dll")] public static extern int SystemParametersInfo(int uiAction, int uiParam, System.IntPtr pvParam, int fWinIni);
}
"@

$mouse = Get-ItemProperty 'HKCU:\Control Panel\Mouse'

# MouseTrails -> SPI_SETMOUSETRAILS
[PInvoke]::SystemParametersInfo(0x005D, $mouse.MouseTrails, $null, 0)
