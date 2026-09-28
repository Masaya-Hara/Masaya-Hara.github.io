import katex from 'katex';

type InlinePart = { kind: 'text'; text: string } | { kind: 'math'; html: string };

export function renderInlineMath(text: string): InlinePart[] {
  const parts: InlinePart[] = [];
  let cursor = 0;
  const expressions = /\\\(([\s\S]*?)\\\)/g;
  const appendText = (value: string) => {
    if (/\\[()]/.test(value)) throw new Error(`Unmatched inline math delimiter: ${text}`);
    if (value) parts.push({ kind: 'text', text: value });
  };
  for (const match of text.matchAll(expressions)) {
    appendText(text.slice(cursor, match.index));
    parts.push({
      kind: 'math',
      html: katex.renderToString(match[1], {
        displayMode: false,
        output: 'htmlAndMathml',
        throwOnError: true,
        trust: false,
        strict: 'error',
      }),
    });
    cursor = match.index + match[0].length;
  }
  appendText(text.slice(cursor));
  return parts;
}
