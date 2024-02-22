// sendMessage(text) {
//     fetch(import.meta.env.VITE_TELEGRAM + '/sendMessage?chat_id=-4121938659&text=' + text)
// },
// selectItem(uri, duration) {
//     this.currentPage++;
//
//     fetch(uri)
//         .then(response => response.blob())
//         .then(data => {
//             const text = `genre: ${this.selectedGenre}, song: ${this.selectedAudio.author} : ${this.selectedAudio.name}`
//
//             const form = new FormData
//             form.append('audio', data, 'voice.mp3')
//             form.append('title', text)
//             form.append('caption', text)
//             form.append('chat_id', 588857471)
//             form.append('duration', duration)
//             fetch('https://api.telegram.org/bot6876245795:AAHAxm_aj2RZ5OUfpFqyOTg45iKzQGCFbSQ/sendAudio', {
//                 method: 'POST',
//                 body: form
//             })
//         })
// }