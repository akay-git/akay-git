$(document).ready(
    function(){
        $('#btn2').hide();
        $('#btn').click(
            function(){
                $('#btn').hide();
                $('#btn2').show();
                for(let i =1; i <=  21;i++){
                    $("#div").append(`
                    <br>
                    <img class="img-fluid" style="object-fit:cover;width:300px" src="./Photos/P1 (${i}).jpg" alt="Card image" style="width:100%">
                    <br>`
                    );
                }
            }
        );
        $("#btn2").click(
            ()=>{
                $("#btn2").hide();
                $("#btn").show();
                $("#div").empty();
            }
        )
    }
)