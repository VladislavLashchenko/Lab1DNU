    // Введення параметрів горизонтальної стрічки
    let yMin = parseFloat(prompt("Введіть мінімальне значення y для стрічки:"));
    let yMax = parseFloat(prompt("Введіть максимальне значення y для стрічки:"));

    // Введення параметрів кола
    let circleX = parseFloat(prompt("Введіть координату x центру кола:"));
    let circleY = parseFloat(prompt("Введіть координату y центру кола:"));
    let radius = parseFloat(prompt("Введіть радіус кола:"));

    // Введення координат точки
    let pointX = parseFloat(prompt("Введіть координату x точки:"));
    let pointY = parseFloat(prompt("Введіть координату y точки:"));

    // Перевірка належності до горизонтальної стрічки
    let inStripe = pointY >= yMin && pointY <= yMax;

    // Перевірка належності до кола
    let inCircle = (pointX - circleX) ** 2 + (pointY - circleY) ** 2 <= radius ** 2;

    // Перевірка належності до об'єднання фігур
    let inUnion = inStripe || inCircle;

    // Виведення результату
    console.log(`Точка (${pointX}, ${pointY}) належить об'єднанню фігур: ${inUnion ? "Так" : "Ні"}`);
    