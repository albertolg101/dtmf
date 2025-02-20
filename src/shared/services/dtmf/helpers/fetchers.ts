export async function getDtmf<T>(path: string): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(new URL(path, baseUrl));
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }

  return data as T;
}
