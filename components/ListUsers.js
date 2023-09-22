import React, { useEffect, useState } from 'react'
import axios from '../api/api-data';
// import axios from '/DEV/ReactJs/lesson16-api/server-api-local/db.json';
export default function ListUsers() {

    const [listUser, setListUser] = useState([])
    // const [users, setUsers]=useState([]);
    //lấy dữ liệu từ api
    const getAllUser = async () => { // từ khóa async để đảm bảo rằng nó sẽ chờ cho đến khi yêu cầu POST
        //                           hoàn thành trước khi tiếp tục thực thi các câu lệnh tiếp theo.
        let respone = await axios.get("users") // lấy giá trị trả về từ 1 api
                                                // axios này là ta export từ api-data này ra 
        console.log("data api User:", respone);
        console.log("data api User:", respone.data); // respone là 1 đối tượng rát nh thành phần
        //response.data là phần dữ liệu trả về từ server.
        setListUser(respone.data);// cập nhập
    }

    useEffect(() => { //
        getAllUser(); //lấy dữ liệu
    }, []); //tham số phụ thuộc thưs 2 là rỗng thì sẽ cập nhập lại listUser


    //xóa
    const handleDelete=(id)=>{
        axios.delete(`https://64eda6ea1f872182714185be.mockapi.io/users/${id}`)
      .then(respone => {
        // Xóa sinh viên thành công
        getAllUser(); // Cập nhật danh sách sinh viên sau khi xóa
      })
      .catch(error => {
        // Xử lý lỗi
      });
    }

    //sửa
    const handleEdit=(user)=>{
      
    }
    
    
    // map dữ liệu
    const elementListUser = listUser.map((user, index) => {
        return (
            <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                    <button className="btn btn-primary" onClick={()=>handleEdit(user)}> Sửa</button>
                    <button className="btn btn-danger" onClick={()=>handleDelete(user.id)}> Xóa</button>
                </td>
            </tr>

        )
    })


    return (
        <div>
            <h2>List Users</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">UsersName</th>
                        <th scope="col">Password</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {elementListUser}
                </tbody>
            </table>
            <div>

            </div>
        </div>

    )
}
