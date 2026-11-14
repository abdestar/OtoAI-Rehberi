# AI Notları

## Kullanılan ana prompt'lar

### 1. HTML iskeleti ve ortak menü planlaması

**Prompt:** “OtoAI Rehberi için ana sayfa, içerikler sayfası ve hakkında
sayfasından oluşan üç HTML sayfası oluştur. Üç sayfada ortak ve aktif sayfayı
belirten bir menü kullan.”

**Amacı:** Projenin üç temel sayfasını ve sayfalar arasında tutarlı gezinmeyi
oluşturmak. Bu çalışma sonunda `index.html`, `icerikler.html` ve
`hakkinda.html` dosyaları hazırlanmıştır.

### 2. Ortak CSS tasarımı ve mobil/klavye erişilebilirliği

**Prompt:** “Oluşturduğun üç sayfa için ortak bir `style.css` dosyası yaz.
Modern, koyu veya sade bir tema kullan. Kartları düzenli bir grid yapısında
göster. Ekran genişliği 390px'e düştüğünde yatay taşma olmasın ve Tab tuşunda
menü linkleri, arama kutusu ve düğmeler net bir focus çerçevesi göstersin.”

**Amacı:** Üç sayfanın görsel bütünlüğünü sağlamak, kartları responsive grid
olarak göstermek ve küçük ekran ile klavye kullanımını desteklemek.

### 3. JavaScript ile anlık arama

**Prompt:** “`icerikler.html` sayfası için `script.js` yaz. Label ile
etiketlenmiş arama kutusunda her harf girildiğinde yalnızca kart başlıklarına
(`h3`) göre büyük/küçük harfe duyarsız, trim destekli filtreleme yap. Eşleşen
kart sayacını, sonuç yok mesajını ve tüm kartları geri getiren `Temizle`
düğmesini ekle.”

**Amacı:** Kullanıcının araç kartlarını sayfayı yenilemeden hızlıca bulmasını
sağlamak. `script.js` bu nedenle `h3` metinlerini karşılaştırır; kart içindeki
açıklama metinlerini aramaya dahil etmez.

## AI önerisi üzerine değerlendirme

Önerilen yaklaşımın temelini kabul ettim: arama kutusunun `input` olayında
filtreleme yapılması, kullanıcı yazdıkça sonucu hemen güncelliyor. Ancak
filtreleme karşılaştırmasında yalnızca genel `toLowerCase()` yerine
`toLocaleLowerCase("tr-TR")` kullandım. Projenin dili Türkçe olduğu için bu
değişiklik, büyük/küçük harf dönüşümünün Türkçe karakterlerle daha tutarlı
olmasını sağlıyor. Ayrıca `Temizle` düğmesine basıldıktan sonra odağı tekrar
arama kutusuna vererek klavye kullanımını kesintisiz bıraktım.

## `script.js` kod açıklaması

- `searchInput.addEventListener("input", updateResults)`: Kullanıcı arama
  kutusuna her harf yazdığında `updateResults` fonksiyonunu çalıştırır. Böylece
  filtreleme bir arama düğmesine basmadan anında yapılır.
- `const isMatch = title.includes(query)`: Kartın `h3` başlığında yazılan
  arama ifadesi bulunuyorsa `true` üretir. Sonraki satır bu değere göre kartı
  gösterir veya gizler. Arama ifadesi boşsa bütün başlıklar eşleştiği için tüm
  kartlar görünür.

