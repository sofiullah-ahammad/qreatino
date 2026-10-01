/**
 * Qreatino Flow Section Interactive Behaviors
 * Handles scroll-triggered progress bar fill animations and step interactions
 */
(function () {
  function initFlowSection() {
    const flowSection = document.getElementById('flow');
    if (!flowSection) return;

    const progressBars = flowSection.querySelectorAll('.qreatino-flow-progress-bar');
    if (!progressBars.length) return;

    // Trigger animations when the Flow section enters the viewport
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              progressBars.forEach((bar, index) => {
                const targetProgress = bar.getAttribute('data-progress') || '0';
                setTimeout(() => {
                  bar.style.width = targetProgress + '%';
                }, index * 140 + 120);
              });
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      observer.observe(flowSection);
    } else {
      // Fallback for browsers without IntersectionObserver
      progressBars.forEach((bar) => {
        const targetProgress = bar.getAttribute('data-progress') || '0';
        bar.style.width = targetProgress + '%';
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFlowSection);
  } else {
    initFlowSection();
  }
})();
