const inputs =  document.querySelectorAll('.grid-item input')
const txtBox = document.querySelector('#num')
const lblPrev = document.querySelector('#pR')


inputs.forEach(input => {
    input.addEventListener('click',(e)=>{
        if (e.target.id != "res" && e.target.id != "one-clear") {
            txtBox.value += input.value;
            }
        if (input.value === "C") {
            txtBox.value = "";
            lblPrev.innerHTML = "";
            temp = "";
        }
        if (e.target.id === "res") {
            let evalu = eval(txtBox.value);
            let previous = txtBox.value
            txtBox.value = evalu
            lblPrev.innerHTML = previous;
        }
        if (e.target.id === "one-clear") {
            let temp = new String(txtBox.value);
            txtBox.value = temp.slice(0,temp.length-1)
        }
        if (input.value === "%"){
            txtBox.value+=eval(txtBox)
        }
    })
});