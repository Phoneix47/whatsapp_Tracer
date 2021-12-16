var express = require('express');
var app = express();
var cors = require('cors');
const showBanner = require('node-banner');
 
app.use(cors({
    origin: '*'
}));


app.get('/online', function(req, res){
   res.send({online, labels,onlineTime,offlineTime});
});
console.log("1. api started posting data.")
app.listen(3001);
console.log("2. started listen to port 30001")




const puppeteer = require('puppeteer');
(async () => {

  
  showBanner('WhatsApp Automation', 'devloped by Ajay Kumar');
  
  const browser = await puppeteer.launch({ headless: true, userDataDir: '/home/mrrobot/session'})
  console.log("3. launching Browser")
  const page = await browser.newPage()

  const navigationPromise = page.waitForNavigation()

  await page.goto('https://web.whatsapp.com/')
  console.log("4. started whatsapp")
  await page.waitForTimeout(200)
  let name = "Mine";
  console.log(`5. user selected is ${name}`)

  await page.waitForSelector(`span [title='${name}']`);


  const target = await page.$(`span [title='${name}']`)
  target.click();
  
await page.waitForTimeout(1000)

global.online = [] ;
global.labels = [] ;
global.onlineTime = 0 ;
global.offlineTime = 0;
global.text = "";
global.a = 0 ;


//console.log(labels);

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

  
  async function getdata() {
  await sleep(2000);
  const element = await page.$(".emoji-texttt._2YPr_.i0jNr.selectable-text.copyable-text");
  
  

//console.log(null);
  if(element === null) {
    text = "offline";
    console.log(`${text }`)
} else {
  text = await (await element.getProperty('textContent')).jsonValue();
}

  
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var ampm = hour >= 12 ? 'pm' : 'am';

var p = `${hour}:${min} ${ampm}`
  
 if(text === "online" && "typing") {
  console.log(`6. ${name} is online`)
    online.push(++a);
    onlineTime++;
    labels.push(p);
      await sleep(58200);  
       getdata()
}else{
 online.push(a)
  offlineTime--;
  labels.push(p);
    console.log(`7. ${name} is offline`)
      await sleep(58200);
        getdata()
          }
            }
getdata();
await navigationPromise
})()




