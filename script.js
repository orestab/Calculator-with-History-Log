power = document.getElementById("1");
root = document.getElementById("2");
ac = document.getElementById("3");
plus = document.getElementById("4");
n1 = document.getElementById("5");
n2 = document.getElementById("6");
n3 = document.getElementById("7");
mines = document.getElementById("8");
n4 = document.getElementById("9");
n5 = document.getElementById("10");
n6 = document.getElementById("11");
x = document.getElementById("12");
n7 = document.getElementById("13");
n8 = document.getElementById("14");
n9 = document.getElementById("15");
division = document.getElementById("16");
convert = document.getElementById("17");
n0 = document.getElementById("18");
coma = document.getElementById("19");
equal = document.getElementById("20");
input = document.querySelector(".input-main");
historyIcon = document.getElementById("history-icon");
historyModal = document.getElementById("history-modal");
closeHistory = document.getElementById("close-history");
historyList = document.getElementById("history-list");

buttons = [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, plus, mines];
//power, root, ac, plus, mines, x, division, convert, coma, equal, coma
let result = "";
let historyArr = [];

buttons.forEach(item => {
    item.addEventListener("click",() => {
        input.value += item.innerHTML
        result += item.innerHTML
        console.log(result);
  });
});
equal.addEventListener("click", () => {
    try {
        if (result === "") return
        let expression = result;
        let finalResult = eval(result);
        input.value = finalResult
        historyArr.push(result);
        console.log(historyArr);
        console.log(result);
        //створення li
        let li = document.createElement('li');
        li.classList.add("li-history");
        
        //наповнення li
        let spn = document.createElement('span');
        spn.classList.add("span-history");
        spn.innerHTML = `${expression} = ${finalResult}`;

        let btn = document.createElement('button');
        btn.innerHTML = "✖";
        btn.classList.add("button-history");

        btn.addEventListener("click", () => {
            li.remove()
        });

        
        li.appendChild(spn);
        li.appendChild(btn);
        
        historyList.appendChild(li);

        result = finalResult.toString();
   
    } catch (error) {
        input.value = "Неможливо обчислити"
        result = ""
    }
});



coma.addEventListener("click", () => {
    input.value += "."
    result += "."
    console.log(result); 
});

x.addEventListener("click", () => {
    input.value += "х"
    result += "*"
    console.log(result); 
});

convert.addEventListener("click", () => {
    input.value = "-" + input.value
    result += "*-1"
    console.log(result); 
});

division.addEventListener("click", () => {
    input.value += "÷"
    result += "/"
    console.log(result); 
});

ac.addEventListener("click", () => {
    result = ""
    input.value = result
    console.log(result); 
});

root.addEventListener("click", () => {
    if (result === "") {
        input.value = "Неможливо обчислити"
    } else {
    result = eval(result)
    result = Math.sqrt(result)
    input.value = result
    console.log(result); 
    }
});

power.addEventListener("click", () => {
    result = eval(result)
    result = Math.pow(result, 2)
    input.value = result
    console.log(result); 
});


historyIcon.addEventListener("click", () => {
    historyModal.classList.remove("hidden");
    historyModal.classList.add("hidden-1");
});


closeHistory.addEventListener("click", () => {
    historyModal.classList.remove("hidden-1");
    historyModal.classList.add("hidden");
});








