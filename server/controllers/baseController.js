const { tryParseInt } = require('@/utils/numberUtils')
const DEFAULT_LIMIT = 5
const MAX_LIMIT = 10

class baseController {
    _limit(limit) {
        limit = tryParseInt(limit, DEFAULT_LIMIT)
        return limit > MAX_LIMIT ? MAX_LIMIT : limit
    }
}

module.exports = baseController