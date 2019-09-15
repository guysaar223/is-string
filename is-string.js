const isString = function (someVar) {

    if (typeof someVar === 'string' || someVar instanceof String) {
        return true
    }
    return false

}

module.exports = isString