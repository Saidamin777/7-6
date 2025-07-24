document.getElementById("locateBtn").addEventListener("click", () => {
  const output = document.getElementById("output");
  const mapDiv = document.getElementById("map");

  if (!navigator.geolocation) {
    output.textContent = "Ваш браузер не поддерживает геолокацию.";
    return;
  }

  output.textContent = "Определяем местоположение…";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      output.innerHTML = `
        <strong>Широта:</strong> ${lat}<br>
        <strong>Долгота:</strong> ${lon}<br>
        <strong>Точность:</strong> ${position.coords.accuracy} метров
      `;

      const mapsSrc = `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
      mapDiv.innerHTML = `<iframe src="${mapsSrc}" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen loading="lazy"></iframe>`;
    },
    (error) => {
      output.textContent = `Ошибка: ${error.message}`;
    }
  );
});
