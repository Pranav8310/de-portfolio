// gatsby-browser.js - Client-side rendering APIs

// Add smooth scroll behavior
// Note: IntersectionObserver is natively supported in modern browsers

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const currentPosition = getSavedScrollPosition(location);
  const queriedPosition = getSavedScrollPosition({ pathname: `/random` });

  window.scrollTo(...(currentPosition || [0, 0]));

  return false;
};
