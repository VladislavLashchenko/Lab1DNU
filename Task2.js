    // Введення координат вершин прямокутника
    let x1 = parseFloat(prompt("Введіть координату x1:"));
    let y1 = parseFloat(prompt("Введіть координату y1:"));
    let x2 = parseFloat(prompt("Введіть координату x2:"));
    let y2 = parseFloat(prompt("Введіть координату y2:"));

    // Обчислення сторін прямокутника
    let width = Math.abs(x2 - x1);
    let height = Math.abs(y2 - y1);

    // Обчислення діаметра
    let diameter = Math.sqrt(width ** 2 + height ** 2);

    // Виведення результату
    console.log(`Діаметр прямокутника: ${diameter}`);
    