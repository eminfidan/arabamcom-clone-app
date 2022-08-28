# arabamcom-assignment

NOT: BASE_URL bilgisi .env dosyasından alınmaktadır. Sizlerin ulaşabilmesi adına .gitignore dosyasına eklemedim. Production için .gitignore dosyasına eklenmesi ve open source projeler için .env.sample dosyası oluşturulması gerekiyor.

arabam.com API'ını kullanarak challenge bünyesinde benden istenilenler dışında fiyat bilgisini formatladım. Detay sayfasında o anda açık olan ilanın modeli ile benzer ilanları listeledim. JavaScript map, filter, replace ve splice gibi metotları kullandım. Detay sayfasında kolay erişilebilirlik için sağda bulunan kartı sticky yaptım. Kullanıcıların karşılanması adına bir landing page sayfası geliştirdim. 404 sayfası geliştirdim.

Teknik olarak: API'ı merkezileştirdim. SASS design paternine göre mixin, variable, breakpoint ve reset gibi araçları kullandım. JS filtreleme metodu Vue3'te kaldırıldığı için global helper yazdım.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
