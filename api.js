var x = document.getElementById('submit').addEventListener('click',function(){
    console.log("its here");
      var search = document.getElementById('search').value;
      window.location = "result.html?q="+search;
        });
