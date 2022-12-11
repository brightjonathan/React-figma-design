import { Link } from "react-router-dom";
import about from './Img/about_us.jpg'
import banner from './Img/banner-img-1.jpg'
import blog_1 from './Img/blog-1.jpg'
import blog_2 from './Img/blog-2.jpg'
import blog_3 from './Img/blog-3.jpg'
import category from './Img/category-1.jpg'
import category_2 from './Img/category-2.jpg'
import testimonial from './Img/testimonials-1.jpg'
import testimonials_2 from './Img/testimonials-2.jpg'

export const userRows = [
    {
      id: 1,
      username: "Olivia",
      img: about,
      email: "olivia@gmail.com",
      status: "Success",
      age: 35,
    },
    {
      id: 2,
      username: "Charlotte",
      img: banner,
      email: "charlotte@gmail.com",
      status: "Processing",
      age: 21,
    },
    {
      id: 3,
      username: "Amelia",
      img: blog_1,
      email: "amelia@gmail.com",
      status: "Decline",
      age: 15,
    },
    {
      id: 4,
      username: "Camila",
      img: blog_2,
      email: "camila@gmail.com",
      status: "Success",
      age: 26,
    },
    {
      id: 5,
      username: "Madison Clark",
      img: blog_3,
      email: "madison@gmail.com",
      status: "Decline",
      age: 28,
    },
    {
      id: 6,
      username: "Alexander Hall",
      img: category,
      email: "alexander@gmail.com",
      status: "Processing",
      age: 20,
    },
    {
      id: 7,
      username: "Nova Garcia",
      img: category_2,
      email: "nova@gmail.com",
      status: "Success",
      age: 30,
    },
    {
      id: 8,
      username: "Sebastian",
      img: testimonial,
      email: "sebastian@gmail.com",
      status: "Processing",
      age: 27,
    },
    {
      id: 9,
      username: "Olivia",
      img: testimonials_2,
      email: "olivia@gmail.com",
      status: "Success",
      age: 35,
    },
    {
      id: 10,
      username: "Charlotte",
      img: category_2,
      email: "charlotte@gmail.com",
      status: "Processing",
      age: 21,
    },
    {
      id: 11,
      username: "Amelia",
      img: testimonials_2,
      email: "amelia@gmail.com",
      status: "Decline",
      age: 15,
    },
    {
      id: 12,
      username: "Camila",
      img: category,
      email: "camila@gmail.com",
      status: "Success",
      age: 26,
    },
    {
      id: 13,
      username: "Madison Clark",
      img: testimonial,
      email: "madison@gmail.com",
      status: "Decline",
      age: 28,
    },
    {
      id: 14,
      username: "Alexander Hall",
      img: blog_3,
      email: "alexander@gmail.com",
      status: "Processing",
      age: 20,
    },
    {
      id: 15,
      username: "Nova Garcia",
      img: blog_2,
      email: "nova@gmail.com",
      status: "Success",
      age: 30,
    },
    {
      id: 16,
      username: "Sebastian",
      img: blog_1,
      email: "sebastian@gmail.com",
      status: "Processing",
      age: 27,
    },
  ];

 
  export const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="#" style={{ textDecoration: "none" }} >
              <div className="viewButton"> View </div>
            </Link>
            <div className="deleteButton"> Delete </div>
          </div>
        );
      },
    },
  ];


  export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  