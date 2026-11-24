# دليل تحديث الموقع والـ CV

الموقع: **https://mimonkh.github.io**
الريبو: https://github.com/mimonkh/mimonkh.github.io

---

## المجلدات

| المجلد | شو فيه | منشور؟ |
|---|---|---|
| `d:\Flutter\new project\my-projects\mimonkh.github.io` | الموقع نفسه | ✅ أي شي بتنشره من هون بيطلع عالموقع |
| `d:\Flutter\new project\my-projects\cv` | مصدر الـ CV (`cv.html`) ونصوص LinkedIn | ❌ عندك عالجهاز بس |

> ⚠️ مجلد `cv` مش موجود على GitHub. خود منه نسخة احتياطية (Google Drive أو فلاشة) لأنه إذا راح الجهاز بيروح معه.

---

## الطريقة السريعة (بدون أوامر)

### تعديل الموقع
1. عدّل الملف `assets\js\data.js` واحفظ (Ctrl+S).
2. افتح مجلد الموقع بالـ File Explorer واعمل **دبل كليك على `publish.bat`**.
3. بيسألك عن وصف قصير للتعديل: اكتب شي متل `Update phone` أو اضغط Enter بس.
4. بعد دقيقة افتح https://mimonkh.github.io واضغط **Ctrl+F5**.

### تعديل الـ CV
1. عدّل `cv\cv.html` واحفظ.
2. **دبل كليك على `cv\update-cv.bat`**: بيبني الـ PDF وبينسخه للموقع.
3. بيسألك `Publish the site now? (Y/N)`: اكتب `Y` واضغط Enter.
4. بيسألك عن وصف التعديل، وبعدها بينشر.

---

## وين بعدّل كل شي (`assets\js\data.js`)

دوّر بالملف (Ctrl+F) على الكلمة يلي بالعمود الأول:

| بدك تعدّل | دوّر على | ملاحظات |
|---|---|---|
| رقم الموبايل | `phone:` | اكتبه بأي شكل مقروء، مثلاً `"+963 989 117 104"` |
| رقم الواتساب | `whatsapp:` | نفس الشي، الرابط بياخد الأرقام بس لحاله |
| الإيميل | `email:` | |
| LinkedIn / GitHub | `linkedin:` / `github:` | الرابط كامل مع `https://` |
| النبذة (About) | `about:` | فقرتين، `en` إنجليزي و`ar` عربي |
| السطر تحت الاسم | `lead:` | |
| المسمى | `role:` | |
| الأرقام (5+، 15+...) | `stats:` | غيّر `value` بس |
| المهارات | `skills:` و `tools:` | |
| الخبرات | `experience:` | `period` هو التاريخ |
| مشاريع الشركات | `clientProjects:` | |
| المشاريع الخاصة | `personalProjects:` | |
| التعليم / الشهادات / اللغات | `education:` / `certifications:` / `languages:` | |

**قواعد مهمة وقت تعدّل:**
- خلّي علامات التنصيص `" "` حول النص.
- خلّي الفاصلة `,` بآخر السطر إذا كانت موجودة.
- النص يلي فيه `en:` و `ar:`، عدّل الاتنين.
- إذا الموقع طلع **فاضي/أبيض** بعد التعديل: غالباً نسيت علامة تنصيص أو فاصلة. شوف قسم "إذا صار شي غلط" تحت.

### إضافة مشروع جديد
انسخ هالقالب وحطه جوّا `clientProjects: [ ... ]` أو `personalProjects: [ ... ]` (وانتبه للفاصلة بين المشاريع):

```js
    {
      name: { en: "Project Name", ar: "اسم المشروع" },
      badge: "PN", hue: 160,
      where: { en: "What it is · Country", ar: "شو هو · البلد" },
      desc: {
        en: "One or two sentences about what it does.",
        ar: "جملة أو جملتين عن شو بيعمل."
      },
      tech: ["Laravel", "Flutter", "PostgreSQL"],
      keys: ["laravel", "flutter"],
      links: [
        { type: "web", href: "https://example.com" },
        { type: "play", href: "https://play.google.com/store/apps/details?id=..." }
      ]
    },
```

- `badge`: حرفين بيطلعوا بالمربع الملون.
- `hue`: لون المربع (رقم من 0 لـ 360).
- `keys`: تحت أي فلتر بيطلع: `node`, `laravel`, `go`, `flutter`, `react`.
- `links` أنواعها: `web` (موقع)، `dashboard` (لوحة تحكم)، `play` (Google Play). إذا ما في روابط: `links: []`.
- `featured: true` بيخلي المشروع بطاقة عريضة.

---

## جرّب قبل ما تنشر
افتح `index.html` من مجلد الموقع بالمتصفح (دبل كليك). كل ما تعدّل وتحفظ، اعمل Refresh (F5).

---

## الطريقة اليدوية (بالأوامر)

افتح التيرمينال بـ VS Code: **`` Ctrl+` ``**.
انتبه لنوع التيرمينال (مكتوب فوق يمين التيرمينال): **cmd** ولا **PowerShell**. الأوامر تبع git نفسها بالاتنين، بس أمر النسخ بيختلف.

### نشر تعديلات الموقع
```
cd /d "d:\Flutter\new project\my-projects\mimonkh.github.io"
git add .
git commit -m "Update site"
git push
```
> بـ PowerShell اكتب `cd "d:\Flutter\new project\my-projects\mimonkh.github.io"` (بدون `/d`).

### بناء الـ CV ونسخه للموقع
```
cd /d "d:\Flutter\new project\my-projects\cv"
node build.js
```
وبعدين النسخ:
- **cmd:**
  ```
  copy /Y "Miemon-Khateeb-CV.pdf" "..\mimonkh.github.io\assets\cv\"
  ```
- **PowerShell:**
  ```
  Copy-Item ".\Miemon-Khateeb-CV.pdf" "..\mimonkh.github.io\assets\cv\" -Force
  ```

وبعدها اعمل خطوات "نشر تعديلات الموقع" فوق.

---

## إذا صار شي غلط

| المشكلة | الحل |
|---|---|
| `'Copy-Item' is not recognized` | أنت بـ cmd. استعمل `copy /Y ...` (فوق) |
| `nothing to commit` | ما في تعديل محفوظ. تأكد إنك عملت Ctrl+S |
| `git push` طلب تسجيل دخول | سجّل دخول بالشباك يلي بيطلع (Sign in with your browser ← Authorize). ما تكتب كلمة السر بالتيرمينال |
| الموقع ما تغيّر | استنى دقيقتين واضغط Ctrl+F5. حالة النشر بتشوفها هون: https://github.com/mimonkh/mimonkh.github.io/actions |
| الموقع طلع فاضي بعد التعديل | في غلط بـ `data.js` (تنصيص أو فاصلة). افتح `index.html` محلياً واضغط F12 ← Console، بيقلك رقم السطر |
| بدي ألغي تعديل **لسا ما نشرته** | `git checkout -- assets/js/data.js` (بيرجّع الملف لآخر نسخة منشورة، وبيمسح تعديلاتك عليه) |
| بدي ألغي آخر تعديل **نشرته** | `git revert HEAD` وبعدين `git push` |
| `node build.js` عطى خطأ `Cannot find module 'puppeteer'` | بمجلد `cv` نفّذ مرة وحدة: `npm install puppeteer` |

---

## على جهاز جديد
1. نزّل وثبّت **Git** (git-scm.com) و **Node.js** (nodejs.org).
2. نزّل الموقع:
   ```
   git clone https://github.com/mimonkh/mimonkh.github.io.git
   ```
3. أول `git push` بيطلب تسجيل دخول GitHub بالمتصفح.
4. للـ CV: رجّع مجلد `cv` من النسخة الاحتياطية، ونفّذ فيه `npm install puppeteer` مرة وحدة.
