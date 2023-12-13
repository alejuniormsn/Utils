type Props = {
  uri: string;
  method: string;
  payload?: {};
  token?: string;
};

export async function api({
  uri,
  method,
  payload,
  token,
}: Props): Promise<any> {
  const response = await fetch(`http://192.168.1.199:3333${uri}`, {
    method: method,
    credentials: "same-origin",
    body:
      method === "GET" || method === "DELETE"
        ? undefined
        : JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  let result = await response.json();

  if (!result.ok) {
    throw new Error(result.error);
  }

  result = { ...result, cookie: response.headers.get("set-cookie") };

  return result;
}
