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
        { type: 'build', section: 'Build' },
        { type: 'chore', section: 'Chore' },
        { type: 'ci', section: 'Continuous Integration' },
        { type: 'docs', section: 'Documentation' },
        { type: 'dx', section: 'Developer Experience' },
        { type: 'feat', section: 'Features' },
        { type: 'fix', section: 'Bug Fixes' },
        { type: 'perf', section: 'Performance' },
        { type: 'refactor', section: 'Refactor' },
        { type: 'revert', section: 'Reverts' },
        { type: 'style', section: 'Style' },
        { type: 'test', section: 'Tests' },
        { type: 'types', section: 'Types' },
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

const createPluginComposer = () => '@iwavesmedia/semantic-release-composer'

const createPluginGit = () => [
  '@semantic-release/git',
  {
    assets: [
      'CHANGELOG.md',
      ...appendFileIfExists('composer.json'),
      ...appendFileIfExists('composer.lock'),
      ...appendFileIfExists('package.json'),
      ...appendFileIfExists('package-lock.json'),
      ...appendFileIfExists('yarn.lock'),
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
    ...(existsSync('composer.json') ? [createPluginComposer()] : []),
    ...(existsSync('package-lock.json') ? [createPluginNpm()] : []),
    ...(existsSync('yarn.lock') ? [createPluginYarn()] : []),
    createPluginGit(),
    createPluginExec(),
  ],
}
