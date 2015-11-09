    /*
    	student name: damian graham
    	student ID: 620053878
    */
     var puzz;
        var topIn=0;
        var leftIn=0;
        var puzzSpace=15;
        var allPuz;
        var mStatus= false;
        var isBackgroundImg;
        var isPuzzlArray;
        
     
     function buildApuzzle()
     {
        puzz = document.getElementById("puzzlearea");
        allPuz= puzz.childNodes;
        allPuz=puzz.querySelectorAll("div");
       
        isBackgroundImg="url('link-zelda-400x400.jpeg')";
        document.getElementById("puzzlearea").style.backgroundImage = isBackgroundImg ;
        isBackgroundImg.className="puzzlepiece"; 
        
        
        
        for (var counter= 0; counter <allPuz.length ; counter++)
        { 
            allPuz[counter].className="puzzlepiece";
            allPuz[counter].style.top=topIn + "px";
            allPuz[counter].style.left=leftIn + "px";
            
            if (leftIn< 300)
            {
                leftIn+=100;
            }
            else 
            {
                leftIn = 0;
			    topIn += 100;
            }
        }
        
        var whiteOut=puzz.lastChild;
        whiteOut.style.backgroundColor="white";
    }
    
   
   function moveTile()
   {
       
        //allPuz.style.top= "-100px";
        for (var i = 0; i < allPuz.length;i++)
        {
            if (allPuz[i]==allPuz[5])
            {
                allPuz[i].style.backgroundColor="red";
            }
        }
        
   }
   
  
window.onload= function()
{
    buildApuzzle();
    
    puzz = document.getElementById("puzzlearea");
    allPuz= puzz.childNodes;
    allPuz=puzz.querySelectorAll("div");
   
    allPuz.onclick= function() {moveTile();};
    
};
   


  
   

       
   
       
