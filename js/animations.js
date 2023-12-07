//ScrollAnimations 
var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container], [data-animation-start]');
$('[data-animation-start]').scrollAnimations({
 offset: 1.5
});
$containers.scrollAnimations();
