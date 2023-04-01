function calculateTip(ev){
    ev.preventDefault()

    let bill = document.getElementById('bill').value
    let service = document.getElementById('service').value
    let numOfPeople = document.getElementById('people').value

    if(bill == "" | service == 0){
        alert("Por favor, preencha os valores !")
        return
    }
    if(numOfPeople == " " | numOfPeople <= 1){
        numOfPeople = 1
        document.getElementById('each').style.display = "none"
    }else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * service) / numOfPeople
    total = total.toFixed(2)

   document.getElementById('tip').innerHTML = total
   document.getElementById('totalTips').style.display = "block"

}
  

 document.getElementById('totalTips').style.display = "none"
 document.getElementById('each').style.display = "none"
document.getElementById('tipsForm').addEventListener('submit', calculateTip)
