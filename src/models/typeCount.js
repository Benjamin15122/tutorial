export default{
    namespace: 'typecount',
    state:{
        type: "dashed",
        count: 1
    },
    reducers:{
        click(state,{payload}){
            let count = state.count+1;
            return {
                type: typeMap[count%4],
                count: count
            }
        }
    },
    effects:{
        *get(_,{call,put}){
            const response = yield call(request, '/api/get');
            console.log(response)
            yield put({type: 'click',payload:{photo:"clothes"}});
        }
    },
    subscriptions:{

    },

}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
  
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
async function request(url, options) {
  const response = await fetch(url, options);
  checkStatus(response);
  debugger
  return await response.json();
}

const typeMap = ["dashed","normal","danger","primary"];