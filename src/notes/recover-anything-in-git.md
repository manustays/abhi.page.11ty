---
layout: note
title: Recover anything in git with 'git reflog'
description: How to use the 'git reflog' command to recover from anything in git – a hard reset, a merge, a rebase, etc.
keywords: reflog, reset
emoji: 🕵️‍♀️
date: 2021-01-18T18:56:00+05:30
tags:
  - git
links:
  - http://gitready.com/intermediate/2009/02/09/reflog-your-safety-net
---

To recover from almost anything in git, even if you have done a `git reset --hard origin/main` and lost all your last commits, use the following command:

```bash
git reflog
```

From the [official documents](https://git-scm.com/docs/git-reflog):
> Reference logs, or "reflogs", record when the tips of branches and other references were updated in the local repository. Reflogs are useful in various Git commands, to specify the old value of a reference. For example, HEAD@{2} means "where HEAD used to be two moves ago"... This command manages the information recorded in the reflogs.

It gives the historical info like this:
```bash/2
$ git reflog
c5f76d2 (HEAD -> beta) HEAD@{0}: pull origin main: Fast forward
0e373cb HEAD@{1}: commit: Updated base styles
b7aece4 HEAD@{2}: commit: Updated README
eff2f57 HEAD@{3}: commit: Added shortURL filter
...
```

The first 7-characters _(sha-id)_ are the beginning of the SHA1 for that commit. You can use this to recover any lost data from that point in history.

For example, to apply our last commit back into the code base _(sha-id = 0e373cb)_, we can merge it back with the command:
```bash
git merge 0e373cb
```

We can do other stuff as well, like `checkout`, `cherry-pick` or use `git show` to see the diff.
