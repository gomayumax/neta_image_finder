/**
 * Created by goma on 2017/08/27.
 */
const remote = require('electron').remote
const {dialog} = require('electron').remote
const fs = require('fs')

export default {
  state: {
  },
  mutations: {
    SAVE_FILE () {
      var window = remote.getCurrentWindow()
      var options = {
        title: 'タイトル',
        filters: [
          {
            name: 'ドキュメント',
            extensions: ['txt', 'text']
          },
          {
            name: 'All Files',
            extensions: ['*']
          }
        ],
        properties: ['openFile', 'createDirectory']
      }
      dialog.showSaveDialog(window, options,
        // コールバック関数
        function (filename) {
          if (filename) {
            var data = 'ほげほげー'
            writeFile(filename, data)
          }
        })
      console.log('saved!')

      function writeFile (path, data) {
        fs.writeFile(path, data, 'utf8', function (err) {
          if (err) {
            return console.log(err)
          }
        })
      }
    }
  },
  actions: {
    saveFile ({commit}) {
      commit('SAVE_FILE')
    },
  },
}
