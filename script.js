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
                    
                    <div class="card m-2 p-2" style="width:300px">
                        <img class="card-img-top" src="./Photos/P1 (${i}).jpg" alt="Card image" style="width:100%">
                    </div>
                    
                    <br>`);
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