require("dotenv").config()

const{PG_USERNAME,
  PG_PASSWORD,
  PG_NAME_DEV,
  PG_NAME_PROD,
  PG_NAME_TEST,
  PG_HOST,
  PG_DIALECT
} = process.env;
module.exports = {
  development: {
    "username": PG_USERNAME,
    "password": PG_PASSWORD,
    "database": PG_NAME_DEV,
    "host": PG_HOST,
    "dialect": PG_DIALECT
  },
  test: {
    "username": PG_USERNAME,
    "password": PG_PASSWORD,
    "database": PG_NAME_TEST,
    "host": PG_HOST,
    "dialect": PG_DIALECT
  },
  production: {
    "username": PG_USERNAME,
    "password": PG_PASSWORD,
    "database": PG_NAME_PROD,
    "host": PG_HOST,
    "dialect": PG_DIALECT
  }
}