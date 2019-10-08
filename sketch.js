
function setup(){

    createCanvas(450,180)
    background(255)
    }
    
    function draw(){
    
        for(var sqx1 = 0; sqx1 <= width; sqx1=sqx1 + 91){
            for(var sqy1 = 0; sqy1 <= height; sqy1 += 91){
       
        //squares
        fill(0)
       // stroke(255)
      //  strokeWeight(1)
        noStroke()
              square(sqx1,sqy1,100)
            }
    
    //Sqaure 1
    
             
            //Square 1
      for(let i = 5; i <83; i+=7)  {
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(5,i,83,i) } 
     //  square with lines
         fill(0)
          noStroke()
          square(18,17,55)
          
    //Sqaure 2        
            for(let i = 92; i < 179; i+=7)  {
    //circle with lines
             fill(255) 
              circle(133,43,60)
              //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(i,3,i,85)   }         
            
    //Square 3
      for(let i = 5; i < 83; i+=7)  {
    
      //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(187,i,266,i)   }      
    //triangle with lines
          fill(0)
          noStroke()
          triangle(225, 14, 195, 70, 255, 70)
    //Sqaure 4      
          for(let i =274;i< 363; i+=7){
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(i,3,i,88)      } 
         //rectangle with lines
          fill(255)
          rect(293,15,45,60)
       //Square 5
      for(let i = 5; i <85; i+=7)  {
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(367,i,445,i)   }         
     //shape with lines
          fill(0)
          noStroke()
          quad(393, 17, 415, 17, 439, 73, 375, 73);
                 
    //Sqaure 6     
          for(let i =5;i< 89; i+=7){
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(i,92,i,180) }       
        //shape with lines
          fill(255)
          noStroke()
          quad(80, 110, 30, 110, 12, 173, 62, 173);
          //quad(18, 110, 15, 110, 17, 173, 72, 173)
          
           //Square 7
      for(let i = 92; i <179; i+=7)  {
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(93,i,178,i)   }   
     
          //Diamond with lines
          
          push();   
       fill(0)
          noStroke()
         rotate(radians(45));   
         //square(260,10,55)
          rect(165, -30, 52, 52);
          pop()
          
          
          
          //Sqaure 8    
          for(let i =189;i< 268; i+=7){
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(i,92,i,180) }                 
        //right triangle
          triangle(200, 104, 195, 165, 255, 165)   
          
            //Square 9
      for(let i = 92; i <179; i+=7)  {
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(274,i,360,i)   } 
          //cross with lines
          noStroke()
          fill(0)
          rect(289,125,60,20)
          rect(310,105,20,60)
          
                //Sqaure 10  
          for(let i =367;i< 445; i+=7){
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(i,92,i,180) }
        //X with lines
          push()
                noStroke()
          fill(255)
           rotate(radians(765));
          rect(355,-200,60,20)
          rect(374,-219,20,60)
        pop()
          
          
          
            //Square 11
      for(let i = 187; i <271; i+=7)  {
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(5,i,83,i) } 
          
                //Sqaure 12  
          for(let i =93;i< 178; i+=7){
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(i,187,i,269) }
          
        
            //Square 13
      for(let i = 187; i <271; i+=7)  {
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(187,i,266,i) }             
                
                  //Sqaure 14  
          for(let i =274;i< 360; i+=7){
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(i,187,i,269) }
          
              //Square 15
      for(let i = 187; i <269; i+=7)  {
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(367,i,445,i) }       
            
                     //Sqaure 16
          for(let i =5;i< 89; i+=7){
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(i,277,i,362) }     
            
              //Square 17
      for(let i = 277; i <362; i+=7)  {
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(93,i,178,i) }        
            
              
                     //Sqaure 18
          for(let i =188;i< 269; i+=7){
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(i,277,i,362) }        
            
                   
              //Square 19
      for(let i = 277; i <362; i+=7)  {
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(274,i,360,i)   } 
           
            
                 //Sqaure 20  
          for(let i =367;i< 445; i+=7){
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(i,277,i,362) }       
            
            
                    //Square 21
      for(let i = 371; i <447; i+=7)  {
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(5,i,83,i) } 
            
               //Sqaure 22  
          for(let i =93;i< 178; i+=7){
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(i,371,i,447) }     
            
            //Square 23
      for(let i = 371; i <447; i+=7)  {
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(187,i,266,i) }             
                
                  //Sqaure 24  
          for(let i =274;i< 360; i+=7){
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(i,371,i,447) }
          
              //Square 25
      for(let i = 371; i <447; i+=7)  {
    //line        
       stroke(255)     
       strokeWeight(2.5)     
       line(367,i,445,i) }       
                   
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
      
                
    
    
    
        }
    
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    