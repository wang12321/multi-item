/**
 * @author ff
 * @date 2023/2/9
 * @Description: 配置项目私有文件入口
 * @update by:
 */
import user from '@/projects/db-compare-pc/store/user'
import server from '@dbpc/services/server'

const config = {
  dbComparePc: {
    store: {
      user: { ...user }
    },
    request: server,
    title: '数据库对比 ',
    logo: 'component'
  }
}
export default config
