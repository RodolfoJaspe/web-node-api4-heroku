const shortid = require('shortid')

let users = [
    { id: shortid.generate(), name: 'Ed Carter', password: "dfgdfgdfg" },
    { id: shortid.generate(), name: 'Mary Edwards', password: "sgsfbnfgb" },
]


module.exports = {
    async get() {
        const usersList = users.map(user => {
            return {
                id: user.id,
                name: user.name
            }
        })
        return usersList
    },
}
