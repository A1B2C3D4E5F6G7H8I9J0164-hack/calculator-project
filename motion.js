const display = document.getElementById('display');

        function appendValue(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function calculate() {
            try {
                display.value =  display.value == 0/0  ? "not defined" : eval(display.value);
            } catch (error) {
                alert('Invalid Input');
                console.error(error);
                
                clearDisplay();
            }
        }