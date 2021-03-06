// Type definitions for toposort 2.0
// Project: https://github.com/marcelklehr/toposort
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function toposort(graph: ReadonlyArray<[string, string]>): ReadonlyArray<string>;
