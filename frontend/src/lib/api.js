const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const normalizeResponseData = (payload) => {
  if (Array.isArray(payload) || !payload || typeof payload !== "object") {
    return payload;
  }

  if ("data" in payload) {
    return payload.data;
  }

  return payload;
};

const request = async (path, options = {}) => {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || "Request failed.");
  }

  return normalizeResponseData(payload);
};

export const getUsers = async () => {
  return request("/get-user");
};

export const createUser = async (payload) => {
  return request("/create", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const getEntries = () => getUsers();

export const createEntry = (payload) => createUser(payload);
