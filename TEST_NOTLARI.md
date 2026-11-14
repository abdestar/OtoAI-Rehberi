# Test Notları

Aşağıdaki kontroller `icerikler.html` sayfasındaki arama davranışı, ortak
menü, responsive görünüm ve klavye odağı için uygulanmıştır.

| Test Adımı | Kullanılan Girdi | Beklenen Sonuç | Gerçekleşen Sonuç | Durum |
|---|---|---|---|---|
| Bir başlığın ayırt edici bölümünü yazma | `n8n` | Yalnızca n8n kartı görünür ve sayaç 1 kart gösterir. | Yalnızca n8n kartı göründü; sayaç 1 kart gösterdi. | Geçti |
| Harf büyüklüğünü değiştirip kenarlara boşluk ekleme | `  VERCEL  ` | Boşluklar yok sayılır; Vercel kartı görünür. | Vercel kartı görünür kaldı; büyük/küçük harf ve kenar boşlukları doğru işlendi. | Geçti |
| Hiçbir başlıkta olmayan ifade yazma | `xyz` | Kartlar gizlenir ve sonuç bulunamadı uyarısı görünür. | Kartlar gizlendi ve “Aramanızla eşleşen kart bulunamadı.” mesajı göründü. | Geçti |
| Temizle düğmesine basma; ardından yalnızca boşluk yazma | `Temizle`, sonra `   ` | Tüm kartlar geri gelir; boşluk girişi de arama yapılmamış gibi davranır. | Tüm kartlar geri geldi ve sayaç 5 kart gösterdi. | Geçti |
| Ortak menü bağlantılarını test etme | Ana Sayfa, İçerikler, Hakkında | Her sayfadaki üç menü bağlantısı doğru sayfayı açar. | Üç bağlantı doğru hedeflere yönlendirdi; aktif sayfa `aria-current` ile belirtildi. | Geçti |
| 390px ekran ve Tab ile erişilebilirlik kontrolü | Ekran genişliği `390px`; Tab tuşu | Yatay taşma olmamalı; menü linkleri, arama kutusu ve düğme görünür focus çerçevesi göstermeli. | Yatay taşma oluşmadı; odaklanan etkileşimli öğelerde sarı focus çerçevesi göründü. | Geçti |

## Ekran görüntüsü notları

Aşağıdaki üç ekran görüntüsü proje klasörüne sonradan eklenecek kanıt
dosyalarıdır:

- `ekran_normal_arama.png`: Normal ekran genişliğinde arama yapıldığını ve
  eşleşen kart ile sayaç bilgisini gösterir.
- `ekran_bos_sonuc.png`: `xyz` gibi eşleşmeyen bir arama sonrasında uyarı
  mesajını ve sıfır sonuç durumunu gösterir.
- `ekran_mobil_390px.png`: 390px genişlikte yatay taşma olmadığını ve Tab ile
  görünür klavye odağını gösterir.

