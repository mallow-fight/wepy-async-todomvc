import axios from 'axios'
import wepyAxiosAdapter from 'wepy-plugin-axios/dist/adapter'

const adapter = wepyAxiosAdapter(axios)
// adapter 的初始化一定要在任何其它的 axios.create 之前执行
export default adapter
