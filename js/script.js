let inputCRM = document.getElementById('crmDoMedico');


// validação crm
inputCRM.addEventListener('keyup', (event) => {


    if (isNaN(inputCRM.value)) {
        inputCRM.value = inputCRM.value.substring(0, (inputCRM.value.length - 1))
    }

    if (inputCRM.value.length >= 11) {
        inputCRM.value = inputCRM.value.substring(0, 10)
    }
})