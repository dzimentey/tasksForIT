
const firstInput = document.querySelector('.input-text')
const secondInput = document.querySelector('.show-text')

const changeValue = () => {
    secondInput.value = firstInput.value
}

// Аргументами функции будут:
// - функция, которую надо «откладывать»;
// - интервал времени, спустя которое функцию следует вызывать.
function debounce(callee, timeoutMs) {
    // Как результат возвращаем другую функцию.
    // Это нужно, чтобы мы могли не менять другие части кода,
    // чуть позже мы увидим, как это помогает.
    return function perform(...args) {
        // В переменной previousCall мы будем хранить
        // временную метку предыдущего вызова...
        let previousCall = this.lastCall;

        // ...а в переменной текущего вызова —
        // временную метку нынешнего момента.
        this.lastCall = Date.now();

        // Нам это будет нужно, чтобы потом сравнить,
        // когда была функция вызвана в этот раз и в предыдущий.
        // Если разница между вызовами меньше, чем указанный интервал,
        // то мы очищаем таймаут...
        if (previousCall && this.lastCall - previousCall <= timeoutMs) {
            clearTimeout(this.lastCallTimer);
        }

        // ...который отвечает за непосредственно вызов функции-аргумента.
        // Обратите внимание, что мы передаём все аргументы ...args,
        // который получаем в функции perform —
        // это тоже нужно, чтобы нам не приходилось менять другие части кода.
        this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);

        // Если таймаут был очищен, вызова не произойдёт;
        // если он очищен не был, то callee вызовется.
        // Таким образом мы как бы «отодвигаем» вызов callee
        // до тех пор, пока «снаружи всё не подуспокоится».
    };
}

const debouncedHandler = debounce(changeValue, 1000);

firstInput.addEventListener('input', debouncedHandler)


