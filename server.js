const express = require('express');
const fileUploader = require('express-fileupload');
const app = new express();
const cors = require('cors');

app.use(fileUploader());
app.use(cors());

app.get('/getProfileImage/:fileName', (req, res) => {
  try {
    let filePath = 'uploads/' + req.params.fileName;
    return res.status(200).sendFile(`${__dirname}/` + filePath);
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.post('/upload', (req, res) => {
  var file = req.files.file;

  if (!req.files) return res.status(400).json({ msg: 'File Not Selected' });

  file.name = file.md5 + '.png';
  console.warn(`${__dirname}\\uploads\\${file.name}`);
  file.mv(`${__dirname}\\uploads\\${file.name}`, (err) => {
    if (err) {
      return res.status(500).json({ msg: 'File directory not exists' });
    }
    console.warn('-->UploadedFile : ', file);
    return res.status(200).json({ FileName: file.name, FilePath: '/uploads/' + `${file.name}` });
  });
});

app.listen(3000, () => {
  console.log('Listening at port 3000');
});