import { site } from "./site";

/**
 * Emails an inquiry to the office through Web3Forms, which the static site
 * needs in place of a backend. Resolves to whether Web3Forms accepted it.
 */
export async function sendInquiry(fields: Record<string, string>): Promise<boolean> {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: site.email.formKey, ...fields }),
    });
    const result = await response.json();
    return Boolean(result.success);
  } catch {
    return false;
  }
}
