module.exports={
    Sıralama: async function(oyunadi, mod) {
        var modselector = null
        if(!mod) throw new TypeError("Kullanıcıların Puanlı Veya Puansız Alıp Alınmayacağını Belirtmelisiniz!")
if(!(mod === "Puanlı" || mod === "Puansız")) throw new TypeError("Modunuz Sadece Puanlı Veya Puansız Olabilir")

if(mod === "Puanlı") {
modselector = "puanlı"
} else {
    modselector = "puansız"
}

if(!oyunadi) throw new TypeError("Sıralamasını Almak İçin Bir Oyun Adı Belirtmelisiniz")
        var fetch = require("node-fetch")
        var satırlar = []
        return fetch("https://sonoyuncu.com.tr/siralamalar/" + oyunadi).then(async (body) => {
            const source = await body.text()
            const arr = source.toString().replace(/\r\n/g,'\n').split('\n');

            for(let i of arr) {
                satırlar.push(i)
            }
var oyuncular = []


var sayısay = 0
var kaçtanevar = 0
            for(let element of satırlar) {
        sayısay++
        if(element.includes(`<td class="px-6 lg:px-0">`)) {
            kaçtanevar++
            var veri = satırlar[sayısay]
            var verireplacement = veri.replace(`<td class="text-left py-3 ">`, "").replace(`</td>`, "")
            if(modselector == "puansız") {
                oyuncular.push(kaçtanevar + "." + " " + verireplacement)
            } else {
                var test2 = satırlar[sayısay + 1].replace(`<td class="text-right pr-6">`, "")
                var testest = test2.indexOf(`td>`) - test2.indexOf("Puan")
                var bruh = test2.substring(0,  test2.length - testest).replace(` Pua`, "")
                oyuncular.push(kaçtanevar + "." + " " + verireplacement + " - " + "Puan: " + bruh)
            }
        }
            }

  if(oyuncular.length == 100) {
      
     return oyuncular
  }          
        })
    }
}