# Sysprep

Sysprep is an advanced utility to create custom install images of Windows. Our usage was not perfected. Installations are time consuming and error prone and should be avoided where possible.

References:

* <https://www.tenforums.com/tutorials/72031-create-windows-10-iso-image-existing-installation.html#Part2>
* <https://community.spiceworks.com/topic/1968586-easiest-way-to-image-and-deploy-customized-windows-10-on-different-hardware>
* <http://andrewpsheehan.blogspot.com/2013/09/windows-81-syprep-fatal-error-winmainhit.html>

Skip `sysprep` generalize UWP app checking by deleting the following lines from `generalize.xml`:

```xml
<sysprepOrder order="0x1A00">...
```

until the next `sysprepOrder`. Check the generated `.wim` via DISM:

```cmd
dism /get-wiminfo /wimfile:D:\install.wim /index:1
```

You should see

```cmd
Edition : Core
Installation : Client
```

Replace the WIM in an original-copy windows image.
