//datepicker
$(document).ready(function() {
  $('#inputDepartureDate').datepicker({
    theme: 'blue',
    outputFormat: 'dd/MM/yyyy'
  });
  $('#inputReturnDate').datepicker({
    theme: 'blue',
    outputFormat: 'dd/MM/yyyy'
  });


  $('#inputDepartureDate2').datepicker({
    theme: 'blue',
    outputFormat: 'dd/MM/yyyy'
  });
  $('#inputReturnDate2').datepicker({
    theme: 'blue',
    outputFormat: 'dd/MM/yyyy'
  });




  $('#inputDepartureDate').change(function(e){
      $("#inputReturnDate").focus();

      $($("body").find("#inputReturnDate").parent("div").find(".datepicker-button")).trigger("click"); 
  });




      $('.more-info-tooltip').tooltip();
        $('.more-info-tooltip').click(function(e){
                if($(this).parent('div').find(".tooltip").length){
                    $('.more-info-tooltip').tooltip('hide');
                }
                else{
                    $(this).tooltip('show');

                }
        });





});




