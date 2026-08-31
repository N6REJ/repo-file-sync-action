const semver = require('semver')
const { isUndefined } = require('lodash')

function dateVersion() {
  const now = new Date()
  return [
    now.getUTCFullYear(),
    now.getUTCMonth() + 1,
    now.getUTCDate(),
  ].join('.')
}

const utilsPath = require.resolve('semantic-release/lib/utils')

// Make getLatestVersion include prereleases so per-day build numbers advance the branch range
const utils = require(utilsPath)
utils.getLatestVersion = (versions) =>
  versions.filter((version) => semver.valid(version)).sort(semver.rcompare)[0]

const { isSameChannel, makeTag } = utils

// Make getNextVersion compute the date-based version with a per-day build counter
const gnvPath = require.resolve('semantic-release/lib/get-next-version')
require.cache[gnvPath] = {
  id: gnvPath,
  filename: gnvPath,
  loaded: true,
  exports: ({ lastRelease }) => {
    const today = dateVersion()
    const last = lastRelease && lastRelease.version
    if (last && (last === today || last.startsWith(`${today}-`))) {
      const prerelease = semver.prerelease(last)
      const build = Array.isArray(prerelease) && typeof prerelease[0] === 'number' ? prerelease[0] : 0
      return `${today}-${build + 1}`
    }
    return today
  },
}

// Make getLastRelease include prereleases so the latest per-day build is seen as the last release
const glrPath = require.resolve('semantic-release/lib/get-last-release')
require.cache[glrPath] = {
  id: glrPath,
  filename: glrPath,
  loaded: true,
  exports: ({ branch, options: { tagFormat } }, { before } = {}) => {
    const [hit = {}] = branch.tags
      .filter(
        (tag) =>
          (branch.type === 'prerelease'
            ? tag.channels.some((channel) => isSameChannel(branch.channel, channel)) || !semver.prerelease(tag.version)
            : true) &&
          (isUndefined(before) || semver.lt(tag.version, before))
      )
      .sort((a, b) => semver.rcompare(a.version, b.version))
    if (hit.gitTag) {
      return {
        version: hit.version,
        gitTag: hit.gitTag,
        channels: hit.channels,
        gitHead: hit.gitTag,
        name: makeTag(tagFormat, hit.version),
      }
    }
    return {}
  },
}

const semanticRelease = require('semantic-release')

semanticRelease({}, { cwd: process.cwd(), env: process.env }).then(
  (result) => {
    if (result) {
      process.stdout.write('semantic-release: release published.\n')
    }
  },
  (error) => {
    console.error(error)
    process.exit(1)
  }
)
