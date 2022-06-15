// Zendesk API call using client.request

async function requestToZendeskApi() {
  const options = {
    url: '/api/v2/apps/owned.json',
    type: 'GET'
  };

  try {
    const req = await client.request(options);

    client.invoke('notify', 'Success! See console for your data.', 'notice');
    console.log("Installed apps: \n", req.apps);
  } catch (err) {
    client.invoke('notify', 'Request to ZD API failed. See console for details.', 'error');
    console.log(err);
  }
}

// remote API call using client.request with CORS
// Note: With default url pointing to https://wikipedia.com, this example will return a CORS error, since wikipedia doesn't support CORS. You can use https://api.github.com to see this request successfully return.

async function requestToRemoteAPICors() {
  const remoteUrl = document.querySelector("#remoteUrl").value;
  const options = {
    url: remoteUrl,
    type: 'GET',
    cors: true
  };

  if (options.url) {
    try {
      const req = await client.request(options);

      client.invoke('notify', 'Success! See console for your data.', 'notice');
      console.log(req);
    } catch (err) {
      client.invoke('notify', 'Request to remote API failed. See console for details.', 'error');
      console.log(err);
    }
  } else {
    client.invoke('notify', 'Please enter a url to a remote API for this test.', 'alert');
  }
}

// remote API call using client.request without CORS

async function requestToRemoteAPINoCors() {
  const remoteUrl = document.querySelector("#remoteUrl").value;
  const options = {
    url: remoteUrl,
    type: 'GET',
    cors: false
  };

  if (options.url) {
    try {
      const req = await client.request(options);

      client.invoke('notify', 'Success! See console for your data.', 'notice');
      console.log(req);
    } catch (err) {
      client.invoke('notify', 'Request to remote API failed. See console for details.', 'error');
      console.log(err);
    }
  } else {
    client.invoke('notify', 'Please enter a url to a remote API for this test.', 'alert');
  }
}

// remote API call using fetch() with CORS
// Note: With default url pointing to https://wikipedia.com, this example will return a CORS error, since wikipedia doesn't support CORS. You can use https://api.github.com to see this request successfully return.

async function fetchRequestWithCors() {
  const remoteUrl = document.querySelector("#remoteUrl").value;
  const options = {
    method: 'GET',
    mode: 'cors'
  };

  try {
    const req = await fetch(remoteUrl, options);

    client.invoke('notify', 'Success! See console for your data.', 'notice');
    console.log(req);
  } catch (err) {
    client.invoke('notify', 'Request to remote API failed. See console for details.', 'error');
    console.log(err);
  }
}

// remote API call using fetch() without CORS

async function fetchRequestWithoutCors() {
  const remoteUrl = document.querySelector("#remoteUrl").value;
  const options = {
    method: 'GET',
    mode: 'no-cors'
  };

  try {
    const req = await fetch(remoteUrl, options);

    client.invoke('notify', 'Success! See console for your data.', 'notice');
    console.log(req);
  } catch (err) {
    client.invoke('notify', 'Request to remote API failed. See console for details.', 'error');
    console.log(err);
  }

}