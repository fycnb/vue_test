const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  language: state => state.app.language,
  token: state => state.user.token,
  uid: state => state.user.uid,
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  permissions: state => state.user.permissions,
  permission_routes: state => state.permission.routes,
  dict: state => state.dict.dict,
  getDict: (state) => (typeCode) => {
    const dictList = state.dict.dict
    if (dictList.length === 0) {
      return []
    }
    const res = dictList.find(item => item.key === typeCode)
    if (!res) {
      return []
    }
    return res.value
  }
}
export default getters
