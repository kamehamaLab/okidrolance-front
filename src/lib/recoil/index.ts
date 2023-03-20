import { atom } from "recoil";

const selectDevice = atom({
  key: "selectDevice",
  default: 0,
});

export { selectDevice };
