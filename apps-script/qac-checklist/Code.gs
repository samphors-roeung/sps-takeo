var FOLDERS = {
  'Finance': '1MVDlB5a0Fc_0JbkS4y0-s4pDqY8znuey',
  'HR': '1TrFTmXDv738NK6rUN9Q2Yo0tNGGt2VkL',
  'Admin & Facility': '1frcNhcoFBOuz1lRkDqO_E-YxFXVggmME',
  'KGE': '126fAH9L1iZ8EKhnf8TYvEBFkQ6cfe6x3',
  'GEP': '1ECj79xQ8-_aCXlZBmMl8UXcFb5Wh-W4U',
  'ICT': '1lWTERPDn2tMOGmGqMH3H-9xXo-bi4pPB',
  'Marketing': '1CPnCPCbUrlXnOh1QCWx1QlXEv-9zIUna'
};

var USERS = {
  'admin': { password: 'admin123', role: 'Admin' },
  'user': { password: 'user123', role: 'User' }
};

function doGet(e) {
  var template = HtmlService.createTemplateFromFile('Index');
  return template.evaluate()
      .setTitle('Document In & Out | Sovannaphumi School')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

function include(filename) { 
  try {
    return HtmlService.createHtmlOutputFromFile(filename).getContent(); 
  } catch (e) {
    if (filename.toLowerCase() === 'javascript') {
      try {
        return HtmlService.createHtmlOutputFromFile('JavaScript').getContent();
      } catch (err) {
        return HtmlService.createHtmlOutputFromFile('Javascript').getContent();
      }
    }
    throw e;
  }
}

function verifyLogin(username, password) {
  if (USERS[username] && USERS[username].password === password) {
    return { success: true, role: USERS[username].role, username: username };
  }
  return { success: false, message: 'Invalid credentials' };
}

function getDeptYearFolder(dept, year) {
  var parentFolderId = FOLDERS[dept];
  if (!parentFolderId) return null;
  var parentFolder = DriveApp.getFolderById(parentFolderId);
  var yearStr = String(year || '2026').trim();
  var subFolders = parentFolder.getFoldersByName(yearStr);
  if (subFolders.hasNext()) {
    return subFolders.next();
  } else {
    return parentFolder.createFolder(yearStr);
  }
}

function getInitialData(year) {
  var targetYear = String(year || '2026').trim();
  var props = PropertiesService.getScriptProperties();
  
  var progressStr = props.getProperty('QAC_PROGRESS_' + targetYear);
  if (!progressStr && (targetYear === '2025' || targetYear === '2026')) {
    progressStr = props.getProperty('QAC_PROGRESS');
  }
  var progress = progressStr ? JSON.parse(progressStr) : {};
  
  var allAttachments = {};
  for (var dept in FOLDERS) {
    var parentFolderId = FOLDERS[dept];
    if (parentFolderId) {
      try {
        var yearFolder = getDeptYearFolder(dept, targetYear);
        if (yearFolder) {
          var files = yearFolder.getFiles();
          while (files.hasNext()) {
            var file = files.next();
            var itemKey = file.getDescription();
            if (itemKey) {
              if (!allAttachments[itemKey]) allAttachments[itemKey] = [];
              allAttachments[itemKey].push({
                id: file.getId(), 
                name: file.getName(), 
                url: file.getUrl(),
                downloadUrl: file.getDownloadUrl() || file.getUrl(), 
                size: file.getSize()
              });
            }
          }
        }
        
        if (targetYear === '2026' && Object.keys(allAttachments).length === 0) {
          var parentFolder = DriveApp.getFolderById(parentFolderId);
          var rootFiles = parentFolder.getFiles();
          while (rootFiles.hasNext()) {
            var rFile = rootFiles.next();
            var rKey = rFile.getDescription();
            if (rKey) {
              if (!allAttachments[rKey]) allAttachments[rKey] = [];
              allAttachments[rKey].push({
                id: rFile.getId(), 
                name: rFile.getName(), 
                url: rFile.getUrl(),
                downloadUrl: rFile.getDownloadUrl() || rFile.getUrl(), 
                size: rFile.getSize()
              });
            }
          }
        }
      } catch(e) {}
    }
  }
  return { year: targetYear, progress: progress, attachments: allAttachments };
}

function saveProgress(itemKey, isChecked, year) {
  var targetYear = String(year || '2026').trim();
  var props = PropertiesService.getScriptProperties();
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(5000);
    var keyName = 'QAC_PROGRESS_' + targetYear;
    var progressStr = props.getProperty(keyName);
    var progress = progressStr ? JSON.parse(progressStr) : {};
    progress[itemKey] = isChecked;
    props.setProperty(keyName, JSON.stringify(progress));
    return { success: true };
  } catch (e) { 
    return { success: false, error: e.toString() }; 
  } finally { 
    lock.releaseLock(); 
  }
}

function uploadAttachment(base64Data, filename, dept, itemKey, year) {
  try {
    var targetYear = String(year || '2026').trim();
    var folder = getDeptYearFolder(dept, targetYear);
    if (!folder) {
      folder = DriveApp.getFolderById(FOLDERS[dept]);
    }
    var splitBase = base64Data.split(',');
    var type = splitBase[0].split(';')[0].replace('data:', '');
    var blob = Utilities.newBlob(Utilities.base64Decode(splitBase[1]), type, filename);
    var file = folder.createFile(blob);
    file.setDescription(itemKey); 
    return { 
      success: true, 
      attachment: { 
        id: file.getId(), 
        name: file.getName(), 
        url: file.getUrl(), 
        downloadUrl: file.getDownloadUrl() || file.getUrl(), 
        size: file.getSize() 
      } 
    };
  } catch (e) { 
    return { success: false, error: e.toString() }; 
  }
}

function deleteAttachment(fileId) {
  try { 
    DriveApp.getFileById(fileId).setTrashed(true); 
    return { success: true };
  } catch (e) { 
    return { success: false, error: e.toString() }; 
  }
}
