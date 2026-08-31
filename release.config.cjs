const fs = require('fs')
const path = require('path')

function dateVersion() {
  const now = new Date()
  return [
    now.getUTCFullYear(),
    `${now.getUTCMonth() + 1}`.padStart(2, '0'),
    `${now.getUTCDate()}`.padStart(2, '0'),
  ].join('.')
}

const versionPlugin = {
  analyzeCommits(pluginConfig, { lastRelease, logger }) {
    const version = dateVersion()
    if (lastRelease && lastRelease.version === version) {
      logger.log('Version %s was already released today, skipping release', version)
      return null
    }
    return 'patch'
  },

  generateNotes(pluginConfig, { nextRelease }) {
    nextRelease.version = dateVersion()
    nextRelease.gitTag = `v${nextRelease.version}`
    return ''
  },

  prepare(pluginConfig, { nextRelease, logger }) {
    nextRelease.version = dateVersion()
    nextRelease.gitTag = `v${nextRelease.version}`
    logger.log('Releasing version %s', nextRelease.version)
  },
}

const template = fs.readFileSync(path.join(__dirname, 'release', 'default-template.hbs'), 'utf8')
const commitTemplate = fs.readFileSync(path.join(__dirname, 'release', 'commit-template.hbs'), 'utf8')

function datetime(format) {
  const pattern = format && format.startsWith('UTC:') ? format.slice(4) : format || 'yyyy-mm-dd'
  const now = new Date()
  return pattern
    .replace('yyyy', `${now.getUTCFullYear()}`)
    .replace('mm', `${now.getUTCMonth() + 1}`.padStart(2, '0'))
    .replace('dd', `${now.getUTCDate()}`.padStart(2, '0'))
}

const options = {
  branches: ['main'],
  plugins: [
    [
      'semantic-release-gitmoji',
      {
        releaseRules: {
          major: { include: [':boom:'] },
          minor: { include: [':sparkles:'] },
          patch: {
            include: [':bug:', ':ambulance:', ':lock:', ':recycle:', ':lipstick:', ':alien:', ':package:'],
          },
        },
        releaseNotes: {
          template,
          partials: { commitTemplate },
          helpers: { datetime },
          issueResolution: {
            template: '{baseUrl}/{owner}/{repo}/issues/{ref}',
            baseUrl: 'https://github.com',
            source: 'github.com',
          },
        },
      },
    ],
    '@semantic-release/github',
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    ['@semantic-release/npm', { npmPublish: !!process.env.NPM_TOKEN }],
    [
      '@semantic-release/git',
      {
        assets: [
          'CHANGELOG.md',
          'package.json',
          'package-lock.json',
          ...(process.env.COMMIT_ASSETS ? process.env.COMMIT_ASSETS.split(',').map((asset) => asset.trim()) : []),
        ],
        message: ':bookmark: Release v${nextRelease.version} [skip ci]',
      },
    ],
  ],
}

module.exports = {
  ...options,
  tagFormat: 'v${version}',
  plugins: [[versionPlugin], ...options.plugins],
}