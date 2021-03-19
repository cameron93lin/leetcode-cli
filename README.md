[![npm version](https://img.shields.io/npm/v/leetcode-cli.svg?style=flat)](https://www.npmjs.com/package/leetcode-cli)
[![Releases](https://img.shields.io/github/release/skygragon/leetcode-cli.svg?style=flat)](https://github.com/skygragon/leetcode-cli/releases)
[![license](https://img.shields.io/npm/l/leetcode-cli.svg?style=flat)](https://github.com/skygragon/leetcode-cli/blob/master/LICENSE)
[![Build](https://img.shields.io/travis/skygragon/leetcode-cli.svg?style=flat)](https://travis-ci.org/skygragon/leetcode-cli)
[![Join chat at https://gitter.im/skygragon/leetcode-cli](https://img.shields.io/gitter/room/skygragon/leetcode-cli.svg?style=flat)](https://gitter.im/skygragon/leetcode-cli)

# leetcode-cli

<img src="https://github.com/skygragon/leetcode-cli/raw/master/docs/logo.png" align="right">

A productive cli tool to enjoy leetcode!

Great thanks to leetcode.com, a really awesome website!

⦙ [Releases](https://skygragon.github.io/leetcode-cli/releases) ⦙
[Install](https://skygragon.github.io/leetcode-cli/install) ⦙
[Docs](https://skygragon.github.io/leetcode-cli/) ⦙
[Commands](https://skygragon.github.io/leetcode-cli/commands) ⦙
[Advanced](https://skygragon.github.io/leetcode-cli/advanced) ⦙
[Plugins](https://github.com/skygragon/leetcode-cli-plugins) ⦙

- A very <kbd>[**EFFICIENT**](#quick-start)</kbd> way to fight questions.
- <kbd>[**CACHING**](https://skygragon.github.io/leetcode-cli/advanced#cache)</kbd> questions to ease offline thinking.
- <kbd>[**GENERATING**](https://skygragon.github.io/leetcode-cli/commands#show)</kbd> source code before coding.
- Live <kbd>[**TEST**](https://skygragon.github.io/leetcode-cli/commands#test)</kbd> and <kbd>[**SUBMIT**](https://skygragon.github.io/leetcode-cli/commands#submit)</kbd> with leetcode.com.
- Download your previous <kbd>[**SUBMISSION**](https://skygragon.github.io/leetcode-cli/commands#submission)</kbd>.
- Trace your coding <kbd>[**STATUS**](https://skygragon.github.io/leetcode-cli/commands#stat)</kbd>.
- <kbd>[**AUTO LOGIN**](https://skygragon.github.io/leetcode-cli/advanced#auto-login)</kbd> among multiple agents with single account.
- Multiple <kbd>[**THEMES**](https://skygragon.github.io/leetcode-cli/advanced#color-themes)</kbd> support.
- More <kbd>[**PLUGINS**](https://skygragon.github.io/leetcode-cli/advanced#plugins)</kbd> to enjoy extra features!

## Personal Change

Add three more features for List command.

1. `-c` to generate .csv format file for all questions. will include companies tag and companies with 3 differnt time period column. Example useage: `leetcode list -c`
   - combine '-z' for Chinese column output Example useage: `leetcode list -c -z` (design for better update experience for [Leetcode Spreadsheet](https://docs.google.com/spreadsheets/d/1XFkQJqZlCMitKRnJXEZpWkAx_1dfjbmLG_RkFoz_TPE/edit?usp=sharing))
2. `-o` to set .csv format file output directory. Default directory: `~/.lc`
3. `-p` to filter questions by 3 different time period:
   - `1` for questions in recent 0~6 months
   - `2` for questions in recent one year
   - `3` for questions in recent two years
   - **Should be used with `-t` and with company filter words**
   - Example useage: `leetcode list -t netfilx -p 1`

Add updateData function for Company plugin. function will include following feature.

1. Update company tag if current user is vip user.
2. Will use default value to set company tag if current user is not vip user.(data updated at 2021.03.19)
3. Will store current company tags setting in `~/.lc/leetcode/cache/COMPONIES.json` and `~/.lc/leetcode/cache/TAGS.json` and try to update it if the file is missing.

## Screenshot

<kbd><img src="https://github.com/skygragon/leetcode-cli/raw/master/docs/screenshots/intro.2018.01.13.gif" /></kbd>

## Quick Start

    Read help first                         $ leetcode help
    Login with your leetcode account        $ leetcode user -l
    Browse all questions                    $ leetcode list
    Choose one question                     $ leetcode show 1 -g -l cpp
    Coding it!
    Run test(s) and pray...                 $ leetcode test ./two-sum.cpp -t '[3,2,4]\n7'
    Submit final solution!                  $ leetcode submit ./two-sum.cpp
