import Localbase from "localbase";
let db = new Localbase("db");
db.config.debug = false;

export function checkDB(collectionName) {
  return new Promise((resolve, reject) => {
    db.collection(collectionName)
      .get()
      .then((data) => {
        if (data?.length !== 0) {
          resolve(true);
        } else {
          reject(false);
        }
      });
  });
}
export function setData(collectionName, data) {
  data.forEach((topic) => {
    db.collection(collectionName).add(
      topic,
      (topic.topicName + "").toLowerCase()
    );
  });
}
export function getData(collectionName, key) {
  return new Promise((resolve, reject) =>
    db
      .collection(collectionName)
      .doc(key)
      .get()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      })
  );
}
export function updateData(collectionName, topicname, newobj) {
  db.collection(collectionName).doc(topicname).update(newobj);
}
export function collectionCount(collectionName) {
  return new Promise((resolve, reject) =>
    db
      .collection(collectionName)
      .get()
      .then((data) => {
        if (data.length > 0) {
          resolve(data.length);
        } else {
          reject(0);
        }
      })
  );
}
export function addKey(collectionName, key, value) {
  var obj = {};
  obj[key] = value;
  db.collection(collectionName).add(obj, key.toLowerCase());
}
export function setSingleData(collectionName, key, obj) {
  db.collection(collectionName).add(obj, key.toLowerCase());
}
