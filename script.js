/* ==========================================================================
   Wedding Invitation — JavaScript
   Project: Айзирек & Таштемир — приглашение
   ========================================================================== */

/**
 * Приглашение — переход от заставки к основному контенту.
 *
 * Последовательность:
 * 1. Кнопка и цветки плавно исчезают (opacity 1 → 0)
 * 2. Мгновенный переход к позиции второго экрана
 * 3. Информация плавно проявляется (opacity 0 → 1)
 * 4. Фон остаётся видимым всегда
 */

(function () {
  'use strict';

  var SCREEN_WIDTH = 393;
  var SCREEN_HEIGHT = 876;
  var FADE_OUT_MS = 600;
  var FADE_IN_MS = 800;

  var isTransitioning = false;

  var openButton = document.getElementById('openInvite');
  var clickScreen = document.querySelector('.click-screen');
  var invitation = document.querySelector('.invitation');
  var bgMusic = document.getElementById('bgMusic');

  if (!openButton || !clickScreen || !invitation) return;

  // Блокируем скролл до перехода
  document.body.style.overflow = 'hidden';

  openButton.addEventListener('click', function () {
    if (isTransitioning) return;
    isTransitioning = true;

    var currentScale = Math.min(1, window.innerWidth / SCREEN_WIDTH);
    var targetScroll = SCREEN_HEIGHT * currentScale;

    // Шаг 1: Плавно исчезают кнопка и цветки
    clickScreen.style.transition = 'opacity ' + FADE_OUT_MS + 'ms ease-in-out';
    clickScreen.style.opacity = '0';

    // Запускаем музыку
    if (bgMusic) {
      bgMusic.play().then(function () {
        console.log('Музыка запущена');
      }).catch(function (error) {
        console.error('Ошибка запуска музыки:', error);
      });
    }

    setTimeout(function () {
      // Шаг 2: Мгновенный переход к позиции второго экрана
      window.scrollTo(0, targetScroll);

      // Шаг 3: Плавно проявляется информация
      invitation.style.transition = 'opacity ' + FADE_IN_MS + 'ms ease-in-out';
      invitation.style.opacity = '1';

      setTimeout(function () {
        // Шаг 4: Разрешаем скролл
        document.body.style.overflow = '';
        clickScreen.style.pointerEvents = 'none';
      }, FADE_IN_MS);

    }, FADE_OUT_MS);
  });
})();
