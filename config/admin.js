module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3eaf428e4559d29d36d874530bdb4339'),
  },
});
