## [v2026.8.31] - 2026-08-31

[Release notes](https://github.com/N6REJ/repo-file-sync-action/releases/tag/v2026.8.31) · [Compare](https://github.com/N6REJ/repo-file-sync-action/compare/v1.0.2...v2026.8.31) · [Tag](https://github.com/N6REJ/repo-file-sync-action/tree/v2026.8.31) · Archive ([zip](https://github.com/N6REJ/repo-file-sync-action/archive/v2026.8.31.zip) · [tar.gz](https://github.com/N6REJ/repo-file-sync-action/archive/v2026.8.31.tar.gz))

## [v1.0.2] - 2026-08-31

[Release notes](https://github.com/N6REJ/repo-file-sync-action/releases/tag/v1.0.2) · [Compare](https://github.com/N6REJ/repo-file-sync-action/compare/v1.0.1...v1.0.2) · [Tag](https://github.com/N6REJ/repo-file-sync-action/tree/v1.0.2) · Archive ([zip](https://github.com/N6REJ/repo-file-sync-action/archive/v1.0.2.zip) · [tar.gz](https://github.com/N6REJ/repo-file-sync-action/archive/v1.0.2.tar.gz))

## [v1.0.1] - 2026-08-31

[Release notes](https://github.com/N6REJ/repo-file-sync-action/releases/tag/v1.0.1) · [Compare](https://github.com/N6REJ/repo-file-sync-action/compare/v1.0.0...v1.0.1) · [Tag](https://github.com/N6REJ/repo-file-sync-action/tree/v1.0.1) · Archive ([zip](https://github.com/N6REJ/repo-file-sync-action/archive/v1.0.1.zip) · [tar.gz](https://github.com/N6REJ/repo-file-sync-action/archive/v1.0.1.tar.gz))

## [v1.0.0] - 2026-08-31

[Release notes](https://github.com/N6REJ/repo-file-sync-action/releases/tag/v1.0.0) · [Tag](https://github.com/N6REJ/repo-file-sync-action/tree/v1.0.0) · Archive ([zip](https://github.com/N6REJ/repo-file-sync-action/archive/v1.0.0.zip) · [tar.gz](https://github.com/N6REJ/repo-file-sync-action/archive/v1.0.0.tar.gz))

### New features

- [`a863fe8`](https://github.com/N6REJ/repo-file-sync-action/commit/a863fe8)  Add support for directories [skip ci]
- [`35e1508`](https://github.com/N6REJ/repo-file-sync-action/commit/35e1508) Cleanup tmp directories
- [`18215cb`](https://github.com/N6REJ/repo-file-sync-action/commit/18215cb)  Support custom GitHub Enterprise Host
- [`2a4e127`](https://github.com/N6REJ/repo-file-sync-action/commit/2a4e127)  Check for and overwrite existing PR
- [`d359236`](https://github.com/N6REJ/repo-file-sync-action/commit/d359236)  Add skip PR option #14
(Issues: [`#14`](https://github.com/N6REJ/repo-file-sync-action/issues/14))- [`b557527`](https://github.com/N6REJ/repo-file-sync-action/commit/b557527)  Add option to exclude certain files when syncing directories #26
(Issues: [`#26`](https://github.com/N6REJ/repo-file-sync-action/issues/26))- [`de55684`](https://github.com/N6REJ/repo-file-sync-action/commit/de55684)  Add branch prefix option #32
(Issues: [`#32`](https://github.com/N6REJ/repo-file-sync-action/issues/32))- [`6f08f7d`](https://github.com/N6REJ/repo-file-sync-action/commit/6f08f7d)  Add COMMIT_BODY option (#44)
(Issues: [`#44`](https://github.com/N6REJ/repo-file-sync-action/issues/44))- [`2e2ce4d`](https://github.com/N6REJ/repo-file-sync-action/commit/2e2ce4d) Allow same repository with different branches (#52)
(Issues: [`#52`](https://github.com/N6REJ/repo-file-sync-action/issues/52))- [`4a9f0ed`](https://github.com/N6REJ/repo-file-sync-action/commit/4a9f0ed) Add deleteOrphaned option to delete files in the target when they are deleted in the source (#69)
(Issues: [`#69`](https://github.com/N6REJ/repo-file-sync-action/issues/69))- [`d910669`](https://github.com/N6REJ/repo-file-sync-action/commit/d910669)  Add PR_BODY option (#80)
(Issues: [`#80`](https://github.com/N6REJ/repo-file-sync-action/issues/80) [`#78`](https://github.com/N6REJ/repo-file-sync-action/issues/78))- [`4e6eff1`](https://github.com/N6REJ/repo-file-sync-action/commit/4e6eff1)  Add option to provide an installation token instead of a PAT (#91)
(Issues: [`#91`](https://github.com/N6REJ/repo-file-sync-action/issues/91))- [`c03c7b0`](https://github.com/N6REJ/repo-file-sync-action/commit/c03c7b0)  Add option to use original commit message (#96)
(Issues: [`#96`](https://github.com/N6REJ/repo-file-sync-action/issues/96) [`#13`](https://github.com/N6REJ/repo-file-sync-action/issues/13))- [`0e59a9c`](https://github.com/N6REJ/repo-file-sync-action/commit/0e59a9c) Display notice with PR link (#101)
(Issues: [`#101`](https://github.com/N6REJ/repo-file-sync-action/issues/101) [`#100`](https://github.com/N6REJ/repo-file-sync-action/issues/100))- [`8c50c0d`](https://github.com/N6REJ/repo-file-sync-action/commit/8c50c0d)  Add COMMIT_AS_PR_TITLE option (#115)
(Issues: [`#115`](https://github.com/N6REJ/repo-file-sync-action/issues/115) [`#103`](https://github.com/N6REJ/repo-file-sync-action/issues/103))- [`f9fdef0`](https://github.com/N6REJ/repo-file-sync-action/commit/f9fdef0)  Save the PR URLs in the &#x60;pull_request_urls&#x60; output (#121)
(Issues: [`#121`](https://github.com/N6REJ/repo-file-sync-action/issues/121))- [`80e77fd`](https://github.com/N6REJ/repo-file-sync-action/commit/80e77fd)  Add fork workflow functionality (#135)
(Issues: [`#135`](https://github.com/N6REJ/repo-file-sync-action/issues/135) [`#133`](https://github.com/N6REJ/repo-file-sync-action/issues/133))- [`a547f3c`](https://github.com/N6REJ/repo-file-sync-action/commit/a547f3c)  Verified commits when using GH_INSTALLATION_TOKEN as authentication (#153)
(Issues: [`#153`](https://github.com/N6REJ/repo-file-sync-action/issues/153))- [`65a0234`](https://github.com/N6REJ/repo-file-sync-action/commit/65a0234)  Request PR review from users and teams (#162)
(Issues: [`#162`](https://github.com/N6REJ/repo-file-sync-action/issues/162))- [`a2677cb`](https://github.com/N6REJ/repo-file-sync-action/commit/a2677cb)  Add support for compiling Jinja-style templates with Nunjucks in sync process (#271)
(Issues: [`#271`](https://github.com/N6REJ/repo-file-sync-action/issues/271))- [`2d309a2`](https://github.com/N6REJ/repo-file-sync-action/commit/2d309a2)  Added support for fine grained tokens (#268)
(Issues: [`#268`](https://github.com/N6REJ/repo-file-sync-action/issues/268))- [`eb95ce4`](https://github.com/N6REJ/repo-file-sync-action/commit/eb95ce4)  Add possibility to exclude subfolders from synced folders (#274)
(Issues: [`#274`](https://github.com/N6REJ/repo-file-sync-action/issues/274))- [`5c87303`](https://github.com/N6REJ/repo-file-sync-action/commit/5c87303)  Add GHES support (#291)
(Issues: [`#291`](https://github.com/N6REJ/repo-file-sync-action/issues/291))

### Updates

- [`c4c6e88`](https://github.com/N6REJ/repo-file-sync-action/commit/c4c6e88)  Remove pattern option [skip ci]
- [`22cc9e5`](https://github.com/N6REJ/repo-file-sync-action/commit/22cc9e5)  Remove delete option [skip ci]
- [`5e590a1`](https://github.com/N6REJ/repo-file-sync-action/commit/5e590a1)  Improve code structure/readability
- [`1e8745f`](https://github.com/N6REJ/repo-file-sync-action/commit/1e8745f)  Move exec function to helpers
- [`b3d8a1e`](https://github.com/N6REJ/repo-file-sync-action/commit/b3d8a1e)  Use external library for input parsing
- [`cee8520`](https://github.com/N6REJ/repo-file-sync-action/commit/cee8520)  Throttle requests when hitting rate limit, fixes #49
(Issues: [`#49`](https://github.com/N6REJ/repo-file-sync-action/issues/49))- [`ec2d589`](https://github.com/N6REJ/repo-file-sync-action/commit/ec2d589)  Combine GitHub and Git into one class
- [`c113c62`](https://github.com/N6REJ/repo-file-sync-action/commit/c113c62)   Mark action as failed if error occurs during sync
(Issues: [`#95`](https://github.com/N6REJ/repo-file-sync-action/issues/95))- [`6f1bf85`](https://github.com/N6REJ/repo-file-sync-action/commit/6f1bf85)  Move to ESM (#288)
(Issues: [`#288`](https://github.com/N6REJ/repo-file-sync-action/issues/288))- [`bd5425a`](https://github.com/N6REJ/repo-file-sync-action/commit/bd5425a)  Make messages compatible with conventional commits (#290)
(Issues: [`#290`](https://github.com/N6REJ/repo-file-sync-action/issues/290))

### Bug fixes

- [`bb0c4aa`](https://github.com/N6REJ/repo-file-sync-action/commit/bb0c4aa)  Use Node v12 [skip ci]
- [`1266e84`](https://github.com/N6REJ/repo-file-sync-action/commit/1266e84)  Use run_id instead of run_number [skip ci]
- [`40b7915`](https://github.com/N6REJ/repo-file-sync-action/commit/40b7915)  Fix parsing of multiple groups
- [`b7e5310`](https://github.com/N6REJ/repo-file-sync-action/commit/b7e5310)  Fix parsing of boolean config options [skip-ci]
- [`d7fe133`](https://github.com/N6REJ/repo-file-sync-action/commit/d7fe133)  Parse boolean action input as actual boolean
- [`9dc51bf`](https://github.com/N6REJ/repo-file-sync-action/commit/9dc51bf)  Use fs-extra instead of actions/io #15
(Issues: [`#15`](https://github.com/N6REJ/repo-file-sync-action/issues/15))- [`04ec06a`](https://github.com/N6REJ/repo-file-sync-action/commit/04ec06a)  Return rest api from octokit
- [`6e6698c`](https://github.com/N6REJ/repo-file-sync-action/commit/6e6698c)  Allow branch name to contain slash (#57)
(Issues: [`#57`](https://github.com/N6REJ/repo-file-sync-action/issues/57))- [`013b028`](https://github.com/N6REJ/repo-file-sync-action/commit/013b028)  Do not delete excluded files if deleteOrphaned is true (#98)
(Issues: [`#98`](https://github.com/N6REJ/repo-file-sync-action/issues/98) [`#97`](https://github.com/N6REJ/repo-file-sync-action/issues/97))- [`7f838d5`](https://github.com/N6REJ/repo-file-sync-action/commit/7f838d5)  Trim whitespace on repos list (#111)
(Issues: [`#111`](https://github.com/N6REJ/repo-file-sync-action/issues/111))- [`0abefcc`](https://github.com/N6REJ/repo-file-sync-action/commit/0abefcc)  Check if exclude exists before using it (#114)
(Issues: [`#114`](https://github.com/N6REJ/repo-file-sync-action/issues/114))- [`53d0397`](https://github.com/N6REJ/repo-file-sync-action/commit/53d0397)  Fix rate limit issue (#132)
(Issues: [`#132`](https://github.com/N6REJ/repo-file-sync-action/issues/132) [`#126`](https://github.com/N6REJ/repo-file-sync-action/issues/126))- [`3b3aefb`](https://github.com/N6REJ/repo-file-sync-action/commit/3b3aefb)  Fix assigning labels and assignees, broken by FORK #146
(Issues: [`#146`](https://github.com/N6REJ/repo-file-sync-action/issues/146))- [`eb3a718`](https://github.com/N6REJ/repo-file-sync-action/commit/eb3a718)  Add trailing slash to destination directories
- [`4302bf5`](https://github.com/N6REJ/repo-file-sync-action/commit/4302bf5)  Fix bug introduced by last release
- [`ea27671`](https://github.com/N6REJ/repo-file-sync-action/commit/ea27671)  Include hidden files in check for orphaned files (#160)
(Issues: [`#160`](https://github.com/N6REJ/repo-file-sync-action/issues/160))- [`8f9e9fd`](https://github.com/N6REJ/repo-file-sync-action/commit/8f9e9fd)  Fix commit message escaping (#164)
(Issues: [`#164`](https://github.com/N6REJ/repo-file-sync-action/issues/164))- [`899abc4`](https://github.com/N6REJ/repo-file-sync-action/commit/899abc4)  Fix replace and deleteOrphaned options (#166)
(Issues: [`#166`](https://github.com/N6REJ/repo-file-sync-action/issues/166))- [`0e2c893`](https://github.com/N6REJ/repo-file-sync-action/commit/0e2c893)  Fix verified commits (#163)
(Issues: [`#163`](https://github.com/N6REJ/repo-file-sync-action/issues/163))- [`64a0312`](https://github.com/N6REJ/repo-file-sync-action/commit/64a0312)  Sanitize &#x60;/.&#x60; from branch name (#200)
(Issues: [`#200`](https://github.com/N6REJ/repo-file-sync-action/issues/200))- [`f04e1cc`](https://github.com/N6REJ/repo-file-sync-action/commit/f04e1cc)  Pin node-readfiles
- [`b598643`](https://github.com/N6REJ/repo-file-sync-action/commit/b598643)  Fix SKIP_PR option for runs with installation token (#232)
(Issues: [`#232`](https://github.com/N6REJ/repo-file-sync-action/issues/232) [`#153`](https://github.com/N6REJ/repo-file-sync-action/issues/153))- [`ca2043b`](https://github.com/N6REJ/repo-file-sync-action/commit/ca2043b)  Don&#x27;t crash while trying to parse a diff for binary files, fix #128 (#242)
(Issues: [`#128`](https://github.com/N6REJ/repo-file-sync-action/issues/128) [`#242`](https://github.com/N6REJ/repo-file-sync-action/issues/242))- [`ed3f645`](https://github.com/N6REJ/repo-file-sync-action/commit/ed3f645)  Fix lint errors
- [`5212d28`](https://github.com/N6REJ/repo-file-sync-action/commit/5212d28)  Ignore &#x60;.git&#x60; folder when checking orphaned files (#287)
(Issues: [`#287`](https://github.com/N6REJ/repo-file-sync-action/issues/287))- [`d2b8086`](https://github.com/N6REJ/repo-file-sync-action/commit/d2b8086)  Fix linting and exclude
- [`7f7a929`](https://github.com/N6REJ/repo-file-sync-action/commit/7f7a929)  Fix esm imports
- [`899c636`](https://github.com/N6REJ/repo-file-sync-action/commit/899c636)  Create Commit tree using GitHub API (#321)
(Issues: [`#321`](https://github.com/N6REJ/repo-file-sync-action/issues/321) [`#246`](https://github.com/N6REJ/repo-file-sync-action/issues/246))- [`73bbb11`](https://github.com/N6REJ/repo-file-sync-action/commit/73bbb11)  fix semantic-release plugin function signatures

### Security issues

- [`56ab275`](https://github.com/N6REJ/repo-file-sync-action/commit/56ab275)  Update action to use node v16 (#261)
(Issues: [`#261`](https://github.com/N6REJ/repo-file-sync-action/issues/261))- [`88a3448`](https://github.com/N6REJ/repo-file-sync-action/commit/88a3448)  Update action to Node 20 (#331)
(Issues: [`#331`](https://github.com/N6REJ/repo-file-sync-action/issues/331) [`#332`](https://github.com/N6REJ/repo-file-sync-action/issues/332))- [`c903723`](https://github.com/N6REJ/repo-file-sync-action/commit/c903723)  Disable credential persistence in release workflow checkout

### Dependency updates

- [`4c44045`](https://github.com/N6REJ/repo-file-sync-action/commit/4c44045)  Bump eslint from 7.21.0 to 7.22.0 (#12)
(Issues: [`#12`](https://github.com/N6REJ/repo-file-sync-action/issues/12))- [`bd44655`](https://github.com/N6REJ/repo-file-sync-action/commit/bd44655)  Update dependencies
- [`000bf45`](https://github.com/N6REJ/repo-file-sync-action/commit/000bf45)  Bump eslint from 7.24.0 to 7.25.0 (#29)
(Issues: [`#29`](https://github.com/N6REJ/repo-file-sync-action/issues/29))- [`4831ccc`](https://github.com/N6REJ/repo-file-sync-action/commit/4831ccc)  Update dependencies
- [`060be53`](https://github.com/N6REJ/repo-file-sync-action/commit/060be53)  Update dependencies
- [`228eceb`](https://github.com/N6REJ/repo-file-sync-action/commit/228eceb)  Use latest @actions/github version
- [`75e0b78`](https://github.com/N6REJ/repo-file-sync-action/commit/75e0b78)  Update dependencies
- [`3f93a28`](https://github.com/N6REJ/repo-file-sync-action/commit/3f93a28)  Upgrade dependencies
- [`e62f3bd`](https://github.com/N6REJ/repo-file-sync-action/commit/e62f3bd)  Bump action-input-parser from 1.2.6 to 1.2.7
- [`9ecd32e`](https://github.com/N6REJ/repo-file-sync-action/commit/9ecd32e)  Bump eslint from 7.29.0 to 7.30.0
- [`1a071eb`](https://github.com/N6REJ/repo-file-sync-action/commit/1a071eb)  Bump action-input-parser from 1.2.7 to 1.2.8
- [`1dd7e0a`](https://github.com/N6REJ/repo-file-sync-action/commit/1dd7e0a)  Bump @vercel/ncc from 0.28.6 to 0.29.0
- [`334da0b`](https://github.com/N6REJ/repo-file-sync-action/commit/334da0b)  Bump action-input-parser from 1.2.8 to 1.2.9
- [`ed856b2`](https://github.com/N6REJ/repo-file-sync-action/commit/ed856b2)  Bump eslint from 7.30.0 to 7.31.0
- [`9e90f1f`](https://github.com/N6REJ/repo-file-sync-action/commit/9e90f1f)  Bump action-input-parser from 1.2.9 to 1.2.10
- [`b848ad5`](https://github.com/N6REJ/repo-file-sync-action/commit/b848ad5)  Bump eslint from 7.31.0 to 7.32.0
- [`fe7d8a0`](https://github.com/N6REJ/repo-file-sync-action/commit/fe7d8a0)  Bump action-input-parser from 1.2.10 to 1.2.11
- [`ef72279`](https://github.com/N6REJ/repo-file-sync-action/commit/ef72279)  Bump action-input-parser from 1.2.11 to 1.2.12
- [`a0ee16b`](https://github.com/N6REJ/repo-file-sync-action/commit/a0ee16b)  Upgrade dependencies
- [`2bad7c1`](https://github.com/N6REJ/repo-file-sync-action/commit/2bad7c1)  Bump @vercel/ncc from 0.29.0 to 0.29.1
- [`a2b31de`](https://github.com/N6REJ/repo-file-sync-action/commit/a2b31de)  Bump action-input-parser from 1.2.12 to 1.2.13
- [`a7e270f`](https://github.com/N6REJ/repo-file-sync-action/commit/a7e270f)  Bump @vercel/ncc from 0.29.1 to 0.29.2
- [`427b453`](https://github.com/N6REJ/repo-file-sync-action/commit/427b453)  Bump @actions/core from 1.4.0 to 1.5.0
- [`daa09dd`](https://github.com/N6REJ/repo-file-sync-action/commit/daa09dd)  Bump action-input-parser from 1.2.13 to 1.2.14
- [`e25059e`](https://github.com/N6REJ/repo-file-sync-action/commit/e25059e)  Bump @vercel/ncc from 0.29.2 to 0.30.0
- [`5b9070f`](https://github.com/N6REJ/repo-file-sync-action/commit/5b9070f)  Bump action-input-parser from 1.2.14 to 1.2.15
- [`c4319ab`](https://github.com/N6REJ/repo-file-sync-action/commit/c4319ab)  Bump action-input-parser from 1.2.15 to 1.2.16
- [`3007ff6`](https://github.com/N6REJ/repo-file-sync-action/commit/3007ff6)  Bump @octokit/plugin-throttling from 3.5.1 to 3.5.2
- [`16e7e90`](https://github.com/N6REJ/repo-file-sync-action/commit/16e7e90)  Bump @vercel/ncc from 0.30.0 to 0.31.0
- [`d19a71d`](https://github.com/N6REJ/repo-file-sync-action/commit/d19a71d)  Bump action-input-parser from 1.2.16 to 1.2.17
- [`ea75b37`](https://github.com/N6REJ/repo-file-sync-action/commit/ea75b37)  Bump @vercel/ncc from 0.31.0 to 0.31.1
- [`25c6114`](https://github.com/N6REJ/repo-file-sync-action/commit/25c6114)  Bump action-input-parser from 1.2.17 to 1.2.18
- [`79cf15c`](https://github.com/N6REJ/repo-file-sync-action/commit/79cf15c)  Bump action-input-parser from 1.2.18 to 1.2.19
- [`45e2975`](https://github.com/N6REJ/repo-file-sync-action/commit/45e2975)  Bump @actions/core from 1.5.0 to 1.6.0
- [`9a800c0`](https://github.com/N6REJ/repo-file-sync-action/commit/9a800c0)  Bump action-input-parser from 1.2.19 to 1.2.20
- [`cf1dbf7`](https://github.com/N6REJ/repo-file-sync-action/commit/cf1dbf7)  Bump action-input-parser from 1.2.20 to 1.2.21
- [`4e18740`](https://github.com/N6REJ/repo-file-sync-action/commit/4e18740)  Bump action-input-parser from 1.2.21 to 1.2.22
- [`69a746d`](https://github.com/N6REJ/repo-file-sync-action/commit/69a746d)  Bump @vercel/ncc from 0.31.1 to 0.32.0
- [`1e2c979`](https://github.com/N6REJ/repo-file-sync-action/commit/1e2c979)  Bump action-input-parser from 1.2.22 to 1.2.23
- [`ecbb6bc`](https://github.com/N6REJ/repo-file-sync-action/commit/ecbb6bc)  Bump @vercel/ncc from 0.32.0 to 0.33.0
- [`55662fb`](https://github.com/N6REJ/repo-file-sync-action/commit/55662fb)  Bump action-input-parser from 1.2.23 to 1.2.24
- [`3863803`](https://github.com/N6REJ/repo-file-sync-action/commit/3863803)  Bump @vercel/ncc from 0.33.0 to 0.33.1
- [`54932d2`](https://github.com/N6REJ/repo-file-sync-action/commit/54932d2)  Bump action-input-parser from 1.2.24 to 1.2.25
- [`a02872f`](https://github.com/N6REJ/repo-file-sync-action/commit/a02872f)  Bump action-input-parser from 1.2.25 to 1.2.26
- [`8555855`](https://github.com/N6REJ/repo-file-sync-action/commit/8555855)  Bump action-input-parser from 1.2.26 to 1.2.27
- [`99ea487`](https://github.com/N6REJ/repo-file-sync-action/commit/99ea487)  Bump @vercel/ncc from 0.33.1 to 0.33.2
- [`a76f286`](https://github.com/N6REJ/repo-file-sync-action/commit/a76f286)  Bump @vercel/ncc from 0.33.2 to 0.33.3
- [`af3ff1b`](https://github.com/N6REJ/repo-file-sync-action/commit/af3ff1b)  Bump fs-extra from 10.0.0 to 10.0.1
- [`36cbece`](https://github.com/N6REJ/repo-file-sync-action/commit/36cbece)  Bump @octokit/plugin-throttling from 3.5.2 to 3.6.1
- [`c17e3fc`](https://github.com/N6REJ/repo-file-sync-action/commit/c17e3fc)  Bump action-input-parser from 1.2.27 to 1.2.28
- [`f9b6739`](https://github.com/N6REJ/repo-file-sync-action/commit/f9b6739)  Bump @octokit/core from 3.5.1 to 3.6.0
- [`e7b3f5a`](https://github.com/N6REJ/repo-file-sync-action/commit/e7b3f5a)  Bump action-input-parser from 1.2.28 to 1.2.29
- [`a046fe1`](https://github.com/N6REJ/repo-file-sync-action/commit/a046fe1)  Bump @octokit/plugin-throttling from 3.6.1 to 3.6.2
- [`8ddff85`](https://github.com/N6REJ/repo-file-sync-action/commit/8ddff85)  Bump action-input-parser from 1.2.29 to 1.2.30
- [`b58f515`](https://github.com/N6REJ/repo-file-sync-action/commit/b58f515)  Bump action-input-parser from 1.2.30 to 1.2.31
- [`2831fde`](https://github.com/N6REJ/repo-file-sync-action/commit/2831fde)  Bump @actions/github from 5.0.0 to 5.0.1
- [`0425b26`](https://github.com/N6REJ/repo-file-sync-action/commit/0425b26)  Bump @vercel/ncc from 0.33.3 to 0.33.4
- [`d999148`](https://github.com/N6REJ/repo-file-sync-action/commit/d999148)  Bump fs-extra from 10.0.1 to 10.1.0
- [`0bf4dea`](https://github.com/N6REJ/repo-file-sync-action/commit/0bf4dea)  Bump @actions/core from 1.6.0 to 1.7.0
- [`1ec3cb1`](https://github.com/N6REJ/repo-file-sync-action/commit/1ec3cb1)  Bump action-input-parser from 1.2.31 to 1.2.32
- [`b3c326d`](https://github.com/N6REJ/repo-file-sync-action/commit/b3c326d)  Bump @actions/core from 1.7.0 to 1.8.0
- [`70ceb48`](https://github.com/N6REJ/repo-file-sync-action/commit/70ceb48)  Bump @actions/core from 1.8.0 to 1.8.1
- [`944a918`](https://github.com/N6REJ/repo-file-sync-action/commit/944a918)  Bump @actions/github from 5.0.1 to 5.0.2
- [`26b80ac`](https://github.com/N6REJ/repo-file-sync-action/commit/26b80ac)  Bump @actions/github from 5.0.2 to 5.0.3
- [`e40c856`](https://github.com/N6REJ/repo-file-sync-action/commit/e40c856)  Bump @actions/core from 1.8.1 to 1.8.2
- [`5d88df6`](https://github.com/N6REJ/repo-file-sync-action/commit/5d88df6)  Bump @vercel/ncc from 0.33.4 to 0.34.0
- [`d51e600`](https://github.com/N6REJ/repo-file-sync-action/commit/d51e600)  Bump action-input-parser from 1.2.32 to 1.2.33
- [`b77d978`](https://github.com/N6REJ/repo-file-sync-action/commit/b77d978)  Bump node-readfiles from 0.2.0 to 0.3.0

### Breaking changes

- [`75a118d`](https://github.com/N6REJ/repo-file-sync-action/commit/75a118d)  First release
