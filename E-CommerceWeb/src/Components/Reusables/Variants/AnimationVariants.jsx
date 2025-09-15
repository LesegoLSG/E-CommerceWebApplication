// Variants for the service cards, dynamically adding a delay based on the index
export const cardVariant = (index) => ({
  hidden: { opacity: 0, y: 50 }, // Starts off slightly below and invisible
  visible: {
    opacity: 1,
    y: 0, // Moves up to original position
    transition: {
      duration: 0.8,
      delay: index * 0.2, // Adds delay based on index for staggered effect
      ease: "easeInOut",
    },
  },
});

export const headerVariant = {
  hidden: { opacity: 0, y: 50 }, // Starts off the screen (lower)
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeInOut" },
  }, // Translates up into view
  exit: {
    opacity: 0,
    y: 100, // Moves back down when leaving the view
    transition: { duration: 2, ease: "easeInOut" }, // Ease in and out on exit
  },
};

export const popUpVariant = {
  hidden: { opacity: 0, scale: 0.8 }, // Scaled down and hidden
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2, ease: "easeOut" },
  }, // Pops up
};
