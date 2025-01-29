    // Вхідні значення
    let A = prompt("Введіть значення A:");
    let B = prompt("Введіть значення B:");
    let C = prompt("Введіть значення C:");
    let D = prompt("Введіть значення D:");
    let E = prompt("Введіть значення E:");

    // Логіка перестановки
    let tempA = A;
    let tempB = B;
    let tempC = C;
    let tempD = D;
    A = C; // C -> A
    B = D; // D -> B
    C = tempB; // B -> C
    D = tempA; // A -> D
    // E залишається незмінним

    // Виведення результату
    console.log(`Нові значення змінних: A=${A}, B=${B}, C=${C}, D=${D}, E=${E}`);
    