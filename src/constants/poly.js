import { Polybase } from "@polybase/client";

let ele = {},
  data = {},
  bruh = {};
const getData = async () => {
  const db = new Polybase({ defaultNamespace: "game-webstore-new" });
  const datas = await db.collection("gamesNew").where("id", "==", "g1").get();
  ele = await datas.data[0].data;
  data = Object.assign(bruh, ele);
  // console.log(datas.data[0].data.name);
  //   console.log(data);
};
getData();
// console.log("outside", ele);
// console.log("here", data);
export default data;
