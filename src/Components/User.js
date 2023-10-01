import { Outlet } from "react-router"
import { useSearchParams } from "react-router-dom"
const User = () => {
   
   const [searchparam, setsearchparams]= useSearchParams()
   const showActiveUsers = searchparam.get('filter') === 'active'

  return (
    <div>
      <h2>1</h2>
      <h2>2</h2>
      <h2>3</h2>
      <Outlet/>
      <div>
        <button className="  btn btn-primary btn-sm" onClick={() => setsearchparams ({ filter :'active'})}
        > Active  User</button>
        <button className=" m-2 btn btn-primary btn-sm" onClick={() => setsearchparams({})}> Reset  Filter</button>
      </div>
      <div>
        {showActiveUsers ? <h2> showing  active  users </h2> :<h2> showing  all users</h2>}
      </div>
    </div>
  )
}

export default User
