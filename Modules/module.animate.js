/**        Borrowed from => https://gist.githubusercontent.com/jakearchibald/0b50c4918eaf9a67bfcfa55e7e61cd56/raw/f86eb63dae03e4bc7ae63aec147ada52cdb8b236/1.js
 * @param {HTMLElement} element
 * @param {Keyframe[] | PropertyIndexedKeyframes} to
 * @param {KeyframeAnimationOptions} options
 */
export function animateTo(element, keyframes, options) {
  const anim = element.animate(
    keyframes,
    { ...options, fill: 'both' },
  );
  anim.addEventListener('finish', () => {
    anim.commitStyles();
    anim.cancel();
  });
  return anim;
}

/**
 * @param {HTMLElement} element
 * @param {PropertyIndexedKeyframes} from
 * @param {KeyframeAnimationOptions} options
 */
export function animateFrom(element, from, options) {
  return element.animate(
    { ...from, offset: 0 },
    { ...options, fill: 'backwards' },
  );
}
