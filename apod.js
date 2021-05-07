
    $("#data").on("change", function(){


    
     $.ajax({ "url": `https://api.nasa.gov/planetary/apod?api_key=JKt9Jqik8BP7mpxRqS4Hh61zZDfv3I4jF0eUIkhV&date=${$('#data').val()}
        `,    
    


        "success": function (result){
       
           $('#titulo1').text(`${result.title}`)
       
           $('#info').html(`${result.explanation}`) 
           
           $('#imagem').attr("src", `${result.url}`)
    
        }})
    
    
    })
    