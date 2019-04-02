// Requires request for HTTP requests
const request = require('request');
// Requires fs to write synthesized speech to a file
const fs = require('fs');
// Requires readline-sync to read command line inputs
// const readline = require('readline-sync');
// Requires xmlbuilder to build the SSML body
const xmlbuilder = require('xmlbuilder');

console.log('hihi')
const CONTENT = '威廉‧克林格曼 (William Klingaman)。1987年。1981~1982年間。趕上了第二次世界大戰後雜貨店的繁榮時期。當時成立了一家叫做證券交易委員會的機構。但是你不能這樣做。你甚至不能... Mirror Media 報導。由華視、中視、台視等共同成立的資深藝人關懷基金會每年三節都會舉辦資深藝人餐會，希望連絡情誼，今天基金會舉行春節餐會時也邀請文化部長鄭麗君出席，不料資深藝人鄭惠中竟在鄭麗君和大家寒暄敬酒時上前動手打鄭麗君一個耳光，造成一陣錯愕。資深藝人關懷基金會董事長、也是華視總經理的莊豐嘉指出，在餐會上有很多藝人非常歡迎鄭部長留任，知道她在文化界、演藝界投入很多心力、提供很多資源，部長在餐會上也提出對演藝圈的政策與想法。「部長致詞完很多人來留影合照，在這種場合發生不禮貌的行為，這件事讓我們措手不及，覺得非常遺憾。」'
// const CONTENT = '一聽到「酒店小姐」，你心裡會浮現什麼樣的形象？是被渣男推進火坑的無知少女，還是將男人玩弄於股掌間的婊子？是家裡破產急著幫家人還債的失學少女，還是盲目拜金的瞎妹？是終日以淚洗面的單親媽媽，還是夜夜笙歌縱慾過度的蕩婦？先別急著回答，或許看完這個專題後，你會有不同的答案。米兒為了幾萬塊的負債，休學踏入酒店。同學們形容她是個天生的 Bitch，所以她幹這行如魚得水，整天周旋於不同的男人間，把他們當工具人使喚。她笑著說，很喜歡和姐妹們團隊作戰，騙男人錢的感覺。米兒看來自在而快樂，信誓旦旦地說，遲早要出一本書，教姐妹們騙男人的技巧。然而她卻經常談起老家那重男輕女，把一切精力都澆灌在弟弟身上的爸媽。國中時米兒被同學霸凌，媽媽說肯定是她自己不好，才會被那樣對待。高中時她失戀在房裡大哭，爸爸看了一句話都沒說，母親則要她安靜一點。從此之後米兒明白，自己不可能從家人身上得到什麼。然而我們卻無法從米兒的語氣中，嗅出對家人的怨懟。在酒店兩年多，家人固定會收到米兒寄回的孝親費，卻以為她仍在唸書，半工半讀開了間設計工作室。「在他們面前，我演得很好⋯⋯（從事）酒店唯一讓我擔心的事，是失去在我爸媽面前搞笑的能力。」唯獨談起那個家境小康，卻連兩千塊都不願借給自己救急的家人，我們才能從一派輕鬆的米兒身上，捕捉到少許的遺憾。L 有長久的精神病史，恐懼人群又容易焦慮，進酒店工作後還曾因不堪客人騷擾，出現嚴重的幻聽幻覺症狀。她經常自殺。入行前她為了生活而接受人體實驗，錢卻被只會上網打筆戰的廢物男友花光，她一氣之下上吊。剛被好友騙入行時，她在酒店包廂被客人強暴，回家後把身邊所有藥吃光，不想再活。入行後她每天熬夜喝酒，脫衣幫男人打手槍，結果錢還是被同一個廢物男友花光，這次她選擇跳樓。最初她很不適應酒店生活，因為客人們會將生活中的所有不如意，傾倒在她身上，然後進一步利用她們發洩性慾。作為接受一切負能量的載體，L 只能半推半就地吞下這些垃圾。直到有一天，垃圾桶終於爆炸。L 開始反過來灌客人酒，反過來利用自己一切的不幸，對客人進行情緒勒索，反過來用自己的淚水和客人互相傷害。她學會因應不同客人扮演不同人格，用真真假假的騙術讓客人拜倒在她裙下；學會利用糟蹋男人的方式，讓他們對她莫可奈何卻又死心塌地。她坦言，自己其實很享受這個糟蹋男人的過程，因為以結果而言，她的生活品質確實得到了提升。唯一的副作用，是太常扮演別人，她就無法當自己了。矛盾的是，L 覺得自己很需要被別人需要，唯獨她不需要自己。那麼，她想當的自己是什麼？有些悲劇乍見時，荒唐地教人以為是鬧劇。「我那時候大概需要七、八千元左右吧⋯⋯」問起入行理由，Ｋ 說了一個少得近乎可笑的金額，還有一個說服力低得像騙術的原因。那年 K 剛休學，在接近身無分文又自身難保的狀態下，中途安置了一隻被棄養的病犬。後來狗的健康狀態急轉直下，需要一筆七、八千元的緊急治療費用，於是 K 選擇把自己送入容易快速賺錢的酒店，在為身邊貓狗負責的同時，也能順便養活自己。當時她說，母親的經濟狀況談不上好，拿個幾千塊都有點勉強，只能自力救濟。第二次採訪時，我們到了 K 的宿舍，於是上述這個聽來荒唐的理由開始變得真實。她在小小的寢室中養了三隻貓和一隻烏龜，空氣裡全是貓的排遺氣味，完全嗅不出想像中一個酒店小姐的閨房會有的香氣。她還在陽台上養了兩隻路上撿到的傷鴿，門口養了一隻會叼著假陽具當玩具的狗，樓梯間和客廳裡，分別還有一隻渾身寄生蟲的鴿子、兩隻愛滋病兼腎衰竭的貓。那天她唯一的晚餐是便利商店的飯糰，戶頭裡只剩六百元。就像她撿來的生命一樣，她自己也是流浪動物。K 在酒店中攢來的錢，不是花在小動物身上，就是拿去支持前男友的夢想。她其實並不是那麼能給予的人，只是她吝於留給自己。K 有嚴重的躁鬱症，酒店的工作和愛情中受到的背叛，讓她變得不相信人類又害怕孤單。和我們採訪到的其他幾位受訪者一樣，她也經常自殺，卻一次次被命運留下。她對世界給予了過多的愛，卻在被問到愛不愛自己時，說了不知道。夢工廠動畫人物史瑞克（Shrek）說，怪物就像洋蔥，是有層次的。是的，就像那些又有異味、又會讓人掉淚的洋蔥與怪物一樣，酒店小姐也有層次。這個專題期待告訴讀者的，不是那種貼上各種不同標籤就搞定的酒店肥皂劇。我們嘗試述說一群有層次的酒店小姐的故事；關於她們如何在這個社會與產業環境下，有層次地成為小姐、有層次地滿足男人的需求；以及，她們如何有層次地成為自殺的高風險族群。'

const subscriptionKey = '80b4476d093340c689331bc930b99fee';
if (!subscriptionKey) {
  throw new Error('Environment variable for your subscription key is not set.')
};

// Prompts the user to input text.
// let text = readline.question('What would you like to convert to speech? ');

function textToSpeech(subscriptionKey, saveAudio) {
  let options = {
      method: 'POST',
      uri: 'https://eastasia.api.cognitive.microsoft.com/sts/v1.0/issueToken',
      headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey
      }
  };
  // This function retrieve the access token and is passed as callback
  // to request below.
  function getToken(error, response, body) {
      console.log("Getting your token...\n")
      if (!error && response.statusCode == 200) {
          //This is the callback to our saveAudio function.
          // It takes a single argument, which is the returned accessToken.
          saveAudio(body)
          // console.log('oh yeah!')
      }
      else {
        console.log('danm it!')
        throw new Error(error);
      }
  }
  request(options, getToken)
}

function saveAudio(accessToken) {
  // Create the SSML request.
  let xml_body = xmlbuilder.create('speak')
    .att('version', '1.0')
    .att('xml:lang', 'zh-TW')
    .ele('voice')
    .att('xml:lang', 'zh-TW')
    .att('name', 'Microsoft Server Speech Text to Speech Voice (zh-TW, Zhiwei, Apollo)')
    // .att('name', 'Microsoft Server Speech Text to Speech Voice (zh-TW, Yating, Apollo)')
    // .att('name', 'Microsoft Server Speech Text to Speech Voice (zh-TW, HanHanRUS)')
    .ele('prosody')
    // .att('rate', '+40.00%')
    .att('rate', '+50.00%')
    .att('contour', '(80%, -5%) (90%, -15%)')
    .txt(CONTENT)
    .end();
  // Convert the XML into a string to send in the TTS request.
  let body = xml_body.toString();

  let options = {
      method: 'POST',
      baseUrl: 'https://eastasia.tts.speech.microsoft.com/',
      url: 'cognitiveservices/v1',
      headers: {
          'Authorization': 'Bearer ' + accessToken,
          'cache-control': 'no-cache',
          'User-Agent': 'YOUR_RESOURCE_NAME',
          // 'X-Microsoft-OutputFormat': 'riff-24khz-16bit-mono-pcm',
          'X-Microsoft-OutputFormat': 'riff-24khz-16bit-mono-pcm',
          'Content-Type': 'application/ssml+xml'
      },
      body: body
  };
  // This function makes the request to convert speech to text.
  // The speech is returned as the response.
  function convertText(error, response, body){
    if (!error && response.statusCode == 200) {
      console.log("Converting text-to-speech. Please hold...\n")
    }
    else {
      throw new Error(error);
    }
    console.log("Your file is ready.\n")
  }
  // Pipe the response to file.
  request(options, convertText).pipe(fs.createWriteStream('Zhiwei2.wav'));
}

textToSpeech(subscriptionKey, saveAudio);