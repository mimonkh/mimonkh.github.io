# موقع ميمون الخطيب الشخصي

موقع ثابت (HTML + CSS + JS)، بدون build وبدون مكتبات. بيدعم عربي/إنجليزي ووضع ليلي/نهاري، وبيشتغل عالموبايل.

## تعديل المحتوى

كل النصوص والمشاريع والروابط موجودة بملف واحد: [assets/js/data.js](assets/js/data.js)

- مشروع جديد: انسخ أي عنصر من `clientProjects` أو `personalProjects` وعدّل عليه.
  - `keys` هي اللي بتحدد تحت أي فلتر بيطلع المشروع (`node`, `laravel`, `go`, `flutter`, `react`).
  - `links` أنواعها: `web`, `dashboard`, `play`.
  - `featured: true` بيخلي المشروع بطاقة عريضة بأول القائمة.
- LinkedIn: حط الرابط بـ `profile.linkedin` وبيطلع لحاله بالموقع.
- تواريخ نهاية الوظائف: عدّل `period` بكل وظيفة بـ `experience`.
- الصورة: `assets/img/profile.jpg` (نسبة 4:5).
- السير الذاتية: `assets/cv/` — إذا حدّثت الـ CV، استبدل الملف بنفس الاسم.

## التجربة محلياً

افتح `index.html` بالمتصفح مباشرة، أو:

```
npx serve .
```

## النشر على GitHub Pages (مجاني)

1. اعمل repository جديد على GitHub اسمه بالضبط: `mimonkh.github.io` (Public).
2. من هالمجلد:

   ```
   git remote add origin https://github.com/mimonkh/mimonkh.github.io.git
   git push -u origin main
   ```

3. بالـ repo: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
4. بعد دقيقة أو دقيقتين بيصير الموقع على: https://mimonkh.github.io

بعد هيك أي تعديل: `git add . && git commit -m "update" && git push`.
