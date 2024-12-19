function updateCurrentTime() {
    const currentDate = new Date();

    const hours = currentDate.getHours(); // Получаем часы
    const minutes = currentDate.getMinutes(); // Получаем минуты
    const seconds = currentDate.getSeconds(); // Получаем секунды

    // Обновляем содержимое элементов
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
  }

  // Обновляем время каждую секунду
  setInterval(updateCurrentTime, 1000);
  updateCurrentTime();