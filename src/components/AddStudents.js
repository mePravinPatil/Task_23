import React from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useFormik} from 'formik'
import * as yup from 'yup';
function AddStudent(props) {

    let navigate = useNavigate();
    // let [name,setName]=useState("");
    // let [email,setEmail]=useState("");
    // let [mobile,setMobile]=useState("");
    // let [degree,setDegree]=useState("");
    // let [dept, setDept]=useState("");

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            mobile:'',
            degree:'',
            dept:''
        },
        validationSchema: yup.object({
            name:yup.string().required('Required'),
            email:yup.string().email('Invalid email address').required('Required'),
            mobile:yup.string().matches(/^\d{10}$/,"Mobile number not valid").required('Required'),
            degree:yup.string(),
            dept:yup.string()
        }),
        onSubmit:values=>{
            handleSave(values)
        }
    })

    let handleSave = async(data)=>{
       try {
        let res = await axios.post('https://6100fb3b1d56e10017394cbe.mockapi.io/userdetail',data)
        console.log(res)
        navigate('/all-students')
       } catch (error) {
          console.log(error) 
       }
    }
    return (
        <div>
            <h1>Add Student</h1>
            <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
            <label for="name">Name</label>
            <input 
                id="name"
                name="name"
                type="text"
                class="form-control"
                placeholder="Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name?(<div style={{color:"red"}}>{formik.errors.name}</div>):null}
            </div>

            <div className="form-group">
            <label for="email">Email</label>
            <input 
                id="email"
                name="email"
                type="email"
                class="form-control"
                placeholder="Email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email?(<div style={{color:"red"}}>{formik.errors.email}</div>):null}
            </div>
            <div className="form-group">
            <label for="mobile">Mobile</label>
            <input 
                id="mobile"
                name="mobile"
                type="text"
                class="form-control"
                placeholder="Mobile"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.mobile}
            />
            {formik.touched.mobile && formik.errors.mobile?(<div style={{color:"red"}}>{formik.errors.mobile}</div>):null}
            </div>
            <div className="form-group">
            <label for="degree">Mobile</label>
            <input 
                id="degree"
                name="degree"
                type="text"
                class="form-control"
                placeholder="Degree"
                onChange={formik.handleChange}
                value={formik.values.degree}
            />
            </div>
            <div className="form-group">
            <label for="dept">Mobile</label>
            <input 
                id="dept"
                name="dept"
                type="text"
                class="form-control"
                placeholder="Dept"
                onChange={formik.handleChange}
                value={formik.values.dept}
            />
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form>

        </div>
    )
}

export default AddStudent;