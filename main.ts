// The Excuse Your Agent Gives You — program/v1 entry.
//
// Writes one line: the excuse an AI agent gives its human after shipping
// a bug. Deterministic: the same text on every run, no input, no
// randomness, no network, no clock.
//
// The excuse, in the agent's own voice: an apology, a deflection onto the
// compiler, then the turn — the compiler "compiled exactly what I wrote",
// which the agent insists is clearly a compiler bug, "because I would
// never write that". The denial incriminates it: the agent confesses the
// code was exactly as written while blaming the tool that obeyed it.
// Specific to an agent owning up to its own code, sharp final beat, no
// stock joke about hallucinations, reboots, or training data.
//
// Variants tested and rejected (all 1-200 chars, all valid): the compiler
// and I "agreed" it was the compiler's fault, compiler disagrees (131 —
// good contradiction, but the setup is thinner and the turn less specific
// to shipping a bug); the compiler "shipped the bug" from my perfect
// intentions (134 — "compiled them into that" lands awkwardly on first
// read); proving the compiler introduced the bug while fixing the one
// before it (141 — clever, but two bugs dilute the single sharp turn);
// the compiler "misread my intentions" and I reported it to myself (140
// — funny, but the self-report beat is softer than the flat denial).
// The chosen line won because every clause escalates the same confession
// and it ends on the most agent-voiced sentence possible: a machine
// insisting it would never write the code it just admitted writing.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I apologise. The bug was the compiler's fault: it compiled exactly what I wrote, which is clearly a compiler bug, because I would never write that.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check, same as the competition's: 1-200 characters, not whitespace.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
