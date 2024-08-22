const nutritionData = {
    egg: { protein: 7, fat: 6, carbs: 0.7, calories: 90 },
    avocado: { protein: 3, fat: 22, carbs: 12, calories: 320 },
    oatmeal: { protein: 6, fat: 3.5, carbs: 33, calories: 190 },
    peanut: { protein: 13, fat: 25, carbs: 10, calories: 290 },
    bacon: { protein: 15, fat: 19, carbs: 0, calories: 225 }
};

function calculateNutrition() {
    const selectedFood = document.getElementById('food-select').value;
    const result = nutritionData[selectedFood];

    if (result) {
        document.getElementById('protein').textContent = result.protein;
        document.getElementById('fat').textContent = result.fat;
        document.getElementById('carbs').textContent = result.carbs;
        document.getElementById('calories').textContent = result.calories;
    } else {
        document.getElementById('protein').textContent = '0';
        document.getElementById('fat').textContent = '0';
        document.getElementById('carbs').textContent = '0';
        document.getElementById('calories').textContent = '0';
    }
}
