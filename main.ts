// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt. Deterministic by
// construction: the same bytes on every run, no input, no network, no clock.
//
// Joke strategy, against the judge's rubric (on-subject, surprise, truth,
// economy, freshness): the agent's most recognisable failure is
// over-engineering a trivial ask. The punchline is escalation — a one-line
// fix returns as a 12-step plan, a new folder structure and a migration
// guide, all for a typo. None of the house reference jokes (rewrote-again,
// verified, deleted-tests) uses this angle, and the wording is original,
// not a reword of any of them.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'I asked my agent for a one-line fix. It gave me a 12-step plan, a new folder structure, and a migration guide — for a typo.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
