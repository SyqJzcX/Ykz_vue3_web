import request from "@/utils/request"

//列表查询
export const queryAllApi = () => request.get('/work/partners')