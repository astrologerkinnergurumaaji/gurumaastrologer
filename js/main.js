(function () {
  "use strict";

  /* ---------- mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- graceful placeholder for missing images ---------- */
  document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener("error", function () {
      var parent = img.parentElement;
      parent.classList.add("img-missing");
      parent.setAttribute("data-missing", img.getAttribute("src"));
    });
  });

  /* ---------- footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- testimonials marquee ---------- */
  var testimonials = [
    { name: "Ananya Sharma", place: "Lucknow", tag: "Love Problem",
      quote: "Pichle kuch mahino se mere aur mere partner ke beech kaafi misunderstanding chal rahi thi. Main bahut stressed thi aur samajh nahi aa raha tha kya karu. Yahan se guidance lene ke baad mujhe apni galtiyan samajh aayi aur humne calm ho kar baat ki. Ab humare relationship me wapas wahi warmth aur respect hai. Truly grateful!" },
    { name: "Vikramaditya Roy", place: "Kolkata", tag: "Career Problem",
      quote: "Career me lagatar setbacks milne ke wajah se mera confidence bilkul toot chuka tha. Direct consultation ke dauran jo career insights aur guidance mujhe mili, usne mera mindset change kar diya. Maine unki advice follow ki aur apni strengths par focus kiya. Aaj mujhe ek achhi MNC me promotion mil chuka hai." },
    { name: "Pooja Deshmukh", place: "Pune", tag: "Love Marriage",
      quote: "Arranged marriage ke liye kundli matching ko lekar hamari dono families thodi hesitant thi. Lekin session ke baad hamare saare doubts clear ho gaye. Har ek aspect ko bahut hi logical aur simple tarike se samjhaaya gaya, bina kisi darr ke. Thank you so much!" },
    { name: "Rohan Malhotra", place: "Delhi", tag: "Business Problem",
      quote: "Mere naye startup me pichle ek saal se kaafi losses ho rahe the aur main decision nahi le pa raha tha. Guidance ne mujhe sahi waqt par pivot karne aur right opportunities identify karne me madad ki. Aaj mera business stable ho raha hai aur mental peace bhi mil gayi hai." },
    { name: "Sumanth Varma", place: "Hyderabad", tag: "Husband Wife Problem",
      quote: "Shaadi ke kuch saalo baad hamare beech choti-choti baaton par jhagde hone lage the. Remedies try karne ke baad humari understanding me zameen aasmaan ka fark aaya hai. Unka empathetic approach aur simple guidance ne humari married life ko wapas track par laane me bohot help ki." },
    { name: "Neha Kapoor", place: "Chandigarh", tag: "Family Problem",
      quote: "Family me property aur personal matters ko lekar kaafi time se tanaav tha. Ghar ka mahool bahut negative lagta tha. Consultation lene ke baad situation me kafi positivity aayi hai. Jo remedies aur mindset tips batayi thi, unse ghar me sukoon mila hai." },
    { name: "Aditya Joshi", place: "Ahmedabad", tag: "Relationship Problem",
      quote: "Breakup ke baad main emotionally bilkul drain ho chuka tha aur severe anxiety se guzar raha tha. Session ne mujhe emotional stability di aur khud par bharosa karna sikhaya. Unhone kabhi fake promises nahi kiye, bas sahi direction dikhayi. Aaj main life me aage badh chuka hu." },
    { name: "Kavita Nair", place: "Kochi", tag: "Career Problem",
      quote: "Job switch karne ko lekar main bohot confused thi kyunki risk kaafi bada tha. Meri horoscope ke hisaab se right timing aur career path samjhaya gaya. Unki baat sun kar maine calculated decision liya aur aaj main apni nayi job me bohot successful hu." },
    { name: "Deepak Verma", place: "Bhopal", tag: "Business Problem",
      quote: "Naya showroom kholne me kaafi delay ho raha tha aur hurdles aate hi ja rahe the. Business astrology analysis ke zariye jo guidance di, usse humne sahi execution plans banaye. Aaj showroom smoothly chal raha hai. Koi superstitious baatein nahi ki gayi." },
    { name: "Sneha Choudhury", place: "Guwahati", tag: "Love Marriage",
      quote: "Hamare rishte me compatibility issues ki wajah se baat shaadi tak nahi pahunch rahi thi. Consultation ke baad humein samajh aaya ki ek doosre ke temperament ko kaise handle karna hai. Aaj dono families raazi hain. Best astrology experience ever!" },
    { name: "Manish Tiwari", place: "Varanasi", tag: "Financial Problem",
      quote: "Financial instability aur unexpected loans ki wajah se main bohot pareshan rehne laga tha. Milne wali remedies ne mujhe practical planning aur mental clarity di. Sahi direction milne se mere raste khulte gaye. Unka support mere liye bohot maayne rakhta hai." },
    { name: "Priya Sengupta", place: "Patna", tag: "Love Marriage",
      quote: "Late marriage ki wajah se family me sabhi log worried the. Horoscope analysis ne hume patience aur right perspective diya. Unhone jo time period bataya tha, usi dauran mujhe ek bohot hi understanding life partner mila. Unka humble nature aur clarity lajawab hai!" },
    { name: "Siddharth Rao", place: "Bengaluru", tag: "Career Problem",
      quote: "Abroad higher studies ke liye visa aur college selection me kaafi confusion tha. Astrology ke sath-sath practical career insights bhi mile. Unki guidance ne mujhe sahi stream decide karne me bohot help ki. Aaj main apni dream university me padh raha hu." },
    { name: "Meenakshi Sundaram", place: "Madurai", tag: "Family Problem",
      quote: "Joint family me daily misunderstanding aur negative aura ki wajah se mental stress rehta tha. Simple remedies aur guidance se ghar ka atmosphere bilkul badal gaya hai. Ab sabhi log ek doosre ki respect karte hain aur ghar me shanti hai." },
    { name: "Harpreet Singh", place: "Ludhiana", tag: "Business Problem",
      quote: "Naye business partner ke sath deal sign karne se pehle main thoda nervous tha. Business kundli check karke partnership prospective par bohot clear feedback diya gaya. Is decision se mera business safe raha aur aaj hum achha profit bana rahe hain." },
    { name: "Shalini Pandey", place: "Indore", tag: "Ex Love Back",
      quote: "Partner ke sath 6 mahine se communication gap bana hua tha aur baat bilkul band thi. Consultation ne mujhe patience rakhna aur right approach apnaana sikhaya. Aaj hum wapas saath hain aur pehle se zyada mature hain." },
    { name: "Karan Mehta", place: "Surat", tag: "Career Problem",
      quote: "Unexplained stress aur career instability ke karan main bohot disheartened mehsoos kar raha tha. Meri horoscope chart detailed tarike se explain ki gayi aur positivity maintain karne ke practical tarike bataye. Inka calm attitude hi aadhi pareshani door kar deta hai." },
    { name: "Divya Saxena", place: "Dehradun", tag: "Love Marriage",
      quote: "Dono families ke chart match karne ke liye humne contact kiya. Bina kisi darr ya fake hype ke bohot logically kundli matching details explain ki gayi. Dosh remedies bhi bohot simple aur practical thi. Hamari shaadi smoothly ho gayi. Highly grateful!" },
    { name: "Tarun Chawla", place: "Amritsar", tag: "Relationship Problem",
      quote: "Long-distance relationship me trust issues aane lage the aur breakup hone ki nobat aa gayi thi. Consultation se hume communication aur emotional understanding improve karne ki clarity mili. Unki advice ne humare bond ko strengthen kiya." },
    { name: "Bhavna Kulkarni", place: "Nashik", tag: "Family Problem",
      quote: "Shaadi ke baad in-laws ke saath adjust karne me bohot dikkat ho rahi thi. Compassionate advice aur simple astrological remedies ne meri life me bohot positivity bhari. Aaj mera ghar khushiyo se bhara hai. Very warm and genuine support!" }
  ];

  var track = document.getElementById("marquee-track");
  if (track) {
    var html = testimonials.map(renderCard).join("");
    track.innerHTML = html + html; /* duplicated once for a seamless loop */
  }

  function initials(name) {
    return name.split(" ").map(function (p) { return p[0]; }).slice(0, 2).join("").toUpperCase();
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderCard(t) {
    return (
      '<article class="t-card">' +
      '<div class="stars" aria-label="5 out of 5 stars">★★★★★</div>' +
      '<span class="t-tag">' + escapeHtml(t.tag) + "</span>" +
      "<blockquote>“" + escapeHtml(t.quote) + "”</blockquote>" +
      "<footer>" +
      '<span class="t-avatar" aria-hidden="true">' + escapeHtml(initials(t.name)) + "</span>" +
      "<cite>" + escapeHtml(t.name) +
      '<span class="t-place"> — ' + escapeHtml(t.place) + "</span>" +
      "</cite>" +
      "</footer>" +
      "</article>"
    );
  }
})();
