const Pool = require('pg').Pool
const pool = new Pool({
  user: 'plague',
  host: 'localhost',
  database: 'census',
  password: 'root',
  port: 5432,
});

const getData = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM PEOPLE ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}
const insertData = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, gender, birthdate, is_vaccinated } = body
    pool.query('INSERT INTO PEOPLE (name, is_vaccinated, birthdate, gender) VALUES ($1, $2, $3, $4) RETURNING *', [name,is_vaccinated, birthdate, gender], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new vote has been added!`)
    })
  })
}

const getCounts = (param) => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT COUNT(ID) AS COUNT,EXTRACT(YEAR FROM age(current_date,birthdate)) AS AGE FROM PEOPLE WHERE is_vaccinated = $1 GROUP BY AGE ',[param], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

const getGenderwiseCounts = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT COUNT(ID) AS COUNT,GENDER,EXTRACT(YEAR FROM age(current_date,birthdate)) AS AGE FROM PEOPLE GROUP BY AGE,GENDER', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}


module.exports = {
  getData,
  insertData,
  getCounts,
  getGenderwiseCounts
}