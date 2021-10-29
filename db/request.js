const oracledb = require('oracledb')
require('dotenv').config()

oracledb.initOracleClient({ libDir: 'C:\\oracle' })

const user = USER
const password = PASSWORD
const connectString = 0.0.0.0/db

const dbConnect = async() => {
    let connection
    connection = await oracledb.getConnection({
        user,
        password,
        connectString
    })

    return connection
}

const dbSelectPACS = async(nome) => {
    let connection = await dbConnect()
 
    let sql = `SQL`
    let result = await connection.execute(sql)

    connection.close()
    return result
}
resultado =  dbSelectPACS()
console.log(resultado)
module.exports = {
    dbSelectPACS: dbSelectPACS
}
