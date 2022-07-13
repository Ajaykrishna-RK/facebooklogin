$(document).ready(function(){
    $("#form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true

            },
            password:{
                minlength:7

            },
            day:{
                required:true

            },
           month:{
               
                required:true
           },
           year:{
            required:true
           },
           gender:{
               required:true
           }
        

        },
        messages:{
            fname:{
                required: "Enter first name",
                minlength:'Enter atleast 4 characters'
            },
            sname:{
                required:"Enter last name",
                minlength:"Enter atleast 4 characters"

            },
            email:{
                required:"This field is required",
                email:"Enter a valid email address"
            },
            password:{
                required:"Enter password",
                minlength:"Enter atleast 7 characters"
            }
        }

    })
})