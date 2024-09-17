document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const capitalInput = document.getElementById('capitalInput');
    const countryInfo = document.getElementById('countryInfo');

    fetchButton.addEventListener('click', () => {
        // Get the capital city from the input field
        const capital = capitalInput.value.trim();
        
        if (capital === '') {
            countryInfo.innerHTML = '<p>Please enter a capital city.</p>';
            return;
        }

        // URL to fetch data from
        const url = `https://restcountries.com/v3.1/capital/${capital}`;

        fetch(url)
            .then( response => response.json())
            .then(test => { 
                console.log('Full Data: ', test);
                
                if(test && test.length > 0 ){
                    const languages = test[0].languages;
                    console.log('Languages', languages);
                }
            });
     
    });
});
