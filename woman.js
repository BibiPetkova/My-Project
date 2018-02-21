
            // Get the modal
          var modal = document.getElementById('myModal');

          // Get the button that opens the modal
         var btn = document.getElementById("myBtn");

         // Get the <span> element that closes the modal
         var span = document.getElementsByClassName("close")[0];

         // When the user clicks on the button, open the modal 
         btn.onclick = function() {
         modal.style.display = "block";
          }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
         }
         }

     
        
        
        <!-- DropDown menu-->
        
        $(function() {
            $('#main-menu').smartmenus();
              });
     
        <script type="text/javascript">
        $(document).ready(function(){
        $('#smartcart').smartCart();
        });
        
        
        
        
        
            // When the user scrolls down 20px from the top of the document, show the button
         window.onscroll = function() {scrollFunction()};

         function scrollFunction() {
         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
          } else {
        document.getElementById("topBtn").style.display = "none";
            }
                         }


            function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
              }
        