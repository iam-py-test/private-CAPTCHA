window.CAPTCHAp = {
  private:{
    choice:function(arr){
      return arr[Math.round(Math.random()*arr.length)]
    },
    ch:new Map([["What is tree without the ee?","tr"],["What is bee without the b?","ee"]]),
    
  }
}
var verify = async function(clocation={top:0,left:0}){
  var keys = ['What is tree without the ee?','What is bee without the b?']
  return new Promise(res => {
    const CAPTCHAbox = document.createElement('div')
    CAPTCHAbox.style.background = 'gray'
    CAPTCHAbox.style.left = clocation.left + "px"
    CAPTCHAbox.style.top = clocation.top + "px"
    const message = window.CAPTCHAp.choice(keys)
    console.log(message)
  })
}
