function downloaddata(){
    return new Promise(function(resolve){
      setTimeout(() => {
        console.log("Data Downloaded");
        resolve("Downloaded");
      }, 1000);
    });
}

function processdata(data){
    return new Promise(function (resolve){
        setTimeout(function(){
         console.log("Data Processed");
         resolve("Processed "+ data);
        },1000);
    });
}

downloaddata()
.then(processdata)
.then(function(finaldata){
    console.log("Final Result: "+ finaldata);
 
})
.catch(function(error){
 console.error("An error occured:", error);
});