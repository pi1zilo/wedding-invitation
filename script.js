const button = document.getElementById('openInvite');
const cover = document.querySelector('.click-screen');

button.addEventListener('click', () => {
  // The Figma prototype uses a separate first screen.
  // Move exactly one screen (876px) down to the invitation.
  cover.classList.add('hide');

  const scale = Math.min(1, window.innerWidth / 393);
  window.scrollTo({
    top: 876 * scale,
    behavior: 'smooth'
  });
});
