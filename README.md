# DISCLAIMER

> This template is a solution to specific needs that are relevant for us now.  
> It does not pretend to be a comprehensive use for all cases.
>
> The template uses what we consider to be the best libraries at the moment.
>
> The template may change in the future!  
> Use it at your own risk.

## Initialize this template

```sh
pnpm run init
```

#### Initialization process

1. Get all available static information about the current repository:
    - Git repository owner
    - Git repository name
    - Folder name
    - Current year for license
2. Run the interactive menu for clarification the collected information and
   for asking additional questions to obtain information that cannot be obtained
   from static code
    - Package name (default: folder name)
    - Package description (default: empty)
    - Package version (default: 0.0.0)
    - Package author (default: Git repository owner)
    - Package author email (default: Git repository owner email)
    - Repository URL (default: Git repository URL)
    - License owner (default: Git repository owner)
3. Replace all text markers in the templates with the collected information
    - `<root_dir>/LICENSE`
    - `<root_dir>/package.json`
    - `<root_dir>/README.md`
4. Clean current README.md
    - Cut off all text before the line with the marker "CUT OFF HERE"
5. Delete the initialization sources
    - delete `<root>/src/init` folder
    - delete unneeded dependencies from `package.json`

[comment]: <> (CUT_OFF_HERE)

# {#PACKAGE_NAME#}

[![NPM version badge](https://img.shields.io/npm/v/{#PACKAGE_NAME#}.svg)](https://www.npmjs.com/package/{#PACKAGE_NAME#})
[![NPM license badge](https://img.shields.io/npm/l/{#PACKAGE_NAME#}.svg)](https://www.npmjs.com/package/{#PACKAGE_NAME#})
[![CI Test and Build]({#REPO_URL#}/actions/workflows/ci.yml/badge.svg)]({#REPO_URL#}/actions/workflows/ci.yml)

> _{#PACKAGE_DESCRIPTION#}_

## Coverage

| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](#statements#) | ![Branches](#branches#) | ![Functions](#functions#) | ![Lines](#lines#) |

---
