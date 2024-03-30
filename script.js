let input = document.getElementById("input");
let button = document.querySelectorAll("button");
let firstValu = null;
let secondValu = null;
let operator = null;

button.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.target.textContent);

    if (e.target.textContent === "C") {
      input.innerText = "";
      firstValu = null;
      secondValu = null;
      operator = null;
    } else if (e.target.textContent === "<") {
      input.innerText = input.innerText.slice(0, -1);
    } else if(e.target.textContent === '+' || 
    e.target.textContent === '-' || 
    e.target.textContent === '*' || 
    e.target.textContent === '/' || 
    e.target.textContent === '%' ) {
      firstValu = parseFloat(input.innerText);
      operator = e.target.textContent;
      input.innerText = "";
    } else if(e.target.textContent === '='){
        secondValu = parseFloat(input.innerText);
        let result = 0;
        switch (operator)
        {
            case '+':
                result = firstValu + secondValu;
                break;
            case '-':
                result = firstValu - secondValu;
                break;
            case '*':
                result = firstValu * secondValu;
                break;
            case '/':
                result = firstValu / secondValu;
                break;
            case '%':
                result = firstValu % secondValu;
                break;
        }

        input.innerText = result;
        firstValu = result;
        secondValu = null;
        operator = null;
    }
    else 
    {
        input.innerText += e.target.textContent;
    }

    input.scrollLeft = input.scrollWidth;
  });
});
