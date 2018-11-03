const myGroups = []; // массив для хранения подписок на группы

const groupList = 
[
  { groupName: 'Habrahabr' },
  { groupName: 'Web2018' },
];

function subscribeGroup(group) 
{
  var flag = false;
  for(let i = 0; i < groupList.length; i++)
  {
  	if(groupList[i].groupName == group)
    {
  		myGroups.push(group);
      flag = true;
    }
  }
  if(flag)
    console.log('Вы успешно подписались на группу!')
  else
    console.log('Такой группы не в списке');
}

function unsubscribeGroup(group) 
{
  if(myGroups.length == 0)
  	console.log('Вы не подписаны ни на одну группу!');
  else
  	for(let i = 0; i < myGroups.length; i++)
  	{
  		console.log(myGroups[i]);
  		if(myGroups[i] == group)
  		{
  			myGroups.splice(i, 1);
				console.log('Вы отписались от группы')
  		}
			else
				console.log('Вы не подписаны на эту группу')
  	}
}