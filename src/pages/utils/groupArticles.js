// utils/groupArticles.js

const cuisineOrder = [
  'chinese',
  'taiwanese',
  'japanese',
  'korean',
  'thai',
  'vietnamese',
  'malaysian',
  'indian',
  'italian',
  'desserts',
  'others'
];

export const groupArticlesByCuisineType = (articles) => {
  const groupedArticles = {
    chinese: [],
    taiwanese: [],
    japanese: [],
    korean: [],
    thai: [],
   vietnamese: [],
   malaysian: [],
    indian: [],
   italian: [],
    desserts: [],
    others: []
  };

  articles.forEach(article => {

    if (!article.cuisineType || article.cuisineType.length === 0) {
      groupedArticles['others'].push(article);
    } else {
      let grouped = false;
      article.cuisineType.forEach(type => {
        if (cuisineOrder.includes(type)) {
          groupedArticles[type].push(article);
          grouped = true;
        }
      });
      if (!grouped) {
        groupedArticles['others'].push(article);
      }
    }
  });

  return groupedArticles;
};
 