$.ajax({
 type:'get',
 url:'https://api.covid19api.com/summary',
 success: function(responce)
 {
        console.log(responce)
 },
 error: function(error)
{
    console.log(error)
}



})