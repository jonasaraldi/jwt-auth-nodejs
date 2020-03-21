const _ = require('lodash')

class numberUtils {
    tryParseInt(number, defaultNumber) {
        if(!_.isNumber(number))
            number = _.parseInt(number)

        if(_.isNaN(number))
            number = defaultNumber

        return number
    }
}

module.exports = new numberUtils()