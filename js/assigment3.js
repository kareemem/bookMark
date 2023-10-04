var siteName =document.getElementById("siteName")
var siteUrl =document.getElementById("SiteUrl")
var siteCountainer = []


if(localStorage.getItem("webSites") != null){
    siteCountainer=JSON.parse(localStorage.getItem("webSites")) 
    displaySite(siteCountainer)
}


function aadWebSite(){
    if(valditeSite()==true){
        if(valditeUrl()==true){
            var site =  {
                name: siteName.value,
                url: siteUrl.value,
            }
            siteCountainer.push(site)
            localStorage.setItem("webSites" , JSON.stringify(siteCountainer))
            displaySite()
            reset()
        }else{
            showDiaSiteUrl()
        }
    }
    else{
        
        showDiaSiteName()
    }

    
}



function displaySite() {
    var trs = ``
    for(var i=0; i<siteCountainer.length;i++){
        trs +=`
        
                <tr>
                <td>${i+1}</td>
                <td>${siteCountainer[i].name}</td>
                <td><button class="btn btn-outline-info">
                        <a href="${siteCountainer[i].url}" target="_blank" title="visit website"><i class="fa-regular fa-eye"></i>
                        </a>
                </button></td>
                <td><button class="btn btn-outline-danger" onclick="deletSite(${i})">
                    <i class="fa-solid fa-trash"></i>
                </button></td>
                </tr>
        `
    }
    document.getElementById('tableBody').innerHTML=trs;

}

function reset(){
    siteName.value = '';
    siteUrl.value = '';
    
}

function deletSite(productIndex) {
    siteCountainer.splice(productIndex,1)
    localStorage.setItem("webSites" , JSON.stringify(siteCountainer))
    displaySite(siteCountainer)
}

function valditeSite(){
    var regex=/^[A-Z][a-z]{3,8}$/
    return regex.test(siteName.value)
}

function valditeUrl(){
    var regex=/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
    return regex.test(siteUrl.value)
}

var dia= document.querySelector("dialog")


function showDiaSiteName(){
    dia.showModal()
    document.getElementById("pDia").innerHTML="the name is incorrect. please write the name: <br>1- the first letter is a capital <br>2-it consists of 3:8 letters"

}

function showDiaSiteUrl(){
    dia.showModal()
    document.getElementById("pDia").innerHTML="Site URL must be a valid one"

}


function hideDia(){
    dia.close()
}


