
<script>
    function toggleLogo(e) {
  // Try both possible logo containers Quarto/Reval.js might use
  const logo = document.querySelector('.has-logo img.slide-logo, .quarto-brand img');
    if (!logo) return;

    const slide = e.currentSlide || e.slide;
    const isTitle =
    slide &&
    (slide.id === 'title-slide' || (slide.id && slide.id.endsWith('title-slide')));

    // Hide on title slide, show elsewhere
    logo.style.display = isTitle ? 'none' : '';
}

    Reveal.on('ready',  toggleLogo);
    Reveal.on('slidechanged', toggleLogo);
</script>
