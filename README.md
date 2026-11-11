# EJ's 7th Anniversary — Table Tennis Tournament · Live Points

Live points page for the EJ's Fitness Club 7th Anniversary Table Tennis Tournament.

**Live site:** https://d30n.github.io/ej-tt-tournament/

## How it works

- The page reads the [Points Sheet](https://docs.google.com/spreadsheets/d/1E0e8w_xMazE-wVQALac5DgkdXHWpSw_-asRvAdU0_hQ/edit)
  (tabs: Attendance, Group A–D, Knockout) through Google's public `gviz` JSON endpoint.
- It refreshes itself every 30 seconds — no reload needed. Standings (Win = 1, Loss = 0),
  qualifiers (top 2 per group) and the knockout bracket are computed on the page.
- If the sheet is not shared for link viewing, the page shows a saved snapshot of the
  fixture and a notice in Malayalam explaining the one step to turn live scores on.

## Turning live scores on

In the Points Sheet: **Share → Anyone with the link can view**. That's all — scores
typed in the sheet then appear on this page within 30 seconds.

## Details

- 20 players, 4 groups of 5, round robin (1 set per match), top 2 per group to the
  Quarter Finals. Knockout is Best of 3 sets.
- Single self-contained `index.html` — no build step, no server, no cost.
- The sheet stays the only place scores are typed; this page never writes to it.
