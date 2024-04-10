const petrolCostInput = document.getElementById('petrol-cost');   //petrol cost input field
const litersPurchasedInput = document.getElementById('liters-purchased');   //liters purchased input field 
const calculateBtn = document.getElementById('calculate-btn');  //calculate button 
const totalCostP = document.getElementById('total-cost');  //total cost paragraph

petrolCostInput.value = '1.72';    //default value as 1.72 AED per liter of petrol in UAE//
litersPurchasedInput.value = '0';

calculateBtn.addEventListener('click', () => {          //adding a click button event listener to the calculate button//
    const petrolCost = parseFloat(petrolCostInput.value);       //parsing the petrol cost from the input to float number//
    const litersPurchased = parseFloat(litersPurchasedInput.value);  //liters purchased converted to float for calculations//

    const totalCost = petrolCost * litersPurchased;   //multiplying the cost by number of liters to get total cost//
    totalCostP.textContent = `AED : ${totalCost.toFixed(2)}`;  //displaying the total cost to the users initially with zero since no petrol is purchased yet//
});