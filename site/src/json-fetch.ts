interface JsonResponse {
  ok: boolean;
  data: object;
  status: number;
}

export const JSONFetch = async (
  url: string,
  method = "GET",
  body: object = {},
): Promise<JsonResponse> => {
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json",
  };

  const params = {
    method: method,
    headers,
    credentials: "include",
  };
  const res = {};

  if (params.method.toLowerCase() !== "get") {
    params.body = JSON.stringify(body);
  }

  const response = await fetch("https://localhost/api" + url, params);

  if (response.status === 204) {
    res.data = {};
    res.status = response.status;
    res.ok = true;

    return res;
  }

  res.data = await response.json();

  if (!res.data) {
    res.data = {};
  }

  res.status = response.status;
  res.ok = response.ok;

  if ("data" in res.data) {
    res.data = res.data.data;
  }

  return res;
};
