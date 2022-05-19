// display the data
const displayData = (scores) => {
  const container = document.querySelector('.board');
  let list = '';
  scores.result.forEach((item) => {
    list += `<ul>
        <li>${item.user} : ${item.score} </li>
        </ul>
      `;
  });
  container.innerHTML = list;
};
export default displayData;