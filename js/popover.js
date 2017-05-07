// Allow for image to be in the popover
$('a[rel=popover]').popover({
  html: true,
  trigger: 'hover',
  placement: 'auto',
  content: function(){return '<img src="'+$(this).data('img') + '" />';}
});
