import axios from 'axios'

const medi = 'http://localhost:8081/medi';

class MedicineService{

    getAllMedicines(){
        return axios.get(medi+"/readAll");
    }

    createMedicine(medicine){
        return axios.post(medi+"/create", medicine);
    }

    getMedicineById(medicineId){
        return axios.get(medi +"/read"+ '/' + medicineId);
    }

    updateMedicine(medicineId, medicine){
        return axios.put(medi +"/update"+ '/' +medicineId, medicine);
    }

    deleteMedicine(medicineId){
        return axios.delete(medi+"/del" + '/' + medicineId);
    }
}

export default new MedicineService();