import React  from "react";

const NavBar = () => {
    return (
        <section className="sidebar">
        {/* Sidebar user panel */}
        <div className="user-panel">
          <div className="pull-left image">
            <img
              src="../dist/img/avatar04.png"
              className="img-circle"
              alt="User Image"
            />
          </div>
          <div className="pull-left info">
            <p>Admin</p>
            <a href="#">
              <i className="fa fa-circle text-success" /> Online
            </a>
          </div>
        </div>
        {/* search form */}
        {/* /.search form */}
        {/* sidebar menu: : style can be found in sidebar.less */}
        <ul className="sidebar-menu">
          <li className="header">MAIN NAVIGATION</li>
          <li className="active treeview">
            <a href="index.php">
              <i className="fa fa-dashboard" /> <span>Dashboard</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right" />
              </span>
            </a>
          </li>
          <li>
            <a href="add_main_category.php">
              <i className="fa fa-files-o" /> <span>Main Category</span>
              <span className="pull-right-container"></span>
            </a>
          </li>
          <li>
            <a href="add_category.php">
              <i className="fa  fa-circle-o" />
              <span>Add Categgory</span>
              <span className="pull-right-container"></span>
            </a>
          </li>
          <li>
            <a href="add_stock.php">
              <i className="fa fa-files-o" /> <span>Enter Stock</span>
              <span className="pull-right-container"></span>
            </a>
          </li>
          <li>
            <a href="view_stock.php">
              <i className="fa fa-files-o" /> <span>Stock details</span>
              <span className="pull-right-container"></span>
            </a>
          </li>
          <li>
            <a href="billing.php">
              <i className="fa fa-files-o" /> <span>Billing</span>
              <span className="pull-right-container"></span>
            </a>
          </li>
          <li>
            <a href="report_date.php">
              <i className="fa fa-files-o" /> <span>Report</span>
              <span className="pull-right-container"></span>
            </a>
          </li>
          <li>
            <a href="logout.php">
              <i className="fa fa-sign-out" />
              <span>Logout</span>
              <span className="pull-right-container"></span>
            </a>
          </li>
        </ul>
      </section>
      

    )
}
export default NavBar;