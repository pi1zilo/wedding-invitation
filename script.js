/* ==========================================================================
   Wedding Invitation — JavaScript
   Project: Айзирек & Таштемир — приглашение
   ========================================================================== */

/**
 * Приглашение — переход от заставки к основному контенту.
 *
 * При нажатии на кнопку "Нажми" (экран 1):
 * 1. Заставка плавно исчезает (opacity → 0)
 * 2. Страница плавно прокручивается к экрану 2 (приглашение)
 */

(function () {
  'use strict';

  const SCREEN_WIDTH = 393;   // ширина design-макета в px
  const SCREEN_HEIGHT = 876;  // высота одного экрана в px

  // DOM-элементы
  const openButton = document.getElementById('openInvite');
  const clickScreen = document.querySelector('.click-screen');

  if (!openButton || !clickScreen) return;

  openButton.addEventListener('click', function () {
    // Скрываем заставку
    clickScreen.classList.add('hide');

    // Вычисляем текущий масштаб (аналогично CSS var(--scale))
    var currentScale = Math.min(1, window.innerWidth / SCREEN_WIDTH);

    // Плавно прокручиваем к первому экрану приглашения
    window.scrollTo({
      top: SCREEN_HEIGHT * currentScale,
      behavior: 'smooth'
    });
  });
})();
