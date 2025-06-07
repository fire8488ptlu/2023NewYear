const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const path = require('path');
const fs = require('fs')



app.use(express.static(path.join(__dirname, './build')));




app.get('/content/:id', function(req, res) {
  //console.log(req.params.id)
  const CardID = req.params.id
  const filePath = path.join(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) return console.log(err);
    

    data = data.replace("http://2023newyearblessings.bannerch.org/ContentImg/MainPage.png", `http://2023newyearblessings.bannerch.org/ContentImg/${CardID}.jpg`);
    data = data.replace("新春祝福！歡迎轉發給家人朋友，一起來領受美好祝福！","恩惠慈愛袋著走！來看看我抽到什麼祝福");
    // data = data.replace("2023旌旗教會陪您，新春過好年", "2023恩惠慈愛袋著走，抽經文，領祝福~~");
    // data = data.replace("OG_IMAGE_WIDTH","400");
    // data = data.replace("OG_IMAGE_HEIGHT","700");
    
    return res.send(data);
  });
});


app.get('/*', function(req, res) {
  console.log("all route")
  const filePath = path.join(__dirname, './build', 'index.html');
  //console.log("all route")
    fs.readFile(filePath, 'utf8', function (err,data) {
    if (err)  return console.log(err);
    
    return res.send(data);
  });
});





app.listen(port, () => console.log(`Listening on port ${port}`));