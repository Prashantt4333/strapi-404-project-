module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['Ly2hIKjLP+i+x+1VkGvJag==', 'hNnvLlux8LhReByNbgiybA==','ErRHM/KOYSf1cOsgkr/kJA==','JZh6GOj6gdfK5dnJ49a+gg==']),
  },
});
