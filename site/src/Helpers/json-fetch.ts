export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export const JSONFetch = async <T = {}>(
  url: string,
  method: HttpMethod = HttpMethod.GET,
  body: object = {},
): Promise<{
  ok: boolean;
  data: T;
  status: number;
}> => {
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
    Accept: "application/json",
  };

  const params: RequestInit = {
    method,
    headers,
    credentials: "include",
  };

  if (method.toLowerCase() !== "get") {
    params.body = JSON.stringify(body);
  }

  const response = await fetch("https://localhost/api" + url, params);

  if (response.status === 204) {
    return {
      data: {} as T,
      status: response.status,
      ok: true,
    };
  }

  const res = {
    data: await response.json(),
    status: response.status,
    ok: response.ok,
  };

  if (!res.data) {
    res.data = {};
  }

  if ("data" in res.data) {
    res.data = res.data.data;
  }

  return res;
};
