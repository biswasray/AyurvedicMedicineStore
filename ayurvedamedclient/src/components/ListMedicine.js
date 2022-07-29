import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MedicineService from '../services/MedicineService'

const ListMedicine = () => {

    const [medicines, setMedicines] = useState([])

    useEffect(() => {

        getAllMedicines();
    }, [])

    const getAllMedicines = () => {
        MedicineService.getAllMedicines().then((response) => {
            setMedicines(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteMedicine = (medicineId) => {
        MedicineService.deleteMedicine(medicineId).then((response) => {
            getAllMedicines();

        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="container">
            <h2 className="text-center"> List Medicine </h2>
            <Link to="/addmedicine" className="btn btn-primary mb-2" >Add Medicine</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Id </th>
                    <th> Medicine Name </th>
                    <th> Medicine Cost </th>
                    <th> Mfd </th>
                    <th> Expiry Date </th>
                    <th> Company Name </th>
                    <th> Category</th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        medicines.map(
                            medicine =>
                                <tr key={medicine.id}>
                                    <td>{medicine.id} </td>
                                    <td>{medicine.medicineName} </td>
                                    <td>{medicine.medicineCost}</td>
                                    <td>{medicine.mfd}</td>
                                    <td>{medicine.expiryDate}</td>
                                    <td>{medicine.companyName}</td>
                                    <td>{medicine.category}</td>
                                    <td>
                                        <Link className="btn btn-info" to={`/edit-medicine/${medicine.id}`} >Update</Link>
                                        <button className="btn btn-danger" onClick={() => deleteMedicine(medicine.id)}
                                            style={{ marginLeft: "10px" }}> Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListMedicine