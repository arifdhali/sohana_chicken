import { Customer } from "../models/index.js";

const CustomerAddService = async (addData) => {

    let [customer, created] = await Customer.findOrCreate({
        where: { phone: addData.phone },
        defaults: {
            name: addData.name,
            shopname: addData.shopname,
            email: addData.email,
            phone: addData.phone,
            address: addData.address
        },
    });

    if (!created) {
        const error = new Error("Customer with this phone number already exists");
        error.status = 409;
        throw error;
    }
    let user = customer.toJSON();
    return  {
        customer_id: user.id,
    };




}

export { CustomerAddService };