

$(document).ready(function(){
    //alert(5);

    $("#cars").change(function(){
        if($(this).val().indexOf("volvo") != -1 || $(this).val().indexOf("opel") != -1)
            $("#hdnOne").show();
        else
            $("#hdnOne").hide();
    });
});