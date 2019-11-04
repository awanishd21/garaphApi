$(document).ready(function() {

   $("#login").click(function() {

      let email = $("#uemail").val();
      let passwd = $("#upasswd").val();
      if(email && passwd){
         $.post({url: "http://localhost:8080/api",
                contentType: "application/json",
                data: JSON.stringify({ query:`mutation{
               login(email:"${email}", password:"${passwd}")}`
            }),
            success: function(result) {
               console.log(JSON.stringify(result))
            }
         });

      }else{
         alert("All fields are required!!!");
      }

   });
   
   $("#btnGreet").click(function() {
      $("#greetingDiv").html('loading....');
      //https://kannan-first-graphql-app.herokuapp.com/graphql
      $.ajax({url: "http://localhost:9000/graphql",
         contentType: "application/json",
         type:'POST',
         data: JSON.stringify({
            query:`{greeting}`
         }),
         success: function(result) {
            $("#greetingDiv").html("<h1>"+result.data.greeting+"</h1>");
         }
      });
   });
});