/**
 * Renders a structured-data block.
 *
 * `<` is escaped because the payload is interpolated into a script tag, where
 * a closing tag inside a string would otherwise end the script early.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
