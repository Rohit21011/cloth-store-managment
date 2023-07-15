import React  from "react";

const StockDetails = () => {
    return (
        <div class="table-responsive mt-5">
            <h1>View Stock Details</h1>
        <table class="table table-sm table-striped table-responsive mt-5">
        <thead>
          <tr>
            <th scope="col">Sr no</th>
            <th scope="col">Main Category</th>
            <th scope="col">Product Category</th>
            <th scope="col">Name</th>
            <th scope="col">Company</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price(per Product)</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            
            
            <td><button type="submit" class="btn btn-success">Update</button></td>
					<td>
					<button type="submit" class="btn btn-danger">Delete</button>
				</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            
            
            <td><button type="submit" class="btn btn-success">Update</button></td>
					<td>
					<button type="submit" class="btn btn-danger">Delete</button>
				</td>
          </tr>
        </tbody>
      </table>
       
      </div>

    )
}
export default StockDetails;
