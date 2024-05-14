export default {
    branches: ['main', 'next'],
    tagFormat: '${version}',
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
                releaseRules: [
                    { breaking: true, release: 'major' },
                    { type: 'build', release: 'patch' },
                    { type: 'chore', release: 'patch' },
                    { type: 'ci', release: 'patch' },
                    { type: 'docs', release: 'patch' },
                    { type: 'dx', release: 'patch' },
                    { type: 'feat', release: 'minor' },
                    { type: 'fix', release: 'patch' },
                    { type: 'perf', release: 'minor' },
                    { type: 'refactor', release: 'patch' },
                    { type: 'revert', release: 'minor' },
                    { type: 'style', release: 'patch' },
                    { type: 'test', release: 'patch' },
                    { type: 'types', release: 'patch' },
                ],
                parserOpts: {
                    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
                },
            },
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'conventionalcommits',
                presetConfig: {
                    commitUrlFormat: '{{host}}/{{owner}}/{{repository}}/commits/{{hash}}',
                    compareUrlFormat: '{{host}}/{{owner}}/{{repository}}/compare/{{currentTag}}%0D{{previousTag}}',
                    issueUrlFormat: 'https://hdgroup.atlassian.net/browse/{{prefix}}{{id}}',
                    issuePrefixes: ['#'],
                },
            },
        ],
        [
            '@semantic-release/changelog',
            {
                changelogTitle: '# Changelog\n',
            },
        ],
        [
            '@semantic-release/npm',
            {
                npmPublish: false,
            },
        ],
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
        [
            '@semantic-release/exec',
            {
                successCmd: 'echo "${nextRelease.version}" > release.properties',
            },
        ],
    ],
}
