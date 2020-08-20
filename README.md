# Firefox latest version
> npm i firefox-latest-version

```js
const firefoxLatestVersion = require('../index')
firefoxLatestVersion()
.then(json)
// "LATEST_FIREFOX_VERSION": "79.0" is current release
```
* Response
```json
{
  "FIREFOX_AURORA": "",
  "FIREFOX_DEVEDITION": "80.0b8",
  "FIREFOX_ESR": "68.11.0esr",
  "FIREFOX_ESR_NEXT": "78.1.0esr",
  "FIREFOX_NIGHTLY": "81.0a1",
  "LAST_MERGE_DATE": "2020-07-27",
  "LAST_RELEASE_DATE": "2020-07-28",
  "LAST_SOFTFREEZE_DATE": "2020-07-23",
  "LATEST_FIREFOX_DEVEL_VERSION": "80.0b8",
  "LATEST_FIREFOX_OLDER_VERSION": "3.6.28",
  "LATEST_FIREFOX_RELEASED_DEVEL_VERSION": "80.0b8",
  "LATEST_FIREFOX_VERSION": "79.0",
  "NEXT_MERGE_DATE": "2020-08-24",
  "NEXT_RELEASE_DATE": "2020-08-25",
  "NEXT_SOFTFREEZE_DATE": "2020-08-20"
}
```