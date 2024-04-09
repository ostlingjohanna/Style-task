//FE23 Johanna Östling

const rad = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];
console.log(rad);

for (let i = 0; i < 5; i++) {
  const h1El = document.createElement("h1");
  document.body.appendChild(h1El);
  h1El.innerText = rad[i];
  h1El.style.textAlign = `center`;
  h1El.style.padding = `20`;

  const hue = 122 + i * 11;
  console.log(hue);
  h1El.style.backgroundColor = `hsl(${hue}, 50%, 80%)`;

  const size = (i + 1) * 10;
  h1El.style.fontSize = `${size}px`;
}

const div1 = document.createElement("div");
document.body.appendChild(div1);
div1.style.height = "480px";
div1.style.border = "solid black";
div1.style.display = 'flex';
div1.style.alignItems = 'center';
div1.style.justifyContent = 'space-evenly'

const doAlign = ["left", "center", "right"]
const numb1 = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

for (let i = 0; i <3; i++) {
  let div2 = document.createElement("div");
  div1.appendChild(div2);
  div2.style.backgroundColor = "lightblue";
  div2.style.width = "50px";
  div2.style.height = "75%";
  div2.style.padding = '5px'
    
    
    for(let j=0; j<10; j++){
        const pEl = document.createElement('p')
        div2.appendChild(pEl)
        pEl.style.textAlign = doAlign[i];

        if(i==0) pEl.innerText = j;
        if(i==1) pEl.innerText = 9-j;
        if(i==2) pEl.innerText = numb1[j];

        if(j%2==0){
            pEl.style.color = 'white';
            pEl.style.backgroundColor = 'black';
        }
        else{
            pEl.style.color = 'black';
            pEl.style.backgroundColor = 'white';
        }
        
        if(j==4 && i==0){
            pEl.style.backgroundColor = 'lightblue';
        }
        if(j==1 && i==1){
            pEl.style.color = 'white';
            pEl.style.backgroundColor = 'lightblue';
        }
        if(numb1[j]== 'sex' && i==2){
            pEl.style.backgroundColor = 'lightblue';
        }
        
    }

    

}
