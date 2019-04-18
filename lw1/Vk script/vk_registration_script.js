const myGroups = []; // массив для хранения подписок на группы

const groupList = [
  { groupName: "Habrahabr", groupId: 0},
  { groupName: "Web2018", groupId: 1},
  { groupName: "Web2018", groupId: 2},
  { groupName: "godnotent", groupId: 3}
];

function subscribeGroup(group) {
  for (let key of groupList.values()) {
    if (key.groupId == group && myGroups.indexOf(group) == -1 ) {
      myGroups.push(group);
      console.log("Вы подписались на " + key.groupName);
      return;
    }
  }
  console.log("Ошибка при подписке на группу");
}

function unsubscribeGroup(group) {
  if (myGroups.indexOf(group) != -1) {
    myGroups.splice(myGroups.indexOf(group), 1);
    console.log("Вы только что отписались от " + group);
  }
  else
    console.log("Ошибка при отписке от группы");
}