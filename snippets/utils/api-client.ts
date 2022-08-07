interface IFetchRequestConfig extends RequestInit {
  body?: any;
  token?: string;
}

async function client(
  endpoint: string,
  {body, token, headers: customHeaders, ...customConfig}: IFetchRequestConfig = {},
) {
  const config = {
    method: body ? 'POST' : 'GET',
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': body ? 'application/json' : '',
      ...customHeaders,
    },
    ...customConfig,
  };

  return window.fetch(endpoint, config).then(async response => {
    if (response.status === 401) {
      // await auth.logout();
      // refresh the page for them
      window.location.assign(window.location.pathname);
      return Promise.reject({message: 'Please re-authenticate.'});
    }
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export {client};
