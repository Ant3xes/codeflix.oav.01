module.exports = function parseIni(content) {
    const lines = content.split("\n");
    const objIni = {}
    let array = []

    const regex = /^(\[([-\w]+)\])|(^;{0}([\w\.]+)[\s+=\s{0,}]+([\w\-\s\.\"\:\/]+))/gm
    const regexDecoupe =  /^(\[([-\w]+)\])|^([\w.]+)(?:\s*=[^\S\r\n]*("[^"]*"|\S+))?/gm
    
    for (let data of lines) {
        let found = data.match(regex)
        if(!found) {
            continue
        }
        array.push(found[0])
    }
    let m;
    let categorie = ""
    dataTable = array.join('\n')
    while ((m = regexDecoupe.exec(dataTable)) !== null) {
        if (m.index === regexDecoupe.lastIndex) {
            regexDecoupe.lastIndex++;
        }
        if(m[2] !== undefined) {
            categorie = m[2]
            objIni[categorie] = []
        }
        if(m[3] !== undefined) {
            let objInsert = {}
            objInsert[m[3]] = m[4]
            objIni[categorie].push(objInsert)
        }
    }

    return JSON.stringify(objIni,null,2)
}