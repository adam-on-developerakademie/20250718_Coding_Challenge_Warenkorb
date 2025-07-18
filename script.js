let temp = ''
const menus = ["Pizza Diavolo", "Currywurst", "Erdbeeren", "Eis"];
const prices = [5.55, 3.20, 9.99, 2];
const amounts = [2, 5, 1, 3];

function onAddMenu() {
    let indexVelue = getMenuIndex(getMenuFromInput())
    if (indexVelue == -1 && getMenuFromInput().length > 0) {
        menus.push(getMenuFromInput());
        prices.push(getPriceFromInput());
        amounts.push(1);
    } else {
        if (getMenuFromInput().length > 0) { amounts[indexVelue]++ }
    }
    output()
}

function getValueFromInput(id) {
    let InputVelue = document.getElementById(id).value;
    console.log(InputVelue);
}

function getMenuFromInput() {
    let InputVelue = document.getElementById('menu').value;
    return (' ' + InputVelue).trim();
}

function getPriceFromInput() {
    let InputVelue = document.getElementById('price').value;
    return Number(InputVelue);
}

function getMenuIndex(menu) {
    let arrayIndex = menus.indexOf(menu);
    return arrayIndex;
}

function output() {
    if (temp == '') { temp = document.getElementsByTagName('body'); temp[0].outerHTML = temp[0].outerHTML.replace('<section>', ' <dev id="myNewTab"></dev><section> '); document.getElementsByTagName('body').outerHTML = temp } else {
        document.getElementById('myNewTab').innerHTML = '';
        let newTable = `<table><tr><th>Artickel:</th><th> Preis: </th><th> Menge: </th><t</tr>`
        for (i = 0; i < menus.length; i++) { newTable += `<tr><th>${menus[i]}:</th><th>${prices[i]}</th><th>${amounts[i]}</th><t</tr>` }
        newTable += `</table>`;
        document.getElementById('myNewTab').innerHTML += newTable
    }
}


