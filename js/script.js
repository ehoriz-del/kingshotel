/*
    Kings Hotel
    Main JavaScript

    Current version:
    - No external libraries
    - Compatible with GitHub Pages
*/


document.addEventListener(
    "DOMContentLoaded",
    function () {


        const details =
        document.querySelectorAll("details");


        details.forEach(function(item){


            item.addEventListener(
                "toggle",
                function(){


                    if(item.open){

                        details.forEach(function(other){


                            if(other !== item){

                                other.removeAttribute("open");

                            }


                        });

                    }


                }
            );


        });


    }
);
