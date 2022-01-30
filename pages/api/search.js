import heroes from '../../heroes.json'

export default function handler(reg, res) {
    const filter = reg.query.q ? new RegExp(reg.query.q, 'i') : /.*/
    res.statusCode = 200;

    res.end(JSON.stringify(
        heroes.filter((hero) => hero.name.match(filter))
    ))
}