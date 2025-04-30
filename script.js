document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
  
    galleryItems.forEach(function (item) {
      const title = item.querySelector("p");
      const link = item.querySelector("a");
  
      if (title) {
        item.addEventListener("mouseenter", function () {
          title.style.cssText = "background-color: #0066cc; transform: translateY(-5px); transition: all 0.3s ease;";
        });
  
        item.addEventListener("mouseleave", function () {
          title.style.cssText = "background-color: #004d99; transform: translateY(0); transition: all 0.3s ease;";
        });
      }
  
      if (link) {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const topicName = title ? title.innerText : "الموضوع";
          const href = link.getAttribute("href");
          if (href && confirm(`هل تريد الذهاب إلى صفحة: "${topicName}"؟`)) {
            window.location.href = href;
          }
        });
      }
    });
  });
  