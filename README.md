**SonOyuncu API**

**Not**

Bu Paket Yeni Yapılmaya Başlanmıştır ve Yeni Özellikler Yakında Eklenecektir Herhangi Bir Sorunuz Veya Sorununuz Olursa Discord Adresim ! SıpançBet#9752 Bana DM Yoluyla Ulaşabilirsiniz.

**Neler Yapılabilir**

• Belirtilen Oyun İçin Tüm Zamanların Sıralaması Görüntülenebilir

**Örnekler**

Puansız Bedwars Tablosunu Almak İçin Bu Kodu Kullanıyoruz.


    var  api  =  require("sonoyuncu-api")
    
    async  function  sıralama() {
    console.log(await  api.Sıralama("bedwars", "Puansız"))
    }
    
    sıralama()


Yukarıdaki Kodun Sonucu Aşağıdaki Gibi Olacaktır.

    [
      '1. bukiburti',        '2. ImKafle',           '3. Enderiss',
      '4. Katzo',            '5. BabaMrb4735',       '6. guray1905',
      '7. SkSkiler',         '8. tmgk',              '9. Skybooster',
      '10. Bunyamin_Simsek', '11. _LavaMobMC_',      '12. HorrorFoxy',
      '13. RelaxShot',       '14. SamsonN',          '15. SonTurkI',
      '16. iDarkyy',         '17. EdizSozal',        '18. bytalha',
      '19. TheUtkuYT',       '20. Exilio',           '21. FeNiX456',
      '22. kuru_kafa1441',   '23. MeepsMaster',      '24. Knktrc35',
      '25. _BTS_Army',       '26. darknesse69',      '27. ByRactor',
      '28. kola_',           '29. orkunreyiz',       '30. 0hBray',
      '31. EmoBabo7',        '32. xElessyStrqfe',    '33. Charenty',
      '34. Zeus_FX',         '35. wisal',            '36. ByZebani',
      '37. mortal37',        '38. esat43',           '39. AsterixYT',
      '40. Halo335',         '41. zKarakedi',        '42. BayUzman',
      '43. NicoArtxs',       '44. xArrow11',         '45. taklafans',
      '46. MrMoZhy',         '47. BySeytan',         '48. TUNNA',
      '49. Viincente',       '50. eLLyonne',         '51. 43onur43',
      '52. TeaMMasteR',      '53. Golgeli',          '54. Sm0ker',
      '55. Jawrend',         '56. UtkuxTR',          '57. inGHG',
      '58. Jefy',            '59. BSSJ',             '60. berkepro23',
      '61. Nahuuh',          '62. Zerjk',            '63. DaddyRuby',
      '64. xLeadeR',         '65. ProMelik',         '66. MasterBlade',
      '70. LoveYouR',        '71. ItzNico023',       '72. Muhammed_WT',
      '73. UcanItachi',      '74. xBatuhanPvP_',     '75. Bigbird16',
      '76. MochaStars10',    '77. DiamondEmpire145', '78. detered',
      '79. Getugly_',        '80. Jaggeds',          '81. AydinHasan',
      '82. GaNNiCuS',        '83. iBerkayAVG',       '84. StarBresh',
      '85. burki0031',       '86. Lxeon',            '87. Xx_DarkLOL_xX',
      '88. 2ardawer45',      '89. killzon66',        '90. XhocoPink',
      '91. ByKedi',          '92. Pro_Die',          '93. endress66',
      '94. jjynicee',        '95. DarkOverTR',       '96. ByHunteRr',
      '97. muhammed5151',    '98. kaanalp',          '99. emirhn5831',
      '100. Clabe_Seje'
    ]






Puanlı Bedwars Tablosunu Almak İçin Bu Kodu Kullanıyoruz.


    var  api  =  require("sonoyuncu-api")
    
    async  function  sıralama() {
    console.log(await  api.Sıralama("bedwars", "Puanlı"))
    }
    
    sıralama()


Yukarıdaki Kodun Sonucu Aşağıdaki Gibi Olacaktır.


    [
      '1. bukiburti - Puan: 575.311',
      '2. ImKafle - Puan: 539.029',
      '3. Enderiss - Puan: 474.783',
      '4. Katzo - Puan: 458.671',
      '5. BabaMrb4735 - Puan: 445.970',
      '6. guray1905 - Puan: 439.605',
      '7. SkSkiler - Puan: 412.644',
      '8. tmgk - Puan: 409.436',
      '9. Skybooster - Puan: 390.480',
      '10. Bunyamin_Simsek - Puan: 377.976',
      '11. _LavaMobMC_ - Puan: 362.139',
      '12. HorrorFoxy - Puan: 354.042',
      '13. RelaxShot - Puan: 351.389',
      '14. SamsonN - Puan: 306.929',
      '15. SonTurkI - Puan: 302.989',
      '16. iDarkyy - Puan: 291.761',
      '17. EdizSozal - Puan: 291.605',
      '18. bytalha - Puan: 287.423',
      '19. TheUtkuYT - Puan: 285.806',
      '20. Exilio - Puan: 284.208',
      '21. FeNiX456 - Puan: 272.566',
      '22. kuru_kafa1441 - Puan: 272.179',
      '23. MeepsMaster - Puan: 270.289',
      '24. Knktrc35 - Puan: 266.867',
      '25. _BTS_Army - Puan: 264.547',
      '26. darknesse69 - Puan: 263.730',
      '27. ByRactor - Puan: 258.189',
      '28. kola_ - Puan: 258.055',
      '29. orkunreyiz - Puan: 256.061',
      '30. 0hBray - Puan: 243.430',
      '31. EmoBabo7 - Puan: 243.074',
      '32. xElessyStrqfe - Puan: 232.410',
      '33. Charenty - Puan: 228.810',
      '34. Zeus_FX - Puan: 228.437',
      '35. wisal - Puan: 226.906',...
      ]

