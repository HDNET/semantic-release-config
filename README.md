# HDNET semantic-release-config

This packages defines the strict implementation of the HDNET Semantic Release Workflow
from the HDNET Standard Recommendations
([HSR-20](https://hdgroup.atlassian.net/wiki/spaces/OPS/pages/182386689/HSR-20+Releaseworkflow+mit+semantic-release))
as npm package
using [semantic-release](https://github.com/semantic-release/semantic-release)
through a
[shareable config](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/shareable-configurations.md).

## Getting started

1. Make sure you use Node.js >= 20.

2. Install dependencies
```bash
$ npm i -D semantic-release @hdnet/semantic-release-config
```

3. Create a semantic-release config (i.e. `release.config.mjs`) and extend from @hdnet/semantic-release-config:
```javascript
export default {
    extends: '@hdnet/semantic-release-config',
}
```

4. Add semantic-release to your CI workflow.


## Features

* supports composer through `@iwavesmedia/semantic-release-composer` plugin
* allows overwriting `issueUrlFormat` through the env ISSUE_URL_FORMAT
* allows setting `issuePrefixes` (default: `#`) through the env ISSUE_PREFIX
* allows publishing to a package repository when `publish` is set to `true` through `PUBLISH`


## Contribute

To setup the correct node version, use tools like [nvm](https://github.com/nvm-sh/nvm) or [mise](https://github.com/jdx/mise). This project maintains an [.nvmrc](./.nvmrc).

## Publishing

A new version will automatically be published upon comitting to the `main` branch and pushing to the [bitbucket repository](https://bitbucket.org/hdnet/semantic-release-config/src/main/).