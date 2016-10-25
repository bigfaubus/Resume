function main(){
  $('.skillset').hide();

  $('.skillset').fadeIn(3000);

  $('.projects').hide();

  $('.projects-button').on('click', function() {
    $(this).toggleClass('active');

    $(this).text('Projects Viewed');

    $(this).next().slideToggle(1000);

  });                     
};

$(document).ready(main);
