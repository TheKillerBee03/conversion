let button = document.getElementById('onclick');

button.addEventListener('click', function(){
  const gram = parseInt(document.getElementById('grams').value);
  const type = document.getElementById('type').value;

  if(gram === '' || isNaN(gram)){
    document.getElementById('grams').focus();
    document.getElementById('error').innerHTML = 'Please provide a valid gram';
    document.getElementById('output').innerHTML = '';
  }else{
    document.getElementById('error').innerHTML = '';
    switch(type){
            case 'Ounces':
              convert_ounces(gram);
              break;
              default:
              alert('Error');
              }
    function convert_ounces(gram){
      let rate = 0.035274, ounces;
      ounces = gram * rate;
      document.getElementById('output').innerHTML = gram + " grams = " + 
      ounces.toFixed(3) + ' ounces.';
    }
  
  }
});
