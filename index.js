const https = require('https');
const URL_FIREFOX_VERSION = 'https://product-details.mozilla.org/1.0/firefox_versions.json';
/** @namespace FirefoxVersion
 * @property {string} FIREFOX_AURORA - ""
 * @property {string} FIREFOX_DEVEDITION - "80.0b8"
 * @property {string} FIREFOX_ESR - "68.11.0esr"
 * @property {string} FIREFOX_ESR_NEXT - "78.1.0esr"
 * @property {string} FIREFOX_NIGHTLY - "81.0a1"
 * @property {string} LAST_MERGE_DATE - "2020-07-27"
 * @property {string} LAST_RELEASE_DATE - "2020-07-28"
 * @property {string} LAST_SOFTFREEZE_DATE - "2020-07-23"
 * @property {string} LATEST_FIREFOX_DEVEL_VERSION - "80.0b8"
 * @property {string} LATEST_FIREFOX_OLDER_VERSION - "3.6.28"
 * @property {string} LATEST_FIREFOX_RELEASED_DEVEL_VERSION - "80.0b8"
 * @property {string} LATEST_FIREFOX_VERSION - "79.0"
 * @property {string} NEXT_MERGE_DATE - "2020-08-24"
 * @property {string} NEXT_RELEASE_DATE - "2020-08-25"
 * @property {string} NEXT_SOFTFREEZE_DATE - "2020-08-20"
 */
/**
 * get list of current firefox versions
 * @return {Promise<FirefoxVersion>}
 */
const getFirefoxVersions = async () => {
  return new Promise((resolve, reject) => {
    https.get(URL_FIREFOX_VERSION, res => {
      let data = '';
      res.on('data', chunk => data+= chunk.toString())
        .on('error', reject)
        .on('end', () => {
          try {
            let json = JSON.parse(data);
            resolve(json);
          }
          catch (e) {
            reject(e);
          }
        });
    });

  })
};

module.exports = getFirefoxVersions;