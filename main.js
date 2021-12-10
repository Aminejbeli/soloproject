$(document).ready(function(){

    $("#gameover").click(function(){
        window.location.reload()
    })
    
    var gm=$("<h1></h1>")
    gm.attr("id","gm")
    gm.text("GAME OVER")
    
    var energy=0
    var duration=15
    var body=$("body")
    var score=0
    var scoret=$("<h1></h1>")
    scoret.attr("id","scoren")
    scoret.text("Score :"+score)
    scoret.appendTo(body)
    var cible=$("#cible")
     $("#change").click(function(){
        if(cible.position().left>=580&&cible.position().left<=626){
        score++
        scoret.text("Score :"+score)
        if(duration===0.02){
            duration=0.02
        }
        else if(duration===1){
            duration=duration-0.2
        }
        else {duration--}
        setTimeout(function(){
        cible.css("animation-duration",duration+"s")},(duration/4)*1000)
        }
        else{
            energy++
        }
        if(energy===1){
            $("#green3").hide()
        }
        else if(energy===2){
            $("#green2").hide()
        }
        else if(energy===3){
            $("#green1").hide()
        }
        else if(energy===4){
            cible.css("animation-duration",0+"s")
            $("#change").hide()
            $("#gameover").show()
            gm.appendTo(body)
           
        }
    })
    

        
        
    

})



