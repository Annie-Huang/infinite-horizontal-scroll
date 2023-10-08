const scrollers = document.querySelectorAll('.scroller');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute('data-animated', true);

    const scrollerInner = scroller.querySelector('.scroller__inner');
    // Very important to use Array.from. because it will take a copy of the original children. otherwise, each time we duplicate, scrollerInner.children's length will be double up
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      // console.log(duplicatedItem);
      duplicatedItem.setAttribute(
        'aria-hidden',
        true
      ); /* we don't want vision impair people to see this new list */

      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
