
export default {
    name: 'orders',
    title: 'Orders',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
        },
        {
            name: 'zipcode',
            title: 'Zipcode',
            type: 'string',
        },
        {
            name: 'phoneno',
            title: 'PhoneNo',
            type: 'string',
        },
        {
            name: 'phoneno2',
            title: 'Alternate PhoneNo',
            type: 'string',
        },
       
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'notes',
            title: 'Additional Notes',
            type: 'string',
        },
        {
            name:'cart',
            title:'Cart',
            type:'array',
            of:[{ type:'orderDetail'}],
        },
        {
            name:'totalBill',
            title:'TotalBill',
            type:'number',
        }
        
    ],
};


