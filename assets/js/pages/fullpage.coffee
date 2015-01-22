$ ->
  $('#fullpage').fullpage({
    sectionsColor: ['#f2f2f2','#4BBFC3','#ab1111']
    navigation: true
    afterRender: () ->
      mtop=$(document).height()/2-$('.rect').height()/2
      $('.rect').animate({left:'60%',marginTop:mtop},700)
    afterResize: ()->
      mtop=$(document).height()/2-$('.rect').height()/2
      $('.rect').animate({left:'60%',marginTop:mtop},700)
    onLeave: (index,nextIndex,direction) ->
      #$(".rect").toggleClass('movedown',index == 2)
      if nextIndex == 3
        $('.rect').animate({top:'200%',left: '50%'},700)
      else if nextIndex == 2
        mtop=$(document).height()/2-$('.rect').height()/2
        $('.rect').animate({top:'100%',left: '10%'},700)
      else if nextIndex == 1
        $('.rect').animate({top:'0',left: '60%'},700)
  })
