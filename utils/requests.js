const BASE_URL = "https://www.freetogame.com/api";

const requests = {
  fetchShooter: `${BASE_URL}/games?category=shooter`,
  fetchMMOrpg: `${BASE_URL}/games?category=mmorpg`,
  fetchStrategy: `${BASE_URL}/games?category=strategy`,
  fetchMOBA: `${BASE_URL}/games?category=moba`,
  fetchRacing: `${BASE_URL}/games?category=racing`,
  fetchSurvival: `${BASE_URL}/games?category=survival`,
  fetchPopular: `${BASE_URL}/games?sort-by=popular`,
};

export default requests;
