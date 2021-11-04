class Test {
  processDataByType(type) {
    if (type === null) return false
    const typeMap = {
      share_folder: 'group',
      device_folder: null,
      folder: 'folder',
      linkfolder: 'folder',
      device: '',
    }
    if (!(type in typeMap)) return false
    //处理device
    if (type === 'device') {
      this.filePath.push(this.currentParentId)
      this.filePathName.push(this.directoryName)
      this.data.files = []
      this.data.next_offset = 0
      this.data.type = 'deviceGroupFile'
      this.currentParentId = item.fileId
      this.directoryName = item.name
    } else {
      //处理其他
      this.data.next_filter = typeMap[type]
      this.openGroupFolder(item.fileId, item.name)
    }
    return true
  }

  openItem(item) {
    this.clickFlag = false
    this.selectItem = null
    //处理数据成功return
    if (this.processDataByType(item.type)) return
    this.toEditPage(item.size, item.fileId)
  }
}
