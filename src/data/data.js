export const fetchStory = (id) => {
    const url = `https://hacker-news.firebaseio.com/v0/item/`;
    return fetch(url + id + ".json?print=pretty")
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  }

export const hours = (now, date) => {
    let nowHours = now.getHours()
    let inputDate = date.getHours()
    if(nowHours > inputDate){
      return nowHours - inputDate
    } else if(nowHours < inputDate){
      return inputDate - nowHours;
    }
    return 'Less than an hour'
  }