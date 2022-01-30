import heroes from '../../heroes.json'

export default (reg, res) => {
    if(!reg.query.id) {
        res.statusCode = 400
        res.end('Must have hero Id')
    } else {
        const found = heroes.filter(
            (hero) => hero.id === parseInt(reg.query.id)
        )
        if ( found.length === 0) {
            res.statusCode = 404
            res.end('Hero not found')
        } else {
            res.statusCode = 200
            res.end(JSON.stringify(found[0]))
        }
    }
}