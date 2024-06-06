import { existsSync } from 'node:fs'

const appendFileIfExists = (filename) => (existsSync(filename) ? [filename] : [])

const createPluginCommitAnalyzer = () => [
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
]

const createPluginReleaseNotesGenerator = () => [
  '@semantic-release/release-notes-generator',
  {
    preset: 'conventionalcommits',
    presetConfig: {
      commitUrlFormat: '{{host}}/{{owner}}/{{repository}}/commits/{{hash}}',
      compareUrlFormat: '{{host}}/{{owner}}/{{repository}}/compare/{{currentTag}}%0D{{previousTag}}',
      issueUrlFormat: `${process.env.ISSUE_URL_FORMAT ?? 'https://hdgroup.atlassian.net/browse/'}{{prefix}}{{id}}`,
      issuePrefixes: [process.env.ISSUE_PREFIX ?? '#'],
      types: [
        // order matters!
        { type: 'feat', section: 'Features' },
        { type: 'fix', section: 'Bug Fixes' },
        { type: 'perf', section: 'Performance' },
        { type: 'revert', section: 'Reverts' },
        { type: 'docs', section: 'Documentation' },
        { type: 'build', section: 'Build' },
        { type: 'ci', section: 'Continuous Integration' },
        { type: 'test', section: 'Tests' },
        { type: 'types', section: 'Types' },
        { type: 'dx', section: 'Developer Experience' },
        { type: 'refactor', section: 'Refactor' },
        { type: 'style', section: 'Style' },
        { type: 'chore', section: 'Chore' },
      ],
    },
  },
]

const createPluginChangelog = () => [
  '@semantic-release/changelog',
  {
    changelogTitle: '# Changelog\n',
  },
]

const createPluginNpm = () => [
  '@semantic-release/npm',
  {
    npmPublish: false,
  },
]

const createPluginYarn = () => [
  'semantic-release-yarn',
  {
    npmPublish: false,
  },
]

const createPluginGit = () => [
  '@semantic-release/git',
  {
    assets: [
      'CHANGELOG.md',
      ...appendFileIfExists('package.json'),
      ...appendFileIfExists('package-lock.json'),
    ],
    message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
  },
]

const createPluginExec = () => [
  '@semantic-release/exec',
  {
    successCmd: 'echo "${nextRelease.version}" > release.properties',
  },
]

export default {
  branches: ['main', 'next'],
  tagFormat: '${version}',
  plugins: [
    // order matters!
    createPluginCommitAnalyzer(),
    createPluginReleaseNotesGenerator(),
    createPluginChangelog(),
    ...(existsSync('package-lock.json') ? [createPluginNpm()] : []),
    ...(existsSync('yarn.lock') ? [createPluginYarn()] : []),
    createPluginGit(),
    createPluginExec(),
  ],
}
