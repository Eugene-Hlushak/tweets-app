export default function smoothScroll(element) {
  const { height: cardHeight } =
    element.lastElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight,
    behavior: 'smooth',
  });
}
