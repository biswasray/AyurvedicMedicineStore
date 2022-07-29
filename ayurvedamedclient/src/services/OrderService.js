import axios from 'axios'

const link = 'http://localhost:8081';

class OrderService {
    createOrder(medicine, customer) {
        // var today = new Date();
        // var od=today.toLocaleDateString();
        // var numberOfDaysToAdd = 6;
        // var result = today.setDate(today.getDate() + numberOfDaysToAdd);
        // var dd=today.toLocaleDateString();
        var data = {
            totalCost: medicine.medicineCost,
            userId: customer.userId,
            medicineList: [{
                "medicineId":medicine.medicineId,
            }],
            address: "address"
        }
        return axios.post(link + "/ordercreate",data);
    }
    getOrder(userId){
        return axios.get(link+"/getUserOrders/"+userId);
    }
    getAllOrder() {
        return axios.get(link+"/readOrderAll");
    }
}
export default new OrderService();