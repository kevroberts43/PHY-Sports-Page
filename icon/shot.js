const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1024,height:1024}});
await p.goto('file://'+process.cwd()+'/icon3.html');await p.waitForTimeout(2500);
console.log(await p.evaluate(()=>document.fonts.check("italic 900 50px 'Barlow Condensed'")));
await p.locator('.ic').screenshot({path:'phy-icon-philly.png'});await b.close();})();
