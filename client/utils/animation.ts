export const notfoundAnimation = {
  initial: {
    opacity: 0,
    y: 400,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 40,
  },
};

export const mainAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export const secondAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.3,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const sidebarAnimation = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      bounce: 0.5,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      bounce: 0.5,
    },
  },
};
