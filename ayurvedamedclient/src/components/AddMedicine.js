import React, {useState, useEffect} from 'react'
import {Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import MedicineService from '../services/MedicineService'

const AddMedicine = () => {

    const [medicineName, setMedicineName] = useState('')
    const [medicineCost, setMedicineCost] = useState('')
    const [mfd, setMfd] = useState('')
    const [expiryDate, setExpiryDate]=useState('')
    const [companyName, setCompanyName]=useState('')
    const [category, setCategory]=useState('')

    const history = useNavigate();
    const location = useLocation();
    const {id} = useParams();

    const saveOrUpdateMedicine = (e) => {
        e.preventDefault();

        const medicine = {medicineName, medicineCost, mfd, expiryDate, companyName, category}

        if(id){
            MedicineService.updateMedicine(id, medicine).then((response) => {
                history(location.state?.from?.pathname || "/",{replace:true})
            }).catch(error => {
                console.log(error)
            })

        }else{
            MedicineService.createMedicine(medicine).then((response) =>{

                console.log(response.data)
    
                history(location.state?.from?.pathname || "/",{replace:true})
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        MedicineService.getMedicineById(id).then((response) =>{
            setMedicineName(response.data.medicineName)
            setMedicineCost(response.data.medicineCost)
            setMfd(response.data.mfd)
            setExpiryDate(response.data.expiryDate)
            setCompanyName(response.data.companyName)
            setCategory(response.data.category)

        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Medicine</h2>
        }else{
            return <h2 className = "text-center">Add Medicine</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Medicine Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Medicine Name"
                                        name = "medicineName"
                                        className = "form-control"
                                        value = {medicineName}
                                        onChange = {(e) => setMedicineName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Medicine Cost :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Medicine Cost"
                                        name = "medicineCost"
                                        className = "form-control"
                                        value = {medicineCost}
                                        onChange = {(e) => setMedicineCost(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Mfd :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Mfd"
                                        name = "mfd"
                                        className = "form-control"
                                        value = {mfd}
                                        onChange = {(e) => setMfd(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Expiry Date :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Expiry Date"
                                        name = "expiryDate"
                                        className = "form-control"
                                        value = {expiryDate}
                                        onChange = {(e) => setExpiryDate(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Company Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Company Name"
                                        name = "companyName"
                                        className = "form-control"
                                        value = {companyName}
                                        onChange = {(e) => setCompanyName(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Category :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Category"
                                        name = "category"
                                        className = "form-control"
                                        value = {category}
                                        onChange = {(e) => setCategory(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateMedicine(e)} >Submit </button>
                                <Link to="/medicines" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddMedicine ;