var git = document.getElementById('git')
git.addEventListener('submit', function(e){
    e.preventDefault()
    var search = document.getElementById('search').value
    var name = search.split(' ').join('')
    document.getElementById("result").innerHTML = ""
    document.getElementById("repositories").innerHTML = ""

    fetch("https://api.github.com/users/"+name)
    .then((result)=> result.json())
    .then((data)=>{
        console.log(data)
        fetch(`https://api.github.com/users/${name}/repos`)
        .then((resp)=>resp.json())
        .then((rep)=>{
            //console.log(rep)
            // var arr = Object.entries(rep).map(val => rep[val]);
            // console.log(arr)
            // for(let i=0; i<=rep.length; i++){
            //     //console.log(rep[i])
            // }
            
            console.log(rep)
            rep.map((x) => {
                console.log(x.html_url)
                document.getElementById('repositories').innerHTML+=`
                <div id="card" style="width: 18rem;" >
                    <div class="card-body">
                        <h5 class="card-title">${x.name}</h5>
                        <a href="${x.html_url}">${x.full_name}</a>
                    </div>
                    </div>
                
                `
            });
            
                //console.log(x)
                
            
            
            
        })
        
        
        document.getElementById('result').innerHTML = `
        <img class="image" src="${data.avatar_url}">
        <div class="name"><b>${data.name}</b></div>
        <div class="login">${data.login}</div>
        <div class="popular">Popular Repositories</div>
        
        `
        
        
            // document.getElementById('repositories').innerHTML =`
            // <div>${rep.name}</div>
            // `
        
    })
})