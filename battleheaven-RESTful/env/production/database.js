module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'db-battleheaven-do-user-13276797-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'mydb'),
      user: env('DATABASE_USERNAME', 'doadmin'),
      password: env('DATABASE_PASSWORD', 'AVNS_eHvYjqZ4MSXvUCEh8qM'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});