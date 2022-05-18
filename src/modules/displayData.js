//display the data
export const displayData=(scores)=> {
    const container=document.querySelector(".board");
    let list ='';
    scores.result.forEach((item) => {
    list+=`
        <p>${item.user} : ${item.score} </p>
      `;
    });
    container.innerHTML=list;
    }
    
    
    