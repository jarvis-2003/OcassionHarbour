var data ={
    chatinit:{
        title:["Hello <span class='emoji'>&#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options:["Order and Payment <span class ='emoji'>&#128181;</span>","Technical Support <span class ='emoji'>&#127911;</span>","Account Management","Feedback and Reviews <span class ='emoji'>&#11088;</span>"],
        url:{

        }
    },
    order:{
        title:["Thanks for your response","Please select any option below option to proceed further."],
        options:["Payment got Stuck","Ways of payment","return the order","refund money stuck"],
        url:{
            more:"https://support.google.com/paymentscenter/answer/9034675?hl=en-IN",
            link:["#","#","#","#"]
        }
    },
    technical:{
        title:["Please select any option below option to proceed further."],
        options:["Security Concern","link not working","form submission error"],
        url:{
            more:"https://support.google.com/paymentscenter/answer/9034675?hl=en-IN",
            link:["#","#","#"]
        }


    },
    account:{
        title:["thanks for sharing your problem."],
        options:["forget password","login problem"],
        url:{
            more:"https://support.google.com/paymentscenter/answer/9034675?hl=en-IN",
            link:["#","#"]
        }

    },
    feedback:{
        title:["hope you enjoyed our service.","please visit again if required"],
        options:["do u have other question","bye"],
        url:{
            more:"https://support.google.com/paymentscenter/answer/9034675?hl=en-IN",
            link:["#","#"]
        }
    }
 


}
var cbot = document.getElementById("chat-box");
var len1 = data.chatinit.title.length;
document.getElementById("botstart").addEventListener("click",showbot)
var i =0;
function showbot(){
    if(i == 0)
    {
    document.getElementById('test').style.display = 'block';
    document.getElementById("changeimg").src = "../images/cross.png";
    i =1;
    console.log(i);
    initchat();
    }
    else
    {
        document.getElementById('test').style.display = 'none';
        document.getElementById("changeimg").src = "../images/pngegg.png";
        i = 0;
        console.log(i);
    }
}
function initchat(){
    j=0;
    cbot.innerHTML='';
    for(var i = 0;i<len1;i++)
    {
        setTimeout(handlechat,(i*500));
    }
    setTimeout(function(){
        showoptions(data.chatinit.options)
    },((len1+1)*500));
}
var j=0;
function handlechat(){
    console.log(j);
    var elm = document.createElement("p");
    elm.innerHTML = data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
}
// var len2 = data.chatinit.options.length;
// console.log(len2)
function showoptions(Opt){
    for(var i=0; i < Opt.length;i++)
    {
        var opt = document.createElement("span");
        opt.innerHTML = Opt[i];
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }

}

function handleOpt() {
    console.log("this is :" + this);

    var str = this.innerText;
    var textarr = str.split(" ");
    var findText = textarr[0].toLowerCase();
    console.log(findText);

    document.querySelectorAll(".opt").forEach(el => {
        el.remove();
    });

    var elm = document.createElement("p");
    elm.setAttribute("class", "test");
    var sp = '<span class="rep">' + this.innerText + '</span>';
    elm.innerHTML = sp;
    cbot.appendChild(elm);
    var tempObj = data[findText];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}

function handleResults(title,op,url){
    for(let i = 0;i < title.length;i++)
    {
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
    }
    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }
    if(isObjectEmpty(url) == true)
    {
        console.log("having more questions");
        console.log(op);
        setTimeout(function(){
            showoptions(op);
        },title.length*500)
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(op,url);
        },title.length*500)
    }

}
function handleOptions(op,url)
{
    for(var i=0;i<op.length;i++)
    {
        var opt = document.createElement("span");
        var inp = '<a class = "m-link href"'+url.link[i]+'">'+op[i]+'</a>';
        opt.innerHTML = inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt = document.createElement("span");
    var inp = '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();

}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}