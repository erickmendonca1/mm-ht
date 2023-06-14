window.addEventListener("DOMContentLoaded", function() {
    const progress1 = document.querySelector("#progress1");
    const range1 = document.querySelector("#range1");
    const value1 = document.querySelector("#value1");

    range1.addEventListener("input", function() {
        const value = this.value;
        value1.textContent = value;
        calculateSum();
    });

    const progress2 = document.querySelector("#progress2");
    const range2 = document.querySelector("#range2");
    const value2 = document.querySelector("#value2");

    range2.addEventListener("input", function() {
        const value = this.value;
        value2.textContent = value;
        calculateSum();
    });

    function calculateSum() {
        const sumValue = parseInt(value1.textContent) + parseInt(value2.textContent);
        document.querySelector("#sumValue").textContent = sumValue;
    }
});
