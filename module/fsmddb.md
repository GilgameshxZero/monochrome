# `fsmddb`

`fsmddb` (filesystem markdown database) is an ad-hoc database solution using a collection of plaintext/markdown files on a filesystem, serving also the dual-purpose of  We define `fsmddb` comparatively to a standard relational database, such as `PostgreSQL`.

## Capabilities overview

1. `fsmddb` allows `O(1)` access and modification.
2. `fsmddb` does not support `join`-like, or `aggregate`-like operations.
3. `fsmddb` does not provide column manipulation operations.

All capabilities can be extended to support proper database operations by script-importing into a database, and then script-exporting.

## Markdown column format

Markdown files are typed in a pre-defined format which allows for universal scripting for imports and exports.

Relational database concept|`fsmddb` equivalent
-|-
Primmary key|Filename
Column 1|Markdown title (first line `#`)
Columns 2 through N-1|Markdown title subtitle lines (lines following title)
Final column|A text field encapsulated by all remaining Markdown data

### Primary key naming

Primary keys are named via a joining of segments over `-`. Each segment is a joining of lowercase words over `_`. Words may contain any alphanumeric character. For example, `le_guin-the_wizard_of_earthsea`.

## Script imports and exports

We provide sample scripts to import/export to/from `SQLite` below.
