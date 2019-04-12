function getclickcount(req,res){
    console.log("succeeded");
    return res.json(["1","2","3"]);
}
export default{
    'GET /api/get': getclickcount,
}