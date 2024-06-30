import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';
import '../home/home.css';

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">
{/* .......................................................................................................... */}
<h2>User List</h2>

<table>
  <tr>
    <th>#</th>
    <th>Name</th>
    <th>Date Created</th>
    <th>Role</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>1</td>
    <td><div class="profile-pic"><img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mm&r=g" alt="Michael Holz"></img></div> Michael Holz</td>
    <td>04/10/2013</td>
    <td>Admin</td>
    <td><span style="color: green;">• Active</span></td>
    <td><button><i class="fa fa-gear"></i></button><button><i class="fa fa-times"></i></button></td>
  </tr>
  <tr>
    <td>2</td>
    <td><div class="profile-pic"><img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mm&r=g" alt="Paula Wilson"></img></div> Paula Wilson</td>
    <td>05/08/2014</td>
    <td>Publisher</td>
    <td><span style="color: green;">• Active</span></td>
    <td><button><i class="fa fa-gear"></i></button><button><i class="fa fa-times"></i></button></td>
  </tr>
  <tr>
    <td>3</td>
    <td><div class="profile-pic"><img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mm&r=g" alt="Antonio Moreno"></img></div> Antonio Moreno</td>
    <td>11/05/2015</td>
    <td>Publisher</td>
    <td><span style="color: red;">• Suspended</span></td>
    <td><button><i class="fa fa-gear"></i></button><button><i class="fa fa-times"></i></button></td>
  </tr>
  <tr>
    <td>4</td>
    <td><div class="profile-pic"><img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mm&r=g" alt="Mary Saveley"></img></div> Mary Saveley</td>
    <td>06/09/2016</td>
    <td>Reviewer</td>
    <td><span style="color: green;">• Active</span></td>
    <td><button><i class="fa fa-gear"></i></button><button><i class="fa fa-times"></i></button></td>
  </tr>
  <tr>
    <td>5</td>
    <td><div class="profile-pic"><img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mm&r=g" alt="Martin Sommer"></img></div> Martin Sommer</td>
    <td>12/08/2017</td>
    <td>Moderator</td>
    <td><span style="color: orange;">• Inactive</span></td>
    <td><button><i class="fa fa-gear"></i></button><button><i class="fa fa-times"></i></button></td>
  </tr>
</table>
{/* ........................................................................................................... */}

        </div>
    )
}

export default Home