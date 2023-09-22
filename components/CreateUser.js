import React, { useState } from 'react'
import axios from '../api/api-data';
// import {Navigate, useNavigate} from 'react-router-dom';
export default function CreateUser({user,onUpdate}) {
   

    // const[id,setId]=useState(0)
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')
   
    //hàm xử lý sự kiện thêm mới
    const handleCreateUser=async()=>{
        //gọi phương thức post của api
        axios.post("users", {username,password});
        // Navigate("/");
    }
    //     Hàm handleCreateStudent sẽ gửi một yêu cầu POST bằng cách sử dụng thư viện Axios. 
    //Yêu cầu này sẽ gửi đến đường dẫn "/students" với dữ liệu là studentName và age.

    // Dữ liệu studentName và age có thể được truyền vào hàm handleCreateStudent từ các biến 
    //hoặc đối số khác trong mã được gọi trước đó.

    // Hàm này sử dụng từ khóa async để đảm bảo rằng nó sẽ chờ cho đến khi
    // yêu cầu POST hoàn thành trước khi tiếp tục thực thi các câu lệnh tiếp theo.

    const handleSubmit = (event) => {
        // event.preventDefault();
        // fetch(`https://64eda6ea1f872182714185be.mockapi.io/users/${user.id}`, {
        //   method: 'PUT',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({ username, password })
        // })
        //   .then(() => onUpdate());
      };

    return (
       <form onSubmit={handleSubmit}>
        
            <h2>Create User</h2>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    UserName
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name='username'
                    value={username}
                    onChange={(event)=>setUserName(event.target.value)}
                   

                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    Password
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name='password'
                   value={password}
                    onChange={(ev)=>setPassword(ev.target.value)}
                />
            </div>
            <button className='btn btn-primary' onClick={handleCreateUser}>Thêm</button>
            <button className='btn btn-danger ' type="submit" >Cập nhập</button>
       </form>
    )
}
