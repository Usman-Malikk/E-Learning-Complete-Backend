const UploadFile = (req, res, next) => {
  try {
    const File = [];
    req?.files?.map((file) => {
      File.push({
        file: "http://localhost:5000/public/" + file.filename,
      });
    });
    res.json({
      message: "File Uploaded",
      file: File[0],
    });
  } catch (e) {
    res.json({
      message: "Error Occur!..",
    });
  }
};
module.exports = UploadFile;
