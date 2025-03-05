const os = require("os");
require("dotenv").config();

function getSystemInfo() {
  console.log(`Платформа: ${os.platform()}`);
  console.log(`Свободная память: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
  console.log(`Главная директория: ${os.homedir()}`);
  console.log(`Имя хоста: ${os.hostname()}`);
  console.log(`Сетевые интерфейсы: ${JSON.stringify(os.networkInterfaces(), null, 2)}`);
}

function checkFreeMemory() {
  const freeMemoryGB = os.freemem() / 1024 / 1024 / 1024;
  if (freeMemoryGB > 4) {
    console.log(`Свободной памяти больше 4 ГБ: ${freeMemoryGB.toFixed(2)} GB`);
    return true;
  } else {
    console.log(`Свободной памяти меньше 4 ГБ: ${freeMemoryGB.toFixed(2)} GB`);
    return false;
  }
}

function getSystemInfoWithAccess() {
  const mode = process.env.MODE;
  if (mode === "admin") {
    console.log("Доступ разрешен:");
    getSystemInfo();
  } else {
    console.log("Доступ запрещен. Требуется режим admin.");
  }
}

getSystemInfoWithAccess();
checkFreeMemory();