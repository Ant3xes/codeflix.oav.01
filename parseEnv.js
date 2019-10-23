module.exports = function parseEnv(content) {
    const objEnv = {}
    const regex = /^([\w]+)=(.+)/gm

    let m;
    while ((m = regex.exec(content)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++
        }
        let key = ""
        let value= ""
        m.forEach((match, groupIndex) => {
            if(groupIndex === 1) {
                key = match;
            } else if(groupIndex === 2) {
                value = match
                objEnv[key] = value;
            }
        });
    }
    return JSON.stringify(objEnv,null,2)
}