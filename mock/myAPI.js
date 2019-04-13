function getclickcount(req,res){
    console.log("succeeded");
    return res.json(["1","2","3"]);
}

const data = [
    {
      title: 'Ant Design Title 1',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title: 'Ant Design Title 2',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title: 'Ant Design Title 3',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title: 'Ant Design Title 4',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
];

export default{
    'GET /api/get': getclickcount,
    'GET /api/fetch': data,
}