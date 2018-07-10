import Vue from "vue";

export const loadData = ({ commit }) => {
  Vue.http
    .get("data.json")
    .then(response => response.json())
    .then(({ stocks, funds, stockPortfolio }) => {
      if (stocks || funds || stockPortfolio) {
        const portfolio = {
          funds,
          stockPortfolio
        };
        commit("SET_STOCKS", stocks);
        commit("SET_PORTFOLIO", portfolio);
      }
    });
};
