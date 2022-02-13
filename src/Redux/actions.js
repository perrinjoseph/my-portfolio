const toggleNav = () => {
  return {
    type: "TOGGLE_NAV",
  };
};

export const closeNav = () => ({ type: "CLOSE_NAV" });
export default toggleNav;
