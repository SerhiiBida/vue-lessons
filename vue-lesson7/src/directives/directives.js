// 13. Розробіть директиву, яка дозволяє зробити елемент перетягуваним.
// 14. Реєструйте вашу власну директиву глобально, щоб вона була доступна в усьому додатку.
let currentElem = null;

// Движение мышью
function mouseMoveDrag(event) {
    const x = event.clientX;
    const y = event.clientY;

    currentElem.style.top = `${y}px`;
    currentElem.style.left = `${x}px`;
}

export function dragAndDrop(el, binding) {
    currentElem = el;

    // Нажатие
    el.addEventListener("mousedown", function () {
        el.classList.add("absolute");

        document.addEventListener("mousemove", mouseMoveDrag);
    });

    // Отпускание
    el.addEventListener("mouseup", function () {
        el.classList.remove("absolute");

        el.removeEventListener("mousemove", mouseMoveDrag);
    });
}