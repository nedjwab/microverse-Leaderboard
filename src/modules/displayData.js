// display the data
const displayData = (scores) => {
  const container = document.querySelector('.board');
  let list = '';
  scores.result.forEach((item) => {
    list += `<p class="item">
    <i class="fa-solid fa-crown"></i>${item.user} : ${item.score} </li>
        </p>
      `;
  });
  container.innerHTML = list;
};
export default displayData;