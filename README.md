# Test Zendesk Apps Framework (ZAF) Network Request Behavior

This app is a companion to the knowledge base article that describes the ZAF client.request method and its CORS option.

It demonstrates the following:

- Using client.request to a Zendesk API
- Using client.request to an external API with CORS
- Using client.request to an external API without CORS
- Compares a client.request call to a fetch() call with and without CORS

Additionally, this also showcases the notify method for ZAF, which allows you to display a notification in the upper right corner of the agent interface.

When running, bring up your browser's Console tab and Network tab to monitor the different behaviors.

See the [companion article](https://developer.zendesk.com/documentation/apps/getting-started/how-apps-framework-client-request-works/) for more information.

## Getting started

Follow these steps to get a local copy up and running.

### Prerequisites

- Zendesk Command Line (ZCLI)

[Using Zendesk Command Line](https://developer.zendesk.com/documentation/apps/app-developer-guide/zcli/#installing-and-updating-zcli)

### Installation

1. Clone the repo

    ``` bash
    git clone https://github.com/example.git
    ```

2. Run the app.

    ``` bash
    zcli apps:server
    ```

[Testing your Zendesk app locally](https://developer.zendesk.com/documentation/apps/app-developer-guide/zcli/#testing-your-zendesk-app-locally)

<!-- Links to relevant resources such as help center articles or dev docs -->

## Additional Resources

- [How ZAF client.request works](https://developer.zendesk.com/documentation/apps/getting-started/how-apps-framework-client-request-works/)
- [Zendesk Apps Guide](https://developer.zendesk.com/documentation/apps/)
- [Apps Support API documentation](https://developer.zendesk.com/api-reference/apps/apps-support-api/introduction/)
- [MDN web docs for the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [ZAF notify method](https://developer.zendesk.com/api-reference/apps/apps-support-api/all_locations/#notify)

<!-- Issue reporting with link to repo issues page -->

## Issues

You can [create an issue on Github](https://github.com/zendesk/example/issues/new),
reach out in our [Developer Community](https://support.zendesk.com/hc/en-us/community/topics),
or report the issue in the [Zendesk Developers Slack group](https://docs.google.com/forms/d/e/1FAIpQLScm_rDLWwzWnq6PpYWFOR_PwMaSBcaFft-1pYornQtBGAaiJA/viewform).
