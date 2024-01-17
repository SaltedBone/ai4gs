// Load Google Drive API library
const drive = require('google-drive');

// Folder where files will be stored
const FOLDER_ID = '1234abc'; 

function createFile(fileName, content) {

  // Create a new Google Doc file
  const file = drive.files.create({
    name: fileName, 
    parents: [FOLDER_ID],
    mimeType: 'text/plain' 
  });
  
  // Write content to new file
  drive.files.update({
    fileId: file.id,
    content: content
  });

  return file;

}

function readFile(fileName) {

  // Find file in folder
  const file = drive.files.list({
    q: `name = '${fileName}' and '${FOLDER_ID}' in parents` 
  }).next();

  // Return file content
  return drive.files.get(file.id).content;

}  

function updateFile(fileName, newContent) {

  // Find file
  const file = drive.files.list({ /*...*/ }).next();

  // Update content
  drive.files.update({
    fileId: file.id,
    content: newContent
  });

}

function deleteFile(fileName) {
  
  // Find file
  const file = drive.files.list({ /* ... */ }).next();

  // Delete file
  drive.files.delete(file.id);

}
