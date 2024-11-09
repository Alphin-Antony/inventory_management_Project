import React from 'react'
import { Link } from 'react-router-dom';


const Admindashboardnw = () => {
  
  return (
    <div id=" " className="app-container" style={{ padding: '200px',mar:'0px'}}>
            <h3>Admin Panel</h3>
            <nav>
                <ul>
                    <li>
                        <Link to="/ProductManager">Add Products</Link>
                    </li>
                    <li>
                        <Link to="/OrderList">View Orders</Link>
                    </li>
                    <li>
                        <Link to="/DeliveryAssignment">Assign Orders for Delivery</Link>
                    </li>
                    {/* <li>
                        <Link to="/reports">View Reports</Link>
                    </li> */}
                </ul>
            </nav>
        </div>
  )
}

export default Admindashboardnw