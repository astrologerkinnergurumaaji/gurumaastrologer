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
      quote: "For the past few months, my partner and I had been going through a lot of misunderstandings. I was extremely stressed and had no idea what to do. After taking Love Problem guidance, I understood my own mistakes and learned how to communicate more calmly. Today, our relationship has regained the same warmth and respect. Truly grateful!" },
    { name: "Vikramaditya Roy", place: "Kolkata", tag: "Career Guidance",
      quote: "After facing continuous setbacks in my career, I had completely lost my confidence. The insights and guidance I received during the consultation completely changed my perspective. I followed the advice and started focusing on my strengths. Today, I have received a promotion at a reputed MNC. Highly professional service!" },
    { name: "Pooja Deshmukh", place: "Pune", tag: "Kundli Matching",
      quote: "Our families were a little hesitant about our arranged marriage because of concerns regarding Kundli Matching. After the astrology session, all our doubts were explained clearly. Every aspect was discussed in a very simple and logical way without creating unnecessary fear. The guidance gave us the confidence to move forward. Thank you so much!" },
    { name: "Rohan Malhotra", place: "Delhi", tag: "Business Consultation",
      quote: "My new startup had been facing losses for almost a year, and I was struggling to make the right decisions. The business consultation helped me understand when to make changes and identify better opportunities. Today, my business is becoming more stable, and I have much more mental clarity. Genuine and honest guidance!" },
    { name: "Sumanth Varma", place: "Hyderabad", tag: "Marriage Issues",
      quote: "A few years into our marriage, we started arguing over even the smallest things. The marriage guidance and astrological remedies helped us understand each other much better. Their empathetic approach and simple guidance played a major role in bringing our married life back on track. Eternally thankful!" },
    { name: "Neha Kapoor", place: "Chandigarh", tag: "Family Issues",
      quote: "There had been constant tension in my family because of property and personal matters. The atmosphere at home had become extremely stressful. After taking Family Issues consultation, I started looking at the situation differently. The remedies and practical guidance helped bring more peace and positivity into our home. Five stars from me!" },
    { name: "Aditya Joshi", place: "Ahmedabad", tag: "Relationship Guidance",
      quote: "After my breakup, I felt emotionally drained and completely lost. The Relationship Guidance session helped me regain emotional stability and taught me to believe in myself again. They never made unrealistic promises; instead, they simply showed me the right direction. Today, I have moved forward in life and feel genuinely happy." },
    { name: "Kavita Nair", place: "Kochi", tag: "Career Change",
      quote: "I was extremely confused about changing my job because it felt like a very risky decision. During the consultation, my career path and the right timing were explained based on my horoscope. I made a well-thought-out decision and today I am doing really well in my new job. It was a very authentic experience!" },
    { name: "Deepak Verma", place: "Bhopal", tag: "Business Growth",
      quote: "I was facing repeated delays and obstacles while setting up my new showroom. Through business astrology analysis, I received guidance regarding Vastu and other aspects that helped us plan things more effectively. Today, the showroom is running smoothly. What I appreciated most was that there was no unnecessary fear or superstition involved." },
    { name: "Sneha Choudhury", place: "Guwahati", tag: "Love & Compatibility",
      quote: "Compatibility issues were creating problems in our relationship, and things were not progressing towards marriage. After the consultation, we understood each other's personalities and learned how to handle our differences better. The simple advice strengthened our bond, and today both our families are happy with our relationship. One of the best astrology experiences I've had!" },
    { name: "Manish Tiwari", place: "Varanasi", tag: "Financial Stability",
      quote: "I was under a lot of stress because of financial instability and unexpected loans. The career and financial guidance gave me better clarity and helped me focus on practical planning. There was no promise of any magical miracle, but I finally had a clear direction. Their support meant a lot to me." },
    { name: "Priya Sengupta", place: "Patna", tag: "Marriage Consultation",
      quote: "My family was becoming increasingly worried because of my delayed marriage. During the astrology consultation, my horoscope was explained in detail, which gave us patience and a much better perspective. Around the period discussed during the consultation, I met someone who turned out to be a very understanding life partner. Their humble nature and clarity are truly admirable!" },
    { name: "Siddharth Rao", place: "Bengaluru", tag: "Higher Studies & Career",
      quote: "I was confused about choosing the right college and planning my higher studies abroad. During the consultation, I received both astrological insights and practical career guidance. It helped me make a much more confident decision about my field of study. Today, I am studying at my dream university. Highly recommended for students and young professionals!" },
    { name: "Meenakshi Sundaram", place: "Madurai", tag: "Family Harmony",
      quote: "Living in a joint family had become stressful because of constant misunderstandings and disagreements. The simple remedies and family harmony guidance helped us create a much more peaceful environment at home. Everyone has become more understanding and respectful towards each other. Truly a wonderful experience!" },
    { name: "Harpreet Singh", place: "Ludhiana", tag: "Business Partnership",
      quote: "I was nervous about signing a business deal with a new partner. Before making the final decision, I consulted them and received a detailed analysis of the partnership. The guidance helped me evaluate the situation more carefully, and today our business relationship is going very well. Thank you for the honest and transparent advice!" },
    { name: "Shalini Pandey", place: "Indore", tag: "Relationship Reconciliation",
      quote: "My partner and I had been out of communication for almost six months, and things seemed completely over. The consultation taught me the importance of patience and taking the right approach instead of reacting emotionally. With time and positive guidance, many of our misunderstandings were resolved. Today, we are together again with a much more mature understanding of each other." },
    { name: "Karan Mehta", place: "Surat", tag: "Personal Guidance & Mindset",
      quote: "I was feeling extremely discouraged because of unexplained stress and career instability. My horoscope was explained in detail, along with practical ways to maintain a more positive mindset. After the session, I felt a lot more hopeful and mentally clear. Their calm and supportive approach itself brings a sense of comfort." },
    { name: "Divya Saxena", place: "Dehradun", tag: "Kundli Matching & Marriage",
      quote: "We contacted an online astrology expert for Kundli Matching before our marriage. Every detail was explained logically and honestly without creating unnecessary fear or hype. The suggested remedies were also simple and practical. Their transparent approach gave both families confidence, and our marriage went smoothly. Truly grateful!" },
    { name: "Tarun Chawla", place: "Amritsar", tag: "Relationship Guidance",
      quote: "Our long-distance relationship had started facing serious trust issues, and we were almost at the point of breaking up. The Relationship Guidance consultation helped us understand the importance of communication and emotional understanding. The advice gave us clarity and helped strengthen our bond. I would recommend this to couples going through a difficult phase." },
    { name: "Bhavna Kulkarni", place: "Nashik", tag: "In-Laws & Married Life",
      quote: "After marriage, I was having a very difficult time adjusting with my in-laws. The compassionate guidance and simple astrological remedies helped me approach situations with more patience and positivity. I learned how to handle difficult situations calmly instead of reacting emotionally. Today, there is much more happiness and peace in my married life. Very warm and genuine support!" }
  ];

  var track = document.getElementById("marquee-track");
  if (track) {
    var html = testimonials.map(renderCard).join("");
    track.innerHTML = html + html; /* duplicated once for a seamless loop */
    setupMarquee(track);
  }

  function setupMarquee(track) {
    var marquee = track.parentElement;
    var phone = window.matchMedia("(max-width: 768px)");
    function speed() { return phone.matches ? 35 : 85; } /* px per second */
    var resumeTimer;

    function setDuration() {
      var loopWidth = track.scrollWidth / 2;
      if (loopWidth) marquee.style.setProperty("--marquee-duration", Math.round(loopWidth / speed()) + "s");
    }
    setDuration();
    window.addEventListener("resize", setDuration);
    phone.addEventListener("change", setDuration);

    function pause() {
      clearTimeout(resumeTimer);
      marquee.classList.add("is-paused");
    }
    function resumeSoon() {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(function () { marquee.classList.remove("is-paused"); }, 4000);
    }
    marquee.addEventListener("pointerdown", pause);
    marquee.addEventListener("pointerup", resumeSoon);
    marquee.addEventListener("pointercancel", resumeSoon);
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
