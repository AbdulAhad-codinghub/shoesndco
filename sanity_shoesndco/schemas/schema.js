import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import product from './product';
import banner from './banner';
import orders from './orders';
import orderDetail from './orderDetail';
import contact from './contact';
import testimonials from './testimonials';
import messages from './messages';
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product,banner,orders,orderDetail,contact,testimonials,messages
  ]),
})
