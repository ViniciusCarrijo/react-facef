export const configs = {
  apis: {
    cep:
      process.env.REACT_APP_CEP_URL ||
      "http://cep.republicavirtual.com.br/web_cep.php",
    economia:
      process.env.REACT_APP_ECONOMIA_URL ||
      "https://economia.awesomeapi.com.br/json/all",
    github: process.env.REACT_APP_GITHUB_URL || "https://api.github.com",
    starWars:
      process.env.REACT_APP_STAR_WARS_URL ||
      "https://star-wars-api-unifacef.herokuapp.com",
  },
  sentry:
    process.env.REACT_APP_SENTRY_DSN ||
    "https://86b7c51d241f4e6bbea2490d1d50b0a7@o1196578.ingest.sentry.io/6319594",
};
